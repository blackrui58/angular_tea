angular.module('apped').controller('bookslistCtrl',['$scope','$http','xxx',function($scope,$http,xxx){
	//请求数据
	$scope.data = [];
	//点击的下标
	$scope.index = -1;
	// 设置每页的个数
	$scope.count = 5;
	console.log(xxx);
	// 发送ajax请求
	//封装ajax的请求
	xxx.getData($scope,$http)
	// $http.get('/bookslist').then(function(str){
	// 	console.log(str.data);
	// 	var {data,total_count,page} = str.data;
	// 	//总共几页
	// 	$scope.total_page = Math.ceil(total_count / $scope.count);
	// 	//设置空数组-页数
	// 	$scope.pageData = [];
	// 	$scope.pageData.length = $scope.total_page;
	// 	//当前页数
	// 	$scope.page = page;
	// 	$scope.data = data;

	// })
//切换页面
	$scope.pageClass = function(a){
		$scope.page = a;
		// $http.get('/bookslist',{params:{page:$scope.page}}).then(function(str){
		// 	console.log(str.data);
		// })
		//请求数据
		xxx.getData($scope,$http,$scope.page);
	}
	//删除一条数据
	$scope.deleteBook = function(a){
		var x =confirm('确认删除吗');
		if(x){
			$http.get('/deletebook',{params:{id:a}}).then(function(str){
				console.log(str);
				xxx.getData($scope,$http,$scope.page);
			})
		}
	}
	//点谁谁变色
	$scope.changeIndex = function(a){
		$scope.index = a;
	}
	//点击全选
	$scope.delectAll=function(){
//		console.log($scope.data)
		angular.forEach($scope.data,function(ele){
			ele.checked = $scope.all;
		})
	}
	
	//显示批量删除
	$scope.showDelete = function(){
		var count = 0;
		angular.forEach($scope.data,function(ele){
			if(ele.checked){
				count++
			}
		})
		//当数值大等于数据的长度的时候全选
		if(count == $scope.data.length){
			$scope.all = true;
		}else {
			$scope.all = false;
		}
		//遍历所有数据,根据数据的checked属性返回true或false
		for(var i = 0;i<$scope.data.length;i++){
			var ele = $scope.data[i];
			if(ele.checked){
				return false;
			}
		}
		return true;
	}
	//删除所有
	$scope.deleteAll = function(){
//		console.log('hh')
		var x = confirm('确认批量删除?');
		if(x){
			angular.forEach($scope.data,function(ele){
				$http.get('/deletebook',{params:{id:ele.id}}).then(function(str){
					xxx.getData($scope,$http,$scope.page);
				})
			})
		}
			
	}
	//新增
	$scope.add=false;
	$scope.addSubmit = function(){
		console.log($scope.title,$scope.author,$scope.date,$scope.content);
		var oDate = $scope.date;
		var str = oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate();
		var data = {title:$scope.title,author:$scope.author,date:str,content:$scope.content};
		console.log(str)
		$.ajax({
			type:"post",
			url:"/addbooklist",
			data:data,
			success:function(str){
				console.log(str);
				$scope.title = "";
				$scope.author = "";
				$scope.date = null;
				$scope.content = "";
				xxx.getData($scope,$http,$scope.page);
				$scope.add=false;
			}
		});
	}
	//编辑
	$scope.update = false;
	$scope.updateMsg = function(a){
		$scope.update = true;
		$scope.countmsg = $scope.data[a];
		$scope.title = $scope.countmsg.title;
			$scope.author = $scope.countmsg.author;
			$scope.content = $scope.countmsg.content;

			var str = $scope.countmsg.date;
			var oDate = new Date();
			
//			var arr = str.split('-');
			var arr = str.match(/[0-9]+/g)
			console.log(typeof arr[0])
			oDate.setFullYear(arr[0],arr[1],arr[2]);
			$scope.date = oDate;
			$scope.id= $scope.countmsg.id;


//		$http.get('/updatebooklist',{params:{id:a}}).then(function(str){
//			console.log(str.data[0]);
//			var json = str.data[0];
//			$scope.title = json.title;
//			$scope.author = json.author;
//			$scope.content = json.content;
////			console.log(typeof json.date,json.date)
//			var str = json.date;
////			var arr = str.split('-');
//			var arr = str.match(/[0-9]+/g)
//			console.log(typeof arr[0])
//			var oDate = $scope.date;
//			$scope.date.setFullYear(arr[0],arr[1],arr[2]);
////			$scope.date.setMonth(Number(arr[1]))+1;
////			$scope.date.setDate(Number(arr[2]));
//			
//			
//		})
	}
	$scope.updateSubmit = function(){
		console.log($scope.title,$scope.author,$scope.date,$scope.content);
		var oDate = $scope.date;
		var str = oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate();
		var data = {id:$scope.id,title:$scope.title,author:$scope.author,date:str,content:$scope.content};
		console.log(str)
		$.ajax({
			type:"post",
			url:"/updatebooklist",
			data:data,
			success:function(str){
				console.log(str);
				$scope.title = "";
				$scope.author = "";
				$scope.date = null;
				$scope.content = "";
				xxx.getData($scope,$http,$scope.page);
				$scope.update=false;
			}
		});
	}
//	请输入书名
	$scope.msgtitle = false;
	$scope.msgTitle =function(){
		if($scope.title){
			$scope.msgtitle = false;
		}else {
			$scope.msgtitle = true;
		}
	}
	//请输入作者
	$scope.msgauthor = false;
	$scope.msgAuthor =function(){
		if($scope.title){
			$scope.msgauthor = false;
		}else {
			$scope.msgauthor = true;
		}
	}
	//请输入简介
	$scope.msgcontent = false;
	$scope.msgContent =function(){
		if($scope.title){
			$scope.msgcontent = false;
		}else {
			$scope.msgcontent = true;
		}
	}
}])
