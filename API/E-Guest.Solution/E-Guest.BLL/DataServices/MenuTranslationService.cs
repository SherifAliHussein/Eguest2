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
    public class MenuTranslationService:Service<MenuTranslation>,IMenuTranslationService
    {
        public MenuTranslationService(IRepositoryAsync<MenuTranslation> repository) : base(repository)
        {

        }
        public bool CheckMenuNameExistForRestaurant(string menuName, string language, long menuId, long restaurantId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() &&
                          x.MenuName.ToLower() ==  menuName.ToLower() &&
                          x.MenuId != menuId && x.Menu.RestaurantId == restaurantId && !x.Menu.IsDeleted);
        }

        public PagedResultsDto GetAllMenusByRestaurantAdminId(string language, long restaurantAdminId, int page, int pageSize)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Menu.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Menu.Restaurant.RestaurantAdminId == restaurantAdminId).Select(x => x.Menu).Count(x => !x.IsDeleted);
            List<Menu> menus;
            if (pageSize > 0)
                menus = _repository.Query(x => !x.Menu.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Menu.Restaurant.RestaurantAdminId == restaurantAdminId).Select(x => x.Menu)
                    .OrderBy(x => x.MenuId).Skip((page - 1) * pageSize)
                    .Take(pageSize).ToList();
            else
                menus = _repository.Query(x => !x.Menu.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Menu.Restaurant.RestaurantAdminId == restaurantAdminId).Select(x => x.Menu)
                    .OrderBy(x => x.MenuId).ToList();
            results.Data = Mapper.Map<List<Menu>, List<MenuDTO>>(menus);
            //results.Data = Mapper.Map<List<Menu>, List<MenuDTO>>(menus, opt =>
            //{
            //    opt.BeforeMap((src, dest) =>
            //        {
            //            foreach (Menu menu in src)
            //            {
            //                menu.MenuTranslations = menu.MenuTranslations
            //                    .Where(x => x.Language.ToLower() == language.ToLower()).ToList();
            //            }

            //        }
            //    );

            //});
            return results;
        }

        public List<MenuDTO> GetAllMenusNameByRestaurantAdminId(string language, long restaurantAdminId)
        {
            var menus = _repository.Query(x => !x.Menu.IsDeleted && x.Language.ToLower() == language.ToLower()
                                               && x.Menu.Restaurant.RestaurantAdminId == restaurantAdminId
                                               && x.Menu.Categories.Count > 0)
                .Select(x => x.Menu)
                .OrderBy(x => x.MenuId).ToList();
            return Mapper.Map<List<Menu>, List<MenuDTO>>(menus);
            //return Mapper.Map<List<Menu>, List<MenuDTO>>(menus, opt =>
            //{
            //    opt.BeforeMap((src, dest) =>
            //        {
            //            foreach (Menu menu in src)
            //            {
            //                menu.MenuTranslations = menu.MenuTranslations
            //                    .Where(x => x.Language.ToLower() == language.ToLower()).ToList();
            //            }

            //        }
            //    );

            //});
        }
        //public PagedResultsDto GetAllMenusByRestaurantAdminId(string language, long restaurantAdminId)
        //{
        //    PagedResultsDto results = new PagedResultsDto();
        //    results.TotalCount = _repository.Query(x => !x.Menu.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Menu.Restaurant.RestaurantAdminId == restaurantAdminId).Select(x => x.Menu).Count(x => !x.IsDeleted);
        //    List<Menu> menus;
        //    menus = _repository.Query(x => !x.Menu.IsDeleted && x.Language.ToLower() == language.ToLower() && x.Menu.Restaurant.RestaurantAdminId == restaurantAdminId).Select(x => x.Menu)
        //            .OrderBy(x => x.MenuId).ToList();
        //    results.Data = Mapper.Map<List<Menu>, List<MenuDTO>>(menus, opt =>
        //    {
        //        opt.BeforeMap((src, dest) =>
        //            {
        //                foreach (Menu menu in src)
        //                {
        //                    menu.MenuTranslations = menu.MenuTranslations
        //                        .Where(x => x.Language.ToLower() == language.ToLower()).ToList();
        //                }

        //            }
        //        );

        //    });
        //    return results;
        //}

        public PagedResultsDto GetActivatedMenusByRestaurantId(string language, long restaurantId, int page, int pageSize)
        {
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = _repository.Query(x => !x.Menu.IsDeleted && x.Menu.IsActive && x.Language.ToLower() == language.ToLower() && x.Menu.RestaurantId == restaurantId).Select(x => x.Menu).Count(x => !x.IsDeleted);
            List<Menu> menus;
            if (pageSize > 0)
                menus = _repository.Query(x => !x.Menu.IsDeleted && x.Menu.IsActive && x.Language.ToLower() == language.ToLower() && x.Menu.RestaurantId== restaurantId).Select(x => x.Menu)
                    .OrderBy(x => x.MenuId).Skip((page - 1) * pageSize)
                    .Take(pageSize).ToList();
            else
                menus = _repository.Query(x => !x.Menu.IsDeleted && x.Menu.IsActive && x.Language.ToLower() == language.ToLower() && x.Menu.RestaurantId == restaurantId).Select(x => x.Menu)
                    .OrderBy(x => x.MenuId).ToList();
            results.Data = Mapper.Map<List<Menu>, List<MenuDTO>>(menus);
            //results.Data = Mapper.Map<List<Menu>, List<MenuDTO>>(menus, opt =>
            //{
            //    opt.BeforeMap((src, dest) =>
            //        {
            //            foreach (Menu menu in src)
            //            {
            //                menu.MenuTranslations = menu.MenuTranslations
            //                    .Where(x => x.Language.ToLower() == language.ToLower()).ToList();
            //            }

            //        }
            //    );
            //});
            return results;
        }

        public bool CheckMenuByLanguage(long menuId, string language)
        {
            return _repository.Query(x => x.MenuId == menuId && x.Language.ToLower() == language.ToLower() && !x.Menu.IsDeleted).Select()
                .Any();
        }
    }
}
