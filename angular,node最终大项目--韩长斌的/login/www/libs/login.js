var app = angular.module('app',[]);
	// 全局化初始数据
	app.run(function($http,$rootScope){
		$http.get('/token').then(function(str){
			$rootScope.x=str.data;
		})
	})
	//创建控制器
	app.controller('f',['$scope','$http',function($scope,$http){
		$scope.isShow = '';
		$scope.isHide = '';
	//提交方法--登录
		$scope.submit = function(){
			//判断用户X有没有值
			if($scope.x){
				$scope.isShow = '';
				//有值
				$.ajax({
					url:'/login',
					type:'post',
					data:{username:$scope.x,pwd:$scope.y},
					success:function(str){
						if (str.error) {
							$scope.$apply(function(){
								$scope.isHide = '账号或者密码错误';
							})
							
						}else {
							$scope.$apply(function(){
								$scope.isHide = '';
								location.href='./index.html'
							})
						}

					}
				})
			}else {
				$scope.isShow = '请填写用户名';
			}
		}
	}])

