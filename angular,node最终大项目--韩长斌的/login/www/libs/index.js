$(function(){
	$('.hcb-el-ul').hide();
	var hcbShow = false;
	$('.el-dropdown').click(function(){
			if(hcbShow == false){
				$('.hcb-el-ul').show();
				$('.hcb-el-ul').css({"z-index": 2000,top: 43,left: 10})
				hcbShow = true;
			}else{
				$('.hcb-el-ul').hide();
				hcbShow = false;
			}
	})
	var hcbshow1 = false;
	$('.hcb_title').click(function(){
		
		if($(this).parent().children().eq(1).css('display') == 'block'){
			$(this).parent().children().eq(1).hide();
		}else{
			$('.hcb-list').hide();
			$(this).parent().children().eq(1).show();
		}
	})

})