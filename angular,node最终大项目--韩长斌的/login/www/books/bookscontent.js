angular.module('apped').directive('addCon',function(){
	return {
		restrict:'EA',
		replace:true,
		link:function(scope,ele,attr){
			var content = attr.addCon;
			
			$(ele).toggle(function(){
				$(this).addClass('el-table__expand-icon--expanded');
				var str='<tr><td colspan="7" class="el-table__expanded-cell"><form class="el-form demo-table-expand el-form--label-left el-form--inline"><div class="el-form-item"><label class="el-form-item__label">[图书简介]</label><div class="el-form-item__content"><span>'+content+'</span></div></div></form></td></tr>';
//				console.log(str);
				$(str).insertAfter($(this).parent().parent());
				console.log(111)
			},function(){
				console.log(222)
				$(this).removeClass('el-table__expand-icon--expanded');
				//删除所有的兄弟节点
				$(this).parent().parent().next().remove();
			})
//			ele.toggle(function(){
//				
//				
//				
//			})
			
		}
	}
})
