$(function() {
	//移动端
	$(".quick_menu dl").mouseenter(function() {
		$(this).children("dd").css({
			"display": "block"
		});
		$(this).children("dt").find("i").css({
			"background": "url(../images/icon_common.png) no-repeat -23px -2px"
		});
	});
	$(".quick_menu dl").mouseleave(function() {
		$(this).children("dd").css({
			"display": "none"
		});
		$(this).children("dt").find("i").css({
			"background": "url(../images/icon_common.png) no-repeat -2px -4px"
		});
	});
	$(".quick_menu dl dd ul li").hover(function() {
		//			console.log(this);
		$("this").css({
			"display": "block",
			border: "1px solid red",
			"background": "black"
		});
	}, function() {
		$("this").css({
			"display": "inline-block",
			background: "white"
		});
	});
	
	//搜索
	$(".search input").focus(function() {
		$(".searchTip").css({
			"display": "block"
		});
	});
	$(".search input").blur(function() {
		$(".searchTip").css({
			"display": "none"
		});
	});
	//购物车
	$(".leftchose ul li:first-child").mouseenter(function() {
		$(".leftchose ul li:gt(0)").css({
			"display": "block"
		});
		$(".leftchose ul li:first-child i").addClass("down");
		$(".leftchose ul li:first-child i").removeClass("up");
	});
	$(".leftchose ul").mouseleave(function() {
		$(".leftchose ul li:first-child i").removeClass("down");
		$(".leftchose ul li:first-child i").addClass("up");
		$(".leftchose ul li:gt(0)").css({
			"display": "none"
		});
	});
	$(".leftchose ul li").mouseenter(function() {
		$(this).css({
			background: "#dfdfdf",
			cursor: "pointer"
		});
		$(".leftchose ul li").mouseleave(function() {
			$(this).css({
				background: "#fafafa",
				cursor: "pointer"
			});
		});
	});
	$(".right a").hover(function() {
		//			$(".right a").css({border:"1px solid red"});
		$(".cart").css({
			"display": "block",
			"border": "1px solid red"
		});
	}, function() {
		$(".cart").css({
			"display": "none"
		});
	});
	
	//搜索下的列表
	$(".goodslist").mouseover(function() {
		$(".icodd").css({
			display: "block"
		});
	});
	$(".goodslist").mouseout(function() {
		$(".icodd").css({
			display: "none"
		});
	});
	$(".icodd li").mouseover(function() {
		$(".ico",this).css({
			background: "black"
		});
		$("#ico",this).css({
			left: "15px"
		});
		$(".ico h4",this).css({
			left: "49px"
		});
		$("#sub-class",this).css({
			display: "block"
		});
	});
	$(".icodd li").mouseout(function() {
		$(".ico",this).css({
			background: "#7C7171"
		});
		$("#ico",this).css({
			left: "11px"
		});
		$(".ico h4",this).css({
			left: "45px"
		});
		$("#sub-class",this).css({
			display: "none"
		});
	});
	//导航下拉菜单
	$("#sub-class").mouseenter(function() {
		$("#sub-class").css({
			"display": "block"
		});
		$(".ico").css({
			"background": "black"
		})
	});
	$("#sub-class").mouseleave(function() {
		$("#sub-class").css({
			"display": "none"
		});
		$(".ico").css({
			"background": "black"
		});
	});
	$("#sub-class-content span").hover(function() {
		$(this).css({
			"backgroundColor": "red"
		});
	}, function() {
		$(this).css({
			"backgroundColor": "#7C7171"
		});
	});
	$(".historydel").click(function() {
		//				console.log($(".historyList li"))
		$(".historyList li").empty();
		//				$(".searchTip").css({"display":"block"});
		return false;
	});

	//点击搜索事件
	$(".searchlyout").click(function() {
		var s = $(".search input").val();
		if (s) {
			$(".historyList li").append(`<a href=''>` + s + `</a>`);
		}
	});

	//轮播图
	var i = 0;

	var clone = $(".banner .img li").first().clone(); //克隆第一张图片
	$(".banner .img").append(clone); //复制到列表最后
	var size = $(".banner .img li").size(); //返回匹配元素的数量
	//      console.log(size);

	/*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
	for (var j = 0; j < size - 1; j++) {
		$(".banner .num").append("<li></li>");
	}

	$(".banner .num li").first().addClass("on");

	/*自动轮播*/

	var t = setInterval(function() {
		i++;
		move();
	}, 2000);

	/*鼠标悬停事件*/

	$(".banner").hover(function() {
		clearInterval(t); //鼠标悬停时清除定时器
	}, function() {
		t = setInterval(function() {
			i++;
			move();
		}, 2000); //鼠标移出时开始定时器
	});

	/*鼠标滑入原点事件*/

	$(".banner .num li").hover(function() {

		var index = $(this).index(); //获取当前索引值
		i = index;
		$(".banner .img").stop().animate({
			left: -index * 1310
		}, 200);
		$(this).addClass("on").siblings().removeClass("on");
	});

	/*移动事件*/
	function move() {
		if (i == size) {
			$(".banner .img").css({
				left: 0
			});
			i = 1;
		}
		if (i == -1) {
			$(".banner .img").css({
				left: -(size - 1) * 1310
			});
			i = size - 2;
		}
		$(".banner .img").stop().animate({
			left: -i * 1310
		}, 300);

		if (i == size - 1) {
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
		} else {
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
		}
	};

	$(".fold_wrap li").hover(function() {
		//      	console.log(this)
		$(".mask_b", this).css({
			display: "none"
		});
		$(this).css({
			width: "400px"
		});
		$(".fold_wrap li").not(this).css({
			width: "134px"
		});
		$(".index_nav_a", this).css({
			display: "block"
		});

	}, function() {
		$(".mask_b", this).css({
			display: "block"
		});
		$(this).css({
			width: "172px"
		});
		$(".index_nav_a", this).css({
			display: "none"
		});
		var s = this;
		$(".fold_wrap li").not(s).css({
			width: "172px"
		});
	});
	$(".index_nav_a a").hover(function() {
		$(this).css({
			background: "red"
		});
	}, function() {
		$(this).css({
			background: "rgba(248, 248, 248, 0.45)"
		})
	});

});