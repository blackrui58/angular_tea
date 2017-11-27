angular.module('apped').controller('personalCtrl',['$scope','$http',function($scope,$http){
	
	//用户名
	var reg = /^[\u4e00-\u9fa5]{1,}$/;
// console.log(reg.test('asd5f644l;46l'))
		// $scope.a='';
		// $scope.b='';
		// $scope.c='';
		$scope.msg = '';
	$scope.blur1=function(){
			if(reg.test($scope.a)){
				$scope.msg = '';
			}else{
				$scope.msg = '用户名只能是中文昵称';
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
				url:'/register',
				data:{username:$scope.a,pwd:$scope.c},
				success:function(str){
					if(str.error){
						$scope.msg = '该用户已注册';
					}else{
						
						$scope.a='';
						$scope.b='';
						$scope.c='';
						location.href = './login.html';
					}
				}
			})
		}else{
			$scope.msg = '账户密码不一致';
		}
	}
	


}])
