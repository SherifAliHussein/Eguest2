(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('roomDialogController', ['$scope','$uibModalInstance','$translate' , 'RoomResource','ToastService','callBackFunction','$rootScope',  roomDialogController])

	function roomDialogController($scope,$uibModalInstance, $translate , RoomResource,ToastService,callBackFunction,$rootScope){
		var vm = this;
		vm.close = function(){
			$uibModalInstance.dismiss('cancel');
		}
		
		vm.AddNewRoom = function(){
			var newRoom = new RoomResource();
            newRoom.roomName = vm.roomName;
            newRoom.name = vm.name;
			newRoom.password = vm.password;
            newRoom.$create().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('RoomAddSuccess'),"success");
					$uibModalInstance.dismiss('cancel');
					callBackFunction();
                },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
		}
	}	
}());
