using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.DAL.Entities.Model;
using Service.Pattern;

namespace E_Guest.BLL.DataServices.Interfaces
{
    public interface IFeatureDetailTranslationService:IService<FeatureDetailTranslation>
    {
        bool CheckFeatureDetailDescriptionExist(string featureDetailDescription, string language, long featureDetailId, long adminId);
    }
}
