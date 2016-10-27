/**
 * Created by hxsd on 2016/9/30.
 */
myapp.controller("loginCtrl",function($scope,$ionicPopup){
    $scope.showAlert=function(){
        $ionicPopup.alert({
            title:"您还未注册",
            template:"为了您更好的体验,请先注册一个账号"
        })
    };

});