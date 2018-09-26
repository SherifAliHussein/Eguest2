angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/cart/cart.html',
    '\n' +
    '   <a class="back" href="javascript:void(0);"  ng-click="$state.go(\'menu\',{featureId: $stateParams.featureId,restaurantId:$stateParams.restaurantId})">\n' +
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
    '                                    <span ><img  class="arrow_img" ng-click="removeCounter($index)" style="width: 21px!important;height: 21px!important;" ng-src="../assets/img/Subtract2.png" /></span>\n' +
    '                                <input style="width: 36px;color: black !important;"  type="number"  ng-model="c.itemobj.count" readonly="readonly">\n' +
    '                                <span><img class="arrow_img" ng-click="addCounter($index)" style="width: 21px!important;height: 21px!important;" ng-src="../assets/img/plus2.png" /></span>\n' +
    '        \n' +
    '                        </td>\n' +
    '                        <td>\n' +
    '                            </td> <td><span class="bold_td">{{c.size.price*c.itemobj.count}} {{\'SAR\' | translate}}</span></td>\n' +
    '                        <td> <input class="btn btn-danger" type="button" ng-click="removeCounter($index)" value="{{\'Remove\' | translate}}" />\n' +
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
    '                <div class="checkout_btn" ng-disabled="cartCtrl.isChanged">\n' +
    '                    <input type="button" class="" value="{{\'CheckOut\' | translate}}" ng-click="checkOut()">\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="cart">\n' +
    '                    <h4>{{\'Total\' | translate}}</h4>\n' +
    '                    <h5>{{totalItem}} {{\'SAR\' | translate}}</h5>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>');
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
    '                <div type="submit" ng-click="$state.go(\'Items\', {featureId: $stateParams.featureId,restaurantId:menuCtrl.restaurantId,menuId: item.menuId,categoryId: item.categoryId});" class="active_pop meat" data-lity-close >\n' +
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
    '<style>\n' +
    '    /* .ui-carousel .carousel-wrapper {\n' +
    '        text-align: center !important;max-width:800px !important;max-height:400px !important;\n' +
    '    }\n' +
    '    \n' +
    '    .ui-carousel .slide{\n' +
    '        text-align: center !important;\n' +
    '        background-color: black;\n' +
    '        height: 100%;\n' +
    '    } */\n' +
    '    .ui-carousel{\n' +
    '        width: 90%\n' +
    '    }\n' +
    '    .ui-carousel .carousel-wrapper{\n' +
    '        background-color: black;\n' +
    '    }\n' +
    '    /* .ui-carousel .track{\n' +
    '        width: 100%\n' +
    '    } */\n' +
    '    .datetimepicker .table td, .datetimepicker .table th .active{\n' +
    '        position: unset !important;\n' +
    '        padding:5px !important;\n' +
    '        border:unset !important;\n' +
    '        width: unset !important;\n' +
    '    }\n' +
    '    .datetimepicker span.active {\n' +
    '        position: unset !important;\n' +
    '        width:25% !important;\n' +
    '        padding:unset !important;\n' +
    '        border:unset !important\n' +
    '    }\n' +
    '    .lity-close:hover{\n' +
    '        top: 40px !important;\n' +
    '    }\n' +
    '    .lity-close{\n' +
    '        top: 40px !important;\n' +
    '    }\n' +
    '    .ui-select-bootstrap>.ui-select-choices>li>div{\n' +
    '        position: unset;\n' +
    '        border:unset;\n' +
    '        padding:unset;\n' +
    '        width: unset;\n' +
    '\n' +
    '    }\n' +
    '    .ui-select-choices-group>div{\n' +
    '        position: unset;\n' +
    '        border:unset;\n' +
    '        padding:unset;\n' +
    '        width: unset;\n' +
    '    }\n' +
    '    .pmd-table.table>tbody>tr>td, .pmd-table.table>tbody>tr>th, .pmd-table.table>tfoot>tr>td, .pmd-table.table>tfoot>tr>th, .pmd-table.table>thead>tr>td, .pmd-table.table>thead>tr>th{\n' +
    '        text-align: unset !important;\n' +
    '    }\n' +
    '    .datetimepicker .disabled, .datetimepicker .disabled:hover{\n' +
    '        color: #715f5f;\n' +
    '    }\n' +
    '    .datetimepicker{\n' +
    '        overflow-x: unset;\n' +
    '    }\n' +
    '    .mCSB_container{\n' +
    '        min-height: 400px;\n' +
    '    }\n' +
    '    /* .ui-select-multiple.ui-select-bootstrap input.ui-select-search{\n' +
    '        width: 65% !important;\n' +
    '    } */\n' +
    '</style>\n' +
    '\n' +
    '<div class="main_field_3">\n' +
    '        <div  style="padding: 10px;color: white;margin-top: -80px">\n' +
    '                <img ng-src="{{featureDetailCtrl.feature.imageURL}}?type=\'thumbnail\'" style="border-radius: 100px;"/>\n' +
    '                <span>{{featureDetailCtrl.feature.featureNameDictionary[selectedLanguage]}}</span>\n' +
    '            </div>\n' +
    '            \n' +
    '            <div class="pmd-modal-action main_field_3_text" style="    margin-right: 10px;\n' +
    '            margin-top: -50px;\n' +
    '            margin-bottom: 20px;">\n' +
    '                <!-- <textarea rows="2" style="resize: none;padding: 5px;     width: 85%;\n' +
    '                margin-bottom: 5px;\n' +
    '                margin-top: 5px;\n' +
    '                border-radius: 25px;" ng-max="200" ng-model="featureDetailCtrl.comment" placeholder="{{\'yourComment\' |translate}} ({{\'optinal\' |translate}})"></textarea> -->\n' +
    '                <button class="btn pmd-ripple-effect btn-primary" ng-disabled="requestForm.$invalid " ng-click="featureDetailCtrl.request()"  type="button" data-lity-target="#confirmatioRequest" data-lity >{{\'requestbtn\' | translate}}</button>\n' +
    '            <!-- </div> -->\n' +
    '            <div style="color: white" ng-show="featureDetailCtrl.lastRequest.requestId !=undefined">\n' +
    '                    {{\'lastrequestStatus\' | translate}} {{featureDetailCtrl.lastRequest.createTime}} {{featureDetailCtrl.lastRequest.status | translate}}\n' +
    '                 <span ng-show="featureDetailCtrl.lastRequest.status != \'Pending\'"> {{featureDetailCtrl.lastRequest.modifyTime}}</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            \n' +
    '</div>\n' +
    '\n' +
    '<div >\n' +
    '    <form name="requestForm">\n' +
    '        <center>\n' +
    '            <div ng-scrollbars  ng-scrollbars-config="featureDetailCtrl.config" class="modal-content main_field_2 col-md-5" ng-if="(featureDetailCtrl.feature.featureControl | filter: {control:0}).length > 0 \n' +
    '                ||(featureDetailCtrl.feature.featureControl | filter: {control:2}).length > 0 \n' +
    '                ||(featureDetailCtrl.feature.featureControl | filter: {control:4}).length > 0 \n' +
    '                || (featureDetailCtrl.feature.featureControl | filter: {control:5}).length > 0\n' +
    '                || (featureDetailCtrl.feature.featureControl | filter: {control:6}).length > 0"\n' +
    '                style="padding:0 10px 0 10px;margin: 0 30px 0 30px;overflow-x: hidden;overflow-y: auto;max-height: 500px;background: rgba(8, 8, 8, 0.32);color: white">\n' +
    '                    \n' +
    '                <div ng-repeat="featureControl in featureDetailCtrl.feature.featureControl| filter: featureDetailCtrl.filterFeatureLeftSide" style="padding: 5px;height: 100%;" >\n' +
    '                    <div class="column">\n' +
    '                    <div ng-if="featureControl.control == 0" class="row">\n' +
    '                            <!-- <div > -->\n' +
    '                            <ui-select required ng-if="featureControl.controlType == \'Multiple\'"style="width: 90%"   multiple ng-model="featureControl.selectedOption" theme="bootstrap" >\n' +
    '                                <ui-select-match placeholder="{{\'SelectMulti\'|translate}}">{{$item.descriptionDictionary[selectedLanguage]}}</ui-select-match>\n' +
    '                                <ui-select-choices repeat="featureDetail in featureControl.featureDetails| filter: $select.search" >\n' +
    '                                       <span style="font-weight: 400 !important;"> {{featureDetail.descriptionDictionary[selectedLanguage]}}</span>\n' +
    '                                </ui-select-choices>\n' +
    '                            </ui-select>\n' +
    '                            <ui-select required ng-if="featureControl.controlType == \'Single\'"  style="width: 90%" ng-model="featureControl.selectedOption" theme="bootstrap"  >\n' +
    '                                <ui-select-match placeholder="{{\'SelectSingle\'|translate}}">{{featureControl.selectedOption.descriptionDictionary[selectedLanguage]}}</ui-select-match>\n' +
    '                                <ui-select-choices repeat="featureDetail in featureControl.featureDetails| filter: $select.search">\n' +
    '                                        {{featureDetail.descriptionDictionary[selectedLanguage]}}\n' +
    '                                </ui-select-choices>\n' +
    '                            </ui-select>\n' +
    '                    </div> \n' +
    '                    \n' +
    '                    <div ng-if="featureControl.control == 2"class="row">\n' +
    '                        <div ng-repeat="featureDetail in featureControl.featureDetails" >\n' +
    '                            <div class="col-md-4">\n' +
    '                                <div class="column">\n' +
    '                                    <label style="display: grid;align-items: center;"  > \n' +
    '                                        <img ng-src="{{featureDetail.imageURL}}?type=\'thumbnail\'"/>\n' +
    '                                        <span>{{featureDetail.descriptionDictionary[selectedLanguage]}}</span>\n' +
    '                                        <input type="checkbox" ng-if="featureControl.controlType == \'Multiple\'" ng-required="(featureControl.featureDetails|filter:{isSelected:true}).length<=0" ng-model="featureDetail.isSelected">\n' +
    '                                        <input type="radio" ng-if="featureControl.controlType == \'Single\'" required ng-model="featureControl.selectedOption"\n' +
    '                                        ng-value="featureDetail" name="textAndImageRadio">\n' +
    '                                    </label>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div ng-if="featureControl.control == 4" >\n' +
    '                        <div ng-show="featureDetailCtrl.isFrom">\n' +
    '                            <span style="    font-size: 20px;">{{\'from\'|translate}}</span>\n' +
    '                            <datetimepicker  required \n' +
    '                            data-datetimepicker-config="{minuteStep:30}"\n' +
    '                            data-before-render="featureDetailCtrl.checkAvailableFrom($view, $dates, $leftDate, $upDate, $rightDate,featureControl)"\n' +
    '                            data-ng-model="featureControl.from" ng-change="featureDetailCtrl.availableChange(featureControl)"></datetimepicker>\n' +
    '                        </div>\n' +
    '                        <div ng-show="featureDetailCtrl.isTo">\n' +
    '                            <span  style="    font-size: 20px;">{{\'to\'|translate}}</span>\n' +
    '                            <datetimepicker  required \n' +
    '                            data-datetimepicker-config="{minuteStep:30,startView:\'hour\'}"\n' +
    '                            data-before-render="featureDetailCtrl.checkAvailableTo($view, $dates, $leftDate, $upDate, $rightDate,featureControl)"\n' +
    '                            data-ng-model="featureControl.to"  ng-change="featureDetailCtrl.availableChange(featureControl)"></datetimepicker>\n' +
    '                        </div>\n' +
    '                        <div ng-show="featureControl.from != null">{{\'from\'|translate}}: {{featureControl.from| date:"MM/dd/yyyy  h:mma"}}</div>\n' +
    '                        \n' +
    '                        <div ng-show="featureControl.to != null">{{\'to\'|translate}}:\n' +
    '                            {{featureControl.to| date:"MM/dd/yyyy  h:mma"}}                                    \n' +
    '                        </div>\n' +
    '                    </div> \n' +
    '                    <div ng-if="featureControl.control == 5" >\n' +
    '                            <!-- <p class="input-group">\n' +
    '                                    <input type="text" class="form-control" datetime-picker="MM/dd/yyyy HH:mm" ng-model="featureDetailCtrl.picker3.date" is-open="featureDetailCtrl.picker3.open" />\n' +
    '                            <span class="input-group-btn">\n' +
    '                                <button type="button" class="btn btn-default" ng-click="featureDetailCtrl.openCalendar($event, \'picker3\')"><i class="fa fa-calendar"></i></button>\n' +
    '                            </span>\n' +
    '                                </p> -->\n' +
    '                                <datetimepicker  required \n' +
    '                               data-before-render="featureDetailCtrl.beforeRender($view, $dates, $leftDate, $upDate, $rightDate)"\n' +
    '                                data-ng-model="featureControl.date"></datetimepicker>\n' +
    '                                {{featureControl.date| date:"MM/dd/yyyy  h:mma"}}\n' +
    '                    </div>                \n' +
    '                    <div ng-if="featureControl.control == 6" >\n' +
    '                        <div>\n' +
    '                            <ui-select required ng-if="featureControl.controlType == \'Single\'" ng-change="featureDetailCtrl.listOfAvailabiltyChange(featureControl)"  style="width: 90%" ng-model="featureControl.selectedOption" theme="bootstrap"  >\n' +
    '                                <ui-select-match placeholder="{{\'SelectSingle\'|translate}}">{{featureControl.selectedOption.descriptionDictionary[selectedLanguage]}}</ui-select-match>\n' +
    '                                <ui-select-choices repeat="featureDetail in featureControl.featureDetails| filter: $select.search">\n' +
    '                                        {{featureDetail.descriptionDictionary[selectedLanguage]}}\n' +
    '                                </ui-select-choices>\n' +
    '                            </ui-select>\n' +
    '                        </div>\n' +
    '                        <div ng-if="featureDetailCtrl.isFrom && featureControl.selectedOption != null" >\n' +
    '                            <span style="    font-size: 20px;">{{\'from\'|translate}}</span>\n' +
    '                            <datetimepicker  required \n' +
    '                            data-datetimepicker-config="{minuteStep:30,renderOn:\'featureDetailCtrl.listOfAvailabiltyChange\'}"\n' +
    '                            data-before-render="featureDetailCtrl.checkAvailableFrom($view, $dates, $leftDate, $upDate, $rightDate,featureControl)"\n' +
    '                            data-ng-model="featureControl.from" ng-change="featureDetailCtrl.availableChange(featureControl)"></datetimepicker>\n' +
    '                        </div>\n' +
    '                        <div ng-if="featureDetailCtrl.isTo && featureControl.selectedOption != null">\n' +
    '                            <span  style="    font-size: 20px;">{{\'to\'|translate}}</span>\n' +
    '                            <datetimepicker  required \n' +
    '                            data-datetimepicker-config="{minuteStep:30,startView:\'hour\'}"\n' +
    '                            data-before-render="featureDetailCtrl.checkAvailableTo($view, $dates, $leftDate, $upDate, $rightDate,featureControl)"\n' +
    '                            data-ng-model="featureControl.to"  ng-change="featureDetailCtrl.availableChange(featureControl)"></datetimepicker>\n' +
    '                        </div>\n' +
    '                        <div ng-show="featureControl.from != null">{{\'from\'|translate}}: {{featureControl.from| date:"MM/dd/yyyy  h:mma"}}</div>\n' +
    '                        \n' +
    '                        <div ng-show="featureControl.to != null">{{\'to\'|translate}}:\n' +
    '                            {{featureControl.to| date:"MM/dd/yyyy  h:mma"}}                                    \n' +
    '                        </div>\n' +
    '            </div> \n' +
    '                <br>\n' +
    '                    </div> \n' +
    '                </div>\n' +
    '                <!-- <div > -->\n' +
    '                    \n' +
    '            </div>\n' +
    '        \n' +
    '        \n' +
    '            <div ng-scrollbars  ng-scrollbars-config="featureDetailCtrl.config" class="modal-content main_field_2 col-md-6" ng-if="(featureDetailCtrl.feature.featureControl | filter: {control:1}).length > 0\n' +
    '                || (featureDetailCtrl.feature.featureControl | filter: {control:3}).length > 0"\n' +
    '                style="padding:0 10px 0 10px;margin: 0 10px 0 10px;overflow-x: hidden;overflow-y: auto;max-height: 500px;background: rgba(8, 8, 8, 0.32);color: white">\n' +
    '                    \n' +
    '                <div ng-repeat="featureControl in featureDetailCtrl.feature.featureControl| filter: featureDetailCtrl.filterFeatureRightSide" style="padding: 5px;" >\n' +
    '                    <div class="column">      \n' +
    '                    <div ng-if="featureControl.control == 1" >\n' +
    '                        <!-- <center> -->\n' +
    '                            <ui-carousel \n' +
    '                            slides="featureControl.featureDetails"\n' +
    '                            slides-to-show="1"\n' +
    '                            slides-to-scroll="1"\n' +
    '                            initial-slide="0"\n' +
    '                            autoplay="true"\n' +
    '                            autoplay-speed="20000"\n' +
    '                            \n' +
    '                            dots="true">            \n' +
    '                                <carousel-item  >\n' +
    '                                    <div style="text-align: center !important;">\n' +
    '                                            <img ng-src="{{item.imageURL}}" height="100%" width="100%" />\n' +
    '                                    </div>\n' +
    '                                    \n' +
    '                                </carousel-item>\n' +
    '                            </ui-carousel>\n' +
    '                        <!-- </center> -->\n' +
    '                    </div>\n' +
    '                    <div ng-if="featureControl.control == 3"class="row">\n' +
    '                            <!-- <center> -->\n' +
    '                                <ui-carousel \n' +
    '                                    slides="featureControl.featureDetails"\n' +
    '                                    slides-to-show="1"\n' +
    '                                    slides-to-scroll="1"\n' +
    '                                    initial-slide="0"\n' +
    '                                    \n' +
    '                                    \n' +
    '                                    dots="true">            \n' +
    '                                    <carousel-item  >\n' +
    '                                        <iframe ng-src="{{item.link}}"\n' +
    '                                        height="315" width="100%" frameborder="0" allowfullscreen></iframe>\n' +
    '                                    </carousel-item>\n' +
    '                                </ui-carousel>\n' +
    '                            <!-- </center> -->\n' +
    '                    </div>\n' +
    '                            \n' +
    '                <!-- <hr> -->\n' +
    '                <br>\n' +
    '                    </div> \n' +
    '                </div>\n' +
    '                <!-- <div > -->\n' +
    '                \n' +
    '            </div>\n' +
    '        </center>\n' +
    '    </form>\n' +
    '</div>\n' +
    '\n' +
    '<div id="confirmatioRequest" class="main_lity lity-hide subs">\n' +
    '        <!-- <div class="col-md-4 col-sm-4 col-xs-12 tybes" > -->\n' +
    '            <form name="requestConfirmForm">\n' +
    '            <div >\n' +
    '                <div>\n' +
    '                        {{\'requestConfirmationLbl\' | translate}}<strong>{{featureDetailCtrl.feature.featureNameDictionary[selectedLanguage]}}</strong>? \n' +
    '                </div>\n' +
    '                <div class="table-responsive pmd-card pmd-z-depth" ng-if="featureDetailCtrl.newRequest.requestDetails.length>0">\n' +
    '                    <table class="table table-mc-red pmd-table" >\n' +
    '                        <thead>\n' +
    '                            <th style="font-size: 20px;">{{\'Name\'|translate}}</th>\n' +
    '                            <th style="font-size: 20px;">{{\'NUM\'|translate}}</th>\n' +
    '                            <th style="font-size: 20px;">{{\'Price\' |translate}}</th>\n' +
    '                            <th style="font-size: 20px;">{{\'Total\'|translate}}</th>\n' +
    '                            <!-- <th></th> -->\n' +
    '                        </thead>\n' +
    '                        <tbody >\n' +
    '                            <tr ng-repeat="featureDetail in featureDetailCtrl.newRequest.requestDetails">\n' +
    '                                <td>\n' +
    '                                    <!-- {{featureDetailCtrl.feature.featureControl}} -->\n' +
    '                                    <span ng-repeat="featureDetailName in featureDetailCtrl.feature.featureControl|filter: {featureDetails:{featureDetailId: featureDetail.featureDetailId}}">\n' +
    '                                        <!-- {{featureDetailName.featureDetails}} -->\n' +
    '                                        <span ng-repeat="item in featureDetailName.featureDetails|filter: {featureDetailId: featureDetail.featureDetailId}">\n' +
    '                                            {{item.descriptionDictionary[selectedLanguage]}}\n' +
    '                                        </span>\n' +
    '                                     </span>  \n' +
    '                                     <div ng-show="featureDetail.from != null">{{\'from\'|translate}}: {{featureDetail.from| date:"MM/dd/yyyy  h:mma"}}</div>\n' +
    '                                     \n' +
    '                                     <div ng-show="featureDetail.to != null">{{\'to\'|translate}}:\n' +
    '                                         {{featureDetail.to| date:"MM/dd/yyyy  h:mma"}}                                    \n' +
    '                                     </div>                                  \n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                    <input type="number" ng-model="featureDetail.number" min="1" max="{{featureDetailCtrl.availableNumberRequest}}">\n' +
    '                                    \n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                    {{featureDetail.price}}\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                    {{featureDetail.number * featureDetail.price}}\n' +
    '                                </td>\n' +
    '                                <!-- <td>\n' +
    '                                    <input class="btn btn-danger" type="button" ng-click="featureDetailCtrl.removeFeatureDetail($index)" value="{{\'Remove\' | translate}}" />\n' +
    '                                </td> -->\n' +
    '                            </tr>\n' +
    '                        </tbody>\n' +
    '                    </table>\n' +
    '                    <!-- {{featureDetailCtrl.newRequest}} -->\n' +
    '                  \n' +
    '                </div>  <span>\n' +
    '                            {{featureDetailCtrl.newRequest.requestTime | date:"MM/dd/yyyy  h:mma"}}\n' +
    '                    </span>\n' +
    '                <div>\n' +
    '                     <textarea rows="2" style="resize: none;padding: 5px;     width: 85%;\n' +
    '                    margin-bottom: 5px;\n' +
    '                    margin-top: 5px;\n' +
    '                    border-radius: 25px;" ng-max="200" ng-model="featureDetailCtrl.comment" placeholder="{{\'yourComment\' |translate}} ({{\'optinal\' |translate}})"></textarea>\n' +
    '                </div>\n' +
    '            </div>   \n' +
    '        </form>     \n' +
    '        <!-- </div> -->\n' +
    '        <button ng-disabled="requestConfirmForm.$invalid " class="btn pmd-ripple-effect btn-primary" type="button" data-lity-close ng-click="featureDetailCtrl.confirmRequest()">{{\'ApproveBtn\' | translate}}</button>\n' +
    '        <!-- <button class="btn pmd-ripple-effect btn-default pmd-btn-flat" type="button" ng-click="requestDlCtrl.close()">{{\'cancelBtn\' | translate}}</button> -->\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/features/templates/features.html',
    '\n' +
    '<div style="background-color: #83bde6fa" >\n' +
    '    <div >\n' +
    '        \n' +
    '        <div ng-repeat="feature in featureCtrl.features.results" ng-if="globalInfo.featureMode" >\n' +
    '            <div class="col-md-2">\n' +
    '                <div class="column cursorPointer" ng-if="feature.type==\'Normal\'" \n' +
    '                ng-click="$state.go(\'featureDetail\',{featureId: feature.featureId})"\n' +
    '                  style="cursor: pointer; border-radius: 7px;box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 50px rgba(0,0,0,.24);color: white; background: rgba(8, 8, 8, 0.32);margin-bottom: 10px;">\n' +
    '                        <div>\n' +
    '                            <img ng-src="{{feature.imageURL}}?type=\'thumbnail\' "  style="width: 100%;border-radius: 150px;"/>\n' +
    '                            <div style="text-align: center;font-weight: bold;height: 50px;display: grid;align-items: center;">\n' +
    '                                  {{feature.featureNameDictionary[selectedLanguage]}}\n' +
    '                                \n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                </div>\n' +
    '                <div class="column cursorPointer" ng-if="feature.type==\'Restaurant\'"\n' +
    '                ng-click="featureCtrl.showRestaurants($index)"\n' +
    '                  style="cursor: pointer; border-radius: 7px;box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 50px rgba(0,0,0,.24);color: white;background: rgba(8, 8, 8, 0.32);margin-bottom: 10px;">\n' +
    '                        <div>\n' +
    '                            <img ng-src="{{feature.imageURL}}?type=\'thumbnail\' "  style="width: 100%;border-radius: 150px;"/>\n' +
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
    '                ng-click="$state.go(\'menu\',{featureId: featureCtrl.features.results[featureCtrl.selectedFeatureIndex].featureId,restaurantId:restaurant.restaurantId})"\n' +
    '                style="cursor: pointer; border-radius: 7px;box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 50px rgba(0,0,0,.24);color: white;background: rgba(8, 8, 8, 0.32);margin-bottom: 10px;">\n' +
    '                        <div>\n' +
    '                            <img ng-src="{{restaurant.imageURL}}?type=\'thumbnail\' "  style="width: 100%;border-radius: 150px;"/>\n' +
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
    '<a class="back" href="javascript:void(0);"  ng-click="$state.go(\'menu\',{featureId: $stateParams.featureId,restaurantId:itemCtrl.restaurantId})">\n' +
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
    '            <div style="color: #a9a9a9;">\n' +
    '                <img src="assets/img/like.svg" style="height: 22px;cursor: pointer;" ng-click="itemCtrl.likeItem(itemCtrl.itemDetails)"> ({{itemCtrl.itemDetails.like}})\n' +
    '                <img src="assets/img/dislike.svg" style="height: 22px;cursor: pointer;" ng-click="itemCtrl.dislikeItem(itemCtrl.itemDetails)">({{itemCtrl.itemDetails.dislike}})\n' +
    '            </div>\n' +
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
    '<div ng-class="{page2:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) === 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) !== 0)\n' +
    ', page1:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) !== 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) === 0)}">\n' +
    '<div class="cover"><img ng-src="{{pageitems.itemModels[0].imageURL}}?type=orignal2"alt="" />\n' +
    '\n' +
    '<h3>{{pageitems.itemModels[0].itemNameDictionary[selectedLanguage]}}</h3>\n' +
    '</div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/items/Templates/itemTemplate6.html',
    '<div class="new_title_page" ng-class="{page2:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) === 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) !== 0)\n' +
    ', page1:(selectedLanguage == \'en-us\' && (pageitems.pageNumber % 2) !== 0) || (selectedLanguage == \'ar-eg\' && (pageitems.pageNumber % 2) === 0)}">\n' +
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
    '                <div class="col-sm-10 col-xs-10 col-md-10 no_padding main_margin" style="margin-top: 2px;margin-bottom: 2px;">\n' +
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
