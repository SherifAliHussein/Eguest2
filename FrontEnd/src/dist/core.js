(function() {
    'use strict';

    angular
    .module('core', [
    		'ngResource',
        'ui.router',
        //'ngMaterial',
        'ngStorage',
      'permission',
      'bw.paging',
      //'angular-progress-arc',
      'ui.event',
      'ngProgressLite',
    'ui.bootstrap',
    'pascalprecht.translate',
    'checklist-model'
    ]);
}());
;(function() {
  'use strict';
  angular.module('home', ['core']) 
  .service('CurrentItem', function() {
    this.CurrentItemId = 0;
  })  
  .service('CartIconService', function() {
    this.cartIcon = true;
  })  
.service('totalCartService', function() {
    this.homeTotalNo = this.homeTotalNo;
  });
  ;
  
}());
;(function() {
  'use strict';

  angular
      .module('core')
      // registering 'lodash' as a constant to be able to inject it later
      .constant('_', window._)
      .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }) 
}());
;(function() {
	angular
		.module('core')
		.constant('appCONSTANTS', {
			'API_URL': 'http://localhost:36402/api/',
			// 'API_URL': 'http://eguestbackend.azurewebsites.net/api/',
			'defaultLanguage':'en'
		})
		.constant('messageTypeEnum', {
      success: 0,
      warning: 1,
      error: 2
		}).constant('userRolesEnum', {
			Room:"Room"
    });
}());;(function() {
    'use strict';

    angular
        .module('core')
        .config(function($stateProvider, $urlRouterProvider,) {

            $urlRouterProvider.otherwise('/');

            // main views
            $stateProvider
              .state('root', {
                    url: '/',
               
                    controller: 'loginController',
                   
                    data: {
                       permissions: {
                          
                        }
                    },
                 
                })
                .state('login', {
                    url: '/login',
                    templateUrl: './app/core/login/templates/login.html',
                    'controller': 'loginController'
                })
                .state('menu', {
                    url: '/restaurant/:restaurantId/menu',
                    templateUrl: './app/menu/menu.html',
                    controller: 'menuController',
                    'controllerAs': 'menuCtrl',
                    resolve: {
                        menuPrepService: menuPrepService,
                        ResturantPrepService: ResturantPrepService
                    }
                })


                //$locationProvider.html5Mode(true);
                .state('Items', {
                    url: '/restaurant/:restaurantId/menu/:menuId/Category/:categoryId/Item',
                    templateUrl: './app/items/Templates/Item.html',
                    controller: 'ItemController',
                    'controllerAs': 'itemCtrl',
                    data: {
                        permissions: {
                            // only: ['Waiter'],
                            redirectTo: 'root'
                        },
                        displayName: 'items'
                    },
                    resolve: {
                        categoryItemsTemplatePrepService: categoryItemsTemplatePrepService,
                        ResturantPrepService: ResturantPrepService
                    }
                })
                .state('cart', {
                    url: '/restaurant/:restaurantId/cart',
                    templateUrl: './app/cart/cart.html',
                    'controller': 'cartController',
                    'controllerAs': 'cartCtrl',
                    resolve: {
                        ResturantPrepService: ResturantPrepService
                    }
                })
        });

        
        menuPrepService.$inject = ['MenuResource','OfflineDataResource','$stateParams']
            function menuPrepService(MenuResource,OfflineDataResource, $stateParams) {
                if(navigator.onLine){
                    return MenuResource.getAllMenus({ restaurantId: $stateParams.restaurantId }).$promise;
                }
                else{
                    return OfflineDataResource.getMenus();
                }
                // return MenuResource.getAllMenus().$promise;
                
            }
            
        ResturantPrepService.$inject = ['ResturantResource','$stateParams']
        function ResturantPrepService(ResturantResource, $stateParams) {
            return ResturantResource.getResturantGlobalInfo({ restaurantId: $stateParams.restaurantId }).$promise;
        }


        categoryItemsTemplatePrepService.$inject = ['ItemsResource','$stateParams','OfflineDataResource']
        function categoryItemsTemplatePrepService(ItemsResource,$stateParams,OfflineDataResource) {
            if(navigator.onLine){
            return ItemsResource.getAllItems({ CategoryId: $stateParams.categoryId }).$promise;
        }
        else{
            return OfflineDataResource.getAllItems($stateParams.menuId,$stateParams.categoryId);
        }
        //return ItemsResource.getAllItems({ CategoryId: $stateParams.categoryId }).$promise;
        }
    
}());
;(function() {
  'use strict';

  angular
  .module('core').config(["$translateProvider","appCONSTANTS",function($translateProvider,appCONSTANTS){
        
        var en_translations = {
            "restaurantType" : "Restaurant types",
            "restaurant" : "Restaurants",
            "Name" : "Name",
            "AddType": "Add new type",
            "NoRestaurantTypesAvailable":"There is no restaurant types.",
            "saveChangesBtn":"save changes",
            "DiscardBtn":"Discard",
            "NewRestaurantTypeLbl":"New restaurant type",
            "requiredErr":"required",
            "UpdateRestaurantTypeLbl":"Update restaurant type",
            "deleteConfirmationLbl":" Are you sure you want delete ",
            "deleteBtn":"Delete",
            "cancelBtn":"cancel",
            "DescriptionLbl":"Description",
            "AddRestaurantBtn":"Add new restaurant",
            "NoRestaurantAvailable":"There is no restaurants.",
            "LogoLbl":"logo",
            "TypeLbl":"Type",
            "AdminUserLbl":"Admin user",
            "AdminUserPasswordLbl":"Admin password",
            "ActivateBtn":"Activate",
            "DeActivateBtn":"DeActivate",
            "NewRestaurantLbl":"New restaurant",
            "UpdateRestaurantLbl":"Update restaurant",
            "restaurantTypesLbl" : "Restaurant Type",
            "restaurantDeleteSuccess":"restaurant deleted successfully.",
            "restaurantUpdateSuccess":"restaurant updated successfully.",
            "restaurantAddSuccess":"restaurant added successfully.",
            "UploadBtn":"select logo",
            "imgaeSizeError":"Maximum size allowed is 2MB",
            "imageTypeError":"Only (.jpeg, .bmp, .png) extensions are allowed.",
            "AddMenuBtn": "Add new menu",
            "NoMenusAvailable":"There is no menus.",
            "UpdateMenuLbl":"Update Menu",
            "NewMenuLbl":"New menu type",
            "Menu":"Menu",
            "menuAddSuccess":"Menu added successfully.",
            "menuDeleteSuccess":"Menu deleted successfully.",
            "menuUpdateSucess":"Menu updated successfully.",
            "CategoriesBtn":"View Categories",
            "AddCategoryBtn":"Add new category",
            "NoCategoryAvailable":"There is no categories.",
            "Imagelbl":"Image",
            "newCategoryLbl":"New Category",
            "CategoryAddSuccess":"Category added successfully.",
            "UpdateCategoryLbl":"Update Category",
            "UploadImageBtn":"Select Image",
            "CategoryupdateSuccess":"Category updated successfully.",
            "CategoryDeleteSuccess":"Category deleted successfully.",
            "size":"Sizes",
            "AddSizeBtn":"Add new size",
            "NoSizesAvailable":"there is no sizes.",
            "sizeAddSuccess":"Size added successfully.",
            "NewSizeLbl":"New size",
            "UpdateSizeLbl":"Update size",
            "UpdateSizeSuccess":"Size updated successfully.",
            "SizeDeleteSuccess":"Size deleted successfully.",
            "NameLengthError":"Name length must be 3-100 characters.",
            "DescLengthError":"Description length must be 3-300 characters.",
            "sideItem":"Side items",
            "value":"Value",
            "AddSideItemBtn":"Add new side item",
            "NoSideItemsAvailable":"there is no side items.",
            "SideItemAddSuccess":"Side item added successfully.",
            "NewSideItemLbl":"New side item",
            "UpdateSideItemLbl":"Update side item",
            "UpdateSideItemSuccess":"Side item updated successfully.",
            "SideItemDeleteSuccess":"Side item deleted successfully.",
            "english":"english",
            "arabic":"arabic",
            "logoutBtn":"Logout",
            "NoRestaurantDefault":"You must add restaurant in english first.",
            "status":"Status",
            "ItemsBtn":"View items",
            "NoItemAvailable":"there is no items.",
            "AddItemBtn":"Add new Item",
            "itemAddSuccess":"item added successfully.",
            "NewItemtLbl":"New item",
            "UpdateItemLbl":"Update item",
            "Pricelbl":"Price",
            "itemDeleteSuccess":"item deleted successfully.",
            "hasSizeLbl":"has Size?",
            "selectSizeLbl":"Select Size",
            "hasSideItemLbl":"has Side Item?",
            "selectSideItemLbl":"Select Side Item",
            "ItemUpdateSuccess":"item updated successfully.",
            "MaxValueLbl":"Maximum value for side items",
            "ReadyLbl":"Ready",
            "RestaurantTypeDeleteMessage":"all restaurants under this type will be deleted",
            "ConfirmPasswordLbl":"Confirm password",
            "RestaurantTypeDeleteSuccess":"restaurant type deleted successfully.",
            "MaxSideItemValueError":"Must be in range for the minimum value and total value of side items",
            "waiter":"Waiter",
            "AddWaiterBtn":"Add new Waiter",
            "NoWaiterAvailable":"There is no waiters",
            "UserName":"User Name",
            "NewWaiterLbl":"New waiter",
            "UpdateWaiterLbl":"Update waiter",
            "WaiterDeleteSuccess":"Waiter deleted successfully.",
            "WaiterUpdateSuccess":"Waiter updated successfully.",
            "WaiterAddSuccess":"Waiter added successfully.",

            "background":"background",
            "AddbackgroundBtn":"Add new background",
            "NobackgroundAvailable":"There is no backgrounds",
            "UserName":"User Name",
            "NewbackgroundLbl":"New background",
            "UpdatebackgroundLbl":"Update background",
            "backgroundDeleteSuccess":"background deleted successfully.",
            "backgroundUpdateSuccess":"background updated successfully.",
            "backgroundAddSuccess":"background added successfully.",
            "CurrentBtn":"Current Background",
            "NotCurrentBtn":" Not", 

            "Template":"Template"
            ,
            "CheckOut":" CHECK OUT",
            "Item":" Item",
            "NUM":" NUM",
            "Price":" Price",
            "EDIT":" EDIT",
            "Add":" ADD",
            "Remove":" REMOVE",
            "SAR":" SAR",
            "Total":"TOTAL",
            "Size":"Size",
            "Logout":"Logout",

            "requestConfirmationLbl":"Are you sure you want request ",
            "ApproveBtn":"Approve",
            "RequestSuccess":"Request successfuly",
            "BackToFeatures":"Back to features page"
            
        }
        
        var ar_translations = {
            "restaurantType" : "أنواع المطاعم",
            "restaurant" : "مطاعم",
            "Name" : " الاسم",
            "AddType": "اضف نوع جديد",
            "NoRestaurantTypesAvailable":".لا يوجد انواع مطعم",
            "saveChangesBtn":"حفظ",
            "DiscardBtn":"تجاهل",
            "NewRestaurantTypeLbl":"نوع مطعم جديد",
            "requiredErr":"مطلوب",
            "UpdateRestaurantTypeLbl":"تحديث نوع المطعم",
            "deleteConfirmationLbl":" هل انت متأكد انك تريد حذف ",
            "deleteBtn":"حذف",
            "cancelBtn":"إلغاء",
            "DescriptionLbl":"وصف",
            "AddRestaurantBtn":"اضف مطعم جديد",
            "NoRestaurantAvailable":".لا يوجد مطاعم",
            "LogoLbl":"شعار",
            "TypeLbl":"نوع",            
            "AdminUserLbl":"المشرف",
            "AdminUserPasswordLbl":"كلمة مرور المشرف",
            "ActivateBtn":"تفعيل",
            "DeActivateBtn":"عطل",
            "NewRestaurantLbl":"مطعم جديد",
            "UpdateRestaurantLbl":"تحديث مطعم",
            "restaurantTypesLbl" : "نوع المطاعم",
            "restaurantDeleteSuccess":".تم حذف المطعم بنجاح",
            "restaurantUpdateSuccess":".تم تحديث المطعم بنجاح",
            "restaurantAddSuccess":".تم ادخال المطعم بنجاح",
            "UploadBtn":"اختار شعار",
            "AddMenuBtn": "اضف قائمه جديد",
            "NoMenusAvailable":".لا يوجد قائمه",
            "UpdateMenuLbl":"تحديث القائمه",
            "NewMenuLbl":"قائمه جديده",
            "Menu":"قائمه",
            "menuAddSuccess":".تم ادخال القائمه بنجاح",
            "menuDeleteSuccess":".تم حذف القائمه بنجاح",
            "menuUpdateSucess":".تم تحديث القاءمه بنجاح",
            "CategoriesBtn":"عرض الاقسام",
            "AddCategoryBtn":"اضف قسم جديد",
            "NoCategoryAvailable":".لا يوجد اقسام",
            "Imagelbl":"صوره",
            "newCategoryLbl":"قسم جديد",
            "CategoryAddSuccess":".تم ادخال القسم بنجاح",
            "UpdateCategoryLbl":"تحديث القسم",
            "UploadImageBtn":"اختار الصوره",
            "CategoryupdateSuccess":".تم تحديث القسم بنجاح",
            "CategoryDeleteSuccess":".تم حذف القسم بنجاح",
            "size":"احجام",
            "AddSizeBtn":"اضف حجم جديد",
            "NoSizesAvailable":".لا يوجد احجام",
            "sizeAddSuccess":".تم ادخال الحجم لنجاح",
            "NewSizeLbl":"حجم جديد",
            "UpdateSizeLbl":"تحديث الحجم",
            "UpdateSizeSuccess":".تم تحديث الحجم بنجاح",
            "SizeDeleteSuccess":".تم حذف الحجم بنجاح",
            "NameLengthError":".طول الاسم يجب من 3-100 حرف",
            "DescLengthError":".طول الوصف يجب من 3-100 حرف",
            "sideItem":"طبق جانبى",
            "value":"قيمه",
            "AddSideItemBtn":"اضف طبق جانبي",
            "NoSideItemsAvailable":".لا يوجد اطباق جانبيه",
            "SideItemAddSuccess":".تم ادخال طبق جانبي بنجاح",
            "NewSideItemLbl":"طبق جانبي جديد",
            "UpdateSideItemLbl":"تحديث طبق جانبي",
            "UpdateSideItemSuccess":".تم تحديث الطبق الجانبيي بنجاح",
            "SideItemDeleteSuccess":".تم حذف طبق الجانبي بنجاح",
            "english":"انجليزي",
            "arabic":"عربي",
            "logoutBtn":"خروج",
            "NoRestaurantDefault":".يجب ادخال مطعم بالانجليزي",
            "NoSizeDefault":".يجب ادخال حجم بالانجليزي",
            "NoMenuDefault":".يجب ادخال قائمة بالانجليزي",
            "NoCategoryDefault":".يجب ادخال قسم بالانجليزي",
            "NoItemDefault":".يجب ادخال منتج بالانجليزي",
            "NoSideItemDefault":".يجب ادخال طبق جانبي بالانجليزي",
            "NoRestaurantTypeDefault":".يجب ادخال نوع مطعم بالانجليزي",
            "RestaurantNotTranslated":".مطعم ليس مترجم بالعربيه",
            "MenuNotTranslated":".قائمة ليس مترجم بالعربيه",
            "status":"الحالة",
            "ItemsBtn":"عرض منتجات",
            "NoItemAvailable":".لا يوجد منتاجات",
            "AddItemBtn":"اضف منتج جديد",
            "CategoryNotTranslated":".قسم ليس مترجم بالعربيه",
            "itemAddSuccess":".تم ادخال منتج بنجاح",
            "NewItemtLbl":"منتج جديد",
            "UpdateItemLbl":"تحديث المنتج",
            "Pricelbl":"السعر",
            "itemDeleteSuccess":".تم حذف المنتج بنجاح",
            "hasSizeLbl":"يوجد احجام؟",
            "selectSizeLbl":"اختار الحجم",
            "hasSideItemLbl":"يوجد اطباق جانبيه؟",
            "selectSideItemLbl":"اختار طبق جتنبي",
            "ItemUpdateSuccess":".تم تحديث المنتج بنجاح",
            "MaxValueLbl":"أقصى قيمه لالاطباق الجانبيه",
            "ReadyLbl":"جاهز",
            "RestaurantTypeDeleteMessage":"سيتم حذف كل المطعام لهذا النوع",
            "ConfirmPasswordLbl":"تأكيد كلمه المرور",
            "RestaurantTypeDeleteSuccess":".تم حذف نوع المطعم بنجاح",
            "MaxSideItemValueError":"يجب ان تكون في نطاق اقل ومجموع قيمة الاطباق الجانبيه",
            "waiter":"نادل",
            "AddWaiterBtn":"اضف نادل جديد",
            "NoWaiterAvailable":".لا يوجد نوادل",
            "UserName":"اسم المستخدم",
            "NewWaiterLbl":"نادل جديد",
            "UpdateWaiterLbl":"تحديث نادل",
            "WaiterDeleteSuccess":".تم حذف نوع نادل بنجاح.",
            "WaiterUpdateSuccess":".تم تحديث النادل بنجاح.",
            "WaiterAddSuccess":".تم ادخال نادل بنجاح",

            "background":"خلفيه المنيو",
            "AddbackgroundBtn":"اضافه خلفيه المنيو",
            "NobackgroundAvailable":"لا يوجد خلفيه المنيو", 
            "NewbackgroundLbl":"خلفيه المنيو جديده",
            "UpdatebackgroundLbl":"تعديل خلفيه المنيو",
            "backgroundDeleteSuccess":"خلفيه المنيو.تم حذف",
            "backgroundUpdateSuccess":"خلفيه المنيو تم تحديث ",
            "backgroundAddSuccess":"خلفيه المنيو تم ادخال",
            "CurrentBtn":"الخلفيه الحاليه",
            "NotCurrentBtn":" ليست الخفيه الحاليه", 

            "Template":"نموذج",

            "CheckOut":"الدفع",
            "Item":" الصنف",
            "NUM":" العدد",
            "Price":" السعر",
            "EDIT":" تعديل",
            "Add":" اضافه",
            "Remove":" حذف",
            "SAR":" ريال",
            "Total":"المجموع",
            "Size":"الحجم",
            "Logout":"خروج",

            "requestConfirmationLbl":"هل انت متأكد انك تريد طلب ",
            "ApproveBtn":"وافق",
            "RequestSuccess":"تم الطلب بنجاح",
            "BackToFeatures":"رجوع الي صفحة الخدمات"
        }
        
        $translateProvider.translations('en-us',en_translations);
        
        $translateProvider.translations('ar-eg',ar_translations);
        
        $translateProvider.preferredLanguage(appCONSTANTS.defaultLanguage);
        
        }]);

}());
;(function() {
    angular
        .module('home')
        .factory('ToastService', ToastService);

    function ToastService() {
        return {
            show: function($positionX,$positionY,$dataEffect,$dataMessage,$dataType,$actionText,$action,$duration){
			
					
				if($(window).width() < 768){
					$positionX = "center";
				}else {
					$positionX = $positionX;
				}		

				if(!$(".pmd-alert-container."+ $positionX +"."+ $positionY).length){
					$('body').append("<div class='pmd-alert-container "+$positionX+" "+$positionY+"'></div>");
				}
					
				var $currentPath = $(".pmd-alert-container."+ $positionX +"."+ $positionY);
				function notificationValue(){
					if($action == "true"){
						if($actionText == null){
							$notification =  "<div class='pmd-alert' data-action='true'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>×</a></div>";
						}else{
							$notification =  "<div class='pmd-alert' data-action='true'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>"+$actionText+"</a></div>";	
						}
						return $notification;
					}else {
						if($actionText == null){
							$notification = "<div class='pmd-alert' data-action='false'>"+$dataMessage+"</div>";
						}else{
							$notification =  "<div class='pmd-alert' data-action='false'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>"+$actionText+"</a></div>";	
						}
						return $notification;
					}
				}
				var $notification = notificationValue();
				var boxLength = $(".pmd-alert-container."+ $positionX +"."+ $positionY + " .pmd-alert").length;
				
				if($(this).attr("data-duration") !== undefined){
					$duration = $(this).attr("data-duration");
				}else {
					$duration = 3000;
				}
				
				if (boxLength > 0) {
					if ($positionY == 'top') {
						$currentPath.append($notification);
					}
					else {
						$currentPath.prepend($notification);
					}
					$currentPath.width($(".pmd-alert").outerWidth());
					if($action == "true"){
						$currentPath.children("[data-action='true']").addClass("visible" +" "+ $dataEffect);	
					}else{
						$currentPath.children("[data-action='false']").addClass("visible" +" "+ $dataEffect).delay($duration).slideUp(
							function(){
								$(this).removeClass("visible" +" "+ $dataEffect).remove();
							});	
					}
					$currentPath.children(".pmd-alert").eq(boxLength).addClass($dataType);
				}else {
					$currentPath.append($notification);
					$currentPath.width($(".pmd-alert").outerWidth());
					if($action == "true"){
						$currentPath.children("[data-action='true']").addClass("visible" +" "+ $dataEffect);	
					}else{
						$currentPath.children("[data-action='false']").addClass("visible" +" "+ $dataEffect).delay($duration).slideUp(
							function(){
								$(this).removeClass("visible" +" "+ $dataEffect).remove();
							});	
					}
					$currentPath.children(".pmd-alert").eq(boxLength).addClass($dataType);
				}
				var $middle = $(".pmd-alert").outerWidth() / 2;  
				$(".pmd-alert-container.center").css("marginLeft","-" + $middle+"px");
		}
		
        }

    }


}());
;(function() {
    'use strict';

    angular
        .module('home')
        .controller('loginController', ['$rootScope', '$scope','$state','$localStorage','authorizationService','appCONSTANTS',loginController]);
   
    function loginController($rootScope, $scope,$state, $localStorage,authorizationService,appCONSTANTS) {
    
		if ($localStorage.authInfo) {  
			
			$state.go('Features');
			
		}
		else
		{
			 $state.go('login');
		}
	}

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('homeCtrl', ['$rootScope', '$translate', '$scope', 'HomeResource', 'ResturantResource', 'appCONSTANTS', '$state', '_', 'authenticationService', 'authorizationService', '$localStorage', 'userRolesEnum', 'ToastService', 'CartIconService', 'totalCartService','$location', '$window' , '$timeout', homeCtrl])


    function homeCtrl($rootScope, $translate, $scope, HomeResource, ResturantResource, appCONSTANTS, $state, _, authenticationService, authorizationService, $localStorage, userRolesEnum, ToastService,CartIconService,  totalCartService,$location,$window ,$timeout) {
        // Event listener for state change.
        // if ($location.protocol() !== 'https') {
        //     $window.location.href = $location.absUrl().replace('http', 'https');
        // }

        var vm = this;
        vm.total = 0;
        $scope.$watch(function () { return CartIconService.cartIcon }, function (newValue) {
            $scope.cartIcon = newValue;
        });

        $scope.$watch(function () { return totalCartService.homeTotalNo }, function (newValue) {
            $scope.homeTotalNo = newValue;
        });
   

        var storedNames = JSON.parse(localStorage.getItem("checkOut"));
        debugger
        vm.cart = storedNames;
        if (vm.cart != null) {
            for (var i = 0; i < vm.cart.length; i++) {
                var product = vm.cart[i];
                vm.total += (product.size.price * product.itemobj.count);
            }
            if (vm.total != 0) {
                $scope.homeTotalNo = vm.total; 
            }  
        }
        // $scope.$watch(function () { return Data.getFirstName(); }, function (newValue, oldValue) {
        //     if (newValue !== oldValue)
        //     {
        //          $scope.homeTotalNo = newValue;
        //           $scope.disabled = true;
        //     }
        // });

       // if (navigator.onLine) {
        //    if(authorizationService.isLoggedIn()){
        //     var k = ResturantResource.getResturantGlobalInfo().$promise.then(function (results) {

        //         $scope.globalInfo = results


        //     },
        //         function (data, status) {
        //             ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
        //         });

        //    }
       // }
        var vm = this;
        $scope.emailEmpty = false;
        $scope.passwordEmpty = false;
        $scope.languages = [{
            id: "en-us",
            display: "AR"
        },
        {
            id: "ar-eg",
            display: "EN"
        }];
        if ($localStorage.language == null) {
            $scope.selectedLanguage = $scope.languages[0].id;
            // $scope.displayLanguage = $scope.languages[0].display;
            $localStorage.language = $scope.selectedLanguage;
        }
        else {
            $scope.selectedLanguage = $localStorage.language;
            // $scope.displayLanguage = $localStorage.language.display;
        }

        $translate.use($scope.selectedLanguage);
        $scope.init =
            function () {
                $scope.user = authorizationService.getUser();
            }
        $scope.init();

        $scope.submit = function (username, password) {

            authorizationService.isPasswordchanged = false;
            $('#passwordChanged').hide();
            //  $('#userInActivated').hide();
            if (!username)
                $scope.emailEmpty = true;
            if (!password)
                $scope.passwordEmpty = true;;
            if (username && password) {
                $scope.afterSubmit = false;
                $scope.emailEmpty = $scope.passwordEmpty = false;
                authenticationService.authenticate(username, password).then(loginSuccess, loginFailed)
                //.error(loginFailed);;
            } else {
                $scope.afterSubmit = false;
            }
        };

        $scope.reloadPage = true;
        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
            if (fromState.name != "" && $scope.reloadPage) {
                e.preventDefault();
                $scope.reloadPage = false;
                $state.go(toState.name, toParams, { reload: true });
            }
        });

        $scope.$watch(function () { return $localStorage.authInfo; }, function (newVal, oldVal) {
            if (oldVal != undefined && newVal === undefined && $localStorage.authInfo == undefined) {
                console.log('logout');
                $state.go('login');
            }
            if (oldVal === undefined && newVal !== undefined && $localStorage.authInfo != undefined) {
                console.log('login');
                $scope.user = authorizationService.getUser();
                loginSuccess()
                // authorizationService.isLoggedIn() && !location.href.contains('connect')
            }
        })
        function loginSuccess(response) {
            $scope.afterSubmit = false;
            $scope.invalidLoginInfo = false;
            $scope.inActiveUser = false;
            $scope.restaurantInActiveUser = false;
            $scope.user = authorizationService.getUser();
            if ($scope.user.role != userRolesEnum.Room) {
                authorizationService.logout();
                $state.go('login');

                // $state.go('menu');

            } else {
                $state.go('Features');

            }

        }

        function loginFailed(response) {
            $scope.afterSubmit = true;

            // $scope.invalidLoginInfo = true;
            if (response) {
                if (response.data.error == "invalid grant") {
                    $scope.invalidLoginInfo = true;
                    $scope.inActiveUser = false;
                    $scope.restaurantInActiveUser = false;
                    $scope.PackageExpired = false;
                    $scope.PackageNotActivated = false;
                    $scope.AccountDeActivated = false;
                    
                }
                if (response.data.error == "inactive user" || response.data.error =="Account deleted") {
                    $scope.invalidLoginInfo = false;
                    $scope.inActiveUser = true;
                    $scope.restaurantInActiveUser = false;
                    $scope.PackageExpired = false;
                    $scope.PackageNotActivated = false;
                    $scope.AccountDeActivated = false;
                    
                }
                if (response.data.error == "restaurant deactivated") {
                    $scope.invalidLoginInfo = false;
                    $scope.inActiveUser = false;
                    $scope.restaurantInActiveUser = true;
                    $scope.PackageExpired = false;
                    $scope.PackageNotActivated = false;
                    $scope.AccountDeActivated = false;
                    
                }
                if (response.data.error == "Package Expired") {
                    $scope.invalidLoginInfo = false;
                    $scope.inActiveUser = false;
                    $scope.restaurantInActiveUser = false;
                    $scope.PackageExpired = true;
                    $scope.PackageNotActivated = false;   
                    $scope.AccountDeActivated = false;                 
                }
                if (response.data.error == "Package Not Activated") {
                    $scope.invalidLoginInfo = false;
                    $scope.inActiveUser = false;
                    $scope.restaurantInActiveUser = false;
                    $scope.PackageExpired = false;
                    $scope.PackageNotActivated = true;
                    $scope.AccountDeActivated = false;
                }
                if (response.data.error == "Account deactivated") {
                    $scope.invalidLoginInfo = false;
                    $scope.inActiveUser = false;
                    $scope.restaurantInActiveUser = false;
                    $scope.PackageExpired = false;
                    $scope.PackageNotActivated = false;
                    $scope.AccountDeActivated = true;
                }
            }
            if (response == null) {
                $scope.invalidLoginInfo = false;
                $scope.inActiveUser = true;
                $scope.restaurantInActiveUser = false;
            }
        }

        $scope.logout = function () {
           
               $translate.use(appCONSTANTS.defaultLanguage); 
               $localStorage.language = appCONSTANTS.defaultLanguage;
            $scope.selectedLanguage = appCONSTANTS.defaultLanguage;
            
            $scope.homeTotalNo = 0; 
                        $scope.$watch("homeTotalNo", function (newValue) {
                            totalCartService.homeTotalNo = newValue;
                        });
                         localStorage.removeItem('checkOut');
            $scope.globalInfo='';
               authorizationService.logout();
            $state.go('login');
        }
        $scope.reset = function () {
            $scope.invalidLoginInfo = false;
            $scope.inActiveUser = false;
        }
        $scope.isLoggedIn = function () {
            $rootScope;
            return authorizationService.isLoggedIn();
        }
        $scope.isRestaurantPage = function () {
            var ff = $state.current.name!='Features';
            return ff;
        }
        $scope.changeLanguage = function (language) {
            $scope.selectedLanguage = language;
            $localStorage.language = $scope.selectedLanguage;
          //  $state.reload();
            $translate.use(language);
            // $timeout(function(){
            //     $(document.getElementById('flipbook')).turn({
                    
            //          pages: 8
            //        })
            //  }, 100);
            // $scope.$broadcast('updateFlipBookDesign');
            if($state.current.name == "Items")
                $state.reload();
        }

        alert($scope.homeTotalNo)
        
    }
}


