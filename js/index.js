$(function(){
/*---------导入头部------------------*/
	$("#header").load("head.html");
/*-------------------轮播图部分---------------*/
	var count=1;
	var time;
	function Time(){
		time = setInterval(function(){
			if(count){
				$(".Carouselimgs a").eq(0).hide();
				$(".Carouselimgs li").eq(0).hide().siblings().show();
				$(".Carouselimgs a").eq(1).show();
				$(".Carouselimgs li").eq(1).show().siblings().hide();
				$(".submit .sublist li ").find("span").removeClass("color").addClass("othercolor");
				$(".submit .sublist li ").eq(1).find("span").addClass("color").removeClass("othercolor");
				count =0;
			}else{
				$(".Carouselimgs a").eq(1).hide();
				$(".Carouselimgs li").eq(1).hide().siblings().show();
				$(".Carouselimgs a").eq(0).show();
				$(".Carouselimgs li").eq(0).show().siblings().hide();
				$(".submit .sublist li ").find("span").removeClass("color").addClass("othercolor");
				$(".submit .sublist li ").eq(0).find("span").addClass("color").removeClass("othercolor");
				count =1;
			}
		},2000)
	}
	Time();
/*-----------------轮播图里的按钮--------------*/
	$(".submit .sublist li ").on("click",function(){
		var $index= $(this).index();
		clearInterval(time);
		setTimeout(function(){
			Time();
		},2000)
		$(".submit .sublist li ").find("span").removeClass("color").addClass("othercolor");
		$(".submit .sublist li ").eq($index).find("span").addClass("color").removeClass("othercolor");
		$(".Carouselimgs a").eq($index).show();
		$(".Carouselimgs li").eq($index).show().siblings().hide();	
	})
/*--------------------导入底部--------------------------*/
	
	$("#footen").load("foot.html");
/*------------------页面固定部分---------------------*/
/*$(".centerfiximg li").find(".first").on("mouseover" ,function(){
	var $i = $(this).parent().index();
	$(this).css({display:"none"}).next().css({display:"block"});
	$(".centerfiximg li").find(".third").hide();
	$(".centerfiximg li").find("div").eq($i).css({"display":"block"});
	
})*/
$(".centerfiximg li").on("mouseover" ,function(){
	var $i = $(this).index();
	$(".centerfiximg li").find("div").eq($i).css({"display":"block"});
	$(this).find(".first").css({display:"none"})
	$(this).find(".second").css({display:"block"});
	$(".centerfiximg li").find(".third").hide();
	$(this).find(".third").show()
});
$(".centerfiximg li").on("mouseout" ,function(){
	$(this).find(".first").css({display:"block"})
	$(this).find(".second").css({display:"none"});
	$(".centerfiximg li").find(".third").hide();
});

$(".centerfiximg li").find("div").on("mouseover",function(){
	$(this).css({"display":"block"})
})
$(".centerfiximg li").find("div").on("mouseout",function(){
	$(this).css({"display":"none"})
})
$(".centerfiximg li").eq(2).on("click",function(){
	$("body,html").animate({
		scrollTop:0
	},1000)
})


//	//放大方法
//	var fun = function(ele){
//		var $height = $(this).height();
//		var $width = $(this).width();
//		$(ele).each(function () {
//			$(this).hover(function(){
//			console.log($height);
////			$(this).css({
////				position: 'absolute'
////			})
//			$(this).parent().css({"overflow":"hidden"});
//			$(this).animate({"margin-top":"-5px","margin-left":"-5px","$height" :"$height" +5, "$width":"$width"+5});
//		},function(){
//			$(this).animate({"margin-top":"0px","margin-left":"0px","$height" :"$height" -5, "$width":"$width"-5});
//		})
//		})
//	}
//	fun($(".secondgoods li img"));
//	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
