angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/cart/cart.html',
    '<script>\n' +
    '    \n' +
    '            $(document).ready(function () {\n' +
    '                //Stop people from typing\n' +
    '                $(\'.spinner input\').keydown(function (e) {\n' +
    '                    e.preventDefault();\n' +
    '                    return false;\n' +
    '                });\n' +
    '                var minNumber = 0;\n' +
    '                var maxNumber = 1000;\n' +
    '                $(\'.spinner .btn:first-of-type\').on(\'click\', function () {\n' +
    '                    if ($(\'.spinner input\').val() == maxNumber) {\n' +
    '                        return false;\n' +
    '                    } else {\n' +
    '                        $(\'.spinner input\').val(parseInt($(\'.spinner input\').val(), 10) + 1);\n' +
    '                    }\n' +
    '                });\n' +
    '    \n' +
    '                $(\'.spinner .btn:last-of-type\').on(\'click\', function () {\n' +
    '                    if ($(\'.spinner input\').val() == minNumber) {\n' +
    '                        return false;\n' +
    '                    } else {\n' +
    '                        $(\'.spinner input\').val(parseInt($(\'.spinner input\').val(), 10) - 1);\n' +
    '                    }\n' +
    '                });\n' +
    '            });\n' +
    '        </script>\n' +
    '   <a class="back" href="javascript:void(0);"  ng-click="$state.go(\'menu\',{restaurantId:$stateParams.restaurantId})">\n' +
    '    <img alt="" />\n' +
    '</a>\n' +
    '<div class="container">\n' +
    '\n' +
    '    <form>\n' +
    '\n' +
    '        <div class="col-md-8 col-sm-8 col-xs-12 main_cart">\n' +
    '            <h3 class="cart_title">{{\'CheckOut\' | translate}}</h3>\n' +
    '\n' +
    '            <table width="100%" border="0">\n' +
    '                <tbody>\n' +
    '                    <tr>\n' +
    '                        <th>{{\'Item\' | translate}}</th>\n' +
    '                        <th>{{\'NUM\' | translate}}</th>\n' +
    '                        <!-- <th>{{\'Size\' | translate}}</th> -->\n' +
    '                        <th>{{\'Price\' | translate}}</th>\n' +
    '                        <th></th> \n' +
    '                    </tr>\n' +
    '                    <tr ng-repeat="c in cartCtrl.repeatCart">\n' +
    '                        <td>\n' +
    '                            <div class="col-md-4 col-sm-4 col-xs-4 no_padding">\n' +
    '\n' +
    '                                <img ng-src="{{c.itemobj.imageURL}}" />\n' +
    '                            </div>\n' +
    '                            <div class="col-md-8 col-sm-8 col-xs-8">\n' +
    '                                <h3> {{c.itemobj.itemNameDictionary[selectedLanguage] | limitTo:20}}</h3>\n' +
    '                                <p>\n' +
    '                                   {{c.itemobj.itemDescriptionDictionary[selectedLanguage] | limitTo:63}}\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '\n' +
    '                        </td>\n' +
    '                       \n' +
    '                            <td>   \n' +
    '                                    <span ><img  class="arrow_img" ng-click="removeCounter(c,cartCtrl.index = $index)" style="width: 21px!important;height: 21px!important;" ng-src="../assets/img/Subtract2.png" /></span>\n' +
    '                                <input style="width: 36px;"  type="number"  ng-model="c.itemobj.count" readonly="readonly">\n' +
    '                                <span><img class="arrow_img" ng-click="addCounter(c,cartCtrl.index = $index)" style="width: 21px!important;height: 21px!important;" ng-src="../assets/img/plus2.png" /></span>\n' +
    '        \n' +
    '\n' +
    '                                    <!-- <input type="text" class="form-control counter" value="{{c.itemobj.count}}" >\n' +
    '                                    <div class="input-group-btn-vertical">\n' +
    '                                        <div class="btn btn-default left_arrow"><i class="fa fa-caret-up"></i></div>\n' +
    '                                        <div class="btn btn-default right_arrow"><i class="fa fa-caret-down"></i></div>\n' +
    '                                    </div> --> \n' +
    '                        </td>\n' +
    '                        <td>\n' +
    '                                <!-- {{c.size.sizeName}} -->\n' +
    '                            </td> <td><span class="bold_td">{{c.size.price*c.itemobj.count}} {{\'SAR\' | translate}}</span></td>\n' +
    '                        <td>\n' +
    '                            <!-- <input class="btn btn-default" type="button" ng-click="viewItemDetail(c)" value="{{\'Add\' | translate}}" data-lity-target="#inline2" data-lity/> -->\n' +
    '                            <!-- <input class="btn btn-default" type="button" ng-click="updateItemCart(c,cartCtrl.index = $index)" value="{{\'EDIT\' | translate}}" data-lity-target="#inline2" data-lity/> -->\n' +
    '                            <input class="btn btn-danger" type="button" ng-click="removeItemCart(c)" value="{{\'Remove\' | translate}}" />\n' +
    '                            <!--<a href="javascript:void(0);" ng-click="viewItemDetail(c)" data-lity-target="#inline2" data-lity><img src="assets/img/view.png" style="width: 9%;" alt="" /></a>-->\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '\n' +
    '                    <tr>\n' +
    '                        <td>&nbsp;</td>\n' +
    '                        <td>&nbsp;</td>\n' +
    '                        <td>&nbsp;</td>\n' +
    '                        <td>&nbsp;</td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '\n' +
    '            <hr />\n' +
    '\n' +
    '            <div class="footer">\n' +
    '\n' +
    '                <div class="checkout_btn">\n' +
    '                    <input type="button" class="" value="{{\'CheckOut\' | translate}}" ng-click="checkOut()">\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="cart">\n' +
    '                    <h4>{{\'Total\' | translate}}</h4>\n' +
    '                    <h5>{{totalItem}} {{\'SAR\' | translate}}</h5>\n' +
    '\n' +
    '                </div>\n' +
    '                <!--<div class="cart">\n' +
    '                    <h4>Quantity</h4>\n' +
    '                    <h5>{{cartCtrl.itemCount}} </h5>\n' +
    '\n' +
    '                </div>-->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '\n' +
    '<div id="inline2" class="main_lity lity-hide" ng-show="cartCtrl.isItemLoaded">\n' +
    '\n' +
    '    <div class="col-sm-6 col-xs-6 col-md-6 header_pop">\n' +
    '        <img ng-src="{{cartCtrl.itemdetails.imageURL}}" />\n' +
    '        <div class="menu_plus">\n' +
    '            \n' +
    '                <div  class="radio" ng-repeat="(key,val) in cartCtrl.itemdetails.sizes">\n' +
    '                        <input type="radio"  ng-click="radioSizeClick(val,cartCtrl.itemDetails.itemID)" ng-model="$parent.checkradioasd" ng-value=\'val.sizeId\'  >\n' +
    '                        {{val.price}}\n' +
    '                        <span>{{val.sizeName}}</span>\n' +
    '                   </div>\n' +
    '        \n' +
    '        </div>\n' +
    '        <div class="main_counter">\n' +
    '                <input type="number" ng-model="selectedCount" class="form-control counter" value="1" >\n' +
    '                \n' +
    '                       <input type="button" class="btn add" ng-click="editItemToCart(cartCtrl.itemdetails)" value="{{\'Edit\' | translate}}" ng-show="displayEditBtn" data-lity-close>\n' +
    '            </div>\n' +
    '\n' +
    '    </div> \n' +
    '    <!-- <select ng-model="selectedCount"  ng-init="selectedCount = cartCtrl.counts[0]" ng-options="x for x in cartCtrl.counts"></select> -->\n' +
    '\n' +
    '    <!-- <input type="button" ng-click="addItemToCart(cartCtrl.itemdetails)" value="{{\'Add\' | translate}}" ng-show="displayAdd" ng-disabled="disableAdd"  data-lity-close> -->\n' +
    '\n' +
    '    <div class="col-sm-6 col-xs-6 col-md-6 ">\n' +
    '        <h3>\n' +
    '\n' +
    '\n' +
    '            {{cartCtrl.itemdetails.itemName}}\n' +
    '        </h3>\n' +
    '        <p>{{cartCtrl.itemdetails.itemDescription}}</p>\n' +
    '        <div class="col-sm-6 col-xs-6 col-md-6">\n' +
    '            <div class="menu_plus"> \n' +
    '                <!-- <p ng-repeat="size in cartCtrl.itemdetails.sizes" >\n' +
    '                    {{size.price}}\n' +
    '                    <span>{{size.sizeName}}</span>\n' +
    '                    <input type="radio"    ng-model="selectedSize" ng-click="radioSizeClick(size)" name="name" required />\n' +
    '                </p>\n' +
    '                 -->\n' +
    '            \n' +
    '               <!--   <br>\n' +
    '              <div>Selected : {{checkradioasd}}</div> -->\n' +
    '\n' +
    '            </div> \n' +
    '            <!--<div class="menu_plus" style="margin-top: 41px;">\n' +
    '                <h3>Side Items</h3>\n' +
    '                {{cartCtrl.itemdetails.sides[0].sideItemName}}\n' +
    '\n' +
    '                <p ng-repeat="side in cartCtrl.itemdetails.sideItems">\n' +
    '\n' +
    '                    <span>{{side.sideItemName}}</span>\n' +
    '                    <span>{{side.value}}</span>\n' +
    '                    <input type="checkbox" ng-model="selectedSide" ng-click="checkSideClick(side)" name="name" required>\n' +
    '                </p>\n' +
    '                * Please note the Max Side Item Value : {{itemCtrl.itemDetails.maxSideItemValue}}\n' +
    '\n' +
    '            </div>-->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- <div class="col-sm-6 col-xs-6 col-md-6">\n' +
    '        <p>simply dummy text of the printing and\n' +
    '            typesetting industry. Lorem Ipsum has\n' +
    '            been the industry\'s standard dummy t\n' +
    '            ext ever since the 1500s, when an unknown ....\n' +
    '        </p>\n' +
    '    </div> -->\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/menu/menu.html',
    '<style>\n' +
    '        .lity-close:hover{\n' +
    '            top: 40px !important;\n' +
    '        }\n' +
    '        .lity-close{\n' +
    '            top: 40px !important;\n' +
    '        }\n' +
    '    </style>\n' +
    '<div class="col-md-12 col-sm-12 col-xs-12 subs">\n' +
    '    <div class="col-md-4 col-sm-4 col-xs-12 tybes" ng-repeat="h in menuCtrl.menus"> \n' +
    '        <div class="sub_content"> \n' +
    '            <img ng-src="{{ h.imageURL}}" alt="" style="max-height: 286px;">\n' +
    '            <div class="main_over">\n' +
    '                <a  href="javascript:void(0);"  data-lity-target="#inline2" data-lity ng-click="menuCtrl.ShowId(h.menuId)">\n' +
    '                <!-- <a   data-ng-click="ShowId(h.menuId)"  > -->\n' +
    '\n' +
    '                <!-- <a href="javascript:void(0);" data-ng-click="ShowId(6)"  data-lity> -->\n' +
    '                    <div class="active">\n' +
    '\n' +
    '                        <p>{{ h.menuNameDictionary[selectedLanguage] }}</p>\n' +
    '                        <!-- <button  ng-click="menuCtrl.openShowCategoryDialog(h.menuId)" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddbackgroundBtn\' | translate}}</button> -->\n' +
    '\n' +
    '                    </div>\n' +
    '                </a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<div id="inline2" class="main_lity lity-hide subs">\n' +
    '    <div class="col-md-4 col-sm-4 col-xs-12 tybes" ng-repeat="item in menuCtrl.categories">\n' +
    '        <div class="sub_content3">\n' +
    '            <img ng-src="{{item.imageURL}}" alt="" style="max-height: 129px;">\n' +
    '            <div class="main_over2">\n' +
    '                <div type="submit" ng-click="$state.go(\'Items\', {restaurantId:menuCtrl.restaurantId,menuId: item.menuId,categoryId: item.categoryId});" class="active_pop meat" data-lity-close >\n' +
    '                    <!-- <img src="{{item.imageURL}}" alt="" /> -->\n' +
    '                    <p data-lity-close>{{item.categoryNameDictionary[selectedLanguage]}}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/menu/showCategoryPopup.html',
    '<div class="modal-content">\n' +
    '      <div class="modal-body">\n' +
    '    <div  ng-repeat="c in showCategoryDlCtrl.categories.results">\n' +
    '            <div id="tab-{{c.menuId}}" class="main_lity"  >\n' +
    '               \n' +
    '				<a  data-ng-click="$state.go(\'Items\', {categoryId: category.categoryId});">\n' +
    '                     <div class="col-md-4 col-sm-4 col-xs-12 tybes">\n' +
    '               <div class="sub_content3">\n' +
    '             \n' +
    '               <img src="{{c.imageURL}}" alt="">\n' +
    '               <div class="main_over2">\n' +
    '               <div class="active">\n' +
    '               <p>{{c.categoryName}}  </p>\n' +
    '               </div>\n' +
    '               </div>\n' +
    '               </div>\n' +
    '               </div>\n' +
    '				</a>\n' +
    '               </div>\n' +
    '    \n' +
    '            </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    \n' +
    '        \n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/features/templates/ConfirmRequestDialog.html',
    '<div class="modal-content">\n' +
    '        <div class="modal-body">{{\'requestConfirmationLbl\' | translate}}<strong>{{requestDlCtrl.itemName}}</strong>? </div>\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button class="btn pmd-ripple-effect btn-primary pmd-btn-flat" type="button" ng-click="requestDlCtrl.Confirm()">{{\'ApproveBtn\' | translate}}</button>\n' +
    '            <button class="btn pmd-ripple-effect btn-default pmd-btn-flat" type="button" ng-click="requestDlCtrl.close()">{{\'cancelBtn\' | translate}}</button>\n' +
    '        </div>\n' +
    '    </div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/features/templates/featureDetail.html',
    '\n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <button class="close" type="button" ng-click="supervisorDlCtrl.close()">×</button>\n' +
    '        <h2 class="pmd-card-title-text">    {{featureDetailCtrl.feature.featureNameDictionary[featureDetailCtrl.language]}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '       <div ng-if="featureDetailCtrl.feature.featureDetails.length > 0">\n' +
    '        <div class="table-responsive">\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th >{{\'Name\' | translate}}</th>\n' +
    '                        <th>{{\'priceLbl\' | translate}}</th>                        \n' +
    '                        <th ></th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="featureDetail in featureDetailCtrl.feature.featureDetails">\n' +
    '                        <td data-title="Name" >{{featureDetail.descriptionDictionary[featureDetailCtrl.language]}}</td>\n' +
    '                        <td data-title="Name">\n' +
    '                                <span ng-if="featureDetail.isFree">{{\'freelbl\' |translate}}</span>\n' +
    '                                <span ng-if="!featureDetail.isFree">{{featureDetail.price}}</span>\n' +
    '                            </td>\n' +
    '                        <td width="30%">\n' +
    '                            <a>Request</a>\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="featureDetailCtrl.features.totalCount" paging-action="featureCtrl.changePage( page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '           </div>\n' +
    '       </div>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button class="btn pmd-ripple-effect btn-primary" type="button" ng-click="supervisorDlCtrl.AddNewSupervisor()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="supervisorDlCtrl.close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/features/templates/features.html',
    '<style>\n' +
    '    .lity-close:hover{\n' +
    '        top: 40px !important;\n' +
    '    }\n' +
    '    .lity-close{\n' +
    '        top: 40px !important;\n' +
    '    }\n' +
    '</style>\n' +
    '<div style="background-color: #83bde6fa" >\n' +
    '    <div >\n' +
    '        \n' +
    '        <div ng-repeat="feature in featureCtrl.features.results" ng-if="globalInfo.featureMode" >\n' +
    '            <div class="col-md-2">\n' +
    '                <div class="column cursorPointer" ng-if="feature.type==\'Normal\'" data-lity-target="#inline2" data-lity\n' +
    '                ng-click="featureCtrl.request(feature.featureId,feature.featureNameDictionary[selectedLanguage])"\n' +
    '                  style="cursor: pointer; border-radius: 7px;box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 50px rgba(0,0,0,.24);background-color: white;    margin-bottom: 10px;">\n' +
    '                        <div>\n' +
    '                            <img ng-src="{{feature.imageURL}}?type=\'thumbnail\' "  style="width: 100%;border-radius: 7px;"/>\n' +
    '                            <div style="text-align: center;font-weight: bold;height: 50px;display: grid;align-items: center;">\n' +
    '                                  {{feature.featureNameDictionary[selectedLanguage]}}\n' +
    '                                \n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                </div>\n' +
    '                <div class="column cursorPointer" ng-if="feature.type==\'Restaurant\'"\n' +
    '                ng-click="featureCtrl.showRestaurants($index)"\n' +
    '                  style="cursor: pointer; border-radius: 7px;box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 50px rgba(0,0,0,.24);background-color: white;    margin-bottom: 10px;">\n' +
    '                        <div>\n' +
    '                            <img ng-src="{{feature.imageURL}}?type=\'thumbnail\' "  style="width: 100%;border-radius: 7px;"/>\n' +
    '                            <div style="text-align: center;font-weight: bold;height: 50px;display: grid;align-items: center;">\n' +
    '                                  {{feature.featureNameDictionary[selectedLanguage]}}\n' +
    '                            \n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '        \n' +
    '        <div ng-repeat="restaurant in featureCtrl.features.results[featureCtrl.selectedFeatureIndex].restaurants"ng-if="!globalInfo.featureMode"    >\n' +
    '            <div class="col-md-2">\n' +
    '                <div class="column cursorPointer" \n' +
    '                ng-click="$state.go(\'menu\',{restaurantId:restaurant.restaurantId})"\n' +
    '                style="cursor: pointer; border-radius: 7px;box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 50px rgba(0,0,0,.24);background-color: white;    margin-bottom: 10px;">\n' +
    '                        <div>\n' +
    '                            <img ng-src="{{restaurant.imageURL}}?type=\'thumbnail\' "  style="width: 100%;border-radius: 7px;"/>\n' +
    '                            <div style="text-align: center;font-weight: bold;height: 50px;display: grid;align-items: center;">\n' +
    '                                {{restaurant.restaurantNameDictionary[selectedLanguage]}}\n' +
    '                            \n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div id="inline2" class="main_lity lity-hide subs">\n' +
    '    <!-- <div class="col-md-4 col-sm-4 col-xs-12 tybes" > -->\n' +
    '        <div class="modal-body">{{\'requestConfirmationLbl\' | translate}}<strong>{{featureCtrl.selectedFeatureName}}</strong>? </div>        \n' +
    '    <!-- </div> -->\n' +
    '    <button class="btn pmd-ripple-effect btn-primary pmd-btn-flat" type="button" data-lity-close ng-click="featureCtrl.confirmRequest(featureCtrl.selectedFeatureId)">{{\'ApproveBtn\' | translate}}</button>\n' +
    '    <!-- <button class="btn pmd-ripple-effect btn-default pmd-btn-flat" type="button" ng-click="requestDlCtrl.close()">{{\'cancelBtn\' | translate}}</button> -->\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/items/Templates/Item.html',
    '\n' +
    '<!-- <div class="sub_data">\n' +
    '    <div class="main_category">\n' +
    '        <div class="col-sm-12 col-xs-12 col-md-12 subs2">\n' +
    '            <div class="sub_content">\n' +
    '                <img src="{{itemCtrl.catgoryTemplates.menuImageURL}}" alt="" style="max-height: 177px;"/>\n' +
    '<div class="sub_sub">\n' +
    '                <div class="active_book">\n' +
    '                    <p>{{itemCtrl.catgoryTemplates.menuName}}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            </div>\n' +
    '            <div class="sub_content2">\n' +
    '                <img src="{{itemCtrl.catgoryTemplates.categoryImageURL}}" alt="" style="max-height: 137px;"/>\n' +
    '                <div class="sub_over over">\n' +
    '                    <div class="active2">\n' +
    '                        <p>{{itemCtrl.catgoryTemplates.categoryName}}</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '   \n' +
    '</div> -->\n' +
    '<a class="back" href="javascript:void(0);"  ng-click="$state.go(\'menu\',{restaurantId:itemCtrl.restaurantId})">\n' +
    '    <img alt="" />\n' +
    '</a>\n' +
    '\n' +
    '<!-- <div id="ttt"> -->\n' +
    '        <flipbook itempagectrl="itemCtrl.catgoryTemplates.templates" itemdetails="itemCtrl.itemDetails" selected-Language="selectedLanguage"></flipbook>\n' +
    '<!-- </div>  -->\n' +
    '\n' +
    '<div id="inline2" class="main_lity lity-hide">\n' +
    '    <div class="col-sm-6 col-xs-6 col-md-6 header_pop">\n' +
    '        <img src="{{itemCtrl.itemDetails.imageURL}}" alt="" style="max-height: 139px;"/>\n' +
    '        <div class="menu_plus">\n' +
    '            \n' +
    '              \n' +
    '              <!-- <p ng-repeat="size in itemCtrl.itemDetails.sizes">\n' +
    '                  {{size.price}}\n' +
    '                  <span>{{size.sizeName}}</span>\n' +
    '                  <input type="radio" ng-model="selectedSize" ng-click="radioSizeClick(size)" name="name" required />\n' +
    '\n' +
    '              </p> -->\n' +
    '              <div class="radio" ng-repeat="(key,val) in itemCtrl.itemDetails.sizes">\n' +
    '                  <label>\n' +
    '                    <input type="radio" class="radio_s"  ng-click="radioSizeClick(val,itemCtrl.itemDetails.itemID)" ng-model="$parent.checkradioasd" ng-value=\'val.sizeId\'  >\n' +
    '                    <span class="orange">{{val.price}}</span>\n' +
    '                    <span>{{val.sizeNameDictionary[selectedLanguage]}}</span>\n' +
    '                  </label>\n' +
    '                </div>\n' +
    '             </div>\n' +
    '          </div>\n' +
    '          <div class="col-sm-6 col-xs-6 col-md-6 "> \n' +
    '            <h3>{{itemCtrl.itemDetails.itemNameDictionary[selectedLanguage]}}</h3>\n' +
    '            <p>{{itemCtrl.itemDetails.itemDescriptionDictionary[selectedLanguage]}}</p>\n' +
    '       \n' +
    '                <!--<div class="menu_plus" style="    margin-top: 41px;">\n' +
    '                    <h3>Side Items</h3>\n' +
    '    \n' +
    '                    <p ng-repeat="side in itemCtrl.itemDetails.sideItems">\n' +
    '                        <span>{{side.sideItemName}}</span>\n' +
    '                        <span>{{side.value}}</span>\n' +
    '                        <input type="checkbox" ng-model="selectedSide" ng-click="checkSideClick(side)" name="name" required  >\n' +
    '                    </p>\n' +
    '                    <br>\n' +
    '                    * Please note the Max Side Item Value : {{itemCtrl.itemDetails.maxSideItemValue}}\n' +
    '                </div>-->\n' +
    '         \n' +
    '        </div>\n' +
    '          <div class="main_counter" >\n' +
    '                <span class="main_arrow"><img  class="arrow_img" ng-click="removeCounter()" style="" ng-src="../assets/img/Subtract.png" /></span>\n' +
    '\n' +
    '                <input  type="number" ng-model="selectedCount" class="form-control counter" value="1" readonly="readonly">\n' +
    '                <span><img class="arrow_img" ng-click="addCounter()" style="" ng-src="../assets/img/plus.png" /></span>\n' +
    '\n' +
    '                <!-- <select ng-model="selectedCount" ng-init="selectedCount = itemCtrl.counts[0]" ng-options="x for x in itemCtrl.counts"></select> -->\n' +
    '             <input type="button" class="btn add" ng-click="addItemToCart(itemCtrl.itemDetails)" ng-disabled="!displayAdd" value="{{\'Add\' | translate}}" data-lity-close>\n' +
    '            </div>\n' +
    '    <!-- </div> -->\n' +
    '   \n' +
    ' \n' +
    '    \n' +
    '    <!-- <div class="col-sm-6 col-xs-6 col-md-6">\n' +
    '        <p>simply dummy text of the printing and\n' +
    '            typesetting industry. Lorem Ipsum has\n' +
    '            been the industry\'s standard dummy t\n' +
    '            ext ever since the 1500s, when an unknown ....\n' +
    '        </p>\n' +
    '    </div> -->\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/items/Templates/ItemList.html',
    '<div id="flipbook" >\n' +
    '        <div></div>\n' +
    '    <div   ng-repeat="page in itempagectrl" >\n' +
    '    \n' +
    '    <div ng-if="page.templateId == 1" style="height: 100%;">\n' +
    '            <page-Template1 pageitems="page"  itemdetails="itemdetails" selected-Language="selectedLanguage" style="height: 100%;"></page-Template1>\n' +
    '    </div>\n' +
    '    \n' +
    '    <div ng-if="page.templateId == 2" style="height: 100%;">\n' +
    '            <page-Template2 pageitems="page"  itemdetails="itemdetails" selected-Language="selectedLanguage" style="height: 100%;"></page-Template2>\n' +
    '    </div>\n' +
    '    <div ng-if="page.templateId == 3"style="height: 100%;" >\n' +
    '            <page-Template3 pageitems="page"  itemdetails="itemdetails" selected-Language="selectedLanguage" style="height: 100%;"></page-Template3>\n' +
    '    </div>\n' +
    '    <div ng-if="page.templateId == 4" style="height: 100%;">\n' +
    '            <page-Template4 pageitems="page"  itemdetails="itemdetails" selected-Language="selectedLanguage" style="height: 100%;"></page-Template4>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="page.templateId == 5" style="height: 100%;">\n' +
    '        <page-Template5 pageitems="page"  itemdetails="itemdetails" selected-Language="selectedLanguage" style="height: 100%;"></page-Template4>\n' +
    '</div>\n' +
    '<div ng-if="page.templateId == 6" style="height: 100%;">\n' +
    '        <page-Template6 pageitems="page"  itemdetails="itemdetails" selected-Language="selectedLanguage" style="height: 100%;"></page-Template4>\n' +
    '</div>\n' +
    '    </div>\n' +
    '    \n' +
    '</div>\n' +
    '      \n' +
    '      ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/items/Templates/itemTemplate1.html',
    '<div ng-class="{page2:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) === 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) !== 0)\n' +
    '    , page1:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) !== 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) === 0)}">\n' +
    '    <div class="img_header">\n' +
    '        <img ng-src="{{pageitems.itemModels[0].imageURL}}" style="max-height: 139px" />\n' +
    '        <!-- <img src="assets/img/img1.jpg" /> -->\n' +
    '\n' +
    '    </div>\n' +
    '    <div class="main_data">\n' +
    '        <div class="col-sm-8 col-xs-8 col-md-8">\n' +
    '            <h3>\n' +
    '                {{pageitems.itemModels[0].itemNameDictionary[selectedLanguage] < 20 ? \'pageitems.itemModels[0].itemNameDictionary[selectedLanguage]\' : pageitems.itemModels[0].itemNameDictionary[selectedLanguage] | limitTo:20}}\n' +
    '            </h3>\n' +
    '            <!-- <p style="white-space: pre;min-height: 40px;">{{pageitems.itemModels[0].itemDescription | limitTo:50}} </p> -->\n' +
    '            <p style="min-height: 40px;">\n' +
    '\n' +
    '                {{pageitems.itemModels[0].itemDescriptionDictionary[selectedLanguage] < 90 ? \'pageitems.itemModels[0].itemDescriptionDictionary[selectedLanguage]\' : pageitems.itemModels[0].itemDescriptionDictionary[selectedLanguage] | limitTo:155}}\n' +
    '\n' +
    '            </p>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-sm-4 col-xs-4 col-md-4">\n' +
    '            <div class="row" style="    margin-left: -13px;padding-top: 26px!important; ">\n' +
    '                <div class="col-sm-7 col-xs-7 col-md-7 no_padding">\n' +
    '                    <div class="item_price" ng-repeat="size in pageitems.itemModels[0].sizes |limitTo:3"><h5 class="y_price">{{size.price}}</h5> <span class="ssss">{{size.sizeNameDictionary[selectedLanguage]}}</span></div>\n' +
    '                    <!-- <p class="item_price">180 <span>S</span></p>\n' +
    '                    <p class="item_price">180 <span>S</span></p> -->\n' +
    '                </div>\n' +
    '                <div class="col-sm-5 col-xs-5 col-md-5 edits no_padding">\n' +
    '                    <a href="javascript:void(0);" ng-click="viewItemDetail(pageitems.itemModels[0])" data-lity-target="#inline2" data-lity><img src="assets/img/view.png" alt="" /></a>\n' +
    '                    <!-- <a href="#"><img src="assets/img/plus.png" alt="" /></a> -->\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="main_data" ng-show="pageitems.itemModels[1] != null">\n' +
    '        <div class="col-sm-8 col-xs-8 col-md-8">\n' +
    '            <h3>\n' +
    '                {{pageitems.itemModels[1].itemNameDictionary[selectedLanguage] < 20 ? \'pageitems.itemModels[1].itemNameDictionary[selectedLanguage]\' : pageitems.itemModels[1].itemNameDictionary[selectedLanguage] | limitTo:20}}\n' +
    '            </h3>\n' +
    '\n' +
    '            <p style="min-height: 40px;">\n' +
    '\n' +
    '                {{pageitems.itemModels[1].itemDescriptionDictionary[selectedLanguage] < 90 ? \'pageitems.itemModels[1].itemDescriptionDictionary[selectedLanguage]\' : pageitems.itemModels[1].itemDescriptionDictionary[selectedLanguage] | limitTo:155}}\n' +
    '\n' +
    '            </p>\n' +
    '            <div class="col-sm-12 col-xs-12 col-md-12 no_padding">\n' +
    '\n' +
    '                <div class="col-sm-5 col-xs-5 col-md-5 no_padding">\n' +
    '                    <div class="item_price" ng-repeat="size in pageitems.itemModels[1].sizes |limitTo:3"><h5 class="y_price">{{size.price}}</h5> <span class="ssss">{{size.sizeNameDictionary[selectedLanguage]}}</span></div>\n' +
    '                    <!-- <p class="item_price">180 <span>S</span></p>\n' +
    '                    <p class="item_price">180 <span>S</span></p>\n' +
    '                    <p class="item_price">180 <span>S</span></p> -->\n' +
    '                </div>\n' +
    '                <div class="col-sm-7 col-xs-7 col-md-7 edits no_padding">\n' +
    '\n' +
    '                    <a href="javascript:void(0);" ng-click="viewItemDetail(pageitems.itemModels[1])" data-lity-target="#inline2" data-lity><img src="assets/img/view.png" alt="" /></a>\n' +
    '                    <!-- <a href="#"><img src="assets/img/plus.png" alt="" /></a> -->\n' +
    '                    <a style="cursor: pointer;" ng-click="addItemToCart(pageitems.itemModels[0])">\n' +
    '                        <!-- <img src="assets/img/plus.png" alt="" /> -->\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-sm-4 col-xs-4 col-md-4">\n' +
    '            <img ng-src="{{pageitems.itemModels[1].imageURL}}?type=orignal2" style="max-height: 69px;" alt="" />\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="main_data" ng-show="pageitems.itemModels[2] != null">\n' +
    '        <div class="col-sm-4 col-xs-4 col-md-4">\n' +
    '            <img ng-src="{{pageitems.itemModels[2].imageURL}}?type=orignal2" style="max-height: 69px;" alt="" />\n' +
    '        </div>\n' +
    '        <div class="col-sm-8 col-xs-8 col-md-8">\n' +
    '            <h3>\n' +
    '                {{pageitems.itemModels[2].itemNameDictionary[selectedLanguage] < 20 ? \'pageitems.itemModels[2].itemNameDictionary[selectedLanguage]\' : pageitems.itemModels[2].itemNameDictionary[selectedLanguage] | limitTo:20}}\n' +
    '\n' +
    '            </h3>\n' +
    '\n' +
    '            <p style="min-height: 40px;">\n' +
    '\n' +
    '                {{pageitems.itemModels[2].itemDescriptionDictionary[selectedLanguage] < 90 ? \'pageitems.itemModels[2].itemDescriptionDictionary[selectedLanguage]\' : pageitems.itemModels[2].itemDescriptionDictionary[selectedLanguage] | limitTo:155}}\n' +
    '\n' +
    '            </p>\n' +
    '            <div class="col-sm-12 col-xs-12 col-md-12 no_padding">\n' +
    '                <div class="col-sm-5 col-xs-5 col-md-5 no_padding">\n' +
    '                    <div class="item_price" ng-repeat="size in pageitems.itemModels[2].sizes |limitTo:3"><h5 class="y_price">{{size.price}}</h5> <span class="ssss">{{size.sizeNameDictionary[selectedLanguage]}}</span></div>\n' +
    '                    <!-- <p class="item_price">180 <span>S</span></p>\n' +
    '                    <p class="item_price">180 <span>S</span></p>\n' +
    '                    <p class="item_price">180 <span>S</span></p> -->\n' +
    '                </div>\n' +
    '                <div class="col-sm-7 col-xs-7 col-md-7 edits no_padding">\n' +
    '                    <a href="javascript:void(0);" ng-click="viewItemDetail(pageitems.itemModels[2])" data-lity-target="#inline2" data-lity><img src="assets/img/view.png" alt="" /></a>\n' +
    '                    <!-- <a href="#"><img src="assets/img/plus.png" alt="" />\n' +
    '                    </a> -->\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/items/Templates/itemTemplate2.html',
    '<div ng-class="{page2:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) === 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) !== 0)\n' +
    ', page1:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) !== 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) === 0)}">\n' +
    '            <div class="main_data" ng-repeat="item in pageitems.itemModels">\n' +
    '                <div class="col-sm-4 col-xs-4 col-md-4">\n' +
    '                    <img ng-src="{{item.imageURL}}?type=orignal2" alt="" style="max-height: 69px;" />\n' +
    '\n' +
    '                </div> <div class="col-sm-8 col-xs-8 col-md-8">\n' +
    '                  \n' +
    '                    <h3>\n' +
    '                            {{item.itemNameDictionary[selectedLanguage] < 25 ? \'item.itemNameDictionary[selectedLanguage]\' : item.itemNameDictionary[selectedLanguage] | limitTo:25}}   \n' +
    '           </h3>\n' +
    '                            <p> \n' +
    '                             \n' +
    '                            {{item.itemDescriptionDictionary[selectedLanguage] < 90 ? \'item.itemDescriptionDictionary[selectedLanguage]\' : item.itemDescriptionDictionary[selectedLanguage] | limitTo:90}} \n' +
    '                         \n' +
    '                          </p> \n' +
    '                    <div class="col-sm-12 col-xs-12 col-md-12 no_padding">\n' +
    '\n' +
    '                        <div class="col-sm-5 col-xs-5 col-md-5 no_padding">\n' +
    '                            <div class="item_price" ng-repeat="size in item.sizes |limitTo:3"><h5 class="y_price">{{size.price}}</h5>   <span class="ssss">{{size.sizeNameDictionary[selectedLanguage]}}</span></div>\n' +
    '                            <!-- <p class="item_price">110 <span class="ssss">M</span></p>\n' +
    '                            <p class="item_price">130 <span class="ssss">L</span></p> -->\n' +
    '                        </div>\n' +
    '                        <div class="col-sm-7 col-xs-7 col-md-7 edits no_padding">\n' +
    '\n' +
    '                            <a href="javascript:void(0);" ng-click="viewItemDetail(item)"  data-lity-target="#inline2" data-lity><img src="assets/img/view.png" alt="" /></a>\n' +
    '                            <!-- <a style="cursor: pointer;" ng-click="addItemToCart(item)">\n' +
    '                                <img src="assets/img/plus.png" alt="" />\n' +
    '                            \n' +
    '                            </a> -->\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '            </div>\n' +
    '            <!-- <div class="main_data">\n' +
    '                <div class="col-sm-4 col-xs-4 col-md-4">\n' +
    '                    <img src="{{products[3].image}}" alt="" />\n' +
    '\n' +
    '                </div> <div class="col-sm-8 col-xs-8 col-md-8">\n' +
    '                    <h3>{{products[3].name}}</h3>\n' +
    '                    <p>\n' +
    '                        {{products[3].description}}\n' +
    '                    </p>\n' +
    '\n' +
    '                    <div class="col-sm-12 col-xs-12 col-md-12 no_padding">\n' +
    '\n' +
    '                        <div class="col-sm-5 col-xs-5 col-md-5 no_padding">\n' +
    '                            <p class="item_price">100  <span class="ssss">S</span></p>\n' +
    '                            <p class="item_price">110 <span class="ssss">M</span></p>\n' +
    '                            <p class="item_price">130 <span class="ssss">L</span></p>\n' +
    '                        </div>\n' +
    '                        <div class="col-sm-7 col-xs-7 col-md-7 edits no_padding">\n' +
    '\n' +
    '                            <a href="#inline2" data-lity><img src="img/view.png" alt="" /></a>\n' +
    '                            <a style="cursor: pointer;" ng-click="addItemToCart(products[3])"><img src="img/plus.png" alt="" /></a>\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '            </div> <div class="main_data">\n' +
    '                <div class="col-sm-4 col-xs-4 col-md-4">\n' +
    '                    <img src="{{products[6].image}}" alt="" />\n' +
    '\n' +
    '                </div> <div class="col-sm-8 col-xs-8 col-md-8">\n' +
    '                    <h3>{{products[6].name}}</h3>\n' +
    '                    <p>\n' +
    '                        {{products[6].description}}\n' +
    '                    </p>\n' +
    '\n' +
    '                    <div class="col-sm-12 col-xs-12 col-md-12 no_padding">\n' +
    '\n' +
    '                        <div class="col-sm-5 col-xs-5 col-md-5 no_padding">\n' +
    '                            <p class="item_price">100  <span class="ssss">S</span></p>\n' +
    '                            <p class="item_price">110 <span class="ssss">M</span></p>\n' +
    '                            <p class="item_price">130 <span class="ssss">L</span></p>\n' +
    '                        </div>\n' +
    '                        <div class="col-sm-7 col-xs-7 col-md-7 edits no_padding">\n' +
    '\n' +
    '                            <a href="#inline2" data-lity><img src="img/view.png" alt="" /></a>\n' +
    '                            <a style="cursor: pointer;" ng-click="addItemToCart(products[6])"><img src="img/plus.png" alt="" /></a>\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '            </div>\n' +
    '            <div class="main_data">\n' +
    '                <div class="col-sm-4 col-xs-4 col-md-4">\n' +
    '                    <img src="{{products[10].image}}" alt="" />\n' +
    '\n' +
    '                </div> <div class="col-sm-8 col-xs-8 col-md-8">\n' +
    '                    <h3>{{products[10].name}}</h3>\n' +
    '                    <p>\n' +
    '                        {{products[10].description}}\n' +
    '                    </p>\n' +
    '\n' +
    '                    <div class="col-sm-12 col-xs-12 col-md-12 no_padding">\n' +
    '\n' +
    '                        <div class="col-sm-5 col-xs-5 col-md-5 no_padding">\n' +
    '                            <p class="item_price">100  <span class="ssss">S</span></p>\n' +
    '                            <p class="item_price">110 <span class="ssss">M</span></p>\n' +
    '                            <p class="item_price">130 <span class="ssss">L</span></p>\n' +
    '                        </div>\n' +
    '                        <div class="col-sm-7 col-xs-7 col-md-7 edits no_padding">\n' +
    '\n' +
    '                            <a href="#inline2" data-lity><img src="img/view.png" alt="" /></a>\n' +
    '                            <a style="cursor: pointer;" ng-click="addItemToCart(products[10])"><img src="img/plus.png" alt="" /></a>\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '            </div> -->\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/items/Templates/itemTemplate3.html',
    '<div ng-class="{page2:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) === 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) !== 0)\n' +
    ', page1:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) !== 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) === 0)}">\n' +
    '            <div class="img_header">\n' +
    '                <img ng-src="{{pageitems.itemModels[0].imageURL}}" style="max-height: 139px;" />\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="main_data">\n' +
    '                <div class="col-sm-8 col-xs-8 col-md-8">\n' +
    '                        <h3>\n' +
    '                                {{pageitems.itemModels[0].itemNameDictionary[selectedLanguage] < 20 ? \'pageitems.itemModels[0].itemNameDictionary[selectedLanguage]\' : pageitems.itemModels[0].itemNameDictionary[selectedLanguage] | limitTo:20 }}  \n' +
    '               </h3>\n' +
    '                              <!-- <p style="white-space: pre;min-height: 40px;">{{pageitems.itemModels[0].itemDescription | limitTo:50}} </p> -->\n' +
    '                              <p style="min-height: 40px;"> \n' +
    '                                 \n' +
    '                                {{pageitems.itemModels[0].itemDescriptionDictionary[selectedLanguage] < 200 ? \'pageitems.itemModels[0].itemDescriptionDictionary[selectedLanguage]\' : pageitems.itemModels[0].itemDescriptionDictionary[selectedLanguage] | limitTo:200 }}  \n' +
    '                             \n' +
    '                              </p> \n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div class="col-sm-4 col-xs-4 col-md-4">\n' +
    '                    <div class="row_size" >\n' +
    '                        <div class="col-sm-7 col-xs-7 col-md-7 no_padding">\n' +
    '                            <div class="item_price" ng-repeat="size in pageitems.itemModels[0].sizes |limitTo:3"><h5 class="y_price">{{size.price}}</h5> <span class="ssss">{{size.sizeNameDictionary[selectedLanguage]}}</span></div>\n' +
    '                            <!-- <p class="item_price">110 <span class="ssss">M</span></p>\n' +
    '                            <p class="item_price">130 <span class="ssss">L</span></p> -->\n' +
    '                        </div>\n' +
    '                        <div class="col-sm-5 col-xs-5 col-md-5 edits no_padding" style="padding-right: 5px!important;">\n' +
    '\n' +
    '                            <a  href="javascript:void(0);" ng-click="viewItemDetail(pageitems.itemModels[0])"  data-lity-target="#inline2" data-lity><img src="assets/img/view.png" alt="" /></a>\n' +
    '\n' +
    '                            <!-- <a style="cursor: pointer;" ng-click="addItemToCart(pageitems.itemModels[0])"><img src="assets/img/plus.png" alt="" /></a> -->\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="img_header" ng-show="pageitems.itemModels[1] != null">\n' +
    '                <img ng-src="{{pageitems.itemModels[1].imageURL}}" style="max-height: 139px;" />\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="main_data" ng-show="pageitems.itemModels[1] != null">\n' +
    '                <div class="col-sm-8 col-xs-8 col-md-8">\n' +
    '                        <h3>\n' +
    '                                {{pageitems.itemModels[1].itemNameDictionary[selectedLanguage] < 20 ? \'pageitems.itemModels[1].itemNameDictionary[selectedLanguage]\' : pageitems.itemModels[1].itemNameDictionary[selectedLanguage] | limitTo:20}}   \n' +
    '            \n' +
    '             </h3>\n' +
    '                      \n' +
    '                        <p style="min-height: 40px;"> \n' +
    '                            \n' +
    '                             {{pageitems.itemModels[1].itemDescriptionDictionary[selectedLanguage] < 200 ? \'pageitems.itemModels[1].itemDescriptionDictionary[selectedLanguage]\' : pageitems.itemModels[1].itemDescriptionDictionary[selectedLanguage] | limitTo:200}}   \n' +
    '                        \n' +
    '                         </p> \n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div class="col-sm-4 col-xs-4 col-md-4">\n' +
    '                    <div class="row_size"  >\n' +
    '                        <div class="col-sm-7 col-xs-7 col-md-7 no_padding">\n' +
    '                            <div class="item_price" ng-repeat="size in pageitems.itemModels[1].sizes |limitTo:3"><h5 class="y_price">{{size.price}}</h5> <span class="ssss">{{size.sizeNameDictionary[selectedLanguage]}}</span></div>\n' +
    '                            \n' +
    '                            <!-- <p class="item_price">110 <span class="ssss">M</span></p>\n' +
    '                            <p class="item_price">130 <span class="ssss">L</span></p> -->\n' +
    '                        </div>\n' +
    '                        <div class="col-sm-5 col-xs-5 col-md-5 edits no_padding" style="padding-right: 5px!important;">\n' +
    '\n' +
    '                            <a href="javascript:void(0);" ng-click="viewItemDetail(pageitems.itemModels[1])"  data-lity-target="#inline2" data-lity><img src="assets/img/view.png" alt="" /></a>\n' +
    '\n' +
    '                            <!-- <a style="cursor: pointer;" ng-click="addItemToCart(pageitems.itemModels[1])"><img src="assets/img/plus.png" alt="" /></a> -->\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/items/Templates/itemTemplate4.html',
    '<div ng-class="{page2:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) === 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) !== 0)\n' +
    ', page1:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) !== 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) === 0)}">\n' +
    '    <div class="offers_list">\n' +
    '                <div class="lists" ng-repeat="item in pageitems.itemModels"> \n' +
    '                    <h3>\n' +
    '                            {{item.itemNameDictionary[selectedLanguage] < 20 ? \'item.itemNameDictionary[selectedLanguage]\' : item.itemNameDictionary[selectedLanguage] | limitTo:20}}   \n' +
    '        \n' +
    '         </h3>\n' +
    '                    <div class="col-sm-12 col-xs-12 col-md-12">\n' +
    '\n' +
    '                            <p style=""> \n' +
    '                                    \n' +
    '                                     {{item.itemDescriptionDictionary[selectedLanguage] < 63 ? \'item.itemDescriptionDictionary[selectedLanguage]\' : item.itemDescriptionDictionary[selectedLanguage] | limitTo:63 }} \n' +
    '                                \n' +
    '                                 </p>  \n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-sm-12 col-xs-12 col-md-12 items_edit">\n' +
    '                        \n' +
    '                                <p class="list_price" ng-repeat="size in item.sizes |limitTo:3">{{size.price}} <span class="ssss">{{size.sizeNameDictionary[selectedLanguage]}}</span> </p>\n' +
    '                       \n' +
    '                        \n' +
    '                        <div class="lists_action">\n' +
    '                            <a href="javascript:void(0);" ng-click="viewItemDetail(item)"  data-lity-target="#inline2" data-lity><img src="assets/img/view.png" alt="" /></a>\n' +
    '                            <!-- <a style="cursor: pointer;" ng-click="addItemToCart(item)"><img src="assets/img/plus.png" alt="" /></a> -->\n' +
    '\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- <div class="lists">\n' +
    '                    <h3>{{products[8].name}}</h3>\n' +
    '                    <div class="col-sm-7 col-xs-7 col-md-7">\n' +
    '\n' +
    '\n' +
    '                        <p>{{products[8].description}}</p>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-sm-5 col-xs-5 col-md-5 items_edit">\n' +
    '\n' +
    '                        <p class="list_price">{{products[8].price}} EGP</p>\n' +
    '                        <div class="lists_action">\n' +
    '                            <a href="#inline2" data-lity><img src="img/view.png" alt="" /></a>\n' +
    '                            <a style="cursor: pointer;" ng-click="addItemToCart(products[8])"><img src="img/plus.png" alt="" /></a>\n' +
    '\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </div><div class="lists">\n' +
    '                    <h3>{{products[9].name}}</h3>\n' +
    '                    <div class="col-sm-7 col-xs-7 col-md-7">\n' +
    '\n' +
    '\n' +
    '                        <p>{{products[9].description}}</p>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-sm-5 col-xs-5 col-md-5 items_edit">\n' +
    '\n' +
    '                        <p class="list_price">{{products[9].price}} EGP</p>\n' +
    '                        <div class="lists_action">\n' +
    '                            <a href="#inline2" data-lity><img src="img/view.png" alt="" /></a>\n' +
    '                            <a style="cursor: pointer;" ng-click="addItemToCart(products[9])"><img src="img/plus.png" alt="" /></a>\n' +
    '\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '                <div class="lists">\n' +
    '                    <h3>{{products[10].name}}</h3>\n' +
    '                    <div class="col-sm-7 col-xs-7 col-md-7">\n' +
    '\n' +
    '\n' +
    '                        <p>{{products[10].description}}</p>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-sm-5 col-xs-5 col-md-5 items_edit">\n' +
    '\n' +
    '                        <p class="list_price">{{products[10].price}} EGP</p>\n' +
    '                        <div class="lists_action">\n' +
    '                            <a href="#inline2" data-lity><img src="img/view.png" alt="" /></a>\n' +
    '                            <a style="cursor: pointer;" ng-click="addItemToCart(products[10])"><img src="img/plus.png" alt="" /></a>\n' +
    '\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '                <div class="lists">\n' +
    '                    <h3>{{products[7].name}}</h3>\n' +
    '                    <div class="col-sm-7 col-xs-7 col-md-7">\n' +
    '\n' +
    '\n' +
    '                        <p>{{products[7].description}}</p>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-sm-5 col-xs-5 col-md-5 items_edit">\n' +
    '\n' +
    '                        <p class="list_price">{{products[7].price}} EGP</p>\n' +
    '                        <div class="lists_action">\n' +
    '                            <a href="#inline2" data-lity><img src="img/view.png" alt="" /></a>\n' +
    '                            <a style="cursor: pointer;" ng-click="addItemToCart(products[7])"><img src="img/plus.png" alt="" /></a>\n' +
    '\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </div> -->\n' +
    '\n' +
    '            </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/items/Templates/itemTemplate5.html',
    '<div ng-class="{page1:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) === 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) !== 0)\n' +
    ', page2:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) !== 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) === 0)}">\n' +
    '<div class="cover"><img ng-src="{{pageitems.itemModels[0].imageURL}}?type=orignal2"alt="" />\n' +
    '\n' +
    '<h3>{{pageitems.itemModels[0].itemNameDictionary[selectedLanguage]}}</h3>\n' +
    '</div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/items/Templates/itemTemplate6.html',
    '<div class="new_title_page" ng-class="{page1:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) === 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) !== 0)\n' +
    ', page2:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) !== 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) === 0)}">\n' +
    '\n' +
    '    <div class="img_header">\n' +
    '        <img ng-src="{{pageitems.itemModels[0].imageURL}}" style="max-height: 139px" />\n' +
    '        <div class="image_content">\n' +
    '            <h3>{{pageitems.itemModels[0].itemNameDictionary[selectedLanguage]}}</h3>\n' +
    '        </div>\n' +
    '        <!-- <img src="assets/img/img1.jpg" /> -->\n' +
    '    </div>\n' +
    '    <div class="main_data main_data2" ng-show="pageitems.itemModels[1] != null">\n' +
    '\n' +
    '        <div class="new_image">\n' +
    '            <div class="col-sm-6 col-xs-6 col-md-6 no_left">\n' +
    '                <img ng-src="{{pageitems.itemModels[1].imageURL}}?type=orignal2" alt="" />\n' +
    '                <div class="image_content2">\n' +
    '                    <h3>{{pageitems.itemModels[1].itemNameDictionary[selectedLanguage]}}</h3>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="col-sm-6 col-xs-6 col-md-6 no_right">\n' +
    '\n' +
    '                <img ng-src="{{pageitems.itemModels[2].imageURL}}?type=orignal2" alt="" />\n' +
    '                <div class="image_content2">\n' +
    '                    <h3>{{pageitems.itemModels[2].itemNameDictionary[selectedLanguage]}}</h3>\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="new_data" ng-repeat="item in pageitems.itemModels">\n' +
    '            <div class="col-sm-6 col-xs-6 col-md-6" ng-class="{\'no_left\':$index%2===0,\'no_right\':$index%2!==0}">\n' +
    '                <div class="col-sm-10 col-xs-10 col-md-10 no_padding main_margin">\n' +
    '                    <h3 class="new_title">\n' +
    '                        {{item.itemNameDictionary[selectedLanguage] < 20 ? \'item.itemNameDictionary[selectedLanguage]\' : item.itemNameDictionary[selectedLanguage] | limitTo:20}}\n' +
    '                    </h3>\n' +
    '                    <p>\n' +
    '                        {{item.itemDescriptionDictionary[selectedLanguage] < 40 ? \'item.itemDescriptionDictionary[selectedLanguage]\' : item.itemDescriptionDictionary[selectedLanguage] | limitTo:40}}\n' +
    '                    </p>\n' +
    '                </div>\n' +
    '                <div class="col-sm-2 col-xs-2 col-md-2 edits no_padding">\n' +
    '\n' +
    '                    <a href="javascript:void(0);" ng-click="viewItemDetail(item)" data-lity-target="#inline2" data-lity><img src="assets/img/view.png" alt=""/></a>\n' +
    '                    <!-- <a href="#"><img src="assets/img/plus.png" alt=""/></a> -->\n' +
    '                    <a style="cursor: pointer;" ng-click="addItemToCart(pageitems.itemModels[0])">\n' +
    '                        <!-- <img src="assets/img/plus.png" alt=""/> -->\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            \n' +
    '           \n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/core/login/templates/login.html',
    '<div ng-if="!isLoggedIn()" >\n' +
    '  	<!-- <div class="header">\n' +
    '        <img class="logo" src="assets/img/logo.png" alt="logo" />\n' +
    '    </div> -->\n' +
    '   \n' +
    '    <div class="container">\n' +
    '         <form ng-submit="submit(username,password)">\n' +
    '            <div class="col-md-6 col-sm-12 col-xs-12 main_form" style="background-color: black !important;    background-image: unset;">\n' +
    '                <h3>Sign In</h3>\n' +
    '                <div class="name main_field">\n' +
    '                <input type="text" required ng-change="reset()" name="username" ng-model="username" placeholder="Name" class=" main_input" />\n' +
    '                </div>\n' +
    '                \n' +
    '                <div class="pass main_field">\n' +
    '                 <input type="password" required ng-change="reset()" name="password" ng-model="password"  placeholder="......" class=" main_input" />\n' +
    '                 </div>\n' +
    '                 <div ng-if="invalidLoginInfo" style="width: 70%;margin-left: auto;color:red">\n' +
    '                    <span>Incorrect username or password.</span>\n' +
    '                </div>\n' +
    '                <div ng-if="inActiveUser" class="loginFailed"  style="width: 70%;margin-left: auto;color:red">\n' +
    '                    <span>Your account is deleted.</span>\n' +
    '                </div>\n' +
    '                <div ng-if="restaurantInActiveUser" class="loginFailed"  style="margin-left: auto;color:red">\n' +
    '                    <span>Restaurant is not activated, please contact your admin.</span>\n' +
    '                </div>\n' +
    '                <div ng-if="PackageExpired" class="loginFailed"  style="margin-left: auto;color:red">\n' +
    '                    <span>Your account is expired, please contact your admin.</span>\n' +
    '                </div>\n' +
    '                <div ng-if="PackageNotActivated" class="loginFailed"  style="margin-left: auto;color:red">\n' +
    '                    <span>Your account is not activated, please contact your admin.</span>\n' +
    '                </div>\n' +
    '                \n' +
    '                <div ng-if="AccountDeActivated" class="loginFailed"  style="margin-left: auto;color:red">\n' +
    '                    <span>Your Account is deactivated, please contact your admin.</span>\n' +
    '                </div>\n' +
    '                \n' +
    '                <input type="submit" class="login" value="Sign In" >\n' +
    '                \n' +
    '            </div>\n' +
    '        </form>\n' +
    '    \n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