());
;(function() {
    angular
      .module('home')
      .factory('HomeResource', ['$resource', 'appCONSTANTS', HomeResource])   
      .factory('ResturantResource', ['$resource', 'appCONSTANTS', ResturantResource])

    function HomeResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Menus/:MenuId', {}, {
        getAllMenus: { method: 'GET', useToken: true, params:{lang:'@lang'} } 
      })
    }
     
    function ResturantResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Restaurants/GetGlobalRestaurantInfo', {}, {
        getResturantGlobalInfo: { method: 'GET', useToken: true, params:{lang:'@lang'} }
      })
  }


}());
  ;(function() {
  'use strict';

  angular
    .module('core')
    .constant('AUTH_EVENTS', {
      loginFailed : 'login-failed',
      loginSuccess : 'login-success',
      logoutSuccess : 'logout-success',
      refreshedToken : 'refresh-token-success',
      invalidToken : 'invalid-token',
      failedToAuthorize: 'not-authorized',
      invalidRefreshToken: 'refresh-token-failure',
      passwordChanged: 'password-changed'

    });
}());
;(function() {
  'use strict';

  angular
    .module('core')
    .factory('authEventsHandlerService', authEventsHandlerService);

    authEventsHandlerService.$inject = ['$rootScope', 'AUTH_EVENTS', '$state'];

  function authEventsHandlerService($rootScope, AUTH_EVENTS, $state) {
    var factory = {
      initialize : initialize
    }

    return factory;

    function initialize() {
      $rootScope.$on(AUTH_EVENTS.logoutSuccess,logoutHandler);
    }

    function logoutHandler(){
      $state.go('login');
    }
  }
}());
;(function() {
  'use strict';

  angular
    .module('core')
    .factory('authenticationService', authenticationService);

  authenticationService.$inject = ['$injector', 'appCONSTANTS', 'authorizationService', 'AUTH_EVENTS', '$rootScope', '$q'];

  function authenticationService($injector, appCONSTANTS, authorizationService, AUTH_EVENTS, $rootScope, $q) {

    var factory = {
      authenticate: authenticate,
      getToken: getToken,
      isAuthenticated: isAuthenticated
    };

    return factory;

    function authenticate(email, password) {
      var credentials = {
        'username': email,
        'password': password
      }
      var request = requestToken(credentials, 'password');
      request.then(authenticated,authenticaionFailed);
      return request;
        
        //.error(authenticaionFailed);

    }


    function authenticated(data) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      return data;
    }

    function authenticaionFailed(data) {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      return data;
    }

    function getToken(forceRefresh) {
      if(!isAuthenticated()){
        return $q.reject({
          status : 401
        });
      }
      var authInfo = authorizationService.getAuthInfo();
      var expirydate = new Date(authInfo['.expires']); 
      if (forceRefresh || new Date() >= expirydate) {
        return refreshToken(authInfo['refresh_token']).then(refreshedToken,function(){
         authorizationService.logout();
        });
      }
      var defer = $q.defer();
      defer.resolve(authInfo);
      return defer.promise;
    }

    function isAuthenticated() {
      return !!authorizationService.getAuthInfo();
    }

    function refreshToken(refreshToken) {
      var credentials = {
        'refresh_token': refreshToken
      };
      return requestToken(credentials, 'refresh_token');
    }

    function refreshedToken(response){
      $rootScope.$broadcast(AUTH_EVENTS.refreshedToken);
      authorizationService.setAuthInfo(response);
      return response.data;
    }


    function requestToken(credentials, grantType) {
      angular.extend(credentials, {
          //'client_id': vlCONSTANTS.API_Client_Id,
        'grant_type': grantType
      });

      var config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      var $http = $injector.get("$http");
	  var result = $http
        .post(appCONSTANTS.API_URL + "token", $.param(credentials), config);
		result.then(function(data){
          authorizationService.setAuthInfo(data);
        });
      return result;
        
    }
  }
})();
;(function() {
  'use strict';
  (function() {
    angular
      .module('core')
      .factory('unAuthenticatedInterceptor', unAuthenticatedInterceptor);

    unAuthenticatedInterceptor.$inject = ['$q','$rootScope','AUTH_EVENTS'];

    function unAuthenticatedInterceptor($q,$rootScope,AUTH_EVENTS) {
      var factory = {
        responseError: responseErrorInterceptor
      };
      return factory;

      function responseErrorInterceptor(rejection) {
          if(rejection.status == 403) {
              $rootScope.$broadcast(AUTH_EVENTS.failedToAuthorize);
          }else if (rejection.status == 401) {
            if (rejection.data=="password changed") {
              $rootScope.$broadcast(AUTH_EVENTS.passwordChanged);
            }
            else {
              $rootScope.$broadcast(AUTH_EVENTS.invalidToken);
            }
          }
          else if (rejection.status == 406) {
              $rootScope.$broadcast(AUTH_EVENTS.invalidRefreshToken);
          }
          //  else if (rejection.status == 400) {
          //     $rootScope.$broadcast(AUTH_EVENTS.refresh-token-failure);
          // }
          
          return $q.reject(rejection);
        }
    }


  })();



  //inject interceptor to $http
  (function() {
    angular
      .module("core")
      .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
      $httpProvider.interceptors.push('unAuthenticatedInterceptor');
    }
  })();

})();
;(function() {
  'use strict';
  (function() {
    angular
      .module('core')
      .factory('useTokenInterceptor', useTokenInterceptor);

    useTokenInterceptor.$inject = ['authenticationService','$localStorage'];


    function useTokenInterceptor(authenticationService,$localStorage) {
      var tokenInterceptor = {
        request: requestInterceptor
      };
      return tokenInterceptor;

      function requestInterceptor(config) {
          if (config.useToken) {
            return authenticationService.getToken()
              .then(function(data){
                config.headers['Authorization'] = data['token_type'] + " " + data['access_token'];
				if(config.params== null || config.params.lang ==null)
					config.headers['Accept-Language'] = $localStorage.language;//"en";
				else
					config.headers['Accept-Language'] = config.params.lang;
                if (!config.headers.hasOwnProperty('Content-Type')) 
                {
                    config.headers['Content-Type'] = 'application/json';
                }
                return config;
              });

          }
          return config;
        }
    }


  })();



  //inject interceptor to $http
  (function() {
    angular
      .module("core")
      .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
      $httpProvider.interceptors.push('useTokenInterceptor');
    }
  })();

})();
;(function() {
  'use strict';

  angular
    .module('core')
    .run(runBlock);

  runBlock.$inject = ['PermissionStore', 'authorizationService', 'userRolesEnum'];

  function runBlock(PermissionStore, authorizationService, userRolesEnum) {
    PermissionStore
      .definePermission('Room', function () {
          return authorizationService.hasRole(String(userRolesEnum.Room));
      });
  }

}());
;(function() {
  'use strict';

  angular
    .module('core')
    .run(runBlock);

  runBlock.$inject = ['PermissionStore','authorizationService'];

  function runBlock (PermissionStore, authorizationService){
    PermissionStore
      .definePermission('anonymous',function(){
        return !authorizationService.isLoggedIn();
      });
  }

}());
;(function() {
  'use strict';

 
  angular
    .module('core')
    .factory('authorizationService', authorizationService);

  authorizationService.$inject = ['$rootScope', '$localStorage', 'AUTH_EVENTS'];

  function authorizationService($rootScope, $localStorage, AUTH_EVENTS) {
    var factory = {
      getAuthInfo: getAuthInfo,
      getUser: getUser,
      hasRole: hasRole,
      isLoggedIn: isLoggedIn,
      logout: logout,
      setAuthInfo: setAuthInfo,
      isDisabled: false,
      isPasswordchanged:false
    };

    return factory;

   
    function isLoggedIn() {
      return !!$localStorage.authInfo;
    }

    
    function getAuthInfo() {
      return $localStorage.authInfo;
    }

    
    function getUser() {
      var info = getAuthInfo();
      return {
        name: info? info.Username : "",
        role: info ? info.Role : "",
        id: info ? info.UserId : ""
      };
    }

   
    function hasRole(role) {
      if (!isLoggedIn()) {
        return false;
      }
      // return JSON.parse(getAuthInfo().Roles).indexOf(role) > -1;
      return getAuthInfo().Role == role;
    }
	
    function logout() {
      $localStorage.authInfo = undefined; 
      $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
    }

    function setAuthInfo(info) {
      $localStorage.authInfo = info.data;
      var currentDate = new Date();
      $localStorage.authInfo['expires_in'] = currentDate.setSeconds(currentDate.getSeconds() + $localStorage.authInfo['expires_in']);
    }
  }

}());
;(function() {
    angular
        .module('home')
        .factory('OfflineDataResource',['$localStorage', OfflineDataResource]);

    function OfflineDataResource($localStorage) {
        var categories;
        return {
            setAllData: function(lang,allMenus) {
                if($localStorage.offlineData == null)
                {
                    $localStorage.offlineData = {};
                }
                $localStorage.offlineData[lang] = allMenus; 
            },

            getMenus: function() {
                return $localStorage.offlineData[$localStorage.language]
            },
            getAllCategories:function(menuId){
                
                $localStorage.offlineData[$localStorage.language].forEach(function(menu) {
                    if(menu.menuId == menuId){
                        categories =  menu.categoryModels;    
                    }
                }, this);
                return categories;
                // return $localStorage.offlineData[menuId];
            },
            getAllItems:function(menuId,categoryId){
                var items;
                $localStorage.offlineData[$localStorage.language].forEach(function(menu) {
                    if(menu.menuId == menuId){
                        //categories =  menu.categoryModels;    
                        menu.categoryModels.forEach(function(category) {
                            if(category.categoryId == categoryId){
                                items =  category.categoryPageTemplateModel;    
                            }
                        }, this);
                    }
                }, this);
                
                // categories.forEach(function(category) {
                //     if(category.categoryId == categoryId){
                //         items =  category.categoryPageTemplateModel;    
                //     }
                // }, this);
                return items;
                // return $localStorage.offlineData[menuId];
            }
            
        }

    }


}());
