
// 创建特卖控制器
angular.module('app').controller('temaiCtrl',['$scope','$http',function ($scope,$http) {
	$scope.data = [];
	// 获取数据
	$http.get('/temai').then(function (str) {
		$scope.data = str.data; 
	});

}]);


// 创建童装控制器
angular.module('app').controller('tongzhuangCtrl',['$scope','$http',function ($scope,$http) {
	$scope.data = [];
	// 获取数据
	$http.get('/tongzhuang').then(function (str) {
		$scope.data = str.data;
	});

}]);

angular.module('app').controller('tushuCtrl',['$scope','$http',function ($scope,$http) {
	$scope.data = [];
	// 获取数据
	$http.get('/tushu').then(function (str) {
		$scope.data = str.data;
	});

}]);

angular.module('app').controller('yongpinCtrl',['$scope','$http',function ($scope,$http) {
	$scope.data = [];
	// 获取数据
	$http.get('/yongpin').then(function (str) {
		$scope.data = str.data;
	});

}]);

angular.module('app').controller('haiwaiCtrl',['$scope','$http',function ($scope,$http) {
	$scope.data = [];
	// 获取数据
	$http.get('/haiwai').then(function (str) {
		$scope.data = str.data;
	});

}]);