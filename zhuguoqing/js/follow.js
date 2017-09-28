
// 点击切换状态
$(function () {
    var offOn = true;
    var spot = $('.clicks');
    spot.on('click', function () {
    	var index = $(this).parent().parent().index();
    	// alert(index)
        if (spot.offOn) {
            spot.eq(index).html('关注');
            spot.offOn = false;
        } else {
            spot.css('color', '#FFF');
            spot.eq(index).html('已关注');
            spot.offOn = true;
        }
    })
})