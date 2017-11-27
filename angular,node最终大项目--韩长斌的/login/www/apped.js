// 注册依赖模块 
var apped = angular.module('apped',['ui.router']);

//配置路由
apped.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('shouye',{
		url:'/shouye',
		templateUrl:'shouye/shouye.html',
		 controller:'shouyeCtrl'
	}).state('userlist',{
		url:'/userlist',
		templateUrl:'userlist/userlist.html',
		controller:'userlistCtrl'
	}).state('bookslist',{
		url:'/bookslist',
		templateUrl:'books/bookslist.html',
		 controller:'bookslistCtrl'
	}).state('booksclass',{
		url:'/booksclass',
		templateUrl:'books/booksclass.html',
		// controller:'booksclassCtrl'
	}).state('personal',{
		url:'/personal',
		templateUrl:'personal/personal.html',
		 controller:'personalCtrl'
	}).state('updatepwd',{
		url:'/updatepwd',
		templateUrl:'personal/updatepwd.html',
		 controller:'updatepwdCtrl'
	})
	//重定向
	$urlRouterProvider.otherwise('/shouye');
}])

//初始化全局变量
apped.run(function($http,$rootScope){
	$http.get('/token').then(function(str){
		console.log(str)
		$rootScope.username = str.data;
	});
	$rootScope.backLogin = function(){
		$rootScope.username = '';
		location.href="./login.html";
	}
})