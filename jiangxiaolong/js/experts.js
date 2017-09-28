// 鼠标点击事件
$('#box div').click(function(){
	// 移除类名
	$('#box div').removeClass('active');

	// 当前添加类名
	$(this).addClass('active');

	// 当前索引
	var index = $(this).index();
	console.log(index)

	// 内容跟随移动
	$('#box-two .picture').removeClass('picture');

	// 当前项添加类名
	$('#box-two div').eq(index).addClass('picture')
})