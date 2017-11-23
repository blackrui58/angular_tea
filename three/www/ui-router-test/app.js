var app = angular.module('app',['ui.router']);

//配置整体的路由
app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){

	$stateProvider.state('beiyun',{
		url: '/beiyun',
		templateUrl: 'beiyun/beiyun.html'
	}).state('yuer',{
		url: '/yuer',
		templateUrl: 'yuer/yuer.html'
	}).state('maimai',{
		url: '/maimai',
		templateUrl: 'maimai/index.html',
		controller: function ($state,$scope) {
			// 跳转到特卖
			$state.go('maimai.temai');
		}
	}).state('xiaoxi',{
		url: '/xiaoxi',
		templateUrl: 'xiaoxi/xiaoxi.html'
	}).state('wode',{
		url: '/wode',
		templateUrl: 'wode/wode.html'
	});
}]);

// 配置买卖的路由
app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
	$stateProvider.state('maimai.temai',{
		url: '/temai',
		templateUrl: 'maimai/temai.html',
		controller: 'temaiCtrl'
	}).state('maimai.tongzhuang',{
		url: '/tongzhuang',
		templateUrl: 'maimai/tongzhuang.html',
		controller:'tongzhuangCtrl'
	}).state('maimai.tushu',{
		url: '/tushu',
		templateUrl: 'maimai/tushu.html',
		controller: 'tushuCtrl'
	}).state('maimai.yongpin',{
		url: '/yongpin',
		templateUrl: 'maimai/yongpin.html',
		controller: 'yongpinCtrl'
	}).state('maimai.haiwai',{
		url: '/haiwai',
		templateUrl: 'maimai/haiwai.html',
		controller: 'haiwaiCtrl'
	})
	
	$urlRouterProvider.otherwise('/beiyun');

}]);

