(function () {
    'use strict';

    angular
        .module('home')
        .controller('cartController', ['$rootScope', '$translate', '$scope', 'CartResource', 'appCONSTANTS', '$stateParams', '$state', '_', 'authenticationService', 'authorizationService', '$localStorage', 'userRolesEnum', 'ToastService', 'MenuOfflineResource', 'OfflineDataResource', 'totalCartService', 'CartIconService', 'ResturantPrepService', cartController])

    function cartController($rootScope, $translate, $scope, CartResource, appCONSTANTS, $stateParams, $state, _, authenticationService, authorizationService, $localStorage, userRolesEnum, ToastService, MenuOfflineResource, OfflineDataResource, totalCartService, CartIconService,ResturantPrepService) {

        $scope.$parent.globalInfo= ResturantPrepService;

                $scope.homeTotalNo = 0;
        $scope.cartIcon = false;
        $scope.$watch("cartIcon", function (newValue) {
            CartIconService.cartIcon = newValue;
        });
        var vm = this;
        vm.counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        vm.selectedSize = 10;
        vm.selectedSide = 10;
        vm.item = {
            itemobj: "",
            size: "",
            sides: [],
        };
        vm.currentItem=0; 
        vm.index = 0;
        vm.isItemLoaded = false;
        var total = 0;
        $scope.selectedCount = 0;
        $scope.cart = [];
        $scope.total = 0;
        $scope.displayEditBtn = false;
        $scope.displayAdd = false;
        $scope.disableAdd = true; 
        $scope.checkradioasd = -1;
        $scope.selectedCount = 1;

        vm.repeatCart = [];

        var CheckOutLocalstorage = JSON.parse(localStorage.getItem("checkOut"));
        for (var h = 0; h < CheckOutLocalstorage.length; h++) {
            vm.item.size = CheckOutLocalstorage[h].size;
            vm.item.itemobj = CheckOutLocalstorage[h].itemobj;

            var k = CartResource.getItemById({ itemId: vm.item.itemobj.itemID }).$promise.then(function (results) {
                vm.itemdetails = results;

                vm.item.itemobj.itemName = vm.itemdetails.itemName;
                vm.item.itemobj.itemDescription = vm.itemdetails.itemDescription;
                var temp;
                JSON.parse(localStorage.getItem("checkOut")).forEach(function(element) {
                    if(element.itemobj.itemID == results.itemID){
                        temp = element;
                    }
                }, this);
                temp.itemobj.itemName = results.itemName;
                temp.itemobj.itemDescription = results.itemDescription;
                vm.repeatCart.push(temp)
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                });

            $scope.cart.push(vm.item);

        }
        $scope.cart = CheckOutLocalstorage;

        for (var i = 0; i < $scope.cart.length; i++) {
            var product = $scope.cart[i];
            total += (product.size.price * product.itemobj.count);
        }
        $scope.totalItem = total;


        $scope.viewItemDetail = function (item) {
            $scope.displayAdd = true;
            $scope.displayEditBtn = false;
            $scope.selectedCount = 1;
            $scope.checkradioasd = -1;

            refreshItems(item);
        }

        $scope.removeItemCart = function (product) {

            if (product.itemobj.count > 1) {
                product.itemobj.count -= 1;


                localStorage.setItem('checkOut', JSON.stringify($scope.cart));


                $scope.totalItem -= parseFloat(product.size.price);
                vm.itemCount = $scope.cart.length;
                $scope.homeTotalNo = $scope.totalItem;


                $scope.$watch("homeTotalNo", function (newValue) {
                    totalCartService.homeTotalNo = newValue;
                });

            }
            else if (product.itemobj.count === 1) {
                for (var r = 0; r < $scope.cart.length; r++) { 
                    var cartId=$scope.cart[r].itemobj.itemID;
                    var objId=product.itemobj.itemID;
                    var cartSize=$scope.cart[r].size.sizeId;
                    var objSize=product.size.sizeId;

                    if (cartId === objId && cartSize ===objSize) { 
                             $scope.cart.splice(r, 1);
                              vm.repeatCart.splice(r, 1);

                                          localStorage.setItem('checkOut', JSON.stringify($scope.cart));
                             $scope.totalItem -= parseFloat(product.size.price);
                             $scope.homeTotalNo = $scope.totalItem;


                                                       $scope.$watch("homeTotalNo", function (newValue) {
                                 totalCartService.homeTotalNo = newValue;
                             });

                                          if ($scope.cart == null || $scope.cart.length == 0) {
                                $state.go('menu',{restaurantId:$stateParams.restaurantId});
                            }


                    }
                }








            }



        };

        $scope.addItemToCart = function (product) {


                              if($scope.selectedCount < 1)
            {
             alert("Must postive number"); 
             return;
            }     
        for (var i = 0; i < $scope.selectedCount; i++) {

                if ($scope.cart.length === 0) {
                    product.count = 1;
                    vm.item.itemobj = product;
                    $scope.cart.push(vm.item);
                    $scope.total += parseFloat(vm.item.size.price);

                } else {
                    var repeat = false;
                    for (var k = 0; k < $scope.cart.length; k++) {
                        var id = $scope.cart[k].itemobj.itemID;
                        var objsize = $scope.cart[k].size.sizeId;
                        if (id === product.itemID && objsize === vm.item.size.sizeId) {
                            repeat = true;
                            $scope.cart[k].itemobj.count += 1;
                            $scope.total += parseFloat($scope.cart[k].size.price);
                        }
                    }
                    if (!repeat) {
                        product.count = 1;
                        vm.item.itemobj = product;
                        $scope.cart.push(vm.item);
                        $scope.total += parseFloat(vm.item.size.price);
                    }
                }

                $scope.totalItem += $scope.total;

            }
            $scope.homeTotalNo += $scope.total;


            $scope.$watch("homeTotalNo", function (newValue) {
                $scope.homeTotalNo = newValue;
            });

            localStorage.setItem('checkOut', JSON.stringify($scope.cart));
            vm.item = {
                itemobj: "",
                size: "",
                sides: [],
            };
            $scope.displayAdd = false;
            $scope.checkradioasd = -1;
            $scope.selectedCount = 1;




        }; 


                $scope.addCounter = function (product, index) {
            product.itemobj.count++;
            refreshItems(product);
            $scope.selectedCount = product.itemobj.count; 
            $scope.checkradioasd = product.size;
            $scope.displayEditBtn = true;
            $scope.displayAdd = false;
            vm.index = index;
          $scope.editItemToCart(product);
        };

                $scope.removeCounter = function (product, index) {
            product.itemobj.count--;
            refreshItems(product);
            $scope.selectedCount = product.itemobj.count; 
            $scope.checkradioasd = product.size;
            $scope.displayEditBtn = true;
            $scope.displayAdd = false;
            vm.index = index;
            if(product.itemobj.count <1){
                for (var r = 0; r < vm.repeatCart.length; r++) { 
                    var cartId=vm.repeatCart[r].itemobj.itemID;
                    var objId=product.itemobj.itemID;
                    var cartSize=vm.repeatCart[r].size.sizeId;
                    var objSize=product.size.sizeId;

                    if (cartId === objId && cartSize ===objSize) { 
                              vm.repeatCart.splice(r, 1);

                                          localStorage.setItem('checkOut', JSON.stringify(vm.repeatCart));
                             $scope.totalItem -= parseFloat(product.size.price);
                             $scope.homeTotalNo = $scope.totalItem;


                                                       $scope.$watch("homeTotalNo", function (newValue) {
                                 totalCartService.homeTotalNo = newValue;
                             });

                                          if (vm.repeatCart == null || vm.repeatCart.length == 0) {
                                 $state.go('menu',{restaurantId:$stateParams.restaurantId});
                             }


                    }
                }


            }else{
            $scope.editItemToCart(product);}
        };

        $scope.updateItemCart = function (product, index) {
            refreshItems(product);
            $scope.selectedCount = product.itemobj.count;
            $scope.checkradioasd = product.size;
            $scope.displayEditBtn = true;
            $scope.displayAdd = false;
            vm.index = index;
        };

        $scope.editItemToCart = function (product) {
            if ($scope.displayEditBtn == true) {

                vm.item.itemobj = product;

                $scope.cart[vm.index].itemobj.count = $scope.selectedCount;
                $scope.cart[vm.index].size = $scope.checkradioasd ;
                $scope.cart[vm.index].size = $scope.checkradioasd;
                $scope.total = 0;
                for (var i = 0; i < $scope.cart.length; i++) {
                    var product = $scope.cart[i];
                    $scope.total += (product.size.price * product.itemobj.count);
                }

                $scope.homeTotalNo = $scope.total;
                $scope.totalItem = $scope.total;
                $scope.$watch("homeTotalNo", function (newValue) {
                    totalCartService.homeTotalNo = newValue;
                });


                localStorage.setItem('checkOut', JSON.stringify($scope.cart));
                console.log( $scope.cart);

                            }


            vm.item = {
                itemobj: "",
                size: "",
                sides: [],
            };
            $scope.displayEditBtn = false;
            $scope.displayAdd = false;
            $scope.checkradioasd = -1;
            $scope.selectedCount = 1;


        };

        $scope.radioSizeClick = function (size,item) {
            vm.currentItem=item;

                        $scope.checkradioasd = size.sizeId;

            vm.item.size = size;
            if (vm.item.size != "" && $scope.displayEditBtn == false) {
                $scope.displayAdd = true;
                $scope.disableAdd = false;
            }

        };

        $scope.checkSideClick = function (side) {
            if (vm.item.sides.indexOf(side) !== -1) {
                var index = vm.item.sides.indexOf(side);
                vm.item.sides.splice(index, 1);
                if (vm.item.sides.length == 0) {
                }
            }
            else {
                vm.item.sides.push(side);
                if (vm.item.sides.length > 0 && vm.item.size != "") {
                }
            }
        };

        $scope.checkOut = function () {
            $scope.homeTotalNo = 0;



            $scope.$watch("homeTotalNo", function (newValue) {
                totalCartService.homeTotalNo = newValue;
            });
            localStorage.removeItem('checkOut');
            $state.go('menu',{restaurantId:$stateParams.restaurantId});
        };

        function refreshItems(item) {
            vm.isItemLoaded = false;
            var k = CartResource.getItemById({ itemId: item.itemobj.itemID }).$promise.then(function (results) {
                vm.itemdetails = results;
                vm.isItemLoaded = true;
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                });
        }



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
        .controller('clientFeatureController', ['$scope','$uibModal','$translate', 'appCONSTANTS', 'FeatureResource','featuresPrepService','RequestResource','ToastService',  clientFeatureController])

    function clientFeatureController($scope,$uibModal ,$translate , appCONSTANTS, FeatureResource,featuresPrepService,RequestResource,ToastService){

        var vm = this;
        vm.features = featuresPrepService;

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
      .factory('RequestResource', ['$resource', 'appCONSTANTS', RequestResource]);


              function FeatureResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Features/:featureId', {}, {
        getAllFeatures: { method: 'GET', useToken: true },
        getAllActivatedFeatures: {url: appCONSTANTS.API_URL + 'Features/Activated', method: 'GET', useToken: true },
        checkFeatureAsRestaurant: {url: appCONSTANTS.API_URL + 'Features/Restaurant', method: 'GET', useToken: true },
        getFeature: { method: 'GET', useToken: true },
      })
    }

    function RequestResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Requests/', {}, {
        create: { method: 'POST', useToken: true },
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
                        featuresPrepService: featuresPrepService
                    }

                                    })

        });

                featuresPrepService.$inject = ['FeatureResource']
        function featuresPrepService(FeatureResource) {
            return FeatureResource.getAllActivatedFeatures().$promise;
        }
        featureDetailPrepService.$inject = ['FeatureResource','$stateParams']
        function featureDetailPrepService(FeatureResource,$stateParams) {
            return FeatureResource.getFeature({featureId: $stateParams.featureId}).$promise;
        }
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('featureDetailController', ['$scope','$stateParams','$translate', 'appCONSTANTS', 'FeatureResource','feature','language','ToastService',  featureDetailController])

    function featureDetailController($scope,$stateParams ,$translate , appCONSTANTS, FeatureResource,feature,language,ToastService){

        var vm = this;
        vm.feature = feature;
        vm.language = language;

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
                  console.log(event)
                  console.log(page)
                  console.log(pageObj)
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
        .controller('ItemController', ['$compile','$scope', '$translate', '$stateParams', 'appCONSTANTS', 'categoryItemsTemplatePrepService', 'ResturantPrepService', 'totalCartService','CartIconService', ItemController])

    function ItemController($compile,$scope, $translate, $stateParams, appCONSTANTS, categoryItemsTemplatePrepService, ResturantPrepService, totalCartService,CartIconService) {

         var vm = this;
        $scope.cartIcon = true;
        $scope.$watch("cartIcon", function (newValue) {
            CartIconService.cartIcon = newValue;
          });
        vm.catgoryTemplates = categoryItemsTemplatePrepService;
        $scope.$parent.globalInfo= ResturantPrepService;
        vm.selectedLanguage = $scope.selectedLanguage;

          $scope.$on('updateFlipBookDesign', function(event) {

        });
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
        .controller('menuController', ['$rootScope', '$translate', '$scope', 'appCONSTANTS', '$stateParams', 'MenuResource', 'menuPrepService', 'ResturantPrepService', 'CategoriesResource', '$state', '_', 'authenticationService', 'authorizationService', '$localStorage', 'userRolesEnum', 'ToastService', 'ResturantResource', 'MenuOfflineResource', 'OfflineDataResource', menuController])

    function menuController($rootScope, $translate, $scope, appCONSTANTS, $stateParams, MenuResource, menuPrepService, ResturantPrepService, CategoriesResource, $state, _, authenticationService, authorizationService, $localStorage, userRolesEnum, ToastService, ResturantResource, MenuOfflineResource, OfflineDataResource) {
        var vm = this;


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

}());
