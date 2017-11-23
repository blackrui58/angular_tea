/**
 * Created by mac on 16/9/5.
 */
var module = angular.module('in_theaters',['ngRoute']);

module.controller('in_theatersCtrl',function ($scope,$http,$route,$routeParams) {
    //控制器分为两步: 1.设计暴露数据   2.设计暴露的行为
    // $scope.data = data;
    $scope.data = [];
    // 
    var count = 10;
    var total;
    $scope.arr = [];
    $scope.currentPage = $routeParams.page || 1;
    $scope.category = $routeParams.category || 'in_theaters';
    var url = '/'+$scope.category+'?count='+count+'&page='+$scope.currentPage;
    $http.get(url).success(function (data) {
        $scope.data = data.data;
        $scope.total = data.total;
        $scope.total_pages = Math.ceil($scope.total / count);
        $scope.arr.length = $scope.total_pages;
        // console.log(data.data);
    });

    $scope.page = function (index) {
        $route.updateParams({page: index});
    }
});


