(function () {
    'use strict';

	    angular
        .module('home')
        .controller('clientFeatureController', ['$scope','$uibModal','$translate', 'appCONSTANTS', 'FeatureResource','featuresPrepService','featureBackgroundPrepService','RequestResource','ToastService','totalCartService',  clientFeatureController])

    function clientFeatureController($scope,$uibModal ,$translate , appCONSTANTS, FeatureResource,featuresPrepService,featureBackgroundPrepService,RequestResource,ToastService,totalCartService){

        var vm = this;
        vm.features = featuresPrepService;
        $scope.$parent.featureBackground = featureBackgroundPrepService;
        localStorage.removeItem('checkOut');
        totalCartService.homeTotalNo = 0;
        vm.featureMode = true;
        $scope.$parent.globalInfo= {};
        $scope.$parent.globalInfo.featureMode = true;
		function refreshFeatures(){
			var k = FeatureResource.getAllActivatedFeatures({ page:vm.currentPage }).$promise.then(function(results) {
				vm.features = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshFeatures();
        }	
        vm.selectedFeatureName;
        vm.selectedFeatureId;
        vm.selectedFeatureIndex;
        vm.request = function(featureId,featureName){


            vm.selectedFeatureName = featureName
vm.selectedFeatureId = featureId

        }
        vm.confirmRequest = function(featureId){
            var newRequest = new RequestResource();
            newRequest.featureId = featureId;
            newRequest.$create().then(
                function(data, status) {
                },
                function(data, status) {
                }
            );
        }

        vm.showRestaurants = function(index){
            vm.featureMode = false;
            $scope.$parent.globalInfo.featureMode = false;            
            vm.selectedFeatureIndex = index
        }
		vm.openFeature = function(featureId){
            FeatureResource.getFeature({featureId: featureId}).$promise.then(function(results) {
                var modalContent = $uibModal.open({
                    templateUrl: './app/features/templates/featureDetail.html',
                    controller: 'featureDetailController',
                    controllerAs: 'featureDetailCtrl',
                    resolve:{
                        feature:function(){return results;},
                        language:function(){return $scope.selectedLanguage;}
                    }

                                    });
            },
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });

                        }


					}

	}());
(function () {
    'use strict';	
    angular
        .module('home')
        .controller('confirmRequestDialogController', ['$uibModalInstance', 'itemName','itemId', 'callBackFunction',  confirmRequestDialogController])

	function confirmRequestDialogController($uibModalInstance, itemName,itemId, callBackFunction){
		var vm = this;
		vm.itemName = itemName;

				vm.close = function(){
			$uibModalInstance.dismiss();
		}

				vm.Confirm = function(){
			callBackFunction(itemId);
			$uibModalInstance.dismiss();
        }

			}	
}());
(function() {
    angular
      .module('home')
      .factory('FeatureResource', ['$resource', 'appCONSTANTS', FeatureResource])
      .factory('RequestResource', ['$resource', 'appCONSTANTS', RequestResource])
      .factory('FeatureBackgroundResource', ['$resource', 'appCONSTANTS', FeatureBackgroundResource]);


              function FeatureResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Features/:featureId', {}, {
        getAllFeatures: { method: 'GET', useToken: true },
        getAllActivatedFeatures: {url: appCONSTANTS.API_URL + 'Features/Activated', method: 'GET', useToken: true },
        checkFeatureAsRestaurant: {url: appCONSTANTS.API_URL + 'Features/Restaurant', method: 'GET', useToken: true },
        getFeature: {url: appCONSTANTS.API_URL + 'Features/:featureId/Info', method: 'GET', useToken: true },
        getRequestByFeatureId: {url: appCONSTANTS.API_URL + 'Features/:featureId/Requests', method: 'GET', useToken: true,isArray:true },
        geLasttRequestByFeatureId: {url: appCONSTANTS.API_URL + 'Features/:featureId/LastRequest', method: 'GET', useToken: true },
      })
    }

    function RequestResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Requests/', {}, {
        create: { method: 'POST', useToken: true },
      })
    }

        function FeatureBackgroundResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'FeatureBackgrounds/Activated/', {}, {
        getActivatedBackground: { method: 'GET', useToken: true },
      })
    }

}());
  (function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('Features', {
                    url: '/feature',
                    templateUrl: './app/features/templates/features.html',
                    controller: 'clientFeatureController',
                    'controllerAs': 'featureCtrl',
                    data: {
                        permissions: {
                            only: ['Room'],
                            redirectTo: 'root'
                        }
                    },
                    resolve: {
                        featuresPrepService: featuresPrepService,
                        featureBackgroundPrepService: featureBackgroundPrepService                        
                    }

                                    })
                .state('featureDetail', {
                    url: '/feature/:featureId/Info',
                    templateUrl: './app/features/templates/featureDetail.html',
                    controller: 'featureDetailController',
                    'controllerAs': 'featureDetailCtrl',
                    data: {
                        permissions: {
                            only: ['Room'],
                            redirectTo: 'root'
                        }
                    },
                    resolve: {
                        featureDetailPrepService: featureDetailPrepService,
                        featureBackgroundPrepService:featureBackgroundPrepService,
                        requestDetailPrepService:requestDetailPrepService,
                        lastRequestPrepService:lastRequestPrepService
                    }

                                    })
        });

                featuresPrepService.$inject = ['FeatureResource']
        function featuresPrepService(FeatureResource) {
            return FeatureResource.getAllActivatedFeatures({pageSize:0}).$promise;
        }
        featureDetailPrepService.$inject = ['FeatureResource','$stateParams']
        function featureDetailPrepService(FeatureResource,$stateParams) {
            return FeatureResource.getFeature({featureId: $stateParams.featureId}).$promise;
        }

                requestDetailPrepService.$inject = ['FeatureResource','$stateParams']
        function requestDetailPrepService(FeatureResource,$stateParams) {
            return FeatureResource.getRequestByFeatureId({featureId: $stateParams.featureId}).$promise;
        }

        featureBackgroundPrepService.$inject = ['FeatureBackgroundResource']
        function featureBackgroundPrepService(FeatureBackgroundResource) {
            return FeatureBackgroundResource.getActivatedBackground().$promise;
        }

        lastRequestPrepService.$inject = ['FeatureResource','$stateParams']
        function lastRequestPrepService(FeatureResource, $stateParams) {
            return FeatureResource.geLasttRequestByFeatureId({featureId: $stateParams.featureId}).$promise;
        }
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('featureDetailController', ['$scope','$state','$timeout', '$uibModal', '$stateParams','$translate', 'appCONSTANTS', 'RequestResource','featureDetailPrepService','featureBackgroundPrepService','$sce','requestDetailPrepService','$filter','lastRequestPrepService',  featureDetailController])

    function featureDetailController($scope, $state, $timeout, $uibModal, $stateParams ,$translate , appCONSTANTS, RequestResource,featureDetailPrepService,featureBackgroundPrepService,$sce,requestDetailPrepService, $filter,lastRequestPrepService){

        var vm = this;
        vm.feature = featureDetailPrepService;
        $scope.$parent.featureBackground = featureBackgroundPrepService;
        $scope.$parent.globalInfo= {};
        $scope.$parent.globalInfo.featureMode = true;
        $scope.$parent.globalInfo.featureMode = false;
        vm.lastRequest = lastRequestPrepService;
        if(vm.lastRequest.requestId !=undefined){
            vm.lastRequest.createTime = vm.lastRequest.createTime+"Z";
            vm.lastRequest.createTime = $filter('date')(new Date(vm.lastRequest.createTime), "dd/MM/yyyy hh:mm a");
            vm.lastRequest.modifyTime = vm.lastRequest.modifyTime+"Z";
            vm.lastRequest.modifyTime = $filter('date')(new Date(vm.lastRequest.modifyTime), "dd/MM/yyyy hh:mm a");
        }
        vm.isFrom = true;
        vm.isTo = false;
        vm.availableChange = function(featureControl){
            vm.isFrom = !vm.isFrom;
            vm.isTo = !vm.isTo;
            if(vm.isTo == true){
                featureControl.to =angular.copy(featureControl.from);
                featureControl.to.setMinutes(featureControl.to.getMinutes()+30);
            }
            if(featureControl.to != null){
                var dayRequests = $filter('filter')(requestDetailPrepService,
                    function(value, index, array){
                        return new Date(value.from+"z").getDay() == featureControl.to.getDay() &&
                        new Date(value.from+"z").getDate() == featureControl.to.getDate() &&
                    new Date('1/1/2018 ' +new Date(value.from+"z").toLocaleTimeString()) <= new Date('1/1/2018 ' +new Date(time.toISOString()).toLocaleTimeString())
                    && new Date('1/1/2018 ' +new Date(value.to+"z").toLocaleTimeString()) >= new Date('1/1/2018 ' +new Date(time.toISOString()).toLocaleTimeString())
                       && value.featureDetailId == featureControl.selectedOption.featureDetailId
                    }
                );
                vm.availableNumberRequest = 0;
                dayRequests.forEach(function(element) {
                    vm.availableNumberRequest = vm.availableNumberRequest+ element.number
                }, this);
                if(featureControl.control == 4){ 
                    var check = $filter('filter')(featureControl.featureDetails[0].availables, {day:featureControl.to.getDay()});
                    vm.availableNumberRequest = check[0].max -vm.availableNumberRequest;

                                    }
                else{
                    var check = $filter('filter')(featureControl.selectedOption.availables, {day:featureControl.to.getDay()});                    
                    vm.availableNumberRequest = check[0].max -vm.availableNumberRequest;
                }
            }

                    }
        vm.config = {
            autoHideScrollbar: false,
            theme: '3d-dark',
            axis: 'y',
            setHeight: 545,
        }

        vm.checkAvailableFrom = function($view, $dates, $leftDate, $upDate, $rightDate,featureControl){
            vm.now = new Date();            
            if($view=="year"){
                $dates.forEach(function(element) {
                    if(new Date(element.localDateValue()).getFullYear() < vm.now.getFullYear()){
                        element.selectable = false;
                    }
                }, this);
            }
            else if($view=="month"){
                $dates.forEach(function(element) {
                    if(new Date(element.localDateValue()).getMonth() < vm.now.getMonth() && (new Date(element.localDateValue()).getFullYear() <= vm.now.getFullYear())){
                        element.selectable = false;
                    }
                }, this);

                        }else if($view=="day"){
                $dates.forEach(function(date) {
                    if(featureControl.control == 4){                        
                        var availables = angular.copy(featureControl.featureDetails[0].availables);
                    }
                    else{
                        var availables = angular.copy(($filter('filter')(featureControl.featureDetails, 
                            {featureDetailId:featureControl.selectedOption.featureDetailId}))[0].availables);
                    }
                    var check = $filter('filter')(availables, {day:new Date(date.localDateValue()).getDay()});
                    if(check.length <= 0 || (new Date(new Date(date.localDateValue()).toDateString()) < new Date(vm.now.toDateString())))
                        date.selectable = false;
                }, this);
            }
            else if($view=="hour"){
                $dates.forEach(function(date) {
                    if(featureControl.control == 4){                        
                        var availables = angular.copy(featureControl.featureDetails[0].availables);
                    }
                    else{
                        var availables = angular.copy(($filter('filter')(featureControl.featureDetails, 
                            {featureDetailId:featureControl.selectedOption.featureDetailId}))[0].availables);
                    }
                    availables.forEach(function(element) {
                        element.from = new Date(element.from+"z").getHours();
                        element.to = new Date(element.to+"z").getHours();
                    }, this);
                    var time = new Date(date.localDateValue()).getHours();
                    var test = $filter('filter')(availables, {day:new Date(date.localDateValue()).getDay()});
                    var check = $filter('filter')(test,
                        function(value, index, array){
                            return value.from <= time && value.to>= time
                        }
                        );
                    if(check.length <= 0)
                        date.selectable = false;
                }, this);
            }
            else if($view=="minute"){
                $dates.forEach(function(date) {
                    if(featureControl.control == 4){                        
                        var availables = angular.copy(featureControl.featureDetails[0].availables);
                    }
                    else{
                        var availables = angular.copy(($filter('filter')(featureControl.featureDetails, 
                            {featureDetailId:featureControl.selectedOption.featureDetailId}))[0].availables);
                    }
                    availables.forEach(function(element) {
                        element.from = new Date(element.from+"z");
                        element.to = new Date(element.to+"z");
                    }, this);
                    var time = new Date(date.localDateValue());
                    var test = $filter('filter')(availables, {day:new Date(date.localDateValue()).getDay()});
                    var dayRequests = $filter('filter')(requestDetailPrepService,
                        function(value, index, array){
                            return new Date(value.from+"z").getDay() == new Date(date.localDateValue()).getDay() &&
                            new Date(value.from+"z").getDate() == new Date(date.localDateValue()).getDate() &&
                           (
                               new Date('1/1/2018 ' +new Date(value.from+"z").toLocaleTimeString()) <= new Date('1/1/2018 ' +new Date(time.toISOString()).toLocaleTimeString())
                                && new Date('1/1/2018 ' +new Date(value.to+"z").toLocaleTimeString()) >= new Date('1/1/2018 ' +new Date(time.toISOString()).toLocaleTimeString())

                )&& value.featureDetailId == featureControl.selectedOption.featureDetailId




                        }
                    );
                    var requestCount = 0;
                    dayRequests.forEach(function(element) {
                        requestCount = requestCount+ element.number
                    }, this);
                    var check = $filter('filter')(test,
                        function(value, index, array){
                            return(((value.from.getHours() == time.getHours() && value.from.getMinutes() <= time.getMinutes())
                                || (value.from.getHours() != time.getHours() || value.from.getMinutes() <= time.getMinutes()))
                                && value.max > requestCount)
                                && (((value.to.getHours() == time.getHours() && value.to.getMinutes() > time.getMinutes()))
                                    || ((value.to.getHours() != time.getHours() || value.to.getMinutes() > time.getMinutes())))
                        }
                        );
                    if(check.length <= 0)
                        date.selectable = false;
                }, this);
            }
        }
        vm.checkAvailableTo = function($view, $dates, $leftDate, $upDate, $rightDate,featureControl){
            vm.now = new Date();            
            if($view=="year"){
                $dates.forEach(function(element) {
                    if(new Date(element.localDateValue()).getFullYear() < featureControl.from.getFullYear()){
                        element.selectable = false;
                    }
                }, this);
            }
            else if($view=="month"){
                $dates.forEach(function(element) {
                    if(new Date(element.localDateValue()).getMonth() < featureControl.from.getMonth() && (new Date(element.localDateValue()).getFullYear() <= featureControl.from.getFullYear())){
                        element.selectable = false;
                    }
                }, this);

                        }else if($view=="day"){
                $dates.forEach(function(date) {
                    if(featureControl.control == 4){                        
                        var availables = angular.copy(featureControl.featureDetails[0].availables);
                    }
                    else{
                        var availables = angular.copy(($filter('filter')(featureControl.featureDetails, 
                            {featureDetailId:featureControl.selectedOption.featureDetailId}))[0].availables);
                    }
                    var check = $filter('filter')(availables, {day:new Date(date.localDateValue()).getDay()});
                    if(check.length <= 0 || (new Date(new Date(date.localDateValue()).toDateString())).getTime() != (new Date(featureControl.from.toDateString())).getTime())
                        date.selectable = false;
                }, this);
            }            
            else if($view=="hour"){
                $dates.forEach(function(date) {
                    if(featureControl.control == 4){                        
                        var availables = angular.copy(featureControl.featureDetails[0].availables);
                    }
                    else{
                        var availables = angular.copy(($filter('filter')(featureControl.featureDetails, 
                            {featureDetailId:featureControl.selectedOption.featureDetailId}))[0].availables);
                    }
                    availables.forEach(function(element) {                     
                        element.to = new Date(element.to+"z").getHours();
                    }, this);
                    var time = new Date(date.localDateValue()).getHours();
                    var test = $filter('filter')(availables, {day:new Date(date.localDateValue()).getDay()});
                    var check = $filter('filter')(test,
                        function(value, index, array){
                            return featureControl.from.getHours() <= time && value.to>= time
                        }
                        );
                    if(check.length <= 0 || (new Date(new Date(date.localDateValue()).toDateString())).getTime() != (new Date(featureControl.from.toDateString())).getTime())
                        date.selectable = false;
                }, this);
            }
            else if($view=="minute"){
                $dates.forEach(function(date) {
                    if(featureControl.control == 4){                        
                        var availables = angular.copy(featureControl.featureDetails[0].availables);
                    }
                    else{
                        var availables = angular.copy(($filter('filter')(featureControl.featureDetails, 
                            {featureDetailId:featureControl.selectedOption.featureDetailId}))[0].availables);
                    }
                    availables.forEach(function(element) {
                        element.to = new Date(element.to+"z");
                    }, this);
                    var time = new Date(date.localDateValue());
                    var test = $filter('filter')(availables, {day:new Date(date.localDateValue()).getDay()});
                    var dayRequests = $filter('filter')(requestDetailPrepService,
                        function(value, index, array){
                            return new Date(value.from+"z").getDay() == new Date(date.localDateValue()).getDay() &&
                            new Date(value.from+"z").getDate() == new Date(date.localDateValue()).getDate() &&
                         (
                             (new Date('1/1/2018 ' +new Date(value.from+"z").toLocaleTimeString()) < new Date('1/1/2018 ' +new Date(time.toISOString()).toLocaleTimeString())
                            && new Date('1/1/2018 ' +new Date(value.to+"z").toLocaleTimeString()) >= new Date('1/1/2018 ' +new Date(time.toISOString()).toLocaleTimeString()))
                         ||
                         (new Date('1/1/2018 ' +new Date(value.from+"z").toLocaleTimeString()) >= new Date('1/1/2018 ' +featureControl.from.toLocaleTimeString())
                         && new Date('1/1/2018 ' +new Date(value.to+"z").toLocaleTimeString()) <= new Date('1/1/2018 ' +new Date(time.toISOString()).toLocaleTimeString())))
                        && value.featureDetailId == featureControl.selectedOption.featureDetailId



                        }
                    );
                    var requestCount = 0;
                    dayRequests.forEach(function(element) {
                        requestCount = requestCount+ element.number
                    }, this);
                    var check = $filter('filter')(test,
                        function(value, index, array){

                                                        return  new Date('1/1/2018 '+value.to.toLocaleTimeString()) >=  new Date('1/1/2018 '+time.toLocaleTimeString())  &&
                              new Date('1/1/2018 '+time.toLocaleTimeString()) > new Date('1/1/2018 '+featureControl.from.toLocaleTimeString())
                              && value.max > requestCount

                        }
                        );
                    if(check.length <= 0 || (new Date(new Date(date.localDateValue()).toDateString())).getTime() != (new Date(featureControl.from.toDateString())).getTime())
                        date.selectable = false;
                }, this);
            }
        }
        vm.beforeRender = function ($view, $dates, $leftDate, $upDate, $rightDate) {
            vm.now = new Date();
            if($view=="year"){
                $dates.forEach(function(element) {
                    if(new Date(element.localDateValue()).getFullYear() < vm.now.getFullYear()){
                        element.selectable = false;
                    }
                }, this);
            }
            else if($view=="month"){
                $dates.forEach(function(element) {
                    if(new Date(element.localDateValue()).getMonth() < vm.now.getMonth() && (new Date(element.localDateValue()).getFullYear() <= vm.now.getFullYear())){
                        element.selectable = false;
                    }
                }, this);

                        }else if($view=="day"){
                $dates.forEach(function(element) {
                    if(new Date(new Date(element.localDateValue()).toDateString()) < new Date(vm.now.toDateString())){
                        element.selectable = false;
                    }
                }, this);
            }
            else if($view=="hour"){
                $dates.forEach(function(element) {
                    if(new Date(element.localDateValue()).getHours() < vm.now.getHours() && (new Date(new Date(element.localDateValue()).toDateString()) <= new Date(vm.now.toDateString()))){
                        element.selectable = false;
                    }
                }, this);
            }                
            else if($view=="minute"){
                $dates.forEach(function(element) {
                    if(new Date(element.localDateValue()).getMinutes() < vm.now.getMinutes() && (new Date(element.localDateValue()).getHours() <= vm.now.getHours() && (new Date(new Date(element.localDateValue()).toDateString()) <= new Date(vm.now.toDateString())))){
                        element.selectable = false;
                    }
                }, this);
            }
        }
        vm.listOfAvailabiltyChange = function(featureControl){
            featureControl.from = new Date();    
            $timeout(function(){                    
                featureControl.from = null;
                featureControl.to = null;
            }, 100);
            vm.isFrom = true;
            vm.isTo = false;
        }
		vm.feature.featureControl.forEach(function(featureControl) {
            if(featureControl.control == 3){
                featureControl.featureDetails.forEach(function(element) {
                    element.link= $sce.trustAsResourceUrl(element.link.replace('watch?v=','embed/'))
                }, this);
            }
        }, this);
        vm.confirmRequest = function  (){
            vm.newRequest.comment = vm.comment != null?vm.comment.trimLeft():vm.comment;
            vm.newRequest.$create().then(
                function(data, status) {
                    $state.go('Features');
                },
                function(data, status) {
                }
            );
        }

        		vm.request = function (){
            vm.newRequest = new RequestResource();
            vm.newRequest.featureId = $stateParams.featureId;

            vm.newRequest.requestDetails = []
            vm.feature.featureControl.forEach(function(featureControl) {
                if(featureControl.control == 0){
                    if(featureControl.controlType == 'Multiple'){
                        featureControl.selectedOption.forEach(function(element) {
                                vm.newRequest.requestDetails.push({featureDetailId:element.featureDetailId,number:1,price:element.price})

                                                    }, this);
                    }
                    else if(featureControl.controlType == 'Single' && featureControl.selectedOption != null){
                        vm.newRequest.requestDetails.push({featureDetailId:featureControl.selectedOption.featureDetailId,number:1,price:featureControl.selectedOption.price})
                    }                    
                }
                if(featureControl.control == 2){
                    if(featureControl.controlType == 'Multiple'){
                        featureControl.featureDetails.forEach(function(element) {
                            if(element.isSelected ){
                                vm.newRequest.requestDetails.push({featureDetailId:element.featureDetailId,number:1,price:element.price})
                            }

                                                    }, this);
                    }
                    else if(featureControl.controlType == 'Single' && featureControl.selectedOption != null){
                        vm.newRequest.requestDetails.push({featureDetailId:featureControl.selectedOption.featureDetailId,number:1,price:featureControl.selectedOption.price})
                    }                    
                }
                if(featureControl.control == 5){
                    vm.newRequest.requestTime = featureControl.date;
                }
                if(featureControl.control == 4){
                    vm.newRequest.requestDetails.push({featureDetailId:featureControl.featureDetails[0].featureDetailId,number:1,price:featureControl.featureDetails[0].price*((featureControl.to.getTime() - featureControl.from.getTime())/(1000*60*60))
                        ,from:featureControl.from,to:featureControl.to})
                }

                                if(featureControl.control == 6){
                    vm.newRequest.requestDetails.push({featureDetailId:featureControl.selectedOption.featureDetailId,number:1,price:featureControl.selectedOption.price*((featureControl.to.getTime() - featureControl.from.getTime())/(1000*60*60))
                        ,from:featureControl.from,to:featureControl.to})
                }
            }, this);
        }
        vm.removeFeatureDetail = function(index){
            vm.newRequest.requestDetails.splice(index,1);
        }
        vm.filterFeatureLeftSide = function(feature){
            return feature.control == 0 ||feature.control == 2||feature.control == 4||feature.control == 5||feature.control == 6;
        }
        vm.filterFeatureRightSide = function(feature){
            return feature.control == 1 ||feature.control == 3;
        }
	}

	}());
