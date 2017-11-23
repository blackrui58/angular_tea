var app = angular.module('movieFocus',[]);

app.directive('autoFocus',function($location,$rootScope) {
	var path = $location.path();
	return {
            restrict: 'A',
            link: function ($scope,ele) {
                // console.log(ele);
                //拿到跳转的链接#/coming_soon/1
                var link = ele.children().attr('href');
                //转换为path:/coming_soon/1
                var type = link.replace(/#(\/.+?)\/\d+/,'$1');
                if (path.startsWith(type)) {
                    ele.addClass('active');
                }
                ele.on('click',function () {
                    ele.parent().children().removeClass('active');
                    ele.addClass('active');
                    $rootScope.input = '';
                });
            }
        }
});