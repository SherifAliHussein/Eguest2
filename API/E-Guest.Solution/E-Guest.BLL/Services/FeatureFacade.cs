using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using E_Guest.BLL.DataServices.Interfaces;
using E_Guest.BLL.DTOs;
using E_Guest.BLL.Services.Interfaces;
using E_Guest.BLL.Services.ManageStorage;
using E_Guest.Common;
using E_Guest.Common.CustomException;
using E_Guest.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;
using Unity.Interception.Utilities;

namespace E_Guest.BLL.Services
{
    public class FeatureFacade:BaseFacade,IFeatureFacade
    {
        private IFeatureService _featureService;
        private IFeatureTranslationService _featureTranslationService;
        private IUserService _userService;
        private IFeatureDetailService _featureDetailService;
        private IFeatureDetailTranslationService _featureDetailTranslationService;
        private IManageStorage _manageStorage;
        private IRoomService _roomService;
        private IRestaurantService _restaurantService;
        public FeatureFacade(IUnitOfWorkAsync unitOFWork, IFeatureService featureService, IFeatureTranslationService featureTranslationService, IUserService userService, IFeatureDetailService featureDetailService, IFeatureDetailTranslationService featureDetailTranslationService, IManageStorage manageStorage, IRoomService roomService, IRestaurantService restaurantService) : base(unitOFWork)
        {
            _featureService = featureService;
            _featureTranslationService = featureTranslationService;
            _userService = userService;
            _featureDetailService = featureDetailService;
            _featureDetailTranslationService = featureDetailTranslationService;
            _manageStorage = manageStorage;
            _roomService = roomService;
            _restaurantService = restaurantService;
        }

