$(function(){
        $('.left p').click(function(){
		// $(this).css(.index().addClass('bj').siblings().removeClass('bj'))
        $('.right').eq($(this).index()).addClass('jia').siblings('.right').removeClass('jia');
    })
})
$(".left p").click(function(e){
$(".left p").removeClass("bj");
$(this).addClass("bj");
});
	 // $('.left p:eq(0)').addClass("bj");
