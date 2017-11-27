angular.module('apped').controller('updatepwdCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$http.get('/token').then(function(str){
		console.log(str)
		$rootScope.username = str.data;
	})
	//用户名
//	var reg = /^[\u4e00-\u9fa5]{1,}$/;
// console.log(reg.test('asd5f644l;46l'))
		// $scope.a='';
		// $scope.b='';
		// $scope.c='';
		$scope.msg = '';
	$scope.blur1=function(){
			if(reg1.test($scope.a)){
				$scope.msg = '';
			}else{
				$scope.msg = '密码只能是数字和字母,不少于6个';
			}	
	};
	//登录密码
	var reg1 = /^[0-9a-z]{6,}$/;
	$scope.blur2=function(){
		if(reg1.test($scope.b)){
			$scope.msg = '';
		}else{
			$scope.msg = '密码只能是数字和字母,不少于6个';
		}
	};

	
	$scope.submit2=function(){
		
		if(angular.equals($scope.b,$scope.c)){
			$scope.msg = '';
			console.log($scope.a,$scope.c)
			$.ajax({
				type:'post',
				url:'/updatepwd',
				data:{username:$rootScope.username,pwded:$scope.a,pwd:$scope.c},
				success:function(str){
					console.log(str)
					if(str.error ==1){
						$scope.$apply(function(){
							$scope.msg = str.msg;
						})
						
					}else{
						
						$scope.$apply(function(){
							alert(str.msg)
							$scope.a='';
							$scope.b='';
							$scope.c='';
							$scope.msg = '';
							location.href = './login.html';
						})
						
						
					}
				}
			})
		}else{
			$scope.msg = '账户密码不一致';
		}
	}
	


}])