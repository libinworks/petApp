$(function (){ 

	$('.switch').on('click',function (){ 

		if($(this).hasClass('active')){ 
			$(this).removeClass('active');
		}else { 
			$(this).addClass('active');
		}
	})

})