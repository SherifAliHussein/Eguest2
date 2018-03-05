using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Script.Serialization;
using AutoMapper;
using E_Guest.API.Infrastructure;
using E_Guest.API.Models;
using E_Guest.API.Providers;
using E_Guest.BLL.DTOs;
using E_Guest.BLL.Services.Interfaces;
using E_Guest.Common;
using E_Guest.Common.CustomException;

namespace E_Guest.API.Controllers
{
    public class FeaturesController : BaseApiController
    {
        public IFeatureFacade _FeatureFacade { get; set; }

        public FeaturesController(IFeatureFacade featureFacade)
        {
            _FeatureFacade = featureFacade;
        }

        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Features", Name = "AddFeature")]
        [HttpPost]
        public IHttpActionResult AddFeature()
        {
            //_FeatureFacade.AddFeature(Mapper.Map<FeatureDto>(featureModel), UserId);
            //return Ok();

            if (!HttpContext.Current.Request.Files.AllKeys.Any())
                throw new ValidationException(ErrorCodes.EmptyImage);
            var httpPostedFile = HttpContext.Current.Request.Files[0];

            var featureModel = new JavaScriptSerializer().Deserialize<FeatureModel>(HttpContext.Current.Request.Form.Get(0));

            if (httpPostedFile == null)
                throw new ValidationException(ErrorCodes.EmptyImage);

            if (httpPostedFile.ContentLength > 2 * 1024 * 1000)
                throw new ValidationException(ErrorCodes.ImageExceedSize);


            if (Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpg" &&
                Path.GetExtension(httpPostedFile.FileName).ToLower() != ".png" &&
                Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpeg")

                throw new ValidationException(ErrorCodes.InvalidImageType);

            var featureDto = Mapper.Map<FeatureDto>(featureModel);
            //restaurantDto.Image = (MemoryStream) restaurant.Image.InputStream;
            featureDto.Image = new MemoryStream();
            httpPostedFile.InputStream.CopyTo(featureDto.Image);

            _FeatureFacade.AddFeature(featureDto, UserId, HostingEnvironment.MapPath("~/Images/"));
            return Ok();
        }


        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Features/", Name = "GetAllFeatures")]
        [HttpGet]
        [ResponseType(typeof(List<FeatureModel>))]
        public IHttpActionResult GetAllFeatures(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto features = _FeatureFacade.GetAllFeatures(UserId, page, pagesize);
            var data = Mapper.Map<List<FeatureModel>>(features.Data);
            foreach(var feature in data)
            {
                feature.ImageURL = Url.Link("FeatureImage", new { feature.FeatureId });
            }
            return PagedResponse("GetAllFeatures", page, pagesize, features.TotalCount, data);
        }
        [AuthorizeRoles(Enums.RoleType.Admin,Enums.RoleType.Room)]
        [Route("api/Features/Activated", Name = "GetAllActiveFeatures")]
        [HttpGet]
        [ResponseType(typeof(List<FeatureModel>))]
        public IHttpActionResult GetAllActiveFeatures(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto features = _FeatureFacade.GetAllActiveFeatures(UserId, page, pagesize,UserRole);
            var data = Mapper.Map<List<FeatureModel>>(features.Data);
            foreach (var feature in data)
            {
                feature.ImageURL = Url.Link("FeatureImage", new { feature.FeatureId });
                if (feature.Type == Enums.FeatureType.Restaurant.ToString())
                {
                    foreach (var restaurant in feature.Restaurants)
                    {
                        restaurant.ImageURL = Url.Link("RestaurantLogo", new { restaurant.RestaurantId });
                    }
                }
            }
            return PagedResponse("GetAllActiveFeatures", page, pagesize, features.TotalCount, data);
        }
        [AuthorizeRoles(Enums.RoleType.Admin,Enums.RoleType.Supervisor)]
        [Route("api/Features/{featureId:long}", Name = "GetFeature")]
        [HttpGet]
        [ResponseType(typeof(FeatureModel))]
        public IHttpActionResult GetFeature(long featureId)
        {
            var feature =  Mapper.Map<FeatureModel>(_FeatureFacade.GetFeature(featureId));
            feature.ImageURL = Url.Link("FeatureImage", new { feature.FeatureId });

            return Ok(feature);
        }

        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Features/{featureId:long}", Name = "DeleteFeature")]
        [HttpDelete]
        public IHttpActionResult DeleteFeature(long featureId)
        {
            _FeatureFacade.DeleteFeature(featureId, UserId);
            return Ok();
        }

        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Features/{featureId:long}/Activate", Name = "ActivateFeature")]
        [HttpGet]
        public IHttpActionResult ActivateFeature(long featureId)
        {
            _FeatureFacade.ActivateFeature(featureId, UserId);
            return Ok();
        }

        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Features/{featureId:long}/DeActivate", Name = "DeActivateFeature")]
        [HttpGet]
        public IHttpActionResult DeActivateFeature(long featureId)
        {
            _FeatureFacade.DeActivateFeature(featureId, UserId);
            return Ok();
        }

        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Features", Name = "UpdateFeature")]
        [HttpPut]
        public IHttpActionResult UpdateFeature()
        {
            var featureModel =
                new JavaScriptSerializer().Deserialize<FeatureModel>(HttpContext.Current.Request.Form.Get(0));
            var featureDto = Mapper.Map<FeatureDto>(featureModel);
            if (featureDto.IsImageChange)
            {
                if (!HttpContext.Current.Request.Files.AllKeys.Any())
                    throw new ValidationException(ErrorCodes.EmptyImage);
                var httpPostedFile = HttpContext.Current.Request.Files[0];
                

                if (httpPostedFile.ContentLength > 2 * 1024 * 1000)
                    throw new ValidationException(ErrorCodes.ImageExceedSize);


                if (Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpg" &&
                    Path.GetExtension(httpPostedFile.FileName).ToLower() != ".png" &&
                    Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpeg")

                    throw new ValidationException(ErrorCodes.InvalidImageType);

                featureDto.Image = new MemoryStream();
                httpPostedFile.InputStream.CopyTo(featureDto.Image);
            }
            _FeatureFacade.UpdateFeature(featureDto, UserId, HostingEnvironment.MapPath("~/Images/"));
            return Ok();
        }


        [Route("api/Features/{featureId:long}/Image", Name = "FeatureImage")]
        public HttpResponseMessage GetFeatureImage(long featureId, string type = "orignal")
        {
            try
            {
                string filePath = type == "orignal"
                    ? Directory.GetFiles(HostingEnvironment.MapPath("~/Images/") + "\\" + "Feature-" + featureId)
                        .FirstOrDefault(x => Path.GetFileName(x).Contains(featureId.ToString()) && !Path.GetFileName(x).Contains("thumb"))
                    : Directory.GetFiles(HostingEnvironment.MapPath("~/Images/") + "\\" + "Feature-" + featureId)
                        .FirstOrDefault(x => Path.GetFileName(x).Contains(featureId.ToString()) && Path.GetFileName(x).Contains("thumb"));


                HttpResponseMessage Response = new HttpResponseMessage(HttpStatusCode.OK);

                byte[] fileData = File.ReadAllBytes(filePath);

                Response.Content = new ByteArrayContent(fileData);
                Response.Content.Headers.ContentType = new MediaTypeHeaderValue("image/png");

                return Response;
            }
            catch (Exception e)
            {
                return new HttpResponseMessage();
            }
        }

        [AuthorizeRoles(Enums.RoleType.Admin)]
        [Route("api/Features/Restaurant", Name = "CheckFeatureAsRestaurant")]
        [HttpGet]
        public IHttpActionResult CheckFeatureAsRestaurant()
        {
            return Ok(Mapper.Map<FeatureModel>(_FeatureFacade.CheckFeatureAsRestaurant(UserId)));
        }
    }
}
