$(function(){
	

	
	registerLoginTitle();
	loginTainer();
	registerContainer();
	loginCloseYellow();
	
	
//	$(".code_button").on("click",function(){
//		if($(".code_button").text() == "获取验证码"){
//			$(".code_button").css("color","#EE7621");
////			time(60);
//			getVerifyCode();
//		}
//	});
	$(".wait_image").on("click",function(){
		$(".user_login_white").css("margin-top","-15%");
		$(".code_image").attr("src","system/UserInfoAction_getVerifyCode.do?" + Math.random());
		$(".code_image").removeClass("wait_image");
		setTimeout(function () {
			$(".code_image").addClass("wait_image");
		},1000);
	});
	$(".code_button_word").on("click",function(){
		$(".code_button_word").remove();
		$(".code_image").attr("src","system/UserInfoAction_getVerifyCode.do?" + Math.random());
		$(".code_image").css("display","block");
	});
	
});

function loginCloseYellow(){
	$(".login_close_yellow").on("click",function(){
		$(".user_login_container").css("display","none");
	});
	
}
/*
 * 标题
 */
function registerLoginTitle(){
	
	$(".login_container").on("click",function(){
		if($(".register_container").hasClass("login_register_action")){
			$(".register_container").removeClass("login_register_action");	
		}
		$(".login_container").addClass("login_register_action");
		$(".register_input_container").css("display","none");
		$(".login_input_container").css("display","block");
	});
	
	$(".register_container").on("click",function(){
		if($(".login_container").hasClass("login_register_action")){
			$(".login_container").removeClass("login_register_action");		
		}		
		
		$(".login_input_container").css("display","none");
		$(".register_input_container").css("display","block");
		$(".register_container").addClass("login_register_action");
	});
}
/*
 * 登录相关
 */
function loginTainer(){
	$(".login_phone").focus(function(){
		$(".user_login_white").css("margin-top","-5%");
		$(".login_phone").removeClass("username_image");
		$(".login_phone").addClass("username_action");
		if($(".login_phone").val() == "手机号/用户名/邮箱"){
			$(".login_phone").val("");
		}
	});
	$(".login_phone").blur(function(){
		if($(".login_phone").val() == ""){
			$(".user_login_white").css("margin-top","15%");
			$(".login_phone").val("手机号/用户名/邮箱");
			$(".login_phone").addClass("username_image");
			$(".login_phone").removeClass("username_action");
		}
	});

	$(".login_password_div").on("click",function(){
		$(".user_login_white").css("margin-top","-5%");
		$(".login_password_div").css("display","none");
		$(".real_password").css("display","block");
		$(".real_password").focus();
	});
	$(".real_password").blur(function(){
		if($(".real_password").val() == ""){
			$(".login_password_div").css("display","block");
			$(".real_password").css("display","none");
		}
		
	});
	$(".login").on("click",function(){
		var userName = $(".login_phone").val();
		var passWord = $(".real_password").val();
		$(".user_login_white").css("margin-top","15%");
		$(".login").removeClass("button_shadow");
		if(userName == ""){
			alert("用户名不能为空哦！");
			return;
		}
		if(passWord == ""){
			alert("密码不能为空哦！");
			return;
		}
		$(".login").text("");
		$(".login").text("正在登陆...");
		$.ajax({  
	        url :"system/UserInfoAction_login.do", 
	        type:"post",      
	        data:{
	        	loginusername:userName,
	        	loginpassword:passWord
	        },
	        dataType:"json",
	        success:function(data){
	        	if(data.state == 0){  
	        		$(".login").addClass("button_shadow");
	        		$(".login_message").text(data.message);	
	        		$(".login").removeClass("button_shadow");
	        		$(".login").text("");
	        		$(".login").text("登陆");
	        	}
	        	if(data.state == 1){
	        		 window.location.reload();
	        		 $(".login").removeClass("button_shadow");
	        	}
	        },
	        error:function(){
	        	$(".login").text("");
        		$(".login").text("登陆");
	        	alert("服务器未响应");
	        	
	        }
		});
	});
}
/*
 * 注册相关
 */
