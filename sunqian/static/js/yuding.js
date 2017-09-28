$(function (){ 

	$('.reduce').on('click',function (){ 
		var num = Number($(this).next().text());
		num--;
		if(num == -1){ 
			return;
		}
		$(this).next().text(num);
		sum($(this),num);
		total();
	})

	$('.plus').on('click',function (){ 
		var num = Number($(this).prev().text());
		num++;

		$(this).prev().text(num);

		sum($(this),num);

		total();
	})





	// 计算小计
	function sum(obj,num){ 

		var prive = Number(obj.parent().siblings().find('.danjia').text());

		var sum = prive * num;
 
 		obj.parent().find('.xiaoji').text(sum);

	}

	// 计算总价
	total();
	function total(){ 
		var allP = 0;

		$('.this_ser').each(function (){ 

			var price = Number($(this).find('.danjia').text());
			var num = Number($(this).find('.count').text());

			allP += price * num;

		})

		$('.total').text(allP.toFixed(2));

	}


	

})