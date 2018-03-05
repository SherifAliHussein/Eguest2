using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DTOs;

namespace E_Guest.BLL.Services.Interfaces
{
    public interface IFeatureFacade
    {
        void AddFeature(FeatureDto featureDto, long adminId, string path);
        void ActivateFeature(long featureId,long adminId);
        void DeActivateFeature(long featureId, long adminId);
        void DeleteFeature(long featureId, long adminId);
        PagedResultsDto GetAllFeatures(long adminId, int page, int pageSize);
        void UpdateFeature(FeatureDto featureDto, long adminId, string path);
        FeatureDto GetFeature(long featureId);
        PagedResultsDto GetAllActiveFeatures(long adminId, int page, int pageSize, string role);
        FeatureDto CheckFeatureAsRestaurant(long adminId);
    }
}