angular.module('home').directive('flipbook', function($timeout){
    return{
      restrict: 'E',
      replace: true,
      scope: { itempagectrl: '=' ,itemdetails:'=',selectedLanguage:'='},
      compile: function(){
        return{
          pre: function(scope, iElement, iAttrs, controller){
            var element = $('.text_editor').children();
            
            element.jqte({ 
              focus: function () {
                 element.parents(".jqte").find(".jqte_toolbar").show();
                 element.parents(".jqte").click(function () { element.parents(".jqte").find(".jqte_toolbar").show(); });
                  scope.$apply(function () {
                     
                  });
              }, 
              blur: function () {
                element.parents(".jqte").find(".jqte_toolbar").hide();
                  scope.$apply(function () {
                      
                  });
              }, 
              change: function () {
                ngModel.$setViewValue(element.parents(".jqte").find(".jqte_editor")[0].innerHTML);
                  scope.$apply(function () {
                      
                  });
              }
            });
            element.parents(".jqte").find(".jqte_toolbar").hide();
          },
          post: function(scope, iElement, iAttrs, controller) {
         
            $timeout(function(){
              iElement.turn({
              
               pages: 10,
               page: 2,
               when: {
                turned: function(event, page, pageObj) {
                  console.log("aa0")
                },
                turning: function(event, page, pageObj) {
                  console.log("aa1") 
                  if(page == 1) {
                    event.preventDefault();
                }
                }
              }
             }).bind("start", function(event, pageObject, corner) {
              
              if(pageObject.next == 1) {
                event.preventDefault();
            }
            })


           }, 0);
          }
              
        }
      },
      controller: function($scope, $rootScope){
        $scope.hide_book = function(){
          console.log("hide_book");
          $rootScope.show_book = false;
        }
        
      },
      templateUrl: "./app/items/Templates/ItemList.html"
    }
  });(function () {
    'use strict';

    angular
        .module('home')
        .controller('ItemController', ['$compile','$scope', '$translate', '$stateParams', 'appCONSTANTS', 'categoryItemsTemplatePrepService', 'ResturantPrepService', 'totalCartService','CartIconService','ItemsResource', ItemController])

    function ItemController($compile,$scope, $translate, $stateParams, appCONSTANTS, categoryItemsTemplatePrepService, ResturantPrepService, totalCartService,CartIconService,ItemsResource) {
 
        var vm = this;
        $scope.cartIcon = true;
        $scope.$watch("cartIcon", function (newValue) {
            CartIconService.cartIcon = newValue;
          });
        vm.catgoryTemplates = categoryItemsTemplatePrepService;
        $scope.$parent.globalInfo= ResturantPrepService;
        vm.selectedLanguage = $scope.selectedLanguage;
        
        vm.restaurantId = $stateParams.restaurantId;
        console.log($scope.selectedLanguage)
       
       vm.currentItem=0; 
       vm.selectedSize = 10;
        vm.selectedSide = 10; 
        $scope.checkradioasd = -1;
        $scope.selectedCount=1;
        $scope.cart = [];
        $scope.total = 0;
        $scope.item = {
            itemobj: "",
            size: "",
            sides: [],
        }; 
        $scope.displayAdd = false;

        $scope.addItemToCart = function (product) {
       if($scope.selectedCount < 1)
       {
        alert("Must postive number"); 
        return;
       }     
if(vm.currentItem != product.itemID){
    $scope.item = {
        itemobj: "",
        size: "",
        sides: [],
    }; 
     alert("Please Choose the correct item"); 
    return;
}
            for (var i = 0; i < $scope.selectedCount; i++) {

                if ($scope.cart.length === 0) {
                    product.count = 1;
                    $scope.item.itemobj = product;
                    $scope.cart.push($scope.item);

                } else {
                    var repeat = false;
                    for (var k = 0; k < $scope.cart.length; k++) {
                        if ($scope.cart[k].itemobj.itemID === product.itemID && $scope.cart[k].size.sizeId ===   $scope.item.size.sizeId) {
                            repeat = true;
                            $scope.cart[k].itemobj.count += 1;
                        }
                    }
                    if (!repeat) {
                        product.count = 1;
                        $scope.item.itemobj = product;
                        $scope.cart.push($scope.item);
                    }
                } 

                $scope.total += parseFloat($scope.item.size.price);

            }
            var CheckOutLocalstorage = JSON.parse(localStorage.getItem("checkOut"));
            if (CheckOutLocalstorage != null) {
                for (var s = 0; s < CheckOutLocalstorage.length; s++) {
                    var repeat = false;
                    for (var z = 0; z < $scope.cart.length; z++) {
                      
                        var id=$scope.cart[z].itemobj.itemID;
                        var objsize=$scope.cart[z].size.sizeId;

                        var stordId=CheckOutLocalstorage[s].itemobj.itemID ;
                        var stordSize=CheckOutLocalstorage[s].size.sizeId;

                          if (id === stordId && objsize ===stordSize) {
                            repeat = true;
                            $scope.cart[z].itemobj.count +=CheckOutLocalstorage[s].itemobj.count;
                           
                        
                        }
                    }
                    if (!repeat) {
                        $scope.item.itemobj = product;
                        $scope.cart.push(CheckOutLocalstorage[s]); 
                    }
                    
                }
            $scope.total=0;
            for (var t = 0; t < $scope.cart.length; t++) {
                var product = $scope.cart[t];
                $scope.total += (product.size.price * product.itemobj.count);
            }
        }

            $scope.homeTotalNo = $scope.total; 

            $scope.$watch("homeTotalNo", function (newValue) {
                totalCartService.homeTotalNo = newValue;
              });
              
            localStorage.setItem('checkOut', JSON.stringify($scope.cart));
            $scope.cart=[];
            $scope.item = {
                itemobj: "",
                size: "",
                sides: [],
            };
            $scope.displayAdd = false;
            $scope.checkradioasd = -1;
            $scope.selectedCount=1;
        };

        
        $scope.radioSizeClick = function (size,item) {
            vm.currentItem=item;
            $scope.checkradioasd = size.sizeId;
            $scope.item.size = size;
            if ($scope.item.size != "") {
                $scope.displayAdd = true;
            }

        };

        $scope.checkSideClick = function (side) {
            if ($scope.item.sides.indexOf(side) !== -1) {
                var index = $scope.item.sides.indexOf(side);
                $scope.item.sides.splice(index, 1);
                if ($scope.item.sides.length == 0) {
                        
                }
            }
            else {
                $scope.item.sides.push(side);
                if ($scope.item.sides.length > 0 && $scope.item.size != "") {
                    
                }
            }
        };
        $scope.addCounter = function () { 
            $scope.selectedCount = $scope.selectedCount+1;  
            
        };
        $scope.removeCounter = function () { 
            if($scope.selectedCount <= 1){
                return;
            }
            $scope.selectedCount = $scope.selectedCount-1;  
        };

        vm.likeItem = function(item){
            item.like++;
            ItemsResource.likeItem({itemId:item.itemID});
        }
        vm.dislikeItem = function(item){
            item.dislike++;
            ItemsResource.dislikeItem({itemId:item.itemID});
           
        }
    }

}
());
(function() {
    angular
      .module('home')
      .factory('ItemsResource', ['$resource', 'appCONSTANTS', ItemsResource]);

      function ItemsResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Categories/:CategoryId/Items/Templates', {}, {
          getAllItems: { method: 'GET', useToken: true, params:{lang:'@lang'}},
          likeItem: {url: appCONSTANTS.API_URL + 'Items/:itemId/Like', method: 'GET', useToken: true},
          dislikeItem: {url: appCONSTANTS.API_URL + 'Items/:itemId/Dislike', method: 'GET', useToken: true},
        })
    }

}());
  angular.module('home').directive('pageTemplate1', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: { pageitems: '=' ,itemdetails: '=',selectedLanguage:'=' },
        templateUrl: "./app/items/Templates/itemTemplate1.html",
        controller:function($scope,$localStorage){
            $scope.lang = $localStorage.language;
            $scope.viewItemDetail=function(item){
                $scope.$parent.$parent.$parent.itemdetails = item;


                            }      
        }

            };
});angular.module('home').directive('pageTemplate2', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: { pageitems: '=' ,itemdetails: '=',selectedLanguage:'=' },
        templateUrl: "./app/items/Templates/itemTemplate2.html",
        controller:function($scope,$localStorage){
            console.log($scope.itemdetails)
            console.log($localStorage.language)
            $scope.lang = $localStorage.language;
            $scope.viewItemDetail=function(item){
                $scope.$parent.$parent.$parent.itemdetails = item;                
            }    
        }

            };
});angular.module('home').directive('pageTemplate3', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: { pageitems: '=' ,itemdetails: '=' ,selectedLanguage:'='},
        templateUrl: "./app/items/Templates/itemTemplate3.html",
        controller:function($scope,$localStorage){
            console.log($scope.itemdetails)
            $scope.lang = $localStorage.language;
            $scope.viewItemDetail=function(item){
                $scope.$parent.$parent.$parent.itemdetails = item;                
            }    
        }

            };
});angular.module('home').directive('pageTemplate4', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: { pageitems: '=' ,itemdetails: '=',selectedLanguage:'=' },
        templateUrl: "./app/items/Templates/itemTemplate4.html",
        controller:function($scope,$localStorage){
            console.log($scope.itemdetails)
            $scope.lang = $localStorage.language;            
            $scope.viewItemDetail=function(item){
                $scope.$parent.$parent.$parent.itemdetails = item;                
            }    
        }

            };
});angular.module('home').directive('pageTemplate5', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: { pageitems: '=' ,itemdetails: '=',selectedLanguage:'=' },
        templateUrl: "./app/items/Templates/itemTemplate5.html",
        controller:function($scope,$localStorage){
            console.log($scope.itemdetails)
            $scope.lang = $localStorage.language;            
            $scope.viewItemDetail=function(item){
                $scope.$parent.$parent.$parent.itemdetails = item;                
            }    
        }
        
    };
});angular.module('home').directive('pageTemplate6', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: { pageitems: '=' ,itemdetails: '=',selectedLanguage:'=' },
        templateUrl: "./app/items/Templates/itemTemplate6.html",
        controller:function($scope,$localStorage){
            console.log($scope.itemdetails)
            $scope.lang = $localStorage.language;            
            $scope.viewItemDetail=function(item){
                $scope.$parent.$parent.$parent.itemdetails = item;                
            }    
        }
        
    };
});(function () {
    'use strict';

    angular
        .module('home')
        .controller('cartController', ['$rootScope', '$translate', '$scope', 'CartResource', 'appCONSTANTS', '$stateParams', '$state', '_', 'authenticationService', 'authorizationService', '$localStorage', 'userRolesEnum', 'ToastService', 'MenuOfflineResource', 'OfflineDataResource', 'totalCartService', 'CartIconService', 'ResturantPrepService','RequestResource', cartController])

    function cartController($rootScope, $translate, $scope, CartResource, appCONSTANTS, $stateParams, $state, _, authenticationService, authorizationService, $localStorage, userRolesEnum, ToastService, MenuOfflineResource, OfflineDataResource, totalCartService, CartIconService,ResturantPrepService,RequestResource) {

        $scope.$parent.globalInfo= ResturantPrepService;
        
        $scope.homeTotalNo = 0;
        $scope.cartIcon = false;
        $scope.$watch("cartIcon", function (newValue) {
            CartIconService.cartIcon = newValue;
        });
        var vm = this;
        vm.item = {
            itemobj: "",
            size: "", 
        };
        vm.currentItem=0; 
        vm.index = 0;
        vm.isItemLoaded = false;
        var total = 0;
        $scope.selectedCount = 0;
        
        $scope.total = 0;
        $scope.selectedCount = 1;


        vm.repeatCart = JSON.parse(localStorage.getItem("checkOut"));
        
        for (var i = 0; i < vm.repeatCart.length; i++) {
            var product = vm.repeatCart[i];
            total += (product.size.price * product.itemobj.count);
        }
        $scope.totalItem = total;

        
        $scope.addCounter = function (index) {
            vm.repeatCart[index].itemobj.count++;
            localStorage.setItem('checkOut', JSON.stringify(vm.repeatCart));
            var total = 0;            
            for (var i = 0; i < vm.repeatCart.length; i++) {
                var product = vm.repeatCart[i];
                total += (product.size.price * product.itemobj.count);
            }
            $scope.totalItem = total;
            $scope.homeTotalNo = $scope.totalItem;
            totalCartService.homeTotalNo = $scope.totalItem;
        }
        
        $scope.removeCounter = function (index) {
            vm.repeatCart[index].itemobj.count--;
           if(vm.repeatCart[index].itemobj.count <= 0) {
            vm.repeatCart.splice(index, 1);            
           }
           localStorage.setItem('checkOut', JSON.stringify(vm.repeatCart));
           if (vm.repeatCart == null || vm.repeatCart.length == 0) {
            $state.go('menu',{featureId: $stateParams.featureId,restaurantId:$stateParams.restaurantId});
           }
           var total = 0;           
           for (var i = 0; i < vm.repeatCart.length; i++) {
                var product = vm.repeatCart[i];
                total += (product.size.price * product.itemobj.count);
            }
            $scope.totalItem = total;
            $scope.homeTotalNo = $scope.totalItem;
            totalCartService.homeTotalNo = $scope.totalItem;

        };

        

        vm.isChanged = false;
        $scope.checkOut = function () {
            vm.isChanged = true;
            var items = JSON.parse(localStorage.getItem("checkOut"));
            var requestDetails = []
            items.forEach(function(element) {
                requestDetails.push({itemSizeId:element.itemobj.itemID,number:element.itemobj.count,price:element.size.price})
            }, this);
            var newRequest = new RequestResource();
            newRequest.featureId = $stateParams.featureId;
            newRequest.requestDetails = requestDetails;
            newRequest.restaurantId = $stateParams.restaurantId;
            newRequest.$create().then(
                function(data, status) {
                    vm.isChanged = false;
                    $scope.homeTotalNo = 0;
                    $scope.$watch("homeTotalNo", function (newValue) {
                        totalCartService.homeTotalNo = newValue;
                    });
                    localStorage.removeItem('checkOut');
                    $state.go('menu',{featureId: $stateParams.featureId,restaurantId:$stateParams.restaurantId});
                },
                function(data, status) {
                    
                }
            );
            console.log(items)
            
        };





    }


}());
(function() {
    angular
      .module('home')
      .factory('CartResource', ['$resource', 'appCONSTANTS', CartResource])   

    function CartResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Items/:itemId', {}, {
        getItemById: { method: 'GET', useToken: true, params:{lang:'@lang'} } 
      })
    }
     

}());
  (function () {
    'use strict';
	
    angular
        .module('home')
        .controller('showCategoryDialogController', ['$uibModalInstance','$translate', 'MenuResource','ToastService','GetCategoriesResource','category',  showCategoryDialogController])

	function showCategoryDialogController($uibModalInstance, $translate, MenuResource,ToastService,GetCategoriesResource, category){
		var vm = this;
		vm.menuName = "";
		
		vm.categories = category; 
		vm.close = function(){
			$uibModalInstance.dismiss('cancel');
		}
	 
	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('menuController', ['$rootScope', '$translate', '$scope', 'appCONSTANTS', '$stateParams', 'MenuResource', 'menuPrepService', 'ResturantPrepService', 'CategoriesResource', '$state', '_', 'authenticationService', 'authorizationService', '$localStorage', 'userRolesEnum', 'ToastService', 'ResturantResource', 'MenuOfflineResource', 'OfflineDataResource','CartIconService', menuController])

    function menuController($rootScope, $translate, $scope, appCONSTANTS, $stateParams, MenuResource, menuPrepService, ResturantPrepService, CategoriesResource, $state, _, authenticationService, authorizationService, $localStorage, userRolesEnum, ToastService, ResturantResource, MenuOfflineResource, OfflineDataResource,CartIconService) {
        var vm = this;


        $scope.cartIcon = true;        
        CartIconService.cartIcon = true;

        $scope.$parent.globalInfo= ResturantPrepService;
        vm.restaurantId = $stateParams.restaurantId;

                if (navigator.onLine)
            vm.menus = menuPrepService.results;
        else
            vm.menus = menuPrepService;
        vm.categories = ""; 

                function refreshMenu() {
            var k = MenuResource.getAllMenus({ page: vm.currentPage }).$promise.then(function (results) {
                vm.menus = results
            },
            function (data, status) {
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }
        vm.ShowId = function (_menuId) {
            refreshCategories(_menuId);
        };

        function refreshCategories(mnuId) {
            if(navigator.onLine){
                var k = CategoriesResource.getAllCategories({ MenuId: mnuId, page: vm.currentPage }).$promise.then(function (results) {
                    console.log(results);
                    vm.categories = results.results
                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            }
            else{
             vm.categories =  OfflineDataResource.getAllCategories(mnuId);  
            }
        }








    }


}());
(function() {
    angular
      .module('home')
      .factory('MenuResource', ['$resource', 'appCONSTANTS', MenuResource])  
      .factory('MenuOfflineResource', ['$resource', 'appCONSTANTS', MenuOfflineResource])
      .factory('CategoriesResource', ['$resource', 'appCONSTANTS', CategoriesResource])
      .factory('ResturantResource', ['$resource', 'appCONSTANTS', ResturantResource])
      .factory('FeedBackResource', ['$resource', 'appCONSTANTS', FeedBackResource])

    function MenuResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Restaurants/:restaurantId/Menus/:MenuId', {}, {
        getAllMenus: { method: 'GET', useToken: true, params:{lang:'@lang'} } 
      })
    }
    
    function CategoriesResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Menus/:MenuId/Categories', {}, {
          getAllCategories: { method: 'GET', useToken: true, params:{lang:'@lang'} }
        })
    }

    function ResturantResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Restaurants/:restaurantId/GetGlobalRestaurantInfo', {}, {
          getResturantGlobalInfo: { method: 'GET', useToken: true, params:{lang:'@lang'} }
        })
    }

    function MenuOfflineResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Menus/OfflineData', {}, {
        getAllMenus: { method: 'GET', useToken: true, params:{lang:'@lang'},isArray:true } 
      })
    }
    function FeedBackResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'FeedBacks/', {}, {
        getAllFeedBack: {url: appCONSTANTS.API_URL + 'Restaurants/:restaurantId/FeedBacks/', method: 'GET', useToken: true },
        createFeedBack: { method: 'POST', useToken: true }
      })
    }

}());
  