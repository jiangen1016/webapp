/**
 * Created by hxsd on 2016/9/30.
 */
myapp.controller("contCtrl",function($scope,$http,$ionicModal,$ionicScrollDelegate){

   //$http.get("data/content.json").success(function(data){
   //    $scope.List=data;
   //}).finally(function(){
   //
   //});

    //构建模态对话框
    $ionicModal.fromTemplateUrl("views/modal.html",{
        scope: $scope,      // 作用域使用父作用域
        animation: 'slide-in-left'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.newtxt="";
    //添加新的内容
    $scope.createContact = function(u) {
        $scope.contentlist.unshift({
            user:"遥灵-梦梨",text: u.newtxt,"userimg":"images/lizi.jpg",ding:0,cai:0
        });
        u.newtxt="";
        $scope.modal.hide();
       // 隐藏
    };
    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    // 离开时清除model
    $scope.$on('$destroy', function() {

        $scope.modal.remove();

    });

    // 在隐藏modal时执行一些动作
    $scope.$on('modal.hidden', function() {
        // 在这里执行一些操作

    });

    // 在移除modal时执行一些动作
    $scope.$on('modal.removed', function() {
        // 在这里执行一些操作
        newUser.text=''
    });
    //无限刷新
    // 创建一些scope变量
    $scope.page = 0;    // 用来保存当前请求的页码
    $scope.total = 1;   // 用来保存总页数
    $scope.contentlist = [];    // 保存所有加载的餐馆信息
    $scope.getcontent=function(){
        $http.get("data/content.json").success(function(data){
            angular.forEach(data,function(data){
                $scope.contentlist.push(data);
            })
        }).finally(function () {
            // 广播事件，告诉无限滚动组件everything is done
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    }
    $scope.getcontent();
    $scope.top=function(){
        $ionicScrollDelegate.scrollTop(true)
    }
});