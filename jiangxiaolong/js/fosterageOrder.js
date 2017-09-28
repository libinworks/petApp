
	// 鼠标点击事件
	$('.list li').click(function(){
		// 移除类名
		$('.list .active').removeClass('active');

		// 当前添加类名
		$(this).addClass('active');

		// 当前索引
		var index = $(this).index();

	// 选项卡的内容跟随着滚动
	$('.content .content-active').removeClass('content-active');
    
    // 当前项添加类名
    $('.content div').eq(index).addClass('content-active');
})