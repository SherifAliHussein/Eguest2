(function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
              .state('Menu', {
					url: '/menu',
                    templateUrl: './app/RestaurantAdmin/templates/menu.html',
                    controller: 'menuController',
                    'controllerAs': 'menuCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                           redirectTo: 'root'
                        },
                        displayName: 'Menu'
                    },
                    resolve: {
                        menusPrepService: menusPrepService,
                        RestaurantIsReadyPrepService:RestaurantIsReadyPrepService
                    }

                                 })
                .state('newMenu', {
                      url: '/NewMenu',
                      templateUrl: './app/RestaurantAdmin/templates/newMenu.html',
                      controller: 'menuDialogController',
                      'controllerAs': 'menuDlCtrl',
                      data: {
                          permissions: {
                              only: ['RestaurantAdmin'],
                             redirectTo: 'root'
                          },
                          displayName: 'Menu'
                      }

                                     })
                  .state('editMenu', {
                        url: '/Menu/:menuId',
                        templateUrl: './app/RestaurantAdmin/templates/editMenu.html',
                        controller: 'editMenuDialogController',
                        'controllerAs': 'editMenuDlCtrl',
                        data: {
                            permissions: {
                                only: ['RestaurantAdmin'],
                               redirectTo: 'root'
                            },
                            displayName: 'Menu'
                        },
                        resolve: {
                            menuPrepService: menuPrepService
                        }
                    })
                .state('Category', {
                      url: '/menu/:menuId/Category',
                      templateUrl: './app/RestaurantAdmin/templates/Category.html',
                      controller: 'categoryController',
                      'controllerAs': 'categoryCtrl',
                      data: {
                          permissions: {
                              only: ['RestaurantAdmin'],
                             redirectTo: 'root'
                          },
                          displayName: 'Category'
                      },
                      resolve: {
                        categoriesPrepService: categoriesPrepService
                      }                   
                  })
                  .state('newCategory', {
                        url: '/menu/:menuId/NewCategory',
                        templateUrl: './app/RestaurantAdmin/templates/newCategory.html',
                        controller: 'categoryDialogController',
                        'controllerAs': 'categoryDlCtrl',
                        data: {
                            permissions: {
                                only: ['RestaurantAdmin'],
                               redirectTo: 'root'
                            },
                            displayName: 'Category'
                        }             
                    })
                    .state('editCategory', {
                          url: '/menu/:menuId/Category/:categoryId',
                          templateUrl: './app/RestaurantAdmin/templates/editCategory.html',
                          controller: 'editCategoryDialogController',
                          'controllerAs': 'editCategoryDlCtrl',
                          data: {
                              permissions: {
                                  only: ['RestaurantAdmin'],
                                 redirectTo: 'root'
                              },
                              displayName: 'Category'
                          },
                          resolve: {
                            categoryPrepService: categoryPrepService
                          }                   
                      })
                  .state('size', {
                        url: '/size',
                        templateUrl: './app/RestaurantAdmin/templates/size.html',
                        controller: 'sizeController',
                        'controllerAs': 'sizeCtrl',
                        data: {
                            permissions: {
                                only: ['RestaurantAdmin'],
                               redirectTo: 'root'
                            },
                            displayName: 'Size'
                        },
                        resolve: {
                          sizesPrepService: sizesPrepService
                        }

                                         })
                    .state('newsize', {
                          url: '/Newsize',
                          templateUrl: './app/RestaurantAdmin/templates/newSize.html',
                          controller: 'sizeDialogController',
                          'controllerAs': 'sizeDlCtrl',
                          data: {
                              permissions: {
                                  only: ['RestaurantAdmin'],
                                 redirectTo: 'root'
                              },
                              displayName: 'Size'
                          }                       
                      })
                      .state('editsize', {
                            url: '/size/:sizeId',
                            templateUrl: './app/RestaurantAdmin/templates/editSize.html',
                            controller: 'editSizeDialogController',
                            'controllerAs': 'editSizeDlCtrl',
                            data: {
                                permissions: {
                                    only: ['RestaurantAdmin'],
                                   redirectTo: 'root'
                                },
                                displayName: 'Size'
                            },
                            resolve: {
                                sizePrepService: sizePrepService
                            }                     
                        })
                    .state('Items', {
                        url: '/Category/:categoryId/Item',
                        templateUrl: './app/RestaurantAdmin/templates/Item.html',
                        controller: 'ItemController',
                        'controllerAs': 'itemCtrl',
                        data: {
                            permissions: {
                                only: ['RestaurantAdmin'],
                                redirectTo: 'root'
                            },
                            displayName: 'Category'
                        },
                        resolve: {
                            itemsPrepService: itemsPrepService
                        }
                    })
                    .state('newItem', {
                        url: '/Category/:categoryId/newItem',
                        templateUrl: './app/RestaurantAdmin/templates/newItem.html',
                        controller: 'newItemController',
                        'controllerAs': 'newItemCtrl',
                        data: {
                            permissions: {
                                only: ['RestaurantAdmin'],
                               redirectTo: 'root'
                            },
                            displayName: 'Items'
                        },
                        resolve: {
                            ItemSizePrepService: ItemSizePrepService,
                            ItemSideItemPrepService: ItemSideItemPrepService,
                            defaultItemsPrepService: defaultItemsPrepService,
                        }                 
                    })
                    .state('editItem', {
                        url: '/Category/:categoryId/Items/:itemId',
                        templateUrl: './app/RestaurantAdmin/templates/editItem.html',
                        controller: 'editItemController',
                        'controllerAs': 'editItemCtrl',
                        data: {
                            permissions: {
                                only: ['RestaurantAdmin'],
                               redirectTo: 'root'
                            },
                            displayName: 'Items'
                        },
                        resolve: {
                            itemPrepService:itemPrepService,
                            ItemSizePrepService: ItemSizePrepService,
                            ItemSideItemPrepService: ItemSideItemPrepService
                        }                 
                    })
                    .state('Waiters', {
                        url: '/Waiter',
                        templateUrl: './app/RestaurantAdmin/templates/waiter.html',
                        controller: 'WaiterController',
                        'controllerAs': 'waiterCtrl',
                        data: {
                            permissions: {
                                only: ['RestaurantAdmin'],
                                redirectTo: 'root'
                            },
                            displayName: 'Waiters'
                        },
                        resolve: {
                            waitersPrepService: waitersPrepService
                        }
                    })
                    .state('Backgrounds', {
                        url: '/Background',
                        templateUrl: './app/RestaurantAdmin/templates/background.html',
                        controller: 'BackgroundController',
                        'controllerAs': 'backgroundCtrl',
                        data: {
                            permissions: {
                                only: ['RestaurantAdmin'],
                                redirectTo: 'root'
                            },
                            displayName: 'Backgrounds'
                        },
                        resolve: {
                            backgroundsPrepService: backgroundsPrepService
                        }
                    })

                                        .state('Template', {
                        url: '/Template',
                        templateUrl: './app/RestaurantAdmin/templates/categoryTemplate.html',
                        controller: 'CategoryTemplateController',
                        'controllerAs': 'CategoryTemplateCtrl',
                        data: {
                            permissions: {
                                only: ['RestaurantAdmin'],
                                redirectTo: 'root'
                            },
                            displayName: 'Templates'
                        },
                        resolve: {
                            allMenuPrepService: allMenuPrepService,
                            templatesPrepService: templatesPrepService
                        }
                    })
                    .state('branch', {
                          url: '/Branch',
                          templateUrl: './app/RestaurantAdmin/templates/branch.html',
                          controller: 'branchController',
                          'controllerAs': 'branchCtrl',
                          data: {
                              permissions: {
                                  only: ['RestaurantAdmin'],
                                 redirectTo: 'root'
                              },
                              displayName: 'Branch'
                          },
                          resolve: {
                            branchsPrepService: branchsPrepService
                          }

                                             })
                      .state('newbranch', {
                            url: '/newBranch',
                            templateUrl: './app/RestaurantAdmin/templates/newBranch.html',
                            controller: 'branchDialogController',
                            'controllerAs': 'branchDlCtrl',
                            data: {
                                permissions: {
                                    only: ['RestaurantAdmin'],
                                   redirectTo: 'root'
                                },
                                displayName: 'Branch'
                            }

                                                 })
                        .state('editbranch', {
                              url: '/Branch/:branchId',
                              templateUrl: './app/RestaurantAdmin/templates/editBranch.html',
                              controller: 'editBranchDialogController',
                              'controllerAs': 'editBranchDlCtrl',
                              data: {
                                  permissions: {
                                      only: ['RestaurantAdmin'],
                                     redirectTo: 'root'
                                  },
                                  displayName: 'Branch'
                              },
                              resolve: {
                                branchPrepService: branchPrepService
                              }
                          })
                          .state('itemOrder', {
                                url: '/order',
                                templateUrl: './app/RestaurantAdmin/templates/itemOrder.html',
                                controller: 'itemOrderController',
                                'controllerAs': 'itemOrderDlCtrl',
                                data: {
                                    permissions: {
                                        only: ['RestaurantAdmin'],
                                       redirectTo: 'root'
                                    },
                                    displayName: 'itemOrder'
                                },
                                resolve: {     
                                    allMenuPrepService: allMenuPrepService
                                }
                            })
        });

                menusPrepService.$inject = ['MenuResource']
        function menusPrepService(MenuResource) {
            return MenuResource.getAllMenus().$promise;
        }

        menuPrepService.$inject = ['MenuResource','$stateParams']
        function menuPrepService(MenuResource,$stateParams) {
            return MenuResource.getMenu({menuId : $stateParams.menuId}).$promise;
        }

        categoriesPrepService.$inject = ['GetCategoriesResource','$stateParams']
        function categoriesPrepService(GetCategoriesResource,$stateParams) {
            return GetCategoriesResource.getAllCategories({ MenuId: $stateParams.menuId }).$promise;
        }

        categoryPrepService.$inject = ['CategoryResource','$stateParams']
        function categoryPrepService(CategoryResource,$stateParams) {
            return CategoryResource.getCategory({ categoryId: $stateParams.categoryId }).$promise;
        }

                sizesPrepService.$inject = ['SizeResource']
        function sizesPrepService(SizeResource) {
            return SizeResource.getAllSizes().$promise;
        }

        sizePrepService.$inject = ['SizeResource','$stateParams']
        function sizePrepService(SizeResource,$stateParams) {
            return SizeResource.getSize({ sizeId: $stateParams.sizeId }).$promise;
        }

                sideItemPrepService.$inject = ['SideItemResource']
        function sideItemPrepService(SideItemResource) {
            return SideItemResource.getAllSideItems().$promise;
        }

                itemsPrepService.$inject = ['GetItemsResource','$stateParams']
        function itemsPrepService(GetItemsResource,$stateParams) {
            return GetItemsResource.getAllItems({ CategoryId: $stateParams.categoryId }).$promise;
        }

        ItemSizePrepService.$inject = ['SizeResource']
        function ItemSizePrepService(SizeResource) {
            return SizeResource.getAllSizes({ pagesize:0 }).$promise;
        }

        ItemSideItemPrepService.$inject = ['SideItemResource']
        function ItemSideItemPrepService(SideItemResource) {
            return SideItemResource.getAllSideItems({ pagesize:0 }).$promise;
        }

        itemPrepService.$inject = ['ItemResource','$stateParams']
        function itemPrepService(ItemResource,$stateParams) {
            return ItemResource.getItem({ itemId:$stateParams.itemId }).$promise;
        }

        defaultItemsPrepService.$inject = ['GetItemNamesResource','$stateParams','$localStorage','appCONSTANTS']
        function defaultItemsPrepService(GetItemNamesResource,$stateParams,$localStorage,appCONSTANTS) {
            if($localStorage.language != appCONSTANTS.defaultLanguage){
                return GetItemNamesResource.getAllItemNames({ CategoryId:$stateParams.categoryId, lang:appCONSTANTS.defaultLanguage }).$promise;
            }
            else
                return null;
        }

        RestaurantIsReadyPrepService.$inject = ['CheckRestaurantReadyResource']
        function RestaurantIsReadyPrepService(CheckRestaurantReadyResource) {
            return CheckRestaurantReadyResource.IsReady().$promise;
        }

        waitersPrepService.$inject = ['WaiterResource']
        function waitersPrepService(WaiterResource) {
            return WaiterResource.getAllWaiters().$promise;
        }

        backgroundsPrepService.$inject = ['BackgroundResource']
        function backgroundsPrepService(BackgroundResource) {
            return BackgroundResource.getAllBackgrounds().$promise; 
        }


                templatesPrepService.$inject = ['TemplateResource']
        function templatesPrepService(TemplateResource) {
            return TemplateResource.getTemplates().$promise;
        }

                allMenuPrepService.$inject = ['ActivatedMenuResource']
        function allMenuPrepService(ActivatedMenuResource) {
            return ActivatedMenuResource.getAllMenusName().$promise;
        }

                branchsPrepService.$inject = ['BranchResource']
        function branchsPrepService(BranchResource) {
            return BranchResource.getAllBranches().$promise;
        }

        branchPrepService.$inject = ['BranchResource','$stateParams']
        function branchPrepService(BranchResource,$stateParams) {
            return BranchResource.getBranch({branchId: $stateParams.branchId}).$promise;
        }

                WaitersLimitPrepService.$inject = ['WaitersLimitResource']
        function WaitersLimitPrepService(WaitersLimitResource) {
            return WaitersLimitResource.getWaitersLimit().$promise;
        }
}());
(function() {
    'use strict';

      angular
      .module('home')
      .config(config)
      .run(runBlock);

      config.$inject = ['ngProgressLiteProvider'];
    runBlock.$inject = ['$transitions', 'ngProgressLite' ];

      function config(ngProgressLiteProvider) {
      ngProgressLiteProvider.settings.speed = 1000;

      }

      function runBlock($transitions, ngProgressLite ) {

      $transitions.onStart({}, function(transition) {
        startProgress();
      });
      $transitions.onSuccess({}, function(transition) {
        endProgress()
      });
      $transitions.onError({  }, function(transition) {
        endProgress()
      });
      var routingDoneEvents = ['$stateChangeSuccess', '$stateChangeError', '$stateNotFound'];


        function startProgress() {
        ngProgressLite.start();
      }

        function endProgress() {
        ngProgressLite.done();
      }

      }
  })();
  (function () {
    'use strict';

	    angular
        .module('home')
        .controller('clientFeatureController', ['$scope','$uibModal','$translate', 'appCONSTANTS', 'FeatureResource','featuresPrepService','RequestResource','ToastService',  clientFeatureController])

    function clientFeatureController($scope,$uibModal ,$translate , appCONSTANTS, FeatureResource,featuresPrepService,RequestResource,ToastService){

        var vm = this;
        vm.features = featuresPrepService;
		vm.Now = $scope.getCurrentTime();


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
        vm.request = function(featureId,featureName){
            var modalContent = $uibModal.open({
				templateUrl: './app/Client/features/templates/ConfirmRequestDialog.html',
				controller: 'confirmRequestDialogController',
				controllerAs: 'requestDlCtrl',
				resolve: {
					itemName: function () { return featureName },
					itemId: function() { return featureId },
					callBackFunction:function() { return confirmRequest }
				}

							});
        }
        function confirmRequest(featureId){
            var newRequest = new RequestResource();
            newRequest.featureId = featureId;
            newRequest.$create().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('RequestSuccess'),"success");
                },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
        }
		vm.openFeature = function(featureId){
            FeatureResource.getFeature({featureId: featureId}).$promise.then(function(results) {
                var modalContent = $uibModal.open({
                    templateUrl: './app/Client/features/templates/featureDetail.html',
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
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('clientFeatures', {
                    url: '/Clientfeature',
                    templateUrl: './app/Client/features/templates/features.html',
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
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('BackgroundController', ['$scope','$stateParams','$translate', 'appCONSTANTS','$uibModal','BackgroundResource', 'ActivatebackgroundResource','DeactivateBackgroundResource','backgroundsPrepService','ToastService',  BackgroundController])

    function BackgroundController($scope,$stateParams ,$translate , appCONSTANTS,$uibModal,BackgroundResource, ActivatebackgroundResource,DeactivateBackgroundResource,backgroundsPrepService,ToastService){

        var vm = this;
		vm.Backgrounds = backgroundsPrepService;
		console.log(vm.Backgrounds);
		vm.Now = $scope.getCurrentTime();
		$('.pmd-sidebar-nav>li>a').removeClass("active")	
		$($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")
		
		function refreshBackgrounds(){
			var k = BackgroundResource.getAllBackgrounds({page:vm.currentPage }).$promise.then(function(results) {
				vm.Backgrounds = results
				console.log(vm.Backgrounds);
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshBackgrounds();
		}
		vm.openbackgroundDialog = function(){		
			 
				var modalContent = $uibModal.open({
					templateUrl: './app/RestaurantAdmin/templates/newBackground.html',
					controller: 'backgroundDialogController',
					controllerAs: 'backgroundCtrl',
					resolve:{ 
						callBackFunction:function(){return refreshBackgrounds;
						}
					}
					
				});
		 
		}
		function confirmationDelete(itemId){
			backgroundResource.deletebackground({backgroundId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('backgroundDeleteSuccess'),"success");
				refreshBackgrounds();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.openDeletebackgroundDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}
				
			});
		}
		
		vm.openEditbackgroundDialog = function(index){
			var modalContent = $uibModal.open({
				templateUrl: './app/RestaurantAdmin/templates/editbackground.html',
				controller: 'editbackgroundDialogController',
				controllerAs: 'editbackgroundDlCtrl',
				resolve:{
					mode:function(){return "edit"},
					englishBackgrounds: function(){return null;},
					background:function(){ return vm.Backgrounds.results[index]},
					callBackFunction:function(){return refreshBackgrounds;}
				}
				
			});
			
		}
		vm.Activate = function(background){
			ActivatebackgroundResource.Activate({BackgroundId:background.backgroundId})
			.$promise.then(function(result){
				background.isActive = true;
				refreshBackgrounds();
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}

		vm.Deactivate = function(background){
			DeactivatebackgroundResource.Deactivate({backgroundId:background.backgroundId})
			.$promise.then(function(result){
				background.isActive = false;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}		
		
		
		
	}
	
}
    ());
(function() {
    angular
      .module('home')
      .factory('BackgroundResource', ['$resource', 'appCONSTANTS', BackgroundResource]) 
      .factory('ActivatebackgroundResource', ['$resource', 'appCONSTANTS', ActivatebackgroundResource])
      .factory('DeactivateBackgroundResource', ['$resource', 'appCONSTANTS', DeactivateBackgroundResource]) 

      function BackgroundResource($resource, appCONSTANTS) {  
              return $resource(appCONSTANTS.API_URL + 'Backgrounds/GetAllBackground', {}, { 
                getAllBackgrounds: { method: 'GET', useToken: true, params:{lang:'@lang'} }
        })
    }
  

    function ActivatebackgroundResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Backgrounds/:BackgroundId/Activate', {}, {
          Activate: { method: 'GET', useToken: true}
        })
    }
    function DeactivateBackgroundResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Backgrounds/:BackgroundId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }
}());
  (function () {
    'use strict';
	
    angular
        .module('home')
        .controller('backgroundDialogController', ['$scope','$state','$uibModalInstance','$http','$translate','appCONSTANTS' , 'BackgroundResource','ToastService','callBackFunction','$rootScope',  backgroundDialogController])

	function backgroundDialogController($scope, $state , $uibModalInstance,$http, $translate,appCONSTANTS , BackgroundResource,ToastService,callBackFunction,$rootScope){
		var vm = this;
		vm.menuName = "";
		vm.close = function(){
			$uibModalInstance.dismiss('cancel');
		}
		
		vm.AddNewbackground = function(){
            var newbackground = new Object();
            newbackground.backgroundName = vm.backgroundName; 

			var model = new FormData();
			model.append('data', JSON.stringify(newbackground));
			model.append('file', backgroundImage);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Backgrounds/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('backgroundAddSuccess'),"success"); 
					 $uibModalInstance.dismiss('cancel');
					 callBackFunction();
				},
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
				}
            );
        }
        
        vm.LoadUploadImage = function() {
			$("#backgroundImage").click();
		}
		var backgroundImage; 
		$scope.AddbackgroundImage = function(element) {
			var imageFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (imageFile && imageFile.size >= 0 && ((imageFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(imageFile.type) !== -1) {
					$scope.newbackgroundForm.$dirty=true;
					$scope.$apply(function() {
						
						backgroundImage= imageFile;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.backgroundImage= reader.result;
							
							$scope.$apply();
						};
						if (imageFile) {
							reader.readAsDataURL(imageFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (imageFile) {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}
	}	
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('branchController', ['$scope','$stateParams','$translate', 'appCONSTANTS','$uibModal', 'BranchResource','ActivateBranchResource','DeactivateBranchResource','branchsPrepService','ToastService',  branchController])

    function branchController($scope,$stateParams ,$translate , appCONSTANTS,$uibModal, BranchResource,ActivateBranchResource,DeactivateBranchResource,branchsPrepService,ToastService){

        var vm = this;
		vm.branches = branchsPrepService;
		vm.Now = $scope.getCurrentTime();
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[5].children[0]).addClass("active")
		
		function refreshBranches(){
			var k = BranchResource.getAllBranches({ page:vm.currentPage }).$promise.then(function(results) {
				vm.Now = $scope.getCurrentTime();	
				vm.branches = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshBranches();
		}
		vm.openBranchDialog = function(){		
			if($scope.selectedLanguage != appCONSTANTS.defaultLanguage)
			{
				var englishBranches;
				var k = BranchResource.getAllBranches({pagesize:0, lang: appCONSTANTS.defaultLanguage}).$promise.then(function(results) {
					englishBranches = results;
					var modalContent = $uibModal.open({
						templateUrl: './app/RestaurantAdmin/templates/editBranch.html',
						controller: 'editBranchDialogController',
						controllerAs: 'editBranchDlCtrl',
						resolve:{
							mode:function(){return "map"},
							englishBranches: function(){return englishBranches.results;},
							branch:function(){ return null},
							callBackFunction:function(){return refreshBranches;}
						}
						
					});
				});
			}
			else{
				var modalContent = $uibModal.open({
					templateUrl: './app/RestaurantAdmin/templates/newBranch.html',
					controller: 'branchDialogController',
					controllerAs: 'branchDlCtrl',
					resolve:{
						callBackFunction:function(){return refreshBranches;}
					}
					
				});
			}
		}
		function confirmationDelete(itemId){
			BranchResource.deleteBranch({branchId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('CategoryDeleteSuccess'),"success");
				refreshBranches();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.openDeleteBranchDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}
				
			});
		}
		
		vm.openEditBranchDialog = function(index){
			var modalContent = $uibModal.open({
				templateUrl: './app/RestaurantAdmin/templates/editBranch.html',
				controller: 'editBranchDialogController',
				controllerAs: 'editBranchDlCtrl',
				resolve:{
					mode:function(){return "edit"},
					englishBranches: function(){return null;},
					branch:function(){ return vm.branches.results[index]},
					callBackFunction:function(){return refreshBranches;}
				}
				
			});
			
		}
		vm.Activate = function(branch){
			ActivateBranchResource.Activate({branchId:branch.branchId})
			.$promise.then(function(result){
				branch.isActive = true;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}

		vm.Deactivate = function(branch){
			DeactivateBranchResource.Deactivate({branchId:branch.branchId})
			.$promise.then(function(result){
				branch.isActive = false;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}		
		
		
		
	}
	
}
    ());
(function() {
    angular
      .module('home')
      .factory('BranchResource', ['$resource', 'appCONSTANTS', BranchResource])
      .factory('ActivateBranchResource', ['$resource', 'appCONSTANTS', ActivateBranchResource])
      .factory('DeactivateBranchResource', ['$resource', 'appCONSTANTS', DeactivateBranchResource]);
  
    function BranchResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Branches/:branchId', {}, {
        getAllBranches: { method: 'GET', useToken: true, params:{lang:'@lang'} },
        getBranch: { method: 'GET', useToken: true },
        create: { method: 'POST', useToken: true },
        deleteBranch: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }
    function ActivateBranchResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Branches/:branchId/Activate', {}, {
          Activate: { method: 'GET', useToken: true}
        })
    }
    function DeactivateBranchResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Branches/:branchId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }
}());
  (function () {
    'use strict';
	
    angular
        .module('home')
        .controller('branchDialogController', ['$scope','$state','appCONSTANTS','$http','$translate' , 'BranchResource','ToastService','$rootScope',  branchDialogController])

	function branchDialogController($scope, $state , appCONSTANTS,$http, $translate , BranchResource,ToastService,$rootScope){
		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        
		vm.close = function(){
            $state.go('branch');            
		}
		vm.isChanged = false;
		vm.AddNewBranch = function(){
			vm.isChanged = true;
            var newBranch = new BranchResource();
            newBranch.branchTitleDictionary = vm.branchTitleDictionary;
            newBranch.branchAddressDictionary = vm.branchAddressDictionary;
            newBranch.$create().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('BranchAddSuccess'),"success");
					 vm.isChanged = false;                     
                     $state.go('branch');                     
                },
                function(data, status) {
                    vm.isChanged = false;                     
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
        }
        
	}	
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editBranchDialogController', ['$scope','$state','$http','$translate','appCONSTANTS', 'BranchResource','ToastService','branchPrepService',  editBranchDialogController])

	function editBranchDialogController($scope, $state ,$http, $translate,appCONSTANTS, BranchResource,ToastService, branchPrepService,callBackFunction){
		var vm = this;
		vm.categoryName = "";
		vm.language = appCONSTANTS.supportedLanguage;
		
		vm.branch = branchPrepService;
		
		vm.close = function(){
			$state.go('branch');
		}
		
		vm.updateBranch = function(){
            var updateBranch = new BranchResource();
            updateBranch.branchTitleDictionary = vm.branch.branchTitleDictionary;
            updateBranch.branchAddressDictionary = vm.branch.branchAddressDictionary;
			updateBranch.branchId = vm.branch.branchId;
			
			updateBranch.$update().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('BranchUpdateSuccess'),"success");
					 vm.isChanged = false;                     
					 $state.go('branch');
                },
                function(data, status) {
                    vm.isChanged = false;                     
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
            
        }
        
	}	
})();
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('categoryController', ['$scope','$stateParams','$translate', 'appCONSTANTS','$uibModal','GetCategoriesResource', 'CategoryResource','ActivateCategoryResource','DeactivateCategoryResource','categoriesPrepService','ToastService',  categoryController])

    function categoryController($scope,$stateParams ,$translate , appCONSTANTS,$uibModal,GetCategoriesResource, CategoryResource,ActivateCategoryResource,DeactivateCategoryResource,categoriesPrepService,ToastService){

        var vm = this;
		vm.categories = categoriesPrepService;
		vm.Now = $scope.getCurrentTime();
		$('.pmd-sidebar-nav>li>a').removeClass("active") 
		
		function refreshCategories(){
			var k = GetCategoriesResource.getAllCategories({ MenuId: $stateParams.menuId,page:vm.currentPage }).$promise.then(function(results) {
				vm.Now = $scope.getCurrentTime();	
				vm.categories = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshCategories();
		}
		vm.openCategoryDialog = function(){		
			if($scope.selectedLanguage != appCONSTANTS.defaultLanguage)
			{
				var englishCategories;
				var k = GetCategoriesResource.getAllCategories({ MenuId: $stateParams.menuId,pagesize:0, lang: appCONSTANTS.defaultLanguage}).$promise.then(function(results) {
					englishCategories = results;
					var modalContent = $uibModal.open({
						templateUrl: './app/RestaurantAdmin/templates/editCategory.html',
						controller: 'editCategoryDialogController',
						controllerAs: 'editCategoryDlCtrl',
						resolve:{
							mode:function(){return "map"},
							englishCategories: function(){return englishCategories.results;},
							category:function(){ return null},
							callBackFunction:function(){return refreshCategories;}
						}
						
					});
				});
			}
			else{
				var modalContent = $uibModal.open({
					templateUrl: './app/RestaurantAdmin/templates/newCategory.html',
					controller: 'categoryDialogController',
					controllerAs: 'categoryDlCtrl',
					resolve:{
                        menuId: function(){ return $stateParams.menuId;},
						callBackFunction:function(){return refreshCategories;}
					}
					
				});
			}
		}
		function confirmationDelete(itemId){
			CategoryResource.deleteCategory({categoryId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('CategoryDeleteSuccess'),"success");
				refreshCategories();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.openDeleteCategoryDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}
				
			});
		}
		
		vm.openEditCategoryDialog = function(index){
			var modalContent = $uibModal.open({
				templateUrl: './app/RestaurantAdmin/templates/editCategory.html',
				controller: 'editCategoryDialogController',
				controllerAs: 'editCategoryDlCtrl',
				resolve:{
					mode:function(){return "edit"},
					englishCategories: function(){return null;},
					category:function(){ return vm.categories.results[index]},
					callBackFunction:function(){return refreshCategories;}
				}
				
			});
			
		}
		vm.Activate = function(category){
			ActivateCategoryResource.Activate({categoryId:category.categoryId})
			.$promise.then(function(result){
				category.isActive = true;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}

		vm.Deactivate = function(category){
			DeactivateCategoryResource.Deactivate({categoryId:category.categoryId})
			.$promise.then(function(result){
				category.isActive = false;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}		
		
		
		
	}
	
}
    ());
(function() {
    angular
      .module('home')
      .factory('CategoryResource', ['$resource', 'appCONSTANTS', CategoryResource])
      .factory('GetCategoriesResource', ['$resource', 'appCONSTANTS', GetCategoriesResource])
      .factory('GetCategoriesNameResource', ['$resource', 'appCONSTANTS', GetCategoriesNameResource])
      .factory('ActivateCategoryResource', ['$resource', 'appCONSTANTS', ActivateCategoryResource])
      .factory('DeactivateCategoryResource', ['$resource', 'appCONSTANTS', DeactivateCategoryResource]);
  
    function CategoryResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Categories/:categoryId', {}, {
        getCategory: { method: 'GET', useToken: true },
        create: { method: 'POST', useToken: true },
        deleteCategory: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }
    function GetCategoriesResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Menus/:MenuId/Categories', {}, {
          getAllCategories: { method: 'GET', useToken: true, params:{lang:'@lang'} }
        })
    }
    
    function GetCategoriesNameResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Menus/:MenuId/Categories/Name', {}, {
        getAllCategoriesName: { method: 'GET', useToken: true, params:{lang:'@lang'},isArray: true }
      })
  }

    function ActivateCategoryResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Categories/:categoryId/Activate', {}, {
          Activate: { method: 'GET', useToken: true}
        })
    }
    function DeactivateCategoryResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Categories/:categoryId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }
}());
  (function () {
    'use strict';
	
    angular
        .module('home')
        .controller('categoryDialogController', ['$scope','$state','$stateParams','$http','$translate','appCONSTANTS' , 'CategoryResource','ToastService','$rootScope',  categoryDialogController])

	function categoryDialogController($scope, $state,$stateParams ,$http, $translate,appCONSTANTS , CategoryResource,ToastService,$rootScope){
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Category', {menuId: $stateParams.menuId});
		}
		vm.isChanged = false;
		vm.AddNewCategory = function(){
			vm.isChanged = true;
            var newCategroy = new Object();
            newCategroy.categoryNameDictionary = vm.categoryNameDictionary;
            newCategroy.menuId = $stateParams.menuId;

			var model = new FormData();
			model.append('data', JSON.stringify(newCategroy));
			model.append('file', categoryImage);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Categories/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('CategoryAddSuccess'),"success"); 
					 vm.isChanged = false;
					 $state.go('Category', {menuId: $stateParams.menuId});
				},
				function(data, status) {
					vm.isChanged = false;
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
				}
            );
        }
        
        vm.LoadUploadImage = function() {
			$("#categoryImage").click();
		}
		var categoryImage; 
		$scope.AddCategoryImage = function(element) {
			var imageFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (imageFile && imageFile.size >= 0 && ((imageFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(imageFile.type) !== -1) {
					$scope.newCategoryForm.$dirty=true;
					$scope.$apply(function() {
						
						categoryImage= imageFile;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.categoryImage= reader.result; 
							$scope.$apply();
						};
						if (imageFile) {
							reader.readAsDataURL(imageFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (imageFile) {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}
	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editCategoryDialogController', ['$scope','$state','$stateParams','$http','$translate','appCONSTANTS','ToastService','categoryPrepService',  editCategoryDialogController])

	function editCategoryDialogController($scope, $state , $stateParams,$http, $translate,appCONSTANTS,ToastService,  categoryPrepService){
		var vm = this;

				vm.language = appCONSTANTS.supportedLanguage;
		vm.category = categoryPrepService;
		vm.close = function(){
			$state.go('Category', {menuId: $stateParams.menuId});
		}

				vm.updateCategory = function(){
            var updateCategory = new Object();
            updateCategory.categoryNameDictionary = vm.category.categoryNameDictionary;
			updateCategory.isImageChange = isImageChange;
			updateCategory.categoryId = vm.category.categoryId;
			updateCategory.menuId = vm.category.menuId;


							var model = new FormData();
			model.append('data', JSON.stringify(updateCategory));
			model.append('file', categoryImage);
			$http({
				method: 'PUT',
				url: appCONSTANTS.API_URL + 'Categories/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('CategoryupdateSuccess'),"success");
                    $state.go('Category', {menuId: $stateParams.menuId});
				},
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
				}
            );

                    }
        vm.LoadUploadImage = function() {
			$("#categoryImage").click();
		}
        var categoryImage; 
        var isImageChange = false;
		$scope.AddCategoryImage = function(element) {
			var imageFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (imageFile && imageFile.size >= 0 && ((imageFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(imageFile.type) !== -1) {
					$scope.editCategoryForm.$dirty=true;
					$scope.$apply(function() {

						                        categoryImage= imageFile;
                        isImageChange = true;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.category.imageURL= reader.result;
							$scope.$apply();
						};
						if (imageFile) {
							reader.readAsDataURL(imageFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (imageFile) {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}
	}	
})();
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('CategoryTemplateController', ['$scope','$translate', '$stateParams', 'appCONSTANTS','$uibModal','allMenuPrepService','templatesPrepService','ToastService' ,'GetCategoriesNameResource','CategoryTemplateResource' ,  CategoryTemplateController])

    function CategoryTemplateController($scope,$translate,$stateParams, appCONSTANTS,$uibModal, allMenuPrepService, templatesPrepService, ToastService, GetCategoriesNameResource, CategoryTemplateResource){
        var vm = this;
        vm.menus = allMenuPrepService;
        vm.templates = templatesPrepService;
        vm.selectedTemplateId= 0;
        vm.selectedMenu = vm.menus[0];
        vm.selectedTemplates = [];
        vm.page=1;

                var totalItemsCount = 0;
        vm.isCategoryTemplateReady = false;
		$('.pmd-sidebar-nav>li>a').removeClass("active")	
		$($('.pmd-sidebar-nav').children()[4].children[0]).addClass("active")
        function loadCategory(){
            if(vm.selectedMenu != null){

                            GetCategoriesNameResource.getAllCategoriesName({ MenuId: vm.selectedMenu.menuId })
            .$promise.then(function(results) {
                vm.categories = results;                
                vm.selectedTemplates = [];
                vm.page=1;
                totalItemsCount = 0;
                vm.selectedCategory = vm.categories[0];
                vm.selectedTemplateId= 0;
                vm.remainingItems = vm.selectedCategory.itemCount;
                if(vm.selectedCategory.itemCount <= totalItemsCount){
                    vm.isCategoryTemplateReady = true;
                }
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
            }
        }
        loadCategory();
        vm.changeMenu = function(){
            loadCategory();
        }

        vm.changeCategory = function(){
            vm.selectedTemplates = [];
            vm.page=1;
            totalItemsCount = 0;
            vm.selectedTemplateId= 0;        
            vm.remainingItems = vm.selectedCategory.itemCount;
            vm.isCategoryTemplateReady = false;

                    }


        vm.selectTemplate = function(){
            vm.templates.forEach(function(element) {
                if(element.id == vm.selectedTemplateId){
                    var temp = angular.copy(element);
                    temp.page = vm.page;
                    vm.selectedTemplates.push(temp);
                    vm.selectedTemplateId = 0;
                    vm.page++;
                    totalItemsCount += temp.itemCount;
                    if(vm.selectedCategory.itemCount <= totalItemsCount){
                        vm.isCategoryTemplateReady = true;
                    }
                    vm.remainingItems = vm.selectedCategory.itemCount - totalItemsCount;
                    vm.remainingItems  = vm.remainingItems < 0 ? 0 : vm.remainingItems ;
                }
            }, this);
            console.log(vm.selectedTemplates)
        }

        vm.save = function(){
            var newCategroyTemplate = new CategoryTemplateResource();
            var categoryTemplates = []
            vm.selectedTemplates.forEach(function(element) {
                categoryTemplates.push({categoryId:vm.selectedCategory.categoryId,templateId:element.id,pageNumber:element.page})
            }, this);
            newCategroyTemplate.PageModels = categoryTemplates;
            newCategroyTemplate.$create({ categoryId: vm.selectedCategory.categoryId }).then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('TemplateUpdateSuccessfuly'),"success");
                },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
        }


    }

	}
());(function() {
    angular
      .module('home')
      .factory('TemplateResource', ['$resource', 'appCONSTANTS', TemplateResource])
      .factory('CategoryTemplateResource', ['$resource', 'appCONSTANTS', CategoryTemplateResource]);

      function TemplateResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Templates/', {}, {
        getTemplates: { method: 'GET', useToken: true,isArray: true }
      })
    }

    function CategoryTemplateResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Categories/:categoryId/Template', {}, {
        create: { method: 'POST', useToken: true }
      })
    }

}());
  (function () {
    'use strict';
	
    angular
        .module('home')
        .controller('itemOrderController', ['$scope','$stateParams','$translate', 'appCONSTANTS','$uibModal' ,'allMenuPrepService','GetCategoriesNameResource','GetItemsResource','ToastService','ItemOrderResource','UpdateItemOrderResource',  itemOrderController])

    function itemOrderController($scope,$stateParams ,$translate , appCONSTANTS,$uibModal ,allMenuPrepService,GetCategoriesNameResource,GetItemsResource,ToastService,ItemOrderResource,UpdateItemOrderResource){
		var vm = this;

	
		
        vm.menus = allMenuPrepService;
		vm.selectedMenu = vm.menus[0];
		vm.categoryItems = [];
		vm.sortingLog = [];
		vm.sortingLogId = [];
		vm.isChanged = true;
		$('.pmd-sidebar-nav>li>a').removeClass("active")	
		$($('.pmd-sidebar-nav').children()[6].children[0]).addClass("active")
        function loadCategory(){
            if(vm.selectedMenu != null){
                
            GetCategoriesNameResource.getAllCategoriesName({ MenuId: vm.selectedMenu.menuId })
            .$promise.then(function(results) {
                vm.categories = results;                
                vm.selectedTemplates = [];
                vm.page=1; 
                vm.selectedCategory = vm.categories[0];
				vm.selectedTemplateId= 0;
				
				vm.changeCategory();
              
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
            }
        }
        loadCategory();
        vm.changeMenu = function(){
            loadCategory();
        }

        vm.changeCategory = function(){ 
			vm.page=1;     
			vm.isChanged = true;
			ItemOrderResource.getAllItemOrder({ categoryId: vm.selectedCategory.categoryId})
            .$promise.then(function(results) {
				vm.categoryItems = results.templates; 
				console.log(vm.categoryItems);               
                vm.selectedTemplates = [];
                vm.page=1; 
                vm.selectedTemplateId= 0;
				vm.isChanged = false;  
				asd()
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
            
        }		
		
		vm.sortableOptions = {
			placeholder: "app",
			connectWith: ".apps-container"
		  };
		  

		  vm.Save = function(){
			vm.isChanged = true;			
			  console.log(vm.categoryItems);
			  var itemOrder = [];
			  var count = 1;
			  vm.categoryItems.forEach(function(element) {
				  element.itemModels.forEach(function(item) {
					itemOrder.push({itemId: item.itemID,orderNumber:count});
					count++;
				  }, this);
			  }, this);
			  var itemOrderResource = new UpdateItemOrderResource();
			  itemOrderResource.itemNames = itemOrder;
			  itemOrderResource.$updateOrder().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('OrderItemUpdateSuccess'),"success");
					 vm.isChanged = false;                     
					 
                },
                function(data, status) {
                    vm.isChanged = false;                     
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
		  }

		  vm.error = false;
		  function asd(){
			vm.categoryItems.forEach(function(element) {
				$scope.$watch(function () { return element.itemModels.length  },function(newVal,oldVal){
					vm.error = false;
					vm.categoryItems.forEach(function(element) {
						if(element.itemModels.length > element.itemCount){
							vm.error =true;
							return false;
						}
						else
						{
							if(!vm.error)
							vm.error = false;		
						}
					}, this);
				 })
			
			}, this);
		  }
		  vm.isValid = function(){
			vm.categoryItems.forEach(function(element) {
				if(element.itemModels.length > element.itemCount){
					vm.error =true;
					return false;
				}
				else
				{
					vm.error = false;		
				}
			}, this);
			vm.error = false;
			return false;
		  }
	}
	
}
    ());
(function() {
    angular
      .module('home')
      .factory('ItemOrderResource', ['$resource', 'appCONSTANTS', ItemOrderResource])
      .factory('UpdateItemOrderResource', ['$resource', 'appCONSTANTS', UpdateItemOrderResource])  

      function ItemOrderResource($resource, appCONSTANTS) {  
              return $resource(appCONSTANTS.API_URL + 'Categories/:categoryId/Items/Templates', {}, { 
                getAllItemOrder: { method: 'GET', useToken: true }
        })
    }

    function UpdateItemOrderResource($resource, appCONSTANTS) {  
        return $resource(appCONSTANTS.API_URL + 'Items/Order', {}, { 
          updateOrder: { method: 'PUT', useToken: true,isArray: true }
  })
}
   
}());
  (function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editItemController', ['$scope','$http','$translate' ,'$stateParams' ,'appCONSTANTS', '$state', 'ItemResource','ToastService', 'itemPrepService','ItemSizePrepService',  'ItemSideItemPrepService', editItemController])

	function editItemController($scope,$http,$translate ,$stateParams ,appCONSTANTS, $state, ItemResource,ToastService, itemPrepService, ItemSizePrepService, ItemSideItemPrepService){
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.item = itemPrepService;		
		vm.item.imageURL3 = vm.item.imageURL +"?type=orignal3&date="+ $scope.getCurrentTime();
		vm.item.imageURL2 = vm.item.imageURL +"?type=orignal2&date="+ $scope.getCurrentTime();
		vm.item.imageURL = vm.item.imageURL +"?date="+ $scope.getCurrentTime();
		vm.Sizes = ItemSizePrepService.results;
        vm.SideItems = ItemSideItemPrepService.results;
		vm.SelectedSizeId=[];
		vm.SelectedSize = [];
        vm.SelectedSideItems=[];
        vm.hasSize = itemPrepService.sizes.length>0;
		vm.hasSideItem = itemPrepService.sideItems.length>0;
		vm.maxSideItemValueError = false;
        itemPrepService.sizes.forEach(function(element) {
			var kk = vm.Sizes.filter(function(item){
				return (item.sizeId ===  element.sizeId);
			  })[0];
			  if(kk != null)
				kk.price = element.price;
		
			vm.SelectedSizeId.push(element.sizeId)
			vm.SelectedSize.push(element)
        }, this);
        itemPrepService.sideItems.forEach(function(element) {
            vm.SelectedSideItems.push(element.sideItemId.toString())
        }, this);
		vm.close = function(){
			$state.go('Items', {categoryId: $stateParams.categoryId});
		}
		vm.sizeChange = function(){
			vm.SelectedSize = []
			for(var i=0;i<vm.SelectedSizeId.length;i++){
				var size = vm.Sizes.filter(function(item){
					return (item.sizeId ===  vm.SelectedSizeId[i]);
				})[0]
				if(size.price == undefined)
					size.price = 0;
				vm.SelectedSize.push(size)  
			}
		}
		vm.updateItem = function(){
			var updatedItem = new Object();
            updatedItem.itemNameDictionary = vm.item.itemNameDictionary;
			updatedItem.itemDescriptionDictionary = vm.item.itemDescriptionDictionary;
			updatedItem.categoryId = $stateParams.categoryId;
			
			updatedItem.sizes = [];
			
         	   vm.SelectedSize.forEach(function(element) {
                updatedItem.sizes.push(element);
				}, this);
			
			updatedItem.sideItems = [];
			if(vm.hasSideItem){
         	   vm.SelectedSideItems.forEach(function(element) {
                updatedItem.sideItems.push({sideItemId:element});
				}, this);
				updatedItem.maxSideItemValue = vm.item.maxSideItemValue;
			}
			updatedItem.itemID = vm.item.itemID;
			updatedItem.isImageChange = isItemImageChange;
			updatedItem.isImage2Change = isItemImage2Change;
			updatedItem.isImage3Change = isItemImage3Change;

			var model = new FormData();
			model.append('data', JSON.stringify(updatedItem));
			model.append('file', itemImage);
			model.append('file2', itemImage2);
			model.append('file3', itemImage3);
			$http({
				method: 'put',
				url: appCONSTANTS.API_URL + 'Items/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('ItemUpdateSuccess'),"success");
					$state.go('Items', {categoryId: $stateParams.categoryId});
				},
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
				}
			);
		}
		vm.LoadUploadLogo = function() {
			$("#itemImage").click();
		}
		var itemImage; 
		var isItemImageChange = false;
		$scope.AddItemImage = function(element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newItemForm.$dirty=true;
					$scope.$apply(function() {
						
						itemImage = logoFile;
						isItemImageChange = true;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.item.imageURL= reader.result;
							
							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (logoFile) {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}

		vm.LoadUploadLogo2 = function() {
			$("#itemImage2").click();
		}
		var itemImage2; 
		var isItemImage2Change = false;
		$scope.AddItemImage2 = function(element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newItemForm.$dirty=true;
					$scope.$apply(function() {
						
						itemImage2 = logoFile;
						isItemImage2Change = true;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.item.imageURL2= reader.result;
							
							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage2").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (logoFile) {
					$("#logoImage2").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}
		

		vm.LoadUploadLogo3 = function() {
			$("#itemImage3").click();
		}
		var itemImage3; 
		var isItemImage3Change = false;
		$scope.AddItemImage3 = function(element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newItemForm.$dirty=true;
					$scope.$apply(function() {
						
						itemImage3 = logoFile;
						isItemImage3Change = true;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.item.imageURL3= reader.result;
							
							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage3").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (logoFile) {
					$("#logoImage3").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}

		vm.CheckMaxSideItemValue = function(){
			if(vm.hasSideItem){
				var totalValues = 0;
				
				var minValues =99999;
         	   vm.SelectedSideItems.forEach(function(element) {
				var side ;	
				vm.SideItems.forEach(function(item) {
						if(item.sideItemId == element){
							side = item;
				
						}							
					},this);
					
					if(side.value < minValues)
						minValues = side.value;
					totalValues += side.value;
				}, this);		
				if(vm.item.maxSideItemValue>totalValues || vm.item.maxSideItemValue<minValues){
					vm.maxSideItemValueError = true;
				}
				else
					vm.maxSideItemValueError = false;
			}
		}
		vm.CheckMaxSideItemValue();


	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('ItemController', ['$scope','$translate', '$stateParams', 'appCONSTANTS','$uibModal', 'GetItemsResource', 'ItemResource','itemsPrepService','ToastService' ,'ActivateItemResource' ,'DeactivateItemResource',  ItemController])

    function ItemController($scope,$translate,$stateParams, appCONSTANTS,$uibModal, GetItemsResource,ItemResource,itemsPrepService,ToastService, ActivateItemResource, DeactivateItemResource){

		        var vm = this;
		vm.items = itemsPrepService;

		        vm.Now = $scope.getCurrentTime();		
		function refreshItems(){
			var k = GetItemsResource.getAllItems({ CategoryId: $stateParams.categoryId, page:vm.currentPage}).$promise.then(function(results) {
				vm.items = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshItems();
		}


						function confirmationDelete(itemId){
			ItemResource.deleteItem({itemId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('itemDeleteSuccess'),"success");
				refreshItems();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
		}
		vm.openDeleteItemDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}

							});
		}

				vm.Activate = function(item){
			ActivateItemResource.Activate({itemId:item.itemID})
			.$promise.then(function(result){
				item.isActive = true;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}

		vm.Deactivate = function(item){
			DeactivateItemResource.Deactivate({itemId:item.itemID})
			.$promise.then(function(result){
				item.isActive = false;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}

			}

	}
());
(function() {
    angular
      .module('home')
      .factory('ItemResource', ['$resource', 'appCONSTANTS', ItemResource])
      .factory('GetItemsResource', ['$resource', 'appCONSTANTS', GetItemsResource])
      .factory('GetItemNamesResource', ['$resource', 'appCONSTANTS', GetItemNamesResource])
      .factory('TranslateItemResource', ['$resource', 'appCONSTANTS', TranslateItemResource])
      .factory('ActivateItemResource', ['$resource', 'appCONSTANTS', ActivateItemResource])
      .factory('DeactivateItemResource', ['$resource', 'appCONSTANTS', DeactivateItemResource]);

      function ItemResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Items/:itemId', {}, {
        create: { method: 'POST', useToken: true },
        getItem: { method: 'GET', useToken: true },
        deleteItem: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }
    function GetItemsResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Categories/:CategoryId/Items', {}, {
          getAllItems: { method: 'GET', useToken: true, params:{lang:'@lang'} },
        })
    }

    function GetItemNamesResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Categories/:CategoryId/Items/Name', {}, {
        getAllItemNames: { method: 'GET', useToken: true, isArray: true, params:{lang:'@lang'} },
      })
    }

        function TranslateItemResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Items/Translate', {}, {
        translateItem: { method: 'PUT', useToken: true},
      })
    }

    function ActivateItemResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Items/:itemId/Activate', {}, {
          Activate: { method: 'GET', useToken: true}
        })
    }
    function DeactivateItemResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Items/:itemId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }
}());
  (function () {
    'use strict';
	
    angular
        .module('home')
        .controller('newItemController', ['$scope','$translate','$http','$stateParams', 'appCONSTANTS' ,'$state','ToastService' ,'TranslateItemResource' , 'ItemSizePrepService' ,'ItemSideItemPrepService', 'defaultItemsPrepService',  newItemController])

	function newItemController($scope,$translate,$http ,$stateParams, appCONSTANTS, $state,ToastService, TranslateItemResource, ItemSizePrepService,ItemSideItemPrepService ,defaultItemsPrepService){
		var vm = this;
		
		vm.language = appCONSTANTS.supportedLanguage;
		
        vm.Sizes = ItemSizePrepService.results;
        vm.SideItems = ItemSideItemPrepService.results;
        vm.SelectedSize = [];
		vm.SelectedSideItems = [];		
		vm.hasSize = false;
		vm.hasSideItem = false;
		vm.maxSideItemValueError = false;
		vm.close = function(){
			$state.go('Items', {categoryId: $stateParams.categoryId});
		}
		
		vm.isChanged = false;
		
		vm.addNewItem = function(){
			vm.isChanged = true;
			
			var newItem = new Object();
            newItem.itemNameDictionary = vm.itemNameDictionary;
			newItem.itemDescriptionDictionary = vm.itemDescriptionDictionary;
			newItem.categoryId = $stateParams.categoryId;
			
			newItem.sizes = [];
			
         	vm.SelectedSize.forEach(function(element) {
            	newItem.sizes.push(element);
			}, this);
			
			newItem.sideItems = [];
			if(vm.hasSideItem){
         	   vm.SelectedSideItems.forEach(function(element) {
         	       newItem.sideItems.push({sideItemId:element});
				}, this);
			newItem.maxSideItemValue = vm.maxSideItemValue;			
			}
			
			var model = new FormData();
			model.append('data', JSON.stringify(newItem));
			model.append('file', itemImage);
			model.append('file', itemImage2);
			model.append('file', itemImage3);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Items/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('itemAddSuccess'),"success");
					$state.go('Items', {categoryId: $stateParams.categoryId});
					vm.isChanged = false;
					
				},
				function(data, status) {
					vm.isChanged = false;					
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
				}
			);

		}
		function updateItem(){
			var updatedItem = new TranslateItemResource();
            updatedItem.itemName = vm.itemName;
			updatedItem.itemDescription = vm.itemDescription;
			updatedItem.categoryId = $stateParams.categoryId;
			updatedItem.itemID = vm.selectedItem.itemId;
            updatedItem.$translateItem().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('ItemUpdateSuccess'),"success");
					$state.go('Items', {categoryId: $stateParams.categoryId});
                },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
		}

		vm.LoadUploadLogo = function() {
			$("#itemImage").click();
		}
		var itemImage; 
		$scope.AddItemImage = function(element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newItemForm.$dirty=true;
					$scope.$apply(function() {
						
						itemImage= logoFile;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.itemImage= reader.result;
							
							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (logoFile) {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}

		vm.LoadUploadLogo2 = function() {
			$("#itemImage2").click();
		}
		var itemImage2; 
		$scope.AddItemImage2 = function(element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newItemForm.$dirty=true;
					$scope.$apply(function() {
						
						itemImage2= logoFile;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.itemImage2= reader.result;
							
							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage2").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (logoFile) {
					$("#logoImage2").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}

		vm.LoadUploadLogo3 = function() {
			$("#itemImage3").click();
		}
		var itemImage3; 
		$scope.AddItemImage3 = function(element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newItemForm.$dirty=true;
					$scope.$apply(function() {
						
						itemImage3= logoFile;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.itemImage3= reader.result;
							
							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage3").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (logoFile) {
					$("#logoImage3").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}

		vm.CheckMaxSideItemValue = function(){
			if(vm.hasSideItem){
				var totalValues = 0;
				
				var minValues =99999;
         	   vm.SelectedSideItems.forEach(function(element) {
				var side ;	
				vm.SideItems.forEach(function(item) {
						if(item.sideItemId == element){
							side = item;
							
						}							
					},this);
					
					if(side.value < minValues)
						minValues = side.value;
					totalValues += side.value;
				}, this);		
				if(vm.maxSideItemValue>totalValues || vm.maxSideItemValue<minValues){
					vm.maxSideItemValueError = true;
				}
				else
					vm.maxSideItemValueError = false;
			}
		}
	}	
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('menuController', ['$scope','$translate', 'appCONSTANTS','$uibModal', 'MenuResource','menusPrepService','RestaurantIsReadyPrepService','ToastService','ActivateMenuResource','DeactivateMenuResource','PublishRestaurantResource',  menuController])

    function menuController($scope ,$translate , appCONSTANTS,$uibModal, MenuResource,menusPrepService,RestaurantIsReadyPrepService,ToastService,ActivateMenuResource,DeactivateMenuResource,PublishRestaurantResource){

        var vm = this;
		vm.menus = menusPrepService;
		vm.RestaurantIsReady = RestaurantIsReadyPrepService.isReady;
		vm.Now = $scope.getCurrentTime();
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[0].children[0]).addClass("active")
		
		function refreshMenu(){
			var k = MenuResource.getAllMenus({page:vm.currentPage}).$promise.then(function(results) {
				vm.Now = $scope.getCurrentTime();	
				vm.menus = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshMenu();
		}
		vm.openMenuDialog = function(){		
			if($scope.selectedLanguage != appCONSTANTS.defaultLanguage)
			{
				var englishMenus;
				var k = MenuResource.getAllMenus({pagesize:0, lang: appCONSTANTS.defaultLanguage}).$promise.then(function(results) {
					englishMenus = results;
					var modalContent = $uibModal.open({
						templateUrl: './app/RestaurantAdmin/templates/editMenu.html',
						controller: 'editMenuDialogController',
						controllerAs: 'editMenuDlCtrl',
						resolve:{
							mode:function(){return "map"},
							englishMenus: function(){return englishMenus.results;},
							menu:function(){ return null},
							callBackFunction:function(){return refreshMenu;}
						}
						
					});
				});
			}
			else{
				var modalContent = $uibModal.open({
					templateUrl: './app/RestaurantAdmin/templates/newMenu.html',
					controller: 'menuDialogController',
					controllerAs: 'menuDlCtrl',
					resolve:{
						callBackFunction:function(){return refreshMenu;}
					}
					
				});
			}
		}
		function confirmationDelete(itemId){
			MenuResource.deleteMenu({menuId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('menuDeleteSuccess'),"success");
				refreshMenu();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.openDeleteMenuDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}
				
			});
		}
		
		vm.openEditMenuDialog = function(index){
			var modalContent = $uibModal.open({
				templateUrl: './app/RestaurantAdmin/templates/editMenu.html',
				controller: 'editMenuDialogController',
				controllerAs: 'editMenuDlCtrl',
				resolve:{
					mode:function(){return "edit"},
					englishMenus: function(){return null;},
					menu:function(){ return vm.menus.results[index]},
					callBackFunction:function(){return refreshMenu;}
				}
				
			});
			
		}
		
		vm.Activate = function(menu){
			ActivateMenuResource.Activate({MenuId:menu.menuId})
			.$promise.then(function(result){
				menu.isActive = true;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}

		vm.Deactivate = function(menu){
			DeactivateMenuResource.Deactivate({MenuId:menu.menuId})
			.$promise.then(function(result){
				menu.isActive = false;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}
		vm.Publish = function(){
			PublishRestaurantResource.Publish()
			.$promise.then(function(result){
				vm.RestaurantIsReady = true;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}
		
		
	}
	
}
    ());
(function() {
    angular
      .module('home')
      .factory('MenuResource', ['$resource', 'appCONSTANTS', MenuResource])
      .factory('ActivatedMenuResource', ['$resource', 'appCONSTANTS', ActivatedMenuResource])
      .factory('ActivateMenuResource', ['$resource', 'appCONSTANTS', ActivateMenuResource])
      .factory('DeactivateMenuResource', ['$resource', 'appCONSTANTS', DeactivateMenuResource])
      .factory('CheckRestaurantReadyResource', ['$resource', 'appCONSTANTS', CheckRestaurantReadyResource])
      .factory('PublishRestaurantResource', ['$resource', 'appCONSTANTS', PublishRestaurantResource]);
  
    function MenuResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Menus/:menuId', {}, {
        getAllMenus: { method: 'GET', useToken: true, params:{lang:'@lang'} },
        getMenu: { method: 'GET', useToken: true, },
        create: { method: 'POST', useToken: true },
        deleteMenu: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }
    function ActivateMenuResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Menus/:MenuId/Activate', {}, {
        Activate: { method: 'GET', useToken: true}
      })
    }
    function DeactivateMenuResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Menus/:MenuId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }
    
    function CheckRestaurantReadyResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Restaurants/IsReady', {}, {
        IsReady: { method: 'GET', useToken: true }
      })
    }
    function PublishRestaurantResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Restaurants/Publish', {}, {
        Publish: { method: 'GET', useToken: true }
      })
    }

    function ActivatedMenuResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Menus/Name', {}, {
        getAllMenusName: { method: 'GET', useToken: true, params:{lang:'@lang'},isArray:true }
      })
    }

}());
  (function () {
    'use strict';

	    angular
        .module('home')
        .controller('editMenuDialogController', ['$scope','$http', '$state','appCONSTANTS','$translate', 'MenuResource','ToastService','menuPrepService',  editMenuDialogController])

	function editMenuDialogController($scope,$http, $state , appCONSTANTS, $translate, MenuResource,ToastService, menuPrepService){
		var vm = this;
		vm.menuName = "";
		vm.language = appCONSTANTS.supportedLanguage;
		vm.menu = menuPrepService;
		vm.close = function(){
			$state.go('Menu');
		}

				vm.updateMenu = function(){
			var updateMenu  = new Object();
            updateMenu.menuNameDictionary = vm.menu.menuNameDictionary;
			updateMenu.isImageChange = isImageChange;
			updateMenu.menuId = vm.menu.menuId;

			var model = new FormData();
			model.append('data', JSON.stringify(updateMenu));
			model.append('file', menuImage);
			$http({
				method: 'PUT',
				url: appCONSTANTS.API_URL + 'Menus/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('menuUpdateSucess'),"success");
                    $state.go('Menu');
				},
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
				}
            );

		 		}
		vm.LoadUploadImage = function() {
			$("#menuImage").click();
		}
        var menuImage; 
        var isImageChange = false;
		$scope.AddMenuImage = function(element) {
			var imageFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (imageFile && imageFile.size >= 0 && ((imageFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(imageFile.type) !== -1) {
					$scope.editMenuForm.$dirty=true;
					$scope.$apply(function() {

						                        menuImage= imageFile;
                        isImageChange = true;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.menu.imageURL= reader.result;
							$scope.$apply();
						};
						if (imageFile) {
							reader.readAsDataURL(imageFile);
						}
					})
				} else {
					$("#menuImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (imageFile) {
					$("#menuImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}
	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('menuDialogController', ['$scope','$http','$state','appCONSTANTS','$translate' , 'MenuResource','ToastService','$rootScope',  menuDialogController])

	function menuDialogController($scope,$http , $state , appCONSTANTS, $translate , MenuResource,ToastService,$rootScope){
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Menu');
		}
		vm.isChanged = false;

				vm.AddNewMenu = function(){
			vm.isChanged = true;
            var newMenu = new Object();
            newMenu.menuNameDictionary = vm.menuNameDictionary;

			var model = new FormData();
			model.append('data', JSON.stringify(newMenu));
			model.append('file', menuImage);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Menus/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('menuAddSuccess'),"success");
					 $state.go('Menu');
					 vm.isChanged = false;
				},
				function(data, status) {
					vm.isChanged = false;
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
				}
            ); 
		}

		vm.LoadUploadImage = function() {
			$("#menuImage").click();
		}
		var menuImage; 
		$scope.AddMenuImage = function(element) {
			var imageFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (imageFile && imageFile.size >= 0 && ((imageFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(imageFile.type) !== -1) {
					$scope.newMenuForm.$dirty=true;
					$scope.$apply(function() {

												menuImage= imageFile;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.menuImage= reader.result; 
							$scope.$apply();
						};
						if (imageFile) {
							reader.readAsDataURL(imageFile);
						}
					})
				} else {
					$("#menuImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (imageFile) {
					$("#menuImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}
	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('sideItemController', ['$scope','$translate', 'appCONSTANTS','$uibModal', 'SideItemResource','sideItemPrepService','ToastService',  sideItemController])

    function sideItemController($scope ,$translate , appCONSTANTS,$uibModal, SideItemResource,sideItemPrepService,ToastService){

        var vm = this;
		vm.sideItems = sideItemPrepService;
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

				function refreshSideItems(){
			var k = SideItemResource.getAllSideItems({page:vm.currentPage}).$promise.then(function(results) {
				vm.sideItems = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshSideItems();
		}
		vm.openSideItemDialog = function(){		
			if($scope.selectedLanguage != appCONSTANTS.defaultLanguage)
			{
				var englishSideItems;
				var k = SideItemResource.getAllSideItems({pagesize:0, lang: appCONSTANTS.defaultLanguage}).$promise.then(function(results) {
                    englishSideItems = results;
					var modalContent = $uibModal.open({
						templateUrl: './app/RestaurantAdmin/templates/editSideItem.html',
						controller: 'editSideItemDialogController',
						controllerAs: 'editSideItemDlCtrl',
						resolve:{
							mode:function(){return "map"},
							englishSideItems: function(){return englishSideItems.results;},
							sideItem:function(){ return null},
							callBackFunction:function(){return refreshSideItems;}
						}

											});
				});
			}
			else{
				var modalContent = $uibModal.open({
					templateUrl: './app/RestaurantAdmin/templates/newSideItem.html',
					controller: 'sideItemDialogController',
					controllerAs: 'sideItemDlCtrl',
					resolve:{
						callBackFunction:function(){return refreshSideItems;}
					}

									});
			}
		}
		function confirmationDelete(itemId){
			SideItemResource.deleteSideItem({SideItemId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('SideItemDeleteSuccess'),"success");
				refreshSideItems();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
		}
		vm.openDeleteSideItemDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}

							});
		}

				vm.openEditSideItemDialog = function(index){
			var modalContent = $uibModal.open({
				templateUrl: './app/RestaurantAdmin/templates/editSideItem.html',
				controller: 'editSideItemDialogController',
				controllerAs: 'editSideItemDlCtrl',
				resolve:{
					mode:function(){return "edit"},
					englishSideItems: function(){return null;},
					sideItem:function(){ return vm.sideItems.results[index]},
					callBackFunction:function(){return refreshSideItems;}
				}

							});

					}



							}

	}
());
(function() {
    angular
      .module('home')
      .factory('SideItemResource', ['$resource', 'appCONSTANTS', SideItemResource]);

      function SideItemResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'SideItems/:SideItemId', {}, {
        getAllSideItems: { method: 'GET', useToken: true, params:{lang:'@lang'} },
        create: { method: 'POST', useToken: true },
        deleteSideItem: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }

      }());
  (function () {
    'use strict';

	    angular
        .module('home')
        .controller('sideItemDialogController', ['$uibModalInstance','$translate' , 'SideItemResource','ToastService','callBackFunction','$rootScope',  sideItemDialogController])

	function sideItemDialogController($uibModalInstance, $translate , SideItemResource,ToastService,callBackFunction,$rootScope){
		var vm = this;
        vm.sideItemName = "";
        vm.value;
		vm.close = function(){
			$uibModalInstance.dismiss('cancel');
		}
		vm.isChanged = false;
		vm.AddNewSideItem = function(){
            vm.isChanged = true;
			var newSideItem = new SideItemResource();
            newSideItem.sideItemName = vm.sideItemName;
            newSideItem.value = vm.value;
            newSideItem.$create().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('SideItemAddSuccess'),"success");
					$uibModalInstance.dismiss('cancel');
                    callBackFunction();
                    vm.isChanged = false;
                },
                function(data, status) {
                    vm.isChanged = false;
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
		}
	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editSideItemDialogController', ['$uibModalInstance','$translate', 'SideItemResource','ToastService','mode','englishSideItems','sideItem','callBackFunction',  editSideItemDialogController])

	function editSideItemDialogController($uibModalInstance, $translate, SideItemResource,ToastService, mode, englishSideItems, sideItem,callBackFunction){
		var vm = this;
		vm.sideItemName = "";

				vm.mode = mode;
		vm.englishSideItems = englishSideItems;
        if(mode == "edit"){
            vm.sideItemName = sideItem.sideItemName;
            vm.value = sideItem.value;
        }
		else
			vm.selectedSideItem = englishSideItems[0];
		vm.close = function(){
			$uibModalInstance.dismiss('cancel');
		}

				vm.updateSideItem = function(){
			var updateSideItem = new SideItemResource();
            updateSideItem.sideItemName = vm.sideItemName;

            			if(mode == "edit"){
				updateSideItem.sideItemId = sideItem.sideItemId;
				updateSideItem.value = vm.value;
			}
			else{
				updateSideItem.sideItemId = vm.selectedSideItem.sideItemId;
				updateSideItem.value = vm.selectedSideItem.value;
			}
            updateSideItem.$update().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('UpdateSideItemSuccess'),"success");
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
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('sizeController', ['$scope','$translate', 'appCONSTANTS','$uibModal', 'SizeResource','sizesPrepService','ToastService',  sizeController])

    function sizeController($scope ,$translate , appCONSTANTS,$uibModal, SizeResource,sizesPrepService,ToastService){

        var vm = this;
		vm.sizes = sizesPrepService;
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
		
		function refreshSizes(){
			var k = SizeResource.getAllSizes({page:vm.currentPage}).$promise.then(function(results) {
				vm.sizes = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshSizes();
		}
		vm.openSizeDialog = function(){		
			if($scope.selectedLanguage != appCONSTANTS.defaultLanguage)
			{
				var englishSizes;
				var k = SizeResource.getAllSizes({pagesize:0, lang: appCONSTANTS.defaultLanguage}).$promise.then(function(results) {
					englishSizes = results;
					var modalContent = $uibModal.open({
						templateUrl: './app/RestaurantAdmin/templates/editSize.html',
						controller: 'editSizeDialogController',
						controllerAs: 'editSizeDlCtrl',
						resolve:{
							mode:function(){return "map"},
							englishSizes: function(){return englishSizes.results;},
							size:function(){ return null},
							callBackFunction:function(){return refreshSizes;}
						}
						
					});
				});
			}
			else{
				var modalContent = $uibModal.open({
					templateUrl: './app/RestaurantAdmin/templates/newSize.html',
					controller: 'sizeDialogController',
					controllerAs: 'sizeDlCtrl',
					resolve:{
						callBackFunction:function(){return refreshSizes;}
					}
					
				});
			}
		}
		function confirmationDelete(itemId){
			SizeResource.deleteSize({SizeId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('SizeDeleteSuccess'),"success");
				refreshSizes();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
		}
		vm.openDeleteSizeDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}
				
			});
		}
		
		vm.openEditSizeDialog = function(index){
			var modalContent = $uibModal.open({
				templateUrl: './app/RestaurantAdmin/templates/editSize.html',
				controller: 'editSizeDialogController',
				controllerAs: 'editSizeDlCtrl',
				resolve:{
					mode:function(){return "edit"},
					englishSizes: function(){return null;},
					size:function(){ return vm.sizes.results[index]},
					callBackFunction:function(){return refreshSizes;}
				}
				
			});
			
		}
		
		
		
	}
	
}
());
(function() {
    angular
      .module('home')
      .factory('SizeResource', ['$resource', 'appCONSTANTS', SizeResource]);
  
    function SizeResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Sizes/:sizeId', {}, {
        getAllSizes: { method: 'GET', useToken: true, params:{lang:'@lang'} },
        getSize: { method: 'GET', useToken: true },
        create: { method: 'POST', useToken: true },
        deleteSize: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }
    
  }());
  (function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editSizeDialogController', ['$state', 'appCONSTANTS','$translate', 'SizeResource','ToastService','sizePrepService',  editSizeDialogController])

	function editSizeDialogController($state, appCONSTANTS, $translate, SizeResource,ToastService, sizePrepService){
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.size = sizePrepService;
		vm.close = function(){
			$state.go('size');
		}
		
		vm.updateSize = function(){
			var updateSize = new SizeResource();
			updateSize.sizeNameDictionary = vm.size.sizeNameDictionary;
			updateSize.sizeId = vm.size.sizeId;
            updateSize.$update().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('UpdateSizeSuccess'),"success");
					$state.go('size');
					
                },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
		}
	}	
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('sizeDialogController', ['$state', 'appCONSTANTS','$translate' , 'SizeResource','ToastService','$rootScope',  sizeDialogController])

	function sizeDialogController($state, appCONSTANTS, $translate , SizeResource,ToastService,$rootScope){
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('size');
		}
		vm.isChanged = false;
		vm.AddNewSize = function(){
			vm.isChanged = true;
			var newSize = new SizeResource();
            newSize.sizeNameDictionary = vm.sizeNameDictionary;
            newSize.$create().then(
                function(data, status) {
					vm.isChanged = false;
					ToastService.show("right","bottom","fadeInUp",$translate.instant('sizeAddSuccess'),"success");
					$state.go('size');
                },
                function(data, status) {
					vm.isChanged = false;
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
		}
	}	
})();
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('WaiterController', ['$scope','$translate', 'appCONSTANTS','$uibModal', 'WaiterResource' ,'BranchResource','waitersPrepService', 'ToastService',  WaiterController])

    function WaiterController($scope ,$translate , appCONSTANTS,$uibModal, WaiterResource , BranchResource ,waitersPrepService,ToastService){

        var vm = this;
		vm.waiters = waitersPrepService;
		
		
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[2].children[0]).addClass("active")
		
		function refreshWaiter(){
			var k = WaiterResource.getAllWaiters({page:vm.currentPage}).$promise.then(function(results) {
				vm.waiters = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshWaiter();
		}
		vm.openWaiterDialog = function(){		
			var branches;
			var k = BranchResource.getAllBranches({pagesize:0}).$promise.then(function(results) {
				branches = results;
				
				var modalContent = $uibModal.open({
					templateUrl: './app/RestaurantAdmin/templates/newWaiter.html',
					controller: 'waiterDialogController',
					controllerAs: 'waiterDlCtrl',
					resolve:{
						branches: function(){return branches.results;},
						callBackFunction:function(){return refreshWaiter;},
						selectedLanguage:function(){return $scope.selectedLanguage;}
					}
						
				});
			});
        }
		function confirmationDelete(itemId){
			WaiterResource.deleteWaiter({waiterId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('WaiterDeleteSuccess'),"success");
				refreshWaiter();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
		}
		vm.openDeleteWaiterDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}
				
			});
		}
		
		vm.openEditWaiterDialog = function(index){
            var waiter;
            waiter=angular.copy(vm.waiters.results[index]);

			var branches;
			var k = BranchResource.getAllBranches({pagesize:0}).$promise.then(function(results) {
				branches = results;
				
				var modalContent = $uibModal.open({
					templateUrl: './app/RestaurantAdmin/templates/editWaiter.html',
					controller: 'editWaiterDialogController',
					controllerAs: 'editWaiterDlCtrl',
					resolve:{
						mode:function(){return "edit"},
						waiter:function(){ return waiter},
						branches: function(){return branches.results;},
						callBackFunction:function(){return refreshWaiter;},
						selectedLanguage:function(){return $scope.selectedLanguage;}						
					}
					
				});
			});
			
		}
				
		
	}
	
}
());
(function() {
    angular
      .module('home')
      .factory('WaiterResource', ['$resource', 'appCONSTANTS', WaiterResource])
      .factory('WaitersLimitResource', ['$resource', 'appCONSTANTS', WaitersLimitResource]);

      function WaiterResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Waiters/:waiterId', {}, {
        getAllWaiters: { method: 'GET', useToken: true, params:{lang:'@lang'} },
        create: { method: 'POST', useToken: true },
        deleteWaiter: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }

    function WaitersLimitResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Waiters/Limit', {}, {
        getWaitersLimit: { method: 'GET', useToken: true ,transformResponse: function (data) {return {waiterLimit: angular.fromJson(data)} }},
      })
    }

      }());
  (function () {
    'use strict';
	
    angular
        .module('home')
        .controller('waiterDialogController', ['$uibModalInstance','$translate' , 'WaiterResource','ToastService', 'branches','callBackFunction','selectedLanguage','$rootScope',  waiterDialogController])

	function waiterDialogController($uibModalInstance, $translate , WaiterResource,ToastService,branches,callBackFunction,selectedLanguage,$rootScope){
		var vm = this;
		vm.close = function(){
			$uibModalInstance.dismiss('cancel');
		}
		vm.Branches = branches;
		vm.selectedLanguage = selectedLanguage;
		if(branches.length>0){
			vm.selectedBranch = branches[0];
		}
		
		vm.AddNewWaiter = function(){
			var newWaiter = new WaiterResource();
            newWaiter.userName = vm.userName;
            newWaiter.name = vm.name;
			newWaiter.password = vm.password;
			newWaiter.branchId = vm.selectedBranch.branchId;
            newWaiter.$create().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('WaiterAddSuccess'),"success");
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
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editWaiterDialogController', ['$uibModalInstance','$translate', 'WaiterResource','ToastService','waiter', 'branches','callBackFunction','selectedLanguage',  editWaiterDialogController])

	function editWaiterDialogController($uibModalInstance, $translate, WaiterResource,ToastService,  waiter, branches, callBackFunction,selectedLanguage){
		var vm = this;
		vm.menuName = "";
        vm.waiter = waiter;
        vm.waiter.confirmPassword = waiter.password;
        vm.selectedLanguage = selectedLanguage;
        vm.close = function(){
			$uibModalInstance.dismiss('cancel');
        }
        vm.Branches = branches;
		if(branches.length>0){
            branches.forEach(function(element) {
                if(element.branchId == vm.waiter.branchId){
                    vm.selectedBranch = element;
                }
            }, this);
		}
		vm.updateWaiter = function(){
			var newWaiter = new WaiterResource();
            newWaiter.userName = vm.waiter.userName;
            newWaiter.name = vm.waiter.name;
            newWaiter.password = vm.waiter.password;
            newWaiter.userId = waiter.userId;
            newWaiter.branchId = vm.selectedBranch.branchId;
            newWaiter.$update().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('WaiterUpdateSuccess'),"success");
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
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editFeatureController', ['$scope','$state','$http','$translate','appCONSTANTS', 'FeatureResource','ToastService','featurePrepService',  editFeatureController])

	function editFeatureController($scope, $state ,$http, $translate,appCONSTANTS, FeatureResource,ToastService, featurePrepService,callBackFunction){
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;

				vm.feature = featurePrepService;
		vm.moreDetail = false;
		vm.editmode = false;		
		vm.enableMoreDetail = function(){
			vm.moreDetail = true;
		}
		vm.close = function(){
			$state.go('features');
		}

		vm.changeFeatureDetail = function(){
			if(vm.feature.hasDetails &&  vm.feature.featureDetails.length <=0){
				vm.moreDetail = true;

							}
		}
		vm.featureDetailExist =false;
        vm.currentPage = 0;
        vm.changePage = function(page){
            vm.currentPage = page-1;
        }
        vm.checkFeatureDetail = function(){
            var isFound = false;
            vm.feature.featureDetails.forEach(function(detail) {
                if(((detail.descriptionDictionary["en-us"] == vm.featureDetailDescDictionary["en-us"]) 
                || (detail.descriptionDictionary["ar-eg"] == vm.featureDetailDescDictionary["ar-eg"]))&& detail.featureDetailId !=vm.featureDetailId ){

                                        vm.featureDetailExist =true;
                    isFound = true;
                    return;
                }
            }, this);
            if(!isFound)
            vm.featureDetailExist =false;            
        }

		        vm.AddFeatureDetail = function(){
            if(vm.editmode){
                vm.feature.featureDetails[vm.editIndex].descriptionDictionary=vm.featureDetailDescDictionary;
                vm.feature.featureDetails[vm.editIndex].price = vm.isFree?0:vm.price;
                vm.feature.featureDetails[vm.editIndex].isFree = vm.isFree;
            }
            else{

                                vm.feature.featureDetails.push({
                    descriptionDictionary:vm.featureDetailDescDictionary,
                    price:vm.isFree?0:vm.price,
					isFree:vm.isFree,
					isDeleted:false
                })
            }
            vm.featureDetailDescDictionary=null;
            vm.price=null
            vm.isFree=false;
            vm.editmode = false;
			vm.featureDetailExist =false;

			        }
        vm.edit = function(featureDetail){
            vm.featureDetailDescDictionary=featureDetail.descriptionDictionary;
            vm.price=featureDetail.price;
            vm.isFree=featureDetail.isFree;
            vm.editmode = true;
            vm.editIndex = vm.feature.featureDetails.indexOf(featureDetail);
			vm.moreDetail = true;
			vm.featureDetailId = featureDetail.featureDetailId
		}
        vm.remove = function(featureDetail){
			featureDetail.isDeleted = true;
		}
		vm.updateFeature = function(){
            var updateFeature = new FeatureResource();
            updateFeature.featureNameDictionary = vm.feature.featureNameDictionary;
            updateFeature.hasDetails = vm.feature.hasDetails;
			updateFeature.featureId = vm.feature.featureId;
			updateFeature.isImageChange = isImageChange;
			updateFeature.type = "0";
			if(vm.feature.hasDetails){
                updateFeature.featureDetails = vm.feature.featureDetails
			}
			var model = new FormData();
			model.append('data', JSON.stringify(updateFeature));
			model.append('file', featureImage);
			$http({
				method: 'put',
				url: appCONSTANTS.API_URL + 'Features/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('FeatureUpdateSuccess'),"success");
					 vm.isChanged = false;                     
					 $state.go('features');
                },
                function(data, status) {
                    vm.isChanged = false;                     
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
			);

            		}
		vm.LoadUploadLogo = function () {
            $("#logoImage").click();
        }
		var featureImage;
		var isImageChange = false;
        $scope.AddFeatureImage = function (element) {
            var logoFile = element[0];

            var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

            if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

                if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
                    $scope.editFeatureForm.$dirty = true;
                    $scope.$apply(function () {

						featureImage = logoFile;
						isImageChange = true;
                        var reader = new FileReader();

                        reader.onloadend = function () {
							vm.feature.imageURL = reader.result;
                            $scope.$apply();
                        };
                        if (logoFile) {
                            reader.readAsDataURL(logoFile);
                        }
                    })
                } else {
                    $("#logoImage").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
                }

            } else {
                if (logoFile) {
                    $("#logoImage").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
                }

            }


        }

        	}	
})();
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editFeatureRestaurantController', ['$scope','$state','$http','$translate','appCONSTANTS', 'FeatureResource','ToastService','featurePrepService','restaurantsNamePrepService',  editFeatureRestaurantController])

	function editFeatureRestaurantController($scope, $state ,$http, $translate,appCONSTANTS, FeatureResource,ToastService, featurePrepService,restaurantsNamePrepService,callBackFunction){
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;

				vm.feature = featurePrepService;
        vm.restaurants = restaurantsNamePrepService;
        vm.SelectedRestaurantId=[];
        vm.SelectedRestaurant = [];
        featurePrepService.restaurants.forEach(function(element) {
			var kk = vm.restaurants.filter(function(item){
				return (item.restaurantId ===  element.restaurantId);
              })[0];

              			vm.SelectedRestaurantId.push(element.restaurantId)
			vm.SelectedRestaurant.push(element)
        }, this);
        vm.restaurantChange = function(){
			vm.SelectedRestaurant = []
			for(var i=0;i<vm.SelectedRestaurantId.length;i++){
				var restaurant = vm.restaurants.filter(function(item){
					return (item.restaurantId ===  vm.SelectedRestaurantId[i]);
				})[0]
				vm.SelectedRestaurant.push(restaurant)  
			}
		}
		vm.close = function(){
			$state.go('features');
		}

        vm.currentPage = 0;
        vm.changePage = function(page){
            vm.currentPage = page-1;
        }

                $scope.$watch('selectedLanguage',function(){
            $(".select-tags").select2({
                tags: false,
                theme: "bootstrap",
            })
        })
		vm.updateFeature = function(){
            var updateFeature = new FeatureResource();
            updateFeature.featureNameDictionary = vm.feature.featureNameDictionary;
            updateFeature.hasDetails = vm.feature.hasDetails;
			updateFeature.featureId = vm.feature.featureId;
			updateFeature.isImageChange = isImageChange;
            updateFeature.type = "1";
            updateFeature.restaurants = [];
			vm.SelectedRestaurant.forEach(function(element) {
                updateFeature.restaurants.push(element);
			}, this);

						var model = new FormData();
			model.append('data', JSON.stringify(updateFeature));
			model.append('file', featureImage);
			$http({
				method: 'put',
				url: appCONSTANTS.API_URL + 'Features/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('FeatureUpdateSuccess'),"success");
					 vm.isChanged = false;                     
					 $state.go('features');
                },
                function(data, status) {
                    vm.isChanged = false;                     
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
			);

            		}
		vm.LoadUploadLogo = function () {
            $("#logoImage").click();
        }
		var featureImage;
		var isImageChange = false;
        $scope.AddFeatureImage = function (element) {
            var logoFile = element[0];

            var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

            if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

                if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
                    $scope.editFeatureForm.$dirty = true;
                    $scope.$apply(function () {

						featureImage = logoFile;
						isImageChange = true;
                        var reader = new FileReader();

                        reader.onloadend = function () {
							vm.feature.imageURL = reader.result;
                            $scope.$apply();
                        };
                        if (logoFile) {
                            reader.readAsDataURL(logoFile);
                        }
                    })
                } else {
                    $("#logoImage").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
                }

            } else {
                if (logoFile) {
                    $("#logoImage").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
                }

            }


        }

        	}	
})();
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('featureController', ['$scope','$stateParams','$translate', 'appCONSTANTS','$uibModal', 'FeatureResource','ActivateFeatureResource','DeactivateFeatureResource','featuresPrepService','featureAsRestaurantPrepService','ToastService',  featureController])

    function featureController($scope,$stateParams ,$translate , appCONSTANTS,$uibModal, FeatureResource,ActivateFeatureResource,DeactivateFeatureResource,featuresPrepService,featureAsRestaurantPrepService,ToastService){

        var vm = this;
        vm.features = featuresPrepService;
		vm.Now = $scope.getCurrentTime();
		vm.featureAsRestaurant = featureAsRestaurantPrepService;
		console.log(featureAsRestaurantPrepService)
		$('.pmd-sidebar-nav>li>a').removeClass("active")

				function refreshFeatures(){
			var k = FeatureResource.getAllFeatures({ page:vm.currentPage }).$promise.then(function(results) {
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
		function confirmationDelete(itemId){
			FeatureResource.deleteFeature({featureId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('FeatureDeleteSuccess'),"success");
				if(vm.features.results.length ==1 && vm.currentPage > 1)
					vm.currentPage = vm.currentPage -1;
				refreshFeatures();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.openDeleteFeatureDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}

							});
        }

        		vm.Activate = function(feature){
			ActivateFeatureResource.Activate({featureId:feature.featureId})
			.$promise.then(function(result){
				feature.isActive = true;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}

		vm.Deactivate = function(feature){
			DeactivateFeatureResource.Deactivate({featureId:feature.featureId})
			.$promise.then(function(result){
				feature.isActive = false;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}		



							}

	}());
(function() {
    angular
      .module('home')
      .factory('FeatureResource', ['$resource', 'appCONSTANTS', FeatureResource])
      .factory('ActivateFeatureResource', ['$resource', 'appCONSTANTS', ActivateFeatureResource])
      .factory('DeactivateFeatureResource', ['$resource', 'appCONSTANTS', DeactivateFeatureResource]);

      function FeatureResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Features/:featureId', {}, {
        getAllFeatures: { method: 'GET', useToken: true },
        getAllActivatedFeatures: {url: appCONSTANTS.API_URL + 'Features/Activated', method: 'GET', useToken: true },
        checkFeatureAsRestaurant: {url: appCONSTANTS.API_URL + 'Features/Restaurant', method: 'GET', useToken: true },
        getFeature: { method: 'GET', useToken: true },
        create: { method: 'POST', useToken: true },
        deleteFeature: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }

    function ActivateFeatureResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Features/:featureId/Activate', {}, {
          Activate: { method: 'GET', useToken: true}
        })
    }
    function DeactivateFeatureResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Features/:featureId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }

}());
  (function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
              .state('features', {
					url: '/feature',
                    templateUrl: './app/admin/features/templates/features.html',
                    controller: 'featureController',
                    'controllerAs': 'featureCtrl',
                    data: {
                        permissions: {
                            only: ['admin'],
                           redirectTo: 'root'
                        }
                    },
                    resolve: {
                        featuresPrepService: featuresPrepService,
                        featureAsRestaurantPrepService:featureAsRestaurantPrepService
                    }

                                 })                
                .state('newFeature', {
                    url: '/newFeature',
                    templateUrl: './app/admin/features/templates/newFeature.html',
                    controller: 'newFeatureController',
                    'controllerAs': 'newFeatureCtrl',
                    data: {
                        permissions: {
                            only: ['admin'],
                           redirectTo: 'root'
                        }
                    }

                                 })
                .state('editFeature', {
                      url: '/feature/:featureId',
                      templateUrl: './app/admin/features/templates/editFeature.html',
                      controller: 'editFeatureController',
                      'controllerAs': 'editFeatureDlCtrl',
                      data: {
                          permissions: {
                              only: ['Admin'],
                             redirectTo: 'root'
                          }
                      },
                      resolve: {
                        featurePrepService: featurePrepService
                      }
                  })               
                  .state('newFeatureRestaurant', {
                      url: '/newFeatureRestaurant',
                      templateUrl: './app/admin/features/templates/newFeatureRestaurant.html',
                      controller: 'newFeatureRestaurantController',
                      'controllerAs': 'newFeatureCtrl',
                      data: {
                          permissions: {
                              only: ['admin'],
                             redirectTo: 'root'
                          }
                      },
                      resolve: {
                        restaurantsNamePrepService: restaurantsNamePrepService
                      }

                                     })

                                  .state('editFeatureRestaurant', {
                    url: '/feature/:featureId/Restaurant',
                    templateUrl: './app/admin/features/templates/editFeatureRestaurant.html',
                    controller: 'editFeatureRestaurantController',
                    'controllerAs': 'editFeatureDlCtrl',
                    data: {
                        permissions: {
                            only: ['Admin'],
                           redirectTo: 'root'
                        }
                    },
                    resolve: {
                      featurePrepService: featurePrepService,
                      restaurantsNamePrepService: restaurantsNamePrepService

                                          }
                }) 
        });

                featuresPrepService.$inject = ['FeatureResource']
        function featuresPrepService(FeatureResource) {
            return FeatureResource.getAllFeatures().$promise;
        }

        featurePrepService.$inject = ['FeatureResource','$stateParams']
        function featurePrepService(FeatureResource,$stateParams) {
            return FeatureResource.getFeature({featureId: $stateParams.featureId}).$promise;
        }

        featureAsRestaurantPrepService.$inject = ['FeatureResource']
        function featureAsRestaurantPrepService(FeatureResource) {
            return FeatureResource.checkFeatureAsRestaurant().$promise;
        }

        restaurantsNamePrepService.$inject = ['RestaurantResource']
        function restaurantsNamePrepService(RestaurantResource) {
            return RestaurantResource.getAllRestaurantsName().$promise;
        }
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('newFeatureController', ['$scope','$state','appCONSTANTS','$http','$translate' , 'FeatureResource','ToastService','$rootScope',  newFeatureController])

	function newFeatureController($scope, $state , appCONSTANTS,$http, $translate , FeatureResource,ToastService,$rootScope){
		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        		vm.close = function(){
            $state.go('features');            
		}
        vm.isChanged = false;
        vm.isFree=false;
        vm.editmode = false;
        vm.featureDetails = [] ;
        vm.featureDetailExist =false;
        vm.currentPage = 0;
        vm.changePage = function(page){
            vm.currentPage = page-1;
        }
        vm.checkFeatureDetail = function(){
            var isFound = false;
            vm.featureDetails.forEach(function(detail) {
                if((detail.descriptionDictionary["en-us"] == vm.featureDetailDescDictionary["en-us"]) 
                || (detail.descriptionDictionary["ar-eg"] == vm.featureDetailDescDictionary["ar-eg"])){

                                        vm.featureDetailExist =true;
                    isFound = true;
                    return;
                }
            }, this);
            if(!isFound)
            vm.featureDetailExist =false;            
        }
        vm.AddFeatureDetail = function(){
            if(vm.editmode){
                vm.featureDetails[vm.editIndex].descriptionDictionary=vm.featureDetailDescDictionary;
                vm.featureDetails[vm.editIndex].price = vm.isFree?0:vm.price;
                vm.featureDetails[vm.editIndex].isFree = vm.isFree;
            }
            else{

                                vm.featureDetails.push({
                    descriptionDictionary:vm.featureDetailDescDictionary,
                    price:vm.isFree?0:vm.price,
                    isFree:vm.isFree
                })
            }
            vm.featureDetailDescDictionary=null;
            vm.price=null
            vm.isFree=false;
            vm.editmode = false;
            vm.featureDetailExist =false;

                    }
        vm.edit = function(featureDetail,index){
            index = index + ((vm.currentPage) *10);
            vm.featureDetailDescDictionary=featureDetail.descriptionDictionary;
            vm.price=featureDetail.price;
            vm.isFree=featureDetail.isFree;
            vm.editmode = true;
            vm.editIndex = index;
        }
        vm.remove = function(index){
            index = index + ((vm.currentPage) *10);
            vm.featureDetails.splice(index,1);
        }
		vm.AddNewFeature = function(){
			vm.isChanged = true;
            var newFeature = new FeatureResource();
            newFeature.featureNameDictionary = vm.featureNameDictionary;
            newFeature.hasDetails = vm.hasDetails;
            newFeature.type = "0";
            if(vm.hasDetails){
                newFeature.featureDetails = vm.featureDetails

            }

            var model = new FormData();
			model.append('data', JSON.stringify(newFeature));
			model.append('file', featureImage);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Features/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('FeatureAddSuccess'),"success");
					 vm.isChanged = false;                     
                     $state.go('features');                     
                },
                function(data, status) {
                    vm.isChanged = false;                     
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );

        }
        vm.LoadUploadLogo = function () {
            $("#logoImage").click();
        }
        var featureImage;
        $scope.AddFeatureImage = function (element) {
            var logoFile = element[0];

            var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

            if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

                if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
                    $scope.newFeatureForm.$dirty = true;
                    $scope.$apply(function () {

                        featureImage = logoFile;
                        var reader = new FileReader();

                        reader.onloadend = function () {
                            vm.featureImage = reader.result;
                            $scope.$apply();
                        };
                        if (logoFile) {
                            reader.readAsDataURL(logoFile);
                        }
                    })
                } else {
                    $("#logoImage").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
                }

            } else {
                if (logoFile) {
                    $("#logoImage").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
                }

            }


        }

        	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('newFeatureRestaurantController', ['$scope','$state','appCONSTANTS','$http','$translate' , 'FeatureResource','ToastService','restaurantsNamePrepService',  newFeatureRestaurantController])

	function newFeatureRestaurantController($scope, $state , appCONSTANTS,$http, $translate , FeatureResource,ToastService,restaurantsNamePrepService){
		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        		vm.close = function(){
            $state.go('features');            
		}
        vm.isChanged = false;
        vm.isFree=false;
        vm.restaurants = restaurantsNamePrepService;
        vm.currentPage = 0;
        vm.SelectedRestaurant = [];
        vm.changePage = function(page){
            vm.currentPage = page-1;
        }
        $scope.$watch('selectedLanguage',function(){
            $(".select-tags").select2({
                tags: false,
                theme: "bootstrap",
            })
        })
		vm.AddNewFeature = function(){
			vm.isChanged = true;
            var newFeature = new FeatureResource();
            newFeature.featureNameDictionary = vm.featureNameDictionary;
            newFeature.hasDetails = true;
            newFeature.type = "1";
            newFeature.restaurants = vm.SelectedRestaurant;
            var model = new FormData();
			model.append('data', JSON.stringify(newFeature));
			model.append('file', featureImage);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Features/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('FeatureAddSuccess'),"success");
					 vm.isChanged = false;                     
                     $state.go('features');                     
                },
                function(data, status) {
                    vm.isChanged = false;                     
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );

        }
        vm.LoadUploadLogo = function () {
            $("#logoImage").click();
        }
        var featureImage;
        $scope.AddFeatureImage = function (element) {
            var logoFile = element[0];

            var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

            if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

                if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
                    $scope.newFeatureForm.$dirty = true;
                    $scope.$apply(function () {

                        featureImage = logoFile;
                        var reader = new FileReader();

                        reader.onloadend = function () {
                            vm.featureImage = reader.result;
                            $scope.$apply();
                        };
                        if (logoFile) {
                            reader.readAsDataURL(logoFile);
                        }
                    })
                } else {
                    $("#logoImage").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
                }

            } else {
                if (logoFile) {
                    $("#logoImage").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
                }

            }


        }

        	}	
}());
(function() {
    angular
      .module('home')
      .factory('RequestResource', ['$resource', 'appCONSTANTS', RequestResource]);

      function RequestResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Requests/', {}, {
        getAllRequest: { method: 'GET', useToken: true },
        Approve: {url: appCONSTANTS.API_URL + 'Requests/:requestId/Approve', method: 'POST', useToken: true },
        Reject: {url: appCONSTANTS.API_URL + 'Requests/:requestId/Reject', method: 'GET', useToken: true },
        create: { method: 'POST', useToken: true },
        deleteReceptionist: { method: 'DELETE', useToken: true }
      })
    }

}());
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

			            requestApproval.$Approve({requestId:requestId}).then(
                function(data, status) {
                    refreshRequests()                    
                },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
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
                        requestsPrepService: requestsPrepService
                    }

                                    })
        });

                requestsPrepService.$inject = ['RequestResource']
        function requestsPrepService(RequestResource) {
            return RequestResource.getAllRequest().$promise;
        }
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('requestDetailDialogController', ['$scope','$stateParams','$translate', 'appCONSTANTS','$uibModal', 'RequestResource'
        ,'feature','requestId','ToastService','callBackFunction','$uibModalInstance','language',  requestDetailDialogController])

    function requestDetailDialogController($scope,$stateParams ,$translate , appCONSTANTS,$uibModal, RequestResource
        ,feature,requestId,ToastService,callBackFunction,$uibModalInstance,language){

        var vm = this;
        vm.feature = feature;
        vm.language = language;
        vm.close = function(){
			$uibModalInstance.dismiss('cancel');
        }
        vm.Approve = function(){
            var requestDetail = [];
            vm.feature.featureDetails.forEach(function(element) {
                if(element.isSelectedDetail){
                    requestDetail.push({featureDetailId:element.featureDetailId,number:element.number})
                }
            }, this);
            callBackFunction(requestId,requestDetail)
            $uibModalInstance.dismiss('cancel');
        }
	}

	}());
