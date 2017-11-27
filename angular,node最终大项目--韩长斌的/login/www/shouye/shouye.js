angular.module('apped').controller('shouyeCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){

	 	$(function () {
	 		 $('#sky').jQlouds({
		
			  		wind: true		
		
			});
            var w = 30;
            var W = $('#ul1 li').width();
            $('#ul1').width(W + ($('#ul1 li').length - 1) * w);

            $('#ul1 li').each(function (index,ele) {
                if (index >= 1) {
                    $(ele).css('left',$('#ul1').width() - ($('#ul1 li').length - index) * w);
                }
            })

            $('#ul1 li').mouseenter(function () {
                var index1 = $(this).index();
                $('#ul1 li').each(function (index,ele) {
                    if (index <= index1) {
                        $(ele).stop().animate({left: index * w});
                    } else {
                        $(ele).stop().animate({left: $('#ul1').width() - ($('#ul1 li').length - index) * w});
                    }
                });
            });
        })

}])