function registerContainer(){
	$(".register_phone").focus(function(){

		$(".user_login_white").css("margin-top","-5%");
		$(".register_phone").removeClass("username_image");
		$(".register_phone").addClass("username_action");
		if($(".register_phone").val() == "请输入手机号码"){
			$(".register_phone").val("");
		}
	});
	$(".register_phone").blur(function(){
		$(".user_login_white").css("margin-top","15%");
		var phone = $(".register_phone").val().trim();
		var reg= /^0?1[3|4|5|8][0-9]\d{8}$/;
		
		if(!reg.test(phone)){
			$(".phone_message").text("*宝贝，手机格式不正确哦！");
			return;
		   }
		if($(".register_phone").val() != ""){
			$.ajax({  
		        url :"system/UserInfoAction_checkUserPhone.do", 
		        type:"post",      
		        data:{
		        	phone:phone
		        },
		        dataType:"json",
		        success:function(data){
		        	if(data.state == 0){  
		        		$(".phone_message").text(data.message);	
		        	}
		        	if(data.state == 1){
		        		$(".phone_message").text(data.message);	
		        	}
		        },
		        error:function(){
		        	alert("服务器未响应");
		        	
		        }
			});
		}
		
		if($(".register_phone").val() == ""){
			$(".register_phone").val("请输入手机号码");
			$(".register_phone").addClass("username_image");
			$(".register_phone").removeClass("username_action");
		}
	});
	$(".register_password").focus(function(){
		$(".register_password").removeClass("password_image");
		$(".register_password").addClass("password_action");
		if($(".register_password").val() == "请输入含有字母的6~20位密码"){
			$(".register_password").val("");
		}
		$(".user_login_white").css("margin-top","-5%");
	});
	$(".register_password").blur(function(){
		var password_reg=/^(\w){6,20}$/; 
		var password = $(".register_password").val();
		if(!password_reg.test(password)){
			$(".password_message").text("*输入含有字母的6~20位密码");
			$(".user_login_white").css("margin-top","15%");
			return;
		}	
		$(".password_message").text("*密码格式正确");
		if($(".register_password").val() == ""){
			$(".register_password").val("请输入含有字母的6~20位密码");
			$(".register_password").addClass("password_image");
			$(".register_password").removeClass("password_action");
		}
		$(".user_login_white").css("margin-top","15%");
	});
	
	$(".code_input").focus(function(){
		$(".code_input").removeClass("lock");
		$(".code_input").addClass("lock_action");
		$(".code_input").css("color","black");
		if($(".code_input").val() == "请输入验证码"){
			$(".code_input").val("");
		}
		$(".user_login_white").css("margin-top","-15%");
	});
	$(".code_input").blur(function(){
		var verifyCode = $(".code_input").val();
		
		if($(".code_input").val() != ""){
			$.ajax({  
		        url :"system/UserInfoAction_checkVerifyCode.do", 
		        type:"post",      
		        data:{
		        	verifyCode:verifyCode
		        },
		        dataType:"json",
		        success:function(data){
		        	$(".verify_message").text(data.message);
		        	if(data.state == 0){  
		        		$(".code_image").attr("src","system/UserInfoAction_getVerifyCode.do?" + Math.random());
		        	}
		        },
		        error:function(){
		        	$(".user_login_white").css("margin-top","15%");
		        	alert("服务器未响应");
		        	
		        }
			});
		}
		
		if($(".code_input").val() == ""){
			$(".code_input").val("请输入验证码");
			$(".code_input").addClass("lock");
			$(".code_input").removeClass("lock_action");
		}
		setTimeout(function(){
			$(".user_login_white").css("margin-top","15%");
		},500);
	});

	$(".register").on("click",function(){
		
	
		if($(".register").text("") == "已发送"){
			return;
		}
		var phone = $(".register_phone").val().trim();
		var passWord = $(".register_password").val().trim();
		var verifyCode = $(".code_input").val().trim();
		var reg= /^0?1[3|4|5|8][0-9]\d{8}$/;
		var password_reg=/^(\w){6,20}$/; 
		
		if(phone == "" || phone == "请输入手机号码"){
			alert("用户名不能为空哦！");
			$(".register").addClass("button_shadow");
			return;
		}
		if(passWord == "" || passWord == "请输入含有字母的6~20位密码"){
			alert("密码不能为空哦！");
			$(".register").addClass("button_shadow");
			return;
		}
		if(verifyCode == "" || verifyCode == "请输入验证码"){
			alert("验证码不能为空哦！");
			$(".register").addClass("button_shadow");
			return;
		}
		
		
		if(!reg.test(phone)){
			alert(text("手机号码不正确"));
			return;
		   }
		
		if(!password_reg.test(passWord)){
			alert("密码格式不正确，输入含有字母的6~20位密码");
			return;
		}
		$(".register").removeClass("button_shadow");
		$(".register").text("");
		$(".register").text("已发送");		
		$.ajax({  
	        url :"system/UserInfoAction_register.do", 
	        type:"post",      
	        data:{
	        	regusername:"NICE_" + phone,
	        	phone:phone,
	        	regpassword:passWord,
	        	verifyCode:verifyCode
	        },
	        dataType:"json",
	        success:function(data){
	        	if(data.state == 0){        		
	        		alert(data.message);	
	        	}
	        	if(data.state == 1){
	        		 if(!window.confirm('注册成功！需要完善信息吗？')){
	        			 window.location.reload();
	                     return;
	                 }else{
	                	 $("#goUserInfo").submit();
	                 }        		
	        	}
	        	$(".register").addClass("button_shadow");
	    		$(".register").text("");
	    		$(".register").text("注册");
	        },
	        error:function(){
	        	$(".register").addClass("button_shadow");
	    		$(".register").text("");
	    		$(".register").text("注册");
	    		
	        	alert("服务器未响应");
	        	
	        }
		});
		
	});
}
function time(number) {  
    if (number == 0) {  
    	$(".code_button").text("获取验证码");  
    	$(".code_button").css("color","#C2C2C2");
    	return;
    } else {  
    	$(".code_button").text(number + "s 重发");  
    	number --;
        setTimeout(function() {  
            time(number);  
        },  
        1000);  
    }  
}  