(function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
              .state('restaurantType', {
					url: '/restaurantType',
                    templateUrl: './app/admin/restaurants/templates/restaurantType.html',
                    controller: 'restaurantTypeController',
                    'controllerAs': 'restaurantTypeCtrl',
                    data: {
                        permissions: {
                            only: ['Admin'],
                           redirectTo: 'root'
                        },
                        displayName: 'restaurantType'
                    },
                    resolve: {
                        restaurantTypesPrepService: restaurantTypesPrepService
                    }
                 
                })
                .state('newRestaurantType', {
					url: '/newRestaurantType',
                    templateUrl: './app/admin/restaurants/templates/newType.html',
                    controller: 'restaurantTypeDialogController',
                    'controllerAs': 'restTypeDlCtrl',
                    data: {
                        permissions: {
                            only: ['Admin'],
                           redirectTo: 'root'
                        },
                        displayName: 'restaurantType'
                    }
                 
                })
                .state('editRestaurantType', {
					url: '/restaurantType/:restaurantTypeId',
                    templateUrl: './app/admin/restaurants/templates/editType.html',
                    controller: 'editRestaurantTypeDialogController',
                    'controllerAs': 'editRestTypeDlCtrl',
                    data: {
                        permissions: {
                            only: ['Admin'],
                           redirectTo: 'root'
                        },
                        displayName: 'restaurantType'
                    },
                    resolve: {
                        restaurantTypePrepService: restaurantTypePrepService
                    }
                 
                })
				.state('restaurants', {
					url: '/restaurants',
                    templateUrl: './app/admin/restaurants/templates/restaurant.html',
                    controller: 'restaurantController',
                    'controllerAs': 'restaurantCtrl',
                    data: {
                        permissions: {
                            only: ['Admin'],
                           redirectTo: 'root'
                        },
                        displayName: 'restaurants'
                    },
                    resolve: {
                        restaurantsPrepService: restaurantsPrepService,
                        waitersLimitPrepService: waitersLimitPrepService
                    }
                 
                })
				.state('newRestaurant', {
					url: '/newRestaurant',
                    templateUrl: './app/admin/restaurants/templates/newRestaurant.html',
                    controller: 'newRestaurantController',
                    'controllerAs': 'rewRestCtrl',
                    data: {
                        permissions: {
                            only: ['Admin'],
                           redirectTo: 'root'
                        },
                        displayName: 'restaurants'
                    },
                    resolve: {
                        allRestaurantTypePrepService: allRestaurantTypePrepService,
                        waitersLimitPrepService: waitersLimitPrepService
                    }                 
                })
				.state('editRestaurant', {
					url: '/Restaurant/:restaurantId',
                    templateUrl: './app/admin/restaurants/templates/editRestaurant.html',
                    controller: 'editRestaurantController',
                    'controllerAs': 'editRestCtrl',
                    data: {
                        permissions: {
                            only: ['Admin'],
                           redirectTo: 'root'
                        },
                        displayName: 'restaurants'
                    },
                    resolve: {
						restaurantPrepService:restaurantPrepService,
                        allRestaurantTypePrepService: allRestaurantTypePrepService,
                        waitersLimitPrepService: waitersLimitPrepService
                    }                 
                })
        });

	restaurantTypesPrepService.$inject = ['RestaurantTypeResource']
    function restaurantTypesPrepService(RestaurantTypeResource) {
        return RestaurantTypeResource.getAllRestaurantType().$promise;
    }

    restaurantTypePrepService.$inject = ['RestaurantTypeResource','$stateParams']
    function restaurantTypePrepService(RestaurantTypeResource,$stateParams) {
        return RestaurantTypeResource.getRestaurantType({restaurantTypeId:$stateParams.restaurantTypeId}).$promise;
    }

	restaurantsPrepService.$inject = ['RestaurantResource']
    function restaurantsPrepService(RestaurantResource) {
        return RestaurantResource.getAllRestaurant().$promise;
    }
	
	allRestaurantTypePrepService.$inject = ['RestaurantTypeResource']
    function allRestaurantTypePrepService(RestaurantTypeResource) {
        return RestaurantTypeResource.getAllRestaurantType().$promise;
    }
	
	restaurantPrepService.$inject = ['RestaurantResource','$stateParams']
    function restaurantPrepService(RestaurantResource,$stateParams) {
        return RestaurantResource.getRestaurant({ restaurantId: $stateParams.restaurantId }).$promise;
    }
	
	englishRestaurantPrepService.$inject = ['RestaurantResource','$localStorage','appCONSTANTS']
    function englishRestaurantPrepService(RestaurantResource,$localStorage,appCONSTANTS) {
		if($localStorage.language != appCONSTANTS.defaultLanguage){
			return RestaurantResource.getAllRestaurant({pagesize:0, lang:'en'}).$promise;
		}
		else
			return null;
        
    }

    waitersLimitPrepService.$inject = ['AdminWaitersLimitResource']
    function waitersLimitPrepService(AdminWaitersLimitResource) {
        return AdminWaitersLimitResource.getWaitersLimitAndConsumed().$promise;
    }


}());
(function() {
  angular
    .module('home')
    .factory('RestaurantTypeResource', ['$resource', 'appCONSTANTS', RestaurantTypeResource]);

  function RestaurantTypeResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Restaurants/Type/:restaurantTypeId', {}, {
      getAllRestaurantType: { method: 'GET', useToken: true,isArray: true, params:{lang:'@lang'} },
      getRestaurantType: { method: 'GET', useToken: true},
	  create: { method: 'POST', useToken: true },
	  deleteType: { method: 'DELETE', useToken: true },
	  update: { method: 'PUT', useToken: true }
    })
  }
  
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editRestaurantController', ['$scope','$http','$translate','appCONSTANTS', '$state', 'RestaurantResource','ToastService', 'restaurantPrepService','allRestaurantTypePrepService', 'waitersLimitPrepService',  editRestaurantController])

	function editRestaurantController($scope,$http,$translate,appCONSTANTS, $state, RestaurantResource,ToastService, restaurantPrepService, allRestaurantTypePrepService,waitersLimitPrepService){
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.RestaurantType = allRestaurantTypePrepService;
		vm.restaurant = restaurantPrepService;
		vm.waitersLimit = waitersLimitPrepService;
		vm.waitersLimit.maxNumUsers = (vm.waitersLimit.maxNumUsers - vm.waitersLimit.consumedUsers) + vm.restaurant.waitersLimit;
		vm.confirmPassword = vm.restaurant.restaurantAdminPassword;
		vm.close = function(){
			$state.go('restaurants');
		}
		
		vm.updateRestaurant = function(){
			var updateRestaurant = new Object();
            updateRestaurant.restaurantAdminUserName = vm.restaurant.restaurantAdminUserName;
			updateRestaurant.restaurantAdminPassword = vm.restaurant.restaurantAdminPassword;
			updateRestaurant.restaurantNameDictionary = vm.restaurant.restaurantNameDictionary;
			updateRestaurant.restaurantDescriptionDictionary = vm.restaurant.restaurantDescriptionDictionary;
			updateRestaurant.restaurantTypeId = vm.restaurant.restaurantTypeId;
			updateRestaurant.restaurantId = vm.restaurant.restaurantId;
			updateRestaurant.isLogoChange = isLogoChange;
			
			
			var model = new FormData();
			model.append('data', JSON.stringify(updateRestaurant));
			model.append('file', restaurantLogo);
			$http({
				method: 'put',
				url: appCONSTANTS.API_URL + 'Restaurants/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('restaurantUpdateSuccess'),"success");
					$state.go('restaurants');
				},
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
				}
			);
		}
		vm.LoadUploadLogo = function() {
			$("#logoImage").click();
		}
		var restaurantLogo; 
		var isLogoChange = false;
		$scope.AddRestaurantLogo = function(element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newRestaurantForm.$dirty=true;
					$scope.$apply(function() {
						
						restaurantLogo= logoFile;
						isLogoChange = true;
						var reader = new FileReader();

						reader.onloadend = function() {
							vm.restaurant.logoURL= reader.result;
							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imageTypeError'),"error");
				}

			} else {
				if (logoFile) {
					$("#logoImage").val('');
					ToastService.show("right","bottom","fadeInUp",$translate.instant('imgaeSizeError'),"error");
				}

			}


		}
	}	
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editRestaurantTypeDialogController', ['$state', 'appCONSTANTS', 'RestaurantTypeResource','ToastService','restaurantTypePrepService','$translate',  editRestaurantTypeDialogController])

	function editRestaurantTypeDialogController($state, appCONSTANTS, RestaurantTypeResource,ToastService, restaurantTypePrepService ,$translate){
		var vm = this;
		vm.typeName = "";
		vm.language = appCONSTANTS.supportedLanguage;
		
		vm.restaurantType = restaurantTypePrepService;
		
		vm.updateType = function(){
			var newType = new RestaurantTypeResource();
			
			newType.restaurantTypeId = vm.restaurantType.restaurantTypeId;
			newType.typeNameDictionary = vm.restaurantType.typeNameDictionary;
            newType.$update().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('RestaurantTypeUpdateSuccess'),"success");
					$state.go('restaurantType');
					
                },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
		}
	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('newRestaurantController', ['$scope','$translate','$http', 'appCONSTANTS' ,'$state', 'RestaurantResource','ToastService' ,'allRestaurantTypePrepService', 'waitersLimitPrepService',  newRestaurantController])

	function newRestaurantController($scope,$translate,$http, appCONSTANTS, $state, RestaurantResource,ToastService,allRestaurantTypePrepService, waitersLimitPrepService){
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.waitersLimit = waitersLimitPrepService;
		vm.waitersLimit.maxNumUsers = vm.waitersLimit.maxNumUsers - vm.waitersLimit.consumedUsers;
		vm.mode = $scope.selectedLanguage != appCONSTANTS.defaultLanguage?"map":"new";
		vm.close = function(){
			$state.go('restaurants');
		}

				vm.RestaurantType = allRestaurantTypePrepService;
		vm.selectedType = allRestaurantTypePrepService[0];
		vm.addNewRestaurant = function(){
			var newRestaurant = new Object();
            newRestaurant.restaurantAdminUserName = vm.restaurantAdmin;
			newRestaurant.restaurantAdminPassword = vm.restaurantAdminPassword;
			newRestaurant.restaurantNameDictionary = vm.restaurantNameDictionary;
			newRestaurant.restaurantDescriptionDictionary = vm.restaurantDescriptionDictionary;
			newRestaurant.restaurantTypeId = vm.selectedType.restaurantTypeId;
			var model = new FormData();
			model.append('data', JSON.stringify(newRestaurant));
			model.append('file', restaurantLogo);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Restaurants/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('restaurantAddSuccess'),"success");
					$state.go('restaurants');
				},
				function (data, status) {
				    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);

		}


		        vm.LoadUploadLogo = function () {
            $("#logoImage").click();
        }
        var restaurantLogo;
        $scope.AddRestaurantLogo = function (element) {
            var logoFile = element[0];

            var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

            if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

                if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
                    $scope.newRestaurantForm.$dirty = true;
                    $scope.$apply(function () {

                        restaurantLogo = logoFile;
                        var reader = new FileReader();

                        reader.onloadend = function () {
                            vm.restaurantLogo = reader.result;
                            $scope.$apply();
                        };
                        if (logoFile) {
                            reader.readAsDataURL(logoFile);
                        }
                    })
                } else {
                    $("#logoImage").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
                }

            } else {
                if (logoFile) {
                    $("#logoImage").val('');
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
                }

            }


        }
    }
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('restaurantController', ['$scope','$translate', 'appCONSTANTS','$uibModal', 'RestaurantResource','ActivateRestaurantResource','DeactivateRestaurantResource','RestaurantTypeResource','restaurantsPrepService','ToastService', 'waitersLimitPrepService',  restaurantController])

    function restaurantController($scope,$translate, appCONSTANTS,$uibModal, RestaurantResource,ActivateRestaurantResource,DeactivateRestaurantResource,RestaurantTypeResource,restaurantsPrepService,ToastService, waitersLimitPrepService){
		
        var vm = this;
		vm.restaurant = restaurantsPrepService;
		vm.Now = $scope.getCurrentTime();
		vm.waitersLimit = waitersLimitPrepService;
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
		
		var allRestaurantType;
		RestaurantTypeResource.getAllRestaurantType().$promise.then(function(results) {
			allRestaurantType = results;	
		});
		function refreshRestaurant(){
			var k = RestaurantResource.getAllRestaurant({page:vm.currentPage}).$promise.then(function(results) {
				vm.restaurant = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshRestaurant();
		}
		
		vm.openRestaurantDialog = function(){
							
			if($scope.selectedLanguage != appCONSTANTS.defaultLanguage)
			{
				var englishRestaurant;
				var k = RestaurantResource.getAllRestaurant({lang: appCONSTANTS.defaultLanguage}).$promise.then(function(results) {
					englishRestaurant = results;
					var modalContent = $uibModal.open({
						templateUrl: './app/Admin/restaurants/templates/editRestaurant.html',
						controller: 'editRestaurantDialogController',
						controllerAs: 'restDlCtrl',
						resolve:{
							mode:function(){return "map"},
							englishRestaurant: function(){return englishRestaurant;},
							type:function(){ return null},
							callBackFunction:function(){return refreshRestaurant;}
						}
						
					});
				});
			}
			else{
				var modalContent = $uibModal.open({
					templateUrl: './app/Admin/restaurants/templates/newRestaurant.html',
					controller: 'restaurantDialogController',
					controllerAs: 'restDlCtrl',
					resolve:{
						allRestaurantType:function(){return allRestaurantType;},
						callBackFunction:function(){return refreshRestaurant;}
					}
					
				});
			}
		}
		function confirmationDelete(itemId){
			RestaurantResource.deleteRestaurant({restaurantId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('restaurantDeleteSuccess'),"success");
				refreshRestaurant();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
		}
		vm.openDeleteRestaurantDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function(){return null},
					callBackFunction:function() { return confirmationDelete }
				}
				
			});
		}
		

		vm.Activate = function(restaurant){
				ActivateRestaurantResource.Activate({restaurantId:restaurant.restaurantId})
				.$promise.then(function(result){
					restaurant.isActive = true;
				},
				function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
				})
		}

		vm.Deactivate = function(restaurant){
			DeactivateRestaurantResource.DeActivate({restaurantId:restaurant.restaurantId})
			.$promise.then(function(result){
				restaurant.isActive = false;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}
		
		
		
	}
	
}
    ());
