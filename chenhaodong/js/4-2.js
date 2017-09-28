// 头部点击事件
$(function(){
        $('#header ul li').click(function(){
        $(this).addClass('shift').siblings().removeClass('shift');
    })
})
// 宠物放大
$('ul>li>img:first-child').click(function(){
  $('#big').show();
  // $(this).width();
  $('#big img').attr('src',this.src);
  $('#big img').css({
    'margin-top':-$('#big img').height()/2
  })
})
$('#big').click(function(){
  $('#big').hide();
})