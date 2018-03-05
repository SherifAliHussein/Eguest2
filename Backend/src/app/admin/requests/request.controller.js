(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('adminRequestController', ['$scope','$stateParams','$translate', 'appCONSTANTS','$uibModal', 'RequestResource'
        ,'requestsPrepService','$filter','ToastService','authorizationService','FeatureResource',  adminRequestController])

    function adminRequestController($scope,$stateParams ,$translate , appCONSTANTS,$uibModal, RequestResource
        ,requestsPrepService,$filter,ToastService,authorizationService,FeatureResource){

        var vm = this;
        vm.requests = requestsPrepService;
        _.forEach(vm.requests.results, function (request) {
            request.createTime= request.createTime+"Z";
           request.createTime = $filter('date')(new Date(request.createTime), "dd/MM/yyyy hh:mm a");
           request.modifyTime= request.modifyTime+"Z";
          request.modifyTime = $filter('date')(new Date(request.modifyTime), "dd/MM/yyyy hh:mm a");
        });
        $('.pmd-sidebar-nav>li>a').removeClass("active")
        var user = authorizationService.getUser();
        
        if(user.role === 'Admin')
            $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")
        else
            $($('.pmd-sidebar-nav').children()[0].children[0]).addClass("active")
		
		function refreshRequests(){
			var k = RequestResource.getAllRequest({ page:vm.currentPage }).$promise.then(function(results) {
				
                vm.requests = results;
                _.forEach(vm.requests.results, function (request) {
                    request.createTime= request.createTime+"Z";
                   request.createTime = $filter('date')(new Date(request.createTime), "dd/MM/yyyy hh:mm a");
                   request.modifyTime= request.modifyTime+"Z";
                  request.modifyTime = $filter('date')(new Date(request.modifyTime), "dd/MM/yyyy hh:mm a");
                });
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPage  = 1;
        vm.changePage  = function (page) {
            vm.currentPage = page;
            refreshRequests();
           
		}	
        vm.showMore = function(element)
        {
            $(element.currentTarget).toggleClass( "child-table-collapse" );
        }
        function ApproveRequest(requestId,requestDetail){            
            var requestApproval = new RequestResource();
            requestApproval.requestDetails = requestDetail
            // requestApproval.requestModel ={requestDetails:requestDetail,featureId:1};
			
            requestApproval.$Approve({requestId:requestId}).then(
                function(data, status) {
                    refreshRequests()                    
                },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
            // RequestResource.Approve({requestId:requestId})
            // .$promise.then(function(result){
            //     refreshRequests()
            // },
            // function(data, status) {
            //     ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            // })
        }

        vm.Approve = function(featureId,requestId){
            FeatureResource.getFeature({featureId:featureId}).$promise.then(function(result){
                if(!result.hasDetails){
                    ApproveRequest(requestId)
                }
                else {
                    var modalContent = $uibModal.open({
                        templateUrl: './app/admin/requests/templates/requestDetail.html',
                        controller: 'requestDetailDialogController',
                        controllerAs: 'requestDetailDlCtrl',
                        resolve:{
                            feature:function(){ return result},
                            requestId:function(){ return requestId},
                            callBackFunction:function(){return ApproveRequest;},
                            language:function(){return $scope.selectedLanguage;}
                            
                        }
                        
                    });
                }
            },
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
            
        }
        vm.Reject = function(requestId){
            RequestResource.Reject({requestId:requestId})
			.$promise.then(function(result){
                refreshRequests()
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
        }
	}
	
}());
