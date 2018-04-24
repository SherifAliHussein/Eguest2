using System;
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
    class FeaturesBackgroundService:Service<FeaturesBackground>,IFeaturesBackgroundService
    {
        public FeaturesBackgroundService(IRepositoryAsync<FeaturesBackground> repository) : base(repository)
        {

        }
        public PagedResultsDto GetAllBackgrounds(int page, int pageSize, long userId)
        {
            var query = Queryable().Where(x => x.UserId == 0 || x.UserId == userId);
            PagedResultsDto results = new PagedResultsDto();
            results.TotalCount = query.Select(x => x).Count();

            results.Data = Mapper.Map<List<FeaturesBackground>, List<FeaturesBackgroundDto>>(query.OrderBy(x => x.FeaturesBackgroundId).Skip((page - 1) * pageSize)
                .Take(pageSize).ToList());

            return results;
        }
    }
}
