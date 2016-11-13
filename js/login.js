$(function(){
	$("form").validate({
		relues:{
			userName:{
				required:true,
				minlength:11,
				digits:true
			},
			pwd:{
				required: true,
				minlength:6
			}
		},
		messages:{
			userName: {
				required:"用户名不能为空",
				minlength:"手机号码格式错误"
			},
			pwd:{
				required: "密码不能为空",
				minlength:"密码不少于6位"
			}
		}
	})
	
	
	
	
	
	
	
	
	
	
	$(".active").hover(function(){
		$(this).css({
			"color":"orange",
			"background":"#fff"
		})
		$(this).find(".out").css({
			"left":"-260px",
			"top":"30px",
			"display":"block"
		})
		$(this).find(".outs").css({
			"color":"#343841"
		})
	},function(){
		$(this).css({
			"background":"#F7F7F7"
		})
		$(this).find(".out").css({
			"display":"none"
		})
	})
	
	
	$("#footen").load("foot.html");
	
	
	
})
	