(function() {
  angular
    .module('home')
    .factory('RestaurantResource', ['$resource', 'appCONSTANTS', RestaurantResource])
    .factory('RestaurantInfoResource', ['$resource', 'appCONSTANTS', RestaurantInfoResource])
    .factory('ActivateRestaurantResource', ['$resource', 'appCONSTANTS', ActivateRestaurantResource])
    .factory('DeactivateRestaurantResource', ['$resource', 'appCONSTANTS', DeactivateRestaurantResource])
    .factory('AdminWaitersLimitResource', ['$resource', 'appCONSTANTS', AdminWaitersLimitResource]);

  function RestaurantResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Restaurants/:restaurantId', {}, {
      getAllRestaurant: { method: 'GET', useToken: true,params:{lang:'@lang'} },
      getAllRestaurantsName: {url: appCONSTANTS.API_URL + 'Restaurants/Name', method: 'GET', useToken: true,isArray:true },      
      getRestaurant: { method: 'GET', useToken: true },
	    create: { method: 'POST', useToken: true },
	    deleteRestaurant: { method: 'DELETE', useToken: true },
	    update: { method: 'PUT', useToken: true }
    })
  }

  function ActivateRestaurantResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Restaurants/:restaurantId/Activate', {}, {
	    Activate: { method: 'GET', useToken: true }
    })
  }
  function DeactivateRestaurantResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Restaurants/:restaurantId/DeActivate', {}, {
	    DeActivate: { method: 'GET', useToken: true }
    })
  }
  
  function AdminWaitersLimitResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Users/GetMaxAndConUsers', {}, {
	    getWaitersLimitAndConsumed: { method: 'GET', useToken: true }
    })
  }
  function RestaurantInfoResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Restaurants/GetGlobalRestaurantInfo', {}, {
	    getRestaurantInfo: { method: 'GET', useToken: true }
    })
  }
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('restaurantTypeController', ['$scope', '$translate' , 'appCONSTANTS','$uibModal', 'RestaurantTypeResource','restaurantTypesPrepService','ToastService',  restaurantTypeController])

    function restaurantTypeController($scope, $translate, appCONSTANTS,$uibModal, RestaurantTypeResource,restaurantTypesPrepService,ToastService){

        var vm = this;
		vm.restaurantTypes = restaurantTypesPrepService;
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[0].children[0]).addClass("active")
		
		function refreshType(){
			var k = RestaurantTypeResource.getAllRestaurantType().$promise.then(function(results) {
				vm.restaurantTypes = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.openTypeDialog = function(){		
			if($scope.selectedLanguage != appCONSTANTS.defaultLanguage)
			{
				var englishRestaurantType;
				var k = RestaurantTypeResource.getAllRestaurantType({lang: appCONSTANTS.defaultLanguage}).$promise.then(function(results) {
					englishRestaurantType = results;
					var modalContent = $uibModal.open({
						templateUrl: './app/Admin/restaurants/templates/editType.html',
						controller: 'editRestaurantTypeDialogController',
						controllerAs: 'editRestTypeDlCtrl',
						resolve:{
							mode:function(){return "map"},
							englishRestaurantType: function(){return englishRestaurantType;},
							type:function(){ return null},
							callBackFunction:function(){return refreshType;}
						}
						
					});
				});
			}
			else{
				var modalContent = $uibModal.open({
					templateUrl: './app/Admin/restaurants/templates/newType.html',
					controller: 'restaurantTypeDialogController',
					controllerAs: 'restTypeDlCtrl',
					resolve:{
						callBackFunction:function(){return refreshType;}
					}
					
				});
			}
		}
		function confirmationDelete(itemId){
			RestaurantTypeResource.deleteType({restaurantTypeId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('RestaurantTypeDeleteSuccess'),"success");
				refreshType();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.openDeleteTypeDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function(){return $translate.instant('RestaurantTypeDeleteMessage')},
					callBackFunction:function() { return confirmationDelete }
				}
				
			});
		}
		
		vm.openEditTypeDialog = function(index){
			var modalContent = $uibModal.open({
				templateUrl: './app/Admin/restaurants/templates/editType.html',
				controller: 'editRestaurantTypeDialogController',
				controllerAs: 'editRestTypeDlCtrl',
				resolve:{
					mode:function(){return "edit"},
					englishRestaurantType: function(){return null;},
					type:function(){ return vm.restaurantTypes[index]},
					callBackFunction:function(){return refreshType;}
				}
				
			});
			
		}
		
		
		
		
	}
	
}
    ());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('restaurantTypeDialogController', ['$state', 'appCONSTANTS', 'RestaurantTypeResource','ToastService','$rootScope','$translate',  restaurantTypeDialogController])

	function restaurantTypeDialogController($state, appCONSTANTS, RestaurantTypeResource,ToastService,$rootScope,$translate){
		var vm = this;
		
		vm.typeNameDictionary = {};
		vm.language = appCONSTANTS.supportedLanguage;
		
		vm.AddNewType = function(){
			console.log(vm.typeNameDictionary)
			var newType = new RestaurantTypeResource();
            newType.typeNameDictionary = vm.typeNameDictionary;
            newType.$create().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('RestaurantTypeAddSuccess'),"success");
					$state.go('restaurantType');
                },
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
                }
            );
		}
	}	
}());
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
(function() {
    angular
      .module('home')
      .factory('RoomResource', ['$resource', 'appCONSTANTS', RoomResource])
      .factory('ActivateRoomResource', ['$resource', 'appCONSTANTS', ActivateRoomResource])
      .factory('DeactivateRoomResource', ['$resource', 'appCONSTANTS', DeactivateRoomResource])
      .factory('AdminRoomsLimitResource', ['$resource', 'appCONSTANTS', AdminRoomsLimitResource]);

      function RoomResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Rooms/:roomId', {}, {
          getAllRooms: { method: 'GET', useToken: true },
          getRoom: { method: 'GET', useToken: true },
          create: { method: 'POST', useToken: true },
          deleteRoom: { method: 'DELETE', useToken: true },
          update: { method: 'PUT', useToken: true }
        })
      }

        function ActivateRoomResource($resource, appCONSTANTS) {
          return $resource(appCONSTANTS.API_URL + 'Rooms/:roomId/Activate', {}, {
            Activate: { method: 'GET', useToken: true}
          })
      }
      function DeactivateRoomResource($resource, appCONSTANTS) {
          return $resource(appCONSTANTS.API_URL + 'Rooms/:roomId/DeActivate', {}, {
            Deactivate: { method: 'GET', useToken: true }
          })
      }

      function AdminRoomsLimitResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/GetMaxAndConUsers', {}, {
          getRoomsLimitAndConsumed: { method: 'GET', useToken: true }
        })
      }

}());
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
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('roomsController', ['$scope','$stateParams','$translate', 'appCONSTANTS','$uibModal', 'RoomResource'
        ,'ActivateRoomResource','DeactivateRoomResource','RoomsPrepService','roomLimitPrepService','ToastService',  roomsController])

    function roomsController($scope,$stateParams ,$translate , appCONSTANTS,$uibModal, RoomResource,
        ActivateRoomResource,DeactivateRoomResource,RoomsPrepService,roomLimitPrepService,ToastService){

        var vm = this;
        vm.rooms = RoomsPrepService;
        vm.roomsLimit = roomLimitPrepService;
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[2].children[0]).addClass("active")

				function refreshRooms(){
			var k = RoomResource.getAllRooms({ page:vm.currentPage }).$promise.then(function(results) {

								vm.rooms = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPage  = 1;
        vm.changePageRooms  = function (page) {
            vm.currentPage = page;
            refreshRooms();
		}
		vm.openRoomDialog = function(){
				var modalContent = $uibModal.open({
					templateUrl: './app/admin/room/templates/newRoom.html',
					controller: 'roomDialogController',
					controllerAs: 'roomDlCtrl',
					resolve:{
						callBackFunction:function(){return refreshRooms;}
					}

									});
		}
		function confirmationDelete(itemId){
			RoomResource.deleteRoom({roomId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('RoomDeleteSuccess'),"success");
				if(vm.rooms.results.length ==1 && vm.currentPage > 1)
					vm.currentPage = vm.currentPage -1;
				refreshRooms();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.openDeleteRoomDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}

							});
		}

				vm.openEditRoomDialog = function(index){
			var modalContent = $uibModal.open({
				templateUrl: './app/admin/room/templates/editRoom.html',
				controller: 'editRoomDialogController',
				controllerAs: 'editRoomDlCtrl',
				resolve:{
					Room:function(){ return vm.rooms.results[index]},
					callBackFunction:function(){return refreshRooms;}
				}

							});

					}
		vm.ActivateRoom = function(room){
			ActivateRoomResource.Activate({roomId:room.roomId})
			.$promise.then(function(result){
				room.isActive = true;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}

		vm.DeactivateRoom = function(room){
			DeactivateRoomResource.Deactivate({roomId:room.roomId})
			.$promise.then(function(result){
				room.isActive = false;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}		

			}

	}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editReceptionistDialogController', ['$uibModalInstance','$translate', 'ReceptionistResource','ToastService','Receptionist','callBackFunction',  editReceptionistDialogController])

	function editReceptionistDialogController($uibModalInstance, $translate, ReceptionistResource,ToastService,  Receptionist, callBackFunction){
		var vm = this;
        vm.Receptionist = Receptionist;
        vm.Receptionist.confirmPassword = Receptionist.password;
        vm.close = function(){
			$uibModalInstance.dismiss('cancel');
        }
		vm.updateReceptionist = function(){
			var updateReceptionist = new ReceptionistResource();
            updateReceptionist.userName = vm.Receptionist.userName;
            updateReceptionist.name = vm.Receptionist.name;
            updateReceptionist.password = vm.Receptionist.password;
            updateReceptionist.userId = Receptionist.userId;
            updateReceptionist.$update().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('ReceptionistUpdateSuccess'),"success");
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
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editSupervisorDialogController', ['$uibModalInstance','$translate', 'SupervisorResource','ToastService','Supervisor', 'features','callBackFunction', 'selectedLanguage',  editSupervisorDialogController])

	function editSupervisorDialogController($uibModalInstance, $translate, SupervisorResource,ToastService,  Supervisor, features, callBackFunction,selectedLanguage){
		var vm = this;
        vm.Supervisor = Supervisor;
        vm.Supervisor.confirmPassword = Supervisor.password;
        vm.selectedLanguage = selectedLanguage;
        vm.features = features.results;        
        vm.SelectedFeatureId=[];
        vm.SelectedFeature = [];
        Supervisor.features.forEach(function(element) {
			var kk = vm.features.filter(function(item){
				return (item.featureId ===  element.featureId);
              })[0];

              			vm.SelectedFeatureId.push(element.featureId)
			vm.SelectedFeature.push(element)
        }, this);

        vm.close = function(){
			$uibModalInstance.dismiss('cancel');
        }

		vm.featureChange = function(){
			vm.SelectedFeature = []
			for(var i=0;i<vm.SelectedFeatureId.length;i++){
				var feature = vm.features.filter(function(item){
					return (item.featureId ===  vm.SelectedFeatureId[i]);
				})[0]
				vm.SelectedFeature.push(feature)  
			}
		}
		vm.updateSupervisor = function(){
			var updateSupervisor = new SupervisorResource();
            updateSupervisor.userName = vm.Supervisor.userName;
            updateSupervisor.name = vm.Supervisor.name;
            updateSupervisor.password = vm.Supervisor.password;
            updateSupervisor.userId = Supervisor.userId;
			updateSupervisor.features = [];
			vm.SelectedFeature.forEach(function(element) {
                updateSupervisor.features.push(element);
			}, this);
            updateSupervisor.$update().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('SupervisorUpdateSuccess'),"success");
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
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('receptionistDialogController', ['$scope','$uibModalInstance','$translate' , 'ReceptionistResource','ToastService','callBackFunction','$rootScope',  receptionistDialogController])

	function receptionistDialogController($scope,$uibModalInstance, $translate , ReceptionistResource,ToastService,callBackFunction,$rootScope){
		var vm = this;
		vm.close = function(){
			$uibModalInstance.dismiss('cancel');
		}

				vm.AddNewReceptionist = function(){
			var newReceptionist = new ReceptionistResource();
            newReceptionist.userName = vm.userName;
            newReceptionist.name = vm.name;
			newReceptionist.password = vm.password;
            newReceptionist.$create().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('ReceptionistAddSuccess'),"success");
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
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('supervisorDialogController', ['$scope','$uibModalInstance','$translate' , 'SupervisorResource','ToastService','features','callBackFunction','selectedLanguage',  supervisorDialogController])

	function supervisorDialogController($scope,$uibModalInstance, $translate , SupervisorResource,ToastService, features,callBackFunction,selectedLanguage){
        var vm = this;
        vm.features = features.results;
        vm.SelectedFeature= [];
		vm.close = function(){
			$uibModalInstance.dismiss('cancel');
		}
		vm.selectedLanguage = selectedLanguage
		vm.AddNewSupervisor = function(){
			var newSupervisor = new SupervisorResource();
            newSupervisor.userName = vm.userName;
            newSupervisor.name = vm.name;
            newSupervisor.password = vm.password;
            newSupervisor.features = [];

			         	vm.SelectedFeature.forEach(function(element) {
            	newSupervisor.features.push(element);
            }, this);

                        newSupervisor.$create().then(
                function(data, status) {
					ToastService.show("right","bottom","fadeInUp",$translate.instant('SupervisorAddSuccess'),"success");
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
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('usersController', ['$scope','$stateParams','$translate', 'appCONSTANTS','$uibModal', 'ReceptionistResource'
        ,'ActivateReceptionistResource','DeactivateReceptionistResource','SupervisorResource','ActivateSupervisorResource','DeactivateSupervisorResource',
        'ReceptionistsPrepService','SupervisorsPrepService','ToastService','FeatureResource',  usersController])

    function usersController($scope,$stateParams ,$translate , appCONSTANTS,$uibModal, ReceptionistResource,
        ActivateReceptionistResource,DeactivateReceptionistResource,SupervisorResource,ActivateSupervisorResource,DeactivateSupervisorResource,
        ReceptionistsPrepService,SupervisorsPrepService,ToastService,FeatureResource){

        var vm = this;
		vm.receptionists = ReceptionistsPrepService;
		vm.supervisors = SupervisorsPrepService;

				$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")

				function refreshReceptionists(){
			var k = ReceptionistResource.getAllReceptionists({ page:vm.currentPageReceptionists }).$promise.then(function(results) {

								vm.receptionists = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPageReceptionists = 1;
        vm.changePageReceptionists = function (page) {
            vm.currentPageReceptionists = page;
            refreshReceptionists();
		}
		vm.openReceptionistDialog = function(){
				var modalContent = $uibModal.open({
					templateUrl: './app/admin/users/templates/newReceptionist.html',
					controller: 'receptionistDialogController',
					controllerAs: 'receptionistDlCtrl',
					resolve:{
						callBackFunction:function(){return refreshReceptionists;}
					}

									});
		}
		function confirmationDeleteReceptionists(itemId){
			ReceptionistResource.deleteReceptionist({receptionistId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('ReceptionistDeleteSuccess'),"success");
				if(vm.receptionists.results.length ==1 && vm.currentPageReceptionists > 1)
					vm.currentPageReceptionists = vm.currentPageReceptionists -1;
				refreshReceptionists();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.openDeleteReceptionistDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDeleteReceptionists }
				}

							});
		}

				vm.openEditReceptionistDialog = function(index){
			var modalContent = $uibModal.open({
				templateUrl: './app/admin/users/templates/editReceptionist.html',
				controller: 'editReceptionistDialogController',
				controllerAs: 'editReceptionistDlCtrl',
				resolve:{
					Receptionist:function(){ return vm.receptionists.results[index]},
					callBackFunction:function(){return refreshReceptionists;}
				}

							});

					}
		vm.ActivateReceptionist = function(receptionist){
			ActivateReceptionistResource.Activate({receptionistId:receptionist.receptionistId})
			.$promise.then(function(result){
				receptionist.isActive = true;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}

		vm.DeactivateReceptionist = function(receptionist){
			DeactivateReceptionistResource.Deactivate({receptionistId:receptionist.receptionistId})
			.$promise.then(function(result){
				receptionist.isActive = false;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}		




				                function refreshSupervisors(){
			var k = SupervisorResource.getAllSupervisors({ page:vm.currentPageSupervisors }).$promise.then(function(results) {

								vm.supervisors = results;
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPageSupervisors = 1;
        vm.changePageSupervisors = function (page) {
            vm.currentPageSupervisors = page;
            refreshSupervisors();
		}
		vm.openSupervisorDialog = function(){
            FeatureResource.getAllActivatedFeatures({ pageSize : 0 }).$promise.then(function(results) {
                var modalContent = $uibModal.open({
					templateUrl: './app/admin/users/templates/newSupervisor.html',
					controller: 'supervisorDialogController',
					controllerAs: 'supervisorDlCtrl',
					resolve:{
                        features:function(){ return results},
                        callBackFunction:function(){return refreshSupervisors;},
                        selectedLanguage:function(){return $scope.selectedLanguage;}
					}

					                });			
            },
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });

						}
		function confirmationDeleteSupervisor(itemId){
			SupervisorResource.deleteSupervisor({supervisorId:itemId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('ReceptionistDeleteSuccess'),"success");
				if(vm.supervisors.results.length ==1 && vm.currentPageSupervisors > 1)
					vm.currentPageSupervisors = vm.currentPageSupervisors -1;
				refreshSupervisors();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.openDeleteSupervisorDialog = function(name,id){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDeleteSupervisor }
				}

							});
		}

				vm.openEditSupervisorDialog = function(index){
            FeatureResource.getAllActivatedFeatures({ pageSize : 0 }).$promise.then(function(results) {
                var modalContent = $uibModal.open({
                    templateUrl: './app/admin/users/templates/editSupervisor.html',
                    controller: 'editSupervisorDialogController',
                    controllerAs: 'editSupervisorDlCtrl',
                    resolve:{
                        Supervisor:function(){ return vm.supervisors.results[index]},
                        features:function(){ return results},                        
                        callBackFunction:function(){return refreshSupervisors;},
                        selectedLanguage:function(){return $scope.selectedLanguage;}
                    }

                                    });
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.ActivateSupervisor = function(supervisor){
			ActivateSupervisorResource.Activate({supervisorId:supervisor.supervisorId})
			.$promise.then(function(result){
				supervisor.isActive = true;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}

		vm.DeactivateSupervisor = function(receptionist){
			DeactivateSupervisorResource.Deactivate({supervisorId:supervisor.supervisorId})
			.$promise.then(function(result){
				supervisor.isActive = false;
			},
			function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
			})
		}		
	}

	}());
(function() {
    angular
      .module('home')
      .factory('ReceptionistResource', ['$resource', 'appCONSTANTS', ReceptionistResource])
      .factory('ActivateReceptionistResource', ['$resource', 'appCONSTANTS', ActivateReceptionistResource])
      .factory('DeactivateReceptionistResource', ['$resource', 'appCONSTANTS', DeactivateReceptionistResource])
      .factory('SupervisorResource', ['$resource', 'appCONSTANTS', SupervisorResource])
      .factory('ActivateSupervisorResource', ['$resource', 'appCONSTANTS', ActivateSupervisorResource])
      .factory('DeactivateSupervisorResource', ['$resource', 'appCONSTANTS', DeactivateSupervisorResource]);

      function ReceptionistResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Users/Receptionist/:receptionistId', {}, {
        getAllReceptionists: { method: 'GET', useToken: true },
        getReceptionist: { method: 'GET', useToken: true },
        create: { method: 'POST', useToken: true },
        deleteReceptionist: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }

    function ActivateReceptionistResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/Receptionist/:receptionistId/Activate', {}, {
          Activate: { method: 'GET', useToken: true}
        })
    }
    function DeactivateReceptionistResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/Receptionist/:receptionistId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }


    function SupervisorResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/Supervisor/:supervisorId', {}, {
          getAllSupervisors: { method: 'GET', useToken: true },
          getSupervisor: { method: 'GET', useToken: true },
          create: { method: 'POST', useToken: true },
          deleteSupervisor: { method: 'DELETE', useToken: true },
          update: { method: 'PUT', useToken: true }
        })
      }

        function ActivateSupervisorResource($resource, appCONSTANTS) {
          return $resource(appCONSTANTS.API_URL + 'Users/Supervisor/:supervisorId/Activate', {}, {
            Activate: { method: 'GET', useToken: true}
          })
      }
      function DeactivateSupervisorResource($resource, appCONSTANTS) {
          return $resource(appCONSTANTS.API_URL + 'Users/Supervisor/:supervisorId/DeActivate', {}, {
            Deactivate: { method: 'GET', useToken: true }
          })
      }

}());
  (function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
              .state('users', {
					url: '/users',
                    templateUrl: './app/admin/users/templates/users.html',
                    controller: 'usersController',
                    'controllerAs': 'userCtrl',
                    data: {
                        permissions: {
                            only: ['admin'],
                           redirectTo: 'root'
                        }
                    },
                    resolve: {
                        ReceptionistsPrepService: ReceptionistsPrepService,
                        SupervisorsPrepService: SupervisorsPrepService
                    }

                                 })
        });

                ReceptionistsPrepService.$inject = ['ReceptionistResource']
        function ReceptionistsPrepService(ReceptionistResource) {
            return ReceptionistResource.getAllReceptionists().$promise;
        }
        SupervisorsPrepService.$inject = ['SupervisorResource']
        function SupervisorsPrepService(SupervisorResource) {
            return SupervisorResource.getAllSupervisors().$promise;
        }
}());
