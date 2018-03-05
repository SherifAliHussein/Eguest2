(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editRoomDialogController', ['$uibModalInstance','$translate', 'RoomResource','ToastService','Room','callBackFunction',  editRoomDialogController])

	function editRoomDialogController($uibModalInstance, $translate, RoomResource,ToastService,  Room, callBackFunction){
		var vm = this;
        vm.Room = Room;
        vm.Room.confirmPassword = Room.password;
        vm.close = function(){
			$uibModalInstance.dismiss('cancel');
        }
		vm.updateRoom = function(){
			var updateRoom = new RoomResource();
            updateRoom.roomName = vm.Room.roomName;
            updateRoom.name = vm.Room.name;
            updateRoom.password = vm.Room.password;
            updateRoom.roomId = Room.roomId;
            updateRoom.$update().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('RoomUpdateSuccess'),"success");
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
