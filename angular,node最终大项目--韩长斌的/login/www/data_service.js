//创建服务-封装ajax请求
angular.module('apped').service('xxx',function(){
	this.getData=function($scope,$http,page){
		$scope.page = page || 1;
		$http.get('/bookslist',{params:{page:$scope.page}}).then(function(str){
			var {data,total_count,page} = str.data;
			//总共几页
			$scope.total_page = Math.ceil(total_count / $scope.count);
			//设置空数组-页数
			$scope.pageData = [];
			$scope.pageData.length = $scope.total_page;
			//当前页数
			$scope.page = page;
			$scope.data = data;
			//让每条数据的复选框都是独立的,为每一条数据独立的值
			angular.forEach($scope.data,function(ele){
				ele.checked = false;
			})
			
			console.log($scope.data)
		})
	}
})


