
  // $(function(){
  // 	$('.swiper-slide').width(120);

  // })
  var swiper = new Swiper('.swiper-container', {
      history: 'love',
      initialSlide :0,
      slidesPerView : 3,
      centeredSlides : true,
	   loop : true,
		//slidesPerView : 'auto',
		 loopedSlides :5,
 });

// 宠物放大
$('.imgs img').click(function(){
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