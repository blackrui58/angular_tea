/**
 * Created by mac on 16/9/5.
 */
var module = angular.module('movie_detail',['ngRoute']);

module.controller('movie',['$scope','$http','$window','$routeParams','$route',function ($scope,$http,$window,$routeParams,$route) {
   $scope.data = '';
   $http.get('/detail?id='+$routeParams.id).success(function (data) {
   		$scope.data = data;
   });

}]);

