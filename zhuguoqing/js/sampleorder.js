// 点击对应的信息展示
// 

$(function (){ 
	$('.payment>ul>li').click(function(){
		// alert(1)
		// 移除当前的类
		$('.payment>ul .active').removeClass('active');
		$(this).addClass('active');

		var index = $(this).index();
		// alert(index);

		// 当前的移除
		$('.confirm .pet').removeClass('pet');
		// 对应的显示
		$('.confirm ul').eq(index).addClass('pet')+1;
	})
})