        public PagedResultsDto GetAllFeatures(long adminId, int page, int pageSize)
        {
            var user = _userService.Find(adminId);
            if (user == null)
                throw new ValidationException(ErrorCodes.UserNotFound);
            if (user.IsDeleted)
                throw new ValidationException(ErrorCodes.UserDeleted);
            if (!user.IsActive)
                throw new ValidationException(ErrorCodes.UserDeactivated);
            var featuresCount = _featureService.Query(x => !x.IsDeleted && x.CreationBy == adminId).Select().Count();
            var features = Mapper.Map<List<FeatureDto>>(_featureService.GetAllFeaturesAdminId(adminId, page, pageSize));
            PagedResultsDto results = new PagedResultsDto
            {
                TotalCount = featuresCount,
                Data = features
            };
            return results;
        }
        public PagedResultsDto GetAllActiveFeatures(long adminId, int page, int pageSize,string role)
        {
            var user = _userService.Find(adminId);
            if (user == null)
                throw new ValidationException(ErrorCodes.UserNotFound);
            if (user.IsDeleted)
                throw new ValidationException(ErrorCodes.UserDeleted);
            if (!user.IsActive)
                throw new ValidationException(ErrorCodes.UserDeactivated);
            int featuresCount = 0;
            List<FeatureDto> features = null;
            if (role == Enums.RoleType.Admin.ToString())
            {
                featuresCount = _featureService.Query(x => !x.IsDeleted && x.CreationBy == adminId).Select().Count();
                features = Mapper.Map<List<FeatureDto>>(_featureService.GetAllActiveFeaturesAdminId(adminId, page, pageSize));
                //PagedResultsDto results = new PagedResultsDto
                //{
                //    TotalCount = featuresCount,
                //    Data = features
                //};
                //return results;
            }
            else if (role == Enums.RoleType.Room.ToString())
            {
                var room = _roomService.Find(adminId);
                featuresCount = _featureService.Query(x => !x.IsDeleted && x.CreationBy == room.AdminId).Select().Count();
                //features = Mapper.Map<List<FeatureDto>>(_featureService.GetAllActiveFeaturesAdminId(room.AdminId, page, pageSize));
                features = Mapper.Map<List<Feature>, List<FeatureDto>>(_featureService.GetAllActiveFeaturesAdminId(room.AdminId, page, pageSize), opt =>
                {
                    opt.BeforeMap((src, dest) =>
                        {
                            foreach (Feature feature  in src)
                            {
                                feature.Restaurants = feature.Restaurants.Where(x => x.IsActive && !x.IsDeleted)
                                    .ToList();
                            }

                        }
                    );
                });
            }

            PagedResultsDto results = new PagedResultsDto
            {
                TotalCount = featuresCount,
                Data = features
            };
            return results;
        }
        public void AddFeature(FeatureDto featureDto, long adminId, string path)
        {
            var user = _userService.Find(adminId);
            if (user == null) throw new NotFoundException(ErrorCodes.UserNotFound);
            ValidateFeature(featureDto, adminId);

            var feature = Mapper.Map<Feature>(featureDto);
            feature.CreationBy = adminId;
            feature.CreateTime = DateTime.Now;
            feature.IsActive = true;
            //foreach (var featureName in featureDto.FeatureNameDictionary)
            //{
            //    feature.FeatureTranslations.Add(new FeatureTranslation
            //    {
            //        FeatureName = featureName.Value,
            //        Language = featureName.Key.ToLower()
            //    });
            //}
            feature.FeatureDetails.ForEach(x =>
            {
                x.CreationBy = adminId;
                x.CreateTime = DateTime.Now;
            });
            feature.FeatureDetails.ForEach(x => _featureDetailTranslationService.InsertRange(x.FeatureDetailTranslations));
            _featureDetailService.InsertRange(feature.FeatureDetails);
            _featureTranslationService.InsertRange(feature.FeatureTranslations);
            _featureService.Insert(feature);

            foreach (var restaurantDto in featureDto.Restaurants)
            {
                var restaurant = _restaurantService.Find(restaurantDto.RestaurantId);
                restaurant.Feature = feature;
                _restaurantService.Update(restaurant);
            }

            SaveChanges();
           _manageStorage.UploadImage(path + "\\" + "Feature-" + feature.FeatureId, featureDto.Image, feature.FeatureId.ToString());

        }
        private void ValidateFeature(FeatureDto featureDto, long adminId)
        {
            foreach (var featureName in featureDto.FeatureNameDictionary)
            {
                if (string.IsNullOrEmpty(featureName.Value))
                    throw new ValidationException(ErrorCodes.EmptyFeatureName);
                if (featureName.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.FeatureNameExceedLength);
                if (_featureTranslationService.CheckFeatureNameExist(featureName.Value, featureName.Key, featureDto.FeatureId, adminId)
                ) throw new ValidationException(ErrorCodes.FeatureNameAlreadyExist);

            }
            foreach (var featureDetail in featureDto.FeatureDetails)
            {
                foreach (var description in featureDetail.DescriptionDictionary)
                {
                    if (string.IsNullOrEmpty(description.Value))
                        throw new ValidationException(ErrorCodes.EmptyFeatureName);
                    if (description.Value.Length > 300)
                        throw new ValidationException(ErrorCodes.FeatureNameExceedLength);
                    if (_featureDetailTranslationService.CheckFeatureDetailDescriptionExist(description.Value, description.Key, featureDetail.FeatureDetailId, adminId)
                    ) throw new ValidationException(ErrorCodes.FeatureNameAlreadyExist);

                }
            }
        }

        public void ActivateFeature(long featureId,long adminId)
        {
            var feature = _featureService.Find(featureId);
            if (feature == null) throw new NotFoundException(ErrorCodes.FeatureNotFound);
            feature.IsActive = true;
            feature.ModifiedBy = adminId;
            feature.ModifyTime = DateTime.Now;
            _featureService.Update(feature);
            SaveChanges();
        }

        public void DeActivateFeature(long featureId, long adminId)
        {
            var feature = _featureService.Find(featureId);
            if (feature == null) throw new NotFoundException(ErrorCodes.FeatureNotFound);
            feature.IsActive = false;
            feature.ModifiedBy = adminId;
            feature.ModifyTime = DateTime.Now;
            _featureService.Update(feature);
            SaveChanges();
        }
        public void DeleteFeature(long featureId, long adminId)
        {
            var feature = _featureService.Find(featureId);
            if (feature == null) throw new NotFoundException(ErrorCodes.FeatureNotFound);
            feature.IsDeleted = true;
            feature.IsActive = false;
            feature.DeletedBy = adminId;
            feature.DeleteTime = DateTime.Now;
            _featureService.Update(feature);
            SaveChanges();
        }

        public void UpdateFeature(FeatureDto featureDto, long adminId, string path)
        {
            ValidateFeature(featureDto, adminId);
            var feature = _featureService.Find(featureDto.FeatureId);
            if (feature == null) throw new NotFoundException(ErrorCodes.FeatureNotFound);
            foreach (var featureName in featureDto.FeatureNameDictionary)
            {
                var featureTranslation =
                    feature.FeatureTranslations.FirstOrDefault(x => x.Language.ToLower() == featureName.Key.ToLower());
                if (featureTranslation == null)
                {
                    feature.FeatureTranslations.Add(new FeatureTranslation
                    {
                        Language = featureName.Key.ToLower(),
                        FeatureName = featureName.Value,
                    });
                }
                else
                {
                    featureTranslation.FeatureName = featureName.Value;
                }
            }
            if (featureDto.HasDetails)
            {
                foreach (var item in featureDto.FeatureDetails)
                {
                    var featureDetail =
                        feature.FeatureDetails.FirstOrDefault(x => x.FeatureDetailId == item.FeatureDetailId && item.FeatureDetailId > 0);
                    if (item.IsDeleted)
                    {
                        //_featureDetailService.Delete(featureDetail);
                        if (featureDetail == null) continue;
                        featureDetail.IsDeleted = true;
                        featureDetail.DeletedBy = adminId;
                        featureDetail.DeleteTime = DateTime.Now;
                        _featureDetailService.Update(featureDetail);
                    }
                    else if (featureDetail != null)
                    {
                        foreach (var featureDetailName in item.DescriptionDictionary)
                        {
                            var featureDetailTranslation =
                                featureDetail.FeatureDetailTranslations.FirstOrDefault(
                                    x => x.Language.ToLower() == featureDetailName.Key.ToLower());
                            if (featureDetailTranslation == null)
                            {
                                featureDetail.FeatureDetailTranslations.Add(new FeatureDetailTranslation
                                {
                                    Language = featureDetailName.Key.ToLower(),
                                    Description = featureDetailName.Value,
                                });
                            }
                            else
                            {
                                featureDetailTranslation.Description = featureDetailName.Value;
                            }
                        }
                        featureDetail.Price = item.Price;
                        featureDetail.IsFree = item.IsFree;
                        _featureDetailService.Update(featureDetail);
                    }
                    else
                    {
                        featureDetail = Mapper.Map<FeatureDetail>(item);
                        featureDetail.CreationBy = adminId;
                        featureDetail.CreateTime = DateTime.Now;
                        featureDetail.FeatureId = feature.FeatureId;

                        _featureDetailTranslationService.InsertRange(featureDetail.FeatureDetailTranslations);
                        _featureDetailService.Insert(featureDetail);

                    }
                }
            }

            feature.HasDetails = featureDto.HasDetails;
            
            foreach (var featureRestaurant in feature.Restaurants)
            {
                featureRestaurant.FeatureId = null;
                //_restaurantService.Update(featureRestaurant);
            }
            _featureService.Update(feature);
            foreach (var restaurantDto in featureDto.Restaurants)
            {
                var restaurant = _restaurantService.Find(restaurantDto.RestaurantId);
                restaurant.Feature = feature;
                _restaurantService.Update(restaurant);
            }
            SaveChanges();
            if (featureDto.IsImageChange)
                _manageStorage.UploadImage(path + "\\" + "Feature-" + feature.FeatureId, featureDto.Image, feature.FeatureId.ToString());
        }

        public FeatureDto GetFeature(long featureId)
        {
            var feature = _featureService.Find(featureId);
            if (feature == null) throw new NotFoundException(ErrorCodes.FeatureNotFound);
            if (feature.IsDeleted) throw new NotFoundException(ErrorCodes.FeatureNotFound);
            return Mapper.Map<FeatureDto>(feature);
        }

        public FeatureDto CheckFeatureAsRestaurant(long adminId)
        {
            return Mapper.Map<FeatureDto>(_featureService.CheckFeatureAsRestaurant(adminId));
        }
        
    }
}
