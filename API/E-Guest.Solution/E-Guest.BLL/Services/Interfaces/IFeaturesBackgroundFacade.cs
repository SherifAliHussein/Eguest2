using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using E_Guest.BLL.DTOs;

namespace E_Guest.BLL.Services.Interfaces
{
    public interface IFeaturesBackgroundFacade
    {
        void AddBackground(FeaturesBackgroundDto backgroundDto, string path);
        PagedResultsDto GetAllBackgrounds(int page, int pageSize, long userId);
        void ActivateBackground(long backgroundId, long userId);

        FeaturesBackgroundDto GetActivateFeaturesBackground(long roomId);
    }
}
