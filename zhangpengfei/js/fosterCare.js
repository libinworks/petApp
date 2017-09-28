$(function(){
	// 推荐家庭和机构寄养切换
	$('.title-tab a').on('click',function(){
		$(this).addClass('title-tab-active').siblings().removeClass('title-tab-active');
		$('.content div').eq($(this).index()).addClass('content-active').siblings().removeClass('content-active');
	})
})