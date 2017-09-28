$(function (){ 
	$('.nav_more').on('click',function (){ 
		if($('.more_down').css('display') == 'none'){ 
			$('.more_down').show();
		}else { 
			$('.more_down').hide();
		}
	})
})