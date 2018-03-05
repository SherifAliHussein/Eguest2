(function() {
    angular
      .module('home')
      .factory('FeatureResource', ['$resource', 'appCONSTANTS', FeatureResource])
      .factory('RequestResource', ['$resource', 'appCONSTANTS', RequestResource]);
      
    
    function FeatureResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Features/:featureId', {}, {
        getAllFeatures: { method: 'GET', useToken: true },
        getAllActivatedFeatures: {url: appCONSTANTS.API_URL + 'Features/Activated', method: 'GET', useToken: true },
        checkFeatureAsRestaurant: {url: appCONSTANTS.API_URL + 'Features/Restaurant', method: 'GET', useToken: true },
        getFeature: { method: 'GET', useToken: true },
       // create: { method: 'POST', useToken: true },
       // deleteFeature: { method: 'DELETE', useToken: true },
       // update: { method: 'PUT', useToken: true }
      })
    }

    function RequestResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Requests/', {}, {
       // getAllRequest: { method: 'GET', useToken: true },
      //  Approve: {url: appCONSTANTS.API_URL + 'Requests/:requestId/Approve', method: 'POST', useToken: true },
      //  Reject: {url: appCONSTANTS.API_URL + 'Requests/:requestId/Reject', method: 'GET', useToken: true },
        create: { method: 'POST', useToken: true },
      })
    }

}());
  