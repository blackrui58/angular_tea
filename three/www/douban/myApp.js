/**
 * Created by mac on 16/9/5.
 */
var module = angular.module('movie', ['in_theaters','movie_detail', 'ngRoute','movieFocus']);

//路由表
module.config(function ($routeProvider) {
    $routeProvider
        .when('/detail/:id',{
            controller: 'movie',
            templateUrl: 'movie_detail/index.html'
        })
        .when('/:category/:page?', {
            //?表示可有可无
            controller: 'in_theatersCtrl',
            templateUrl: 'in_theaters/index.html'
        })
        .otherwise({
            redirectTo: '/in_theaters/1'
        });
});


module.run(function ($rootScope) {
    $rootScope.input = '';
});