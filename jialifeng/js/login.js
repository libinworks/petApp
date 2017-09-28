$(function(){
	$('#login img').on('click',function(){
		// 获取密码框是什么类型
		var istype = $(this).prev().attr('type');

		if(istype == 'password'){
			 $(this).prev().attr('type','text');
			 $(this).attr('src','./imgs/xianshi.png');
		}else{
			 $(this).prev().attr('type','password');
			 $(this).attr('src','./imgs/yinchang.png');
		}
	})
})