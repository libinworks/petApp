// 点过信息变颜色
$('.bodys>ul>li').click(function(){
	var index = $(this).index();
	// $('.bodys>ul>li .stars').removeClass('stars');
	$('.bodys>ul>li>a').eq(index).addClass('stars');
})