(function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('adminRequests', {
                    url: '/Request',
                    templateUrl: './app/admin/requests/templates/requests.html',
                    controller: 'adminRequestController',
                    'controllerAs': 'adminRequestCtrl',
                    data: {
                        permissions: {
                            only: ['Room'],
                            redirectTo: 'root'
                        }
                    },
                    resolve: {
                        requestsPrepService: requestsPrepService,
                        roomsNamePrepService: roomsNamePrepService,
                        featuresNamePrepService: featuresNamePrepService
                    }
                    
                })
        });
        
        requestsPrepService.$inject = ['RequestResource']
        function requestsPrepService(RequestResource) {
            return RequestResource.getAllRequest().$promise;
        }

        roomsNamePrepService.$inject = ['RoomResource']
        function roomsNamePrepService(RoomResource) {
            return RoomResource.getAllRoomsName().$promise;
        }

        featuresNamePrepService.$inject = ['FeatureResource']
        function featuresNamePrepService(FeatureResource) {
            return FeatureResource.getAllFeaturesName().$promise;
        }
}());
