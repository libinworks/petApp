// 头部点击事件
$(function(){
        $('#header ul li').click(function(){
        $(this).addClass('shift').siblings().removeClass('shift');
    })
})
