
// 获取了app
angular.module('app').directive('esLunbo',function ($timeout) {
	return {
		restrict: 'ECMA',
		replace: true,
		// 在服务器里面使用文件路径的使用，一般加上./
		templateUrl: './maimai/lunbo.html',
		link: function () {
			// 一定有这个数据
			// angular的ng-repeat和swiper一起使用的时候,永远拖不到第二个,必须加上observer:true,observeParents:true
			// 延迟调用
			$timeout(function() {
				var swiper = new Swiper('.swiper-container', {
					autoplay: 1000,
					loop: true, // 无限滚动 默认是false
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
			    	observeParents:true,//修改swiper的父元素时，自动初始化swiper
				});
			},0);
		}
	}
})
// 自定义指令