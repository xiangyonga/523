$(function(){
		$(".phoneRegister_a a").click(function(){
			$(".accountRegister_a").css({
				"border-bottom":"1px solid #e6e6e6",
			});
			$(".redsb").css({display:"block"});
			$(".redsa").css({display:"none"});
			$(".phoneRegister_a").css({
				"border-bottom":"3px solid red",
			});
			$(".accountRegister").animate({"left":"-600px"},300,
				function(){$(".phoneRegister").animate({"left":"0px"},200);});
		});
		$(".accountRegister_a a").click(function(){
			$(".accountRegister_a").css({
				"border-bottom":"3px solid red",
			});
			$(".redsa").css({display:"block"});
			$(".redsb").css({display:"none"});
			$(".phoneRegister_a").css({
				"border-bottom":"1px solid #e6e6e6",
			});
			$(".phoneRegister").animate({"left":"-600px"},300,
				function(){$(".accountRegister").animate({"left":"0px"},200);});
			
		});
		var s="";
		$(":input:not(:checkbox)").focus(function(){
			 s = $(this).attr("placeholder");
			$(this).parents("dl").css({"border":"1px solid green", "z-index":"99"})
				   .siblings("dl").css({"z-index":"1"});
			$(this).attr({"placeholder":""});
		});
		$(":input:not(:checkbox)").blur(function(){
		
			$(this).parent().parent().css({"border":"1px solid #e6e6e6"});

			$(this).attr({"placeholder": s});
		});
		$(".registerJpga").mouseover(function(){
			$(".registerJpga + div").css({"display":"block"});
		});
		$(".registerJpga + div").mouseout(function(){
			$(".registerJpga + div").css({"display":"none"});
		});
		$(".registerJpgb").mouseover(function(){
			$(".registerJpgb + div").css({"display":"block"});
		});
		$(".registerJpgb + div").mouseout(function(){
			$(".registerJpgb + div").css({"display":"none"});
		});
		console.log($(window).scrollTop())

});