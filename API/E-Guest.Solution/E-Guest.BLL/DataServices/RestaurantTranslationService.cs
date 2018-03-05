﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using E_Guest.BLL.DataServices.Interfaces;
using E_Guest.BLL.DTOs;
using E_Guest.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace E_Guest.BLL.DataServices
{
    public class RestaurantTranslationService : Service<RestaurantTranslation>, IRestaurantTranslationService
    {
        public RestaurantTranslationService(IRepositoryAsync<RestaurantTranslation> repository) : base(repository)
        {
            _repository = repository;
        }

        public bool CheckRestaurantNameExist(string restaurantName, string language, long restaurantId, long userId)
        {
            return _repository.Queryable()
                .Any(x => x.RestaurantName.ToLower() == restaurantName.ToLower() &&
                          x.Language.ToLower() == language.ToLower()&&
                          !x.Restaurant.IsDeleted && x.RestaurantId != restaurantId && x.Restaurant.AdminId == userId);
        }

        public RestaurantTranslation GetRestaurantTranslation(string language, long restaurantId)
        {
            return Query(x => x.Language.ToLower() == language.ToLower() && x.RestaurantId == restaurantId).Select(x => x).FirstOrDefault();
        }

        public PagedResultsDto GetAllRestaurant(string language, int page, int pageSize, long userId)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Restaurant.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Restaurant.AdminId == userId).Select(x => x.Restaurant).Count(x => !x.IsDeleted);
            List<Restaurant> restaurants;
            if (pageSize > 0)
                 restaurants = _repository.Query(x => !x.Restaurant.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Restaurant.AdminId == userId).Select(x => x.Restaurant)
                    .OrderBy(x => x.RestaurantId).Skip((page - 1) * pageSize)
                    .Take(pageSize).ToList();
            else
                restaurants = _repository.Query(x => !x.Restaurant.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Restaurant.AdminId == userId).Select(x => x.Restaurant)
                    .OrderBy(x => x.RestaurantId).ToList();
            results.Data = Mapper.Map<List<Restaurant>, List<RestaurantDTO>>(restaurants);
            //results.Data = Mapper.Map<List<Restaurant>, List<RestaurantDTO>>(restaurants, opt =>
            //{
            //    opt.BeforeMap((src, dest) =>
            //        {
            //            foreach (Restaurant restaurant in src)
            //            {
            //                restaurant.RestaurantTranslations = restaurant.RestaurantTranslations
            //                    .Where(x => x.Language.ToLower() == language.ToLower()).ToList();
            //                restaurant.RestaurantType.RestaurantTypeTranslations = restaurant.RestaurantType.RestaurantTypeTranslations
            //                    .Where(x => x.Language.ToLower() == language.ToLower()).ToList();

            //            }

            //        }
            //    );
            //});
            return results;
        }
        public bool CheckRestaurantByLanguage(long restaurantAdminId, string language)
        {
            return _repository.Query(x => x.Restaurant.RestaurantAdminId == restaurantAdminId && x.Language.ToLower() == language.ToLower() && !x.Restaurant.IsDeleted).Select()
                .Any();
        }
    }
}
