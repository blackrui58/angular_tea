
angular.module('apped').controller('userlistCtrl',['$scope','$http',function($scope,$http){
	$scope.userIndex=-1;
	$scope.data = [];
	$http.get('/userlist').then(function(str){
		// console.log(str);
		$scope.data = str.data;
	})
	$scope.userChange=function(a){
		$scope.userIndex=a;
	}
}])