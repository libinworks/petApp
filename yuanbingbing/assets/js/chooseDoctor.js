//选项卡
$(function(){
	$('.leftsidebar-ka').click(function(){
		var index = $(this).index();
		$('.left-color').removeClass('left-color');
		$('.leftsidebar-ka a').eq(index).addClass('left-color');
		$('.right-block').removeClass('right-block');
		$('.rightMain').eq(index).addClass('right-block');
	})
})