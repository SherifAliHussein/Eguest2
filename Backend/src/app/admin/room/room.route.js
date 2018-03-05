(function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
              .state('rooms', {
					url: '/rooms',
                    templateUrl: './app/admin/room/templates/rooms.html',
                    controller: 'roomsController',
                    'controllerAs': 'roomsCtrl',
                    data: {
                        permissions: {
                            only: ['admin'],
                           redirectTo: 'root'
                        }
                    },
                    resolve: {
                        RoomsPrepService: RoomsPrepService,
                        roomLimitPrepService:roomLimitPrepService
                    }
                 
                })
        });
        
        RoomsPrepService.$inject = ['RoomResource']
        function RoomsPrepService(RoomResource) {
            return RoomResource.getAllRooms().$promise;
        }

        roomLimitPrepService.$inject = ['AdminRoomsLimitResource']
        function roomLimitPrepService(AdminRoomsLimitResource) {
            return AdminRoomsLimitResource.getRoomsLimitAndConsumed().$promise;
        }
}());
