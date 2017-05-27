$(function (){
	initSetUserInfo();
	$(".header_logo").click(function (){
		window.location.href = "index.html";
	});
	$(".back").click(function (){
		window.location.href = "userIndex.html";
	});
});

function initSetUserInfo(){
	$("#username").blur(function (){
		checkUserName();
		});
	$("#phone").blur(function (){
		checkPhone();
		});	
	$("#email").blur(function (){
		checkEmail();
		});	
	$("#odlpaw").blur(function (){
		checkOdlPwd();
		});
	$("#newpaw").blur(function (){
		 var patternpsw = /[\w\W]{6,12}/;
		 var setPsw = $("#newpaw").val();
		
		 if(!patternpsw.test(setPsw)){
			 $("#newpsw_message").css("display","block");
			 $("#newpsw_message").text("*密码必须为6-20位哦！");			 
		}else{
			$("#newpsw_message").css("display","none");
		}
		});
	$("#username_button").click(function (){
		if(checkUserName()){
			var newUserName = $("#username").val();
			$.ajax({
				url:"system/UserInfoAction_upUserName.do",
				type:"post",
				async:false,
				data:{
					userName:newUserName
				},
				dataType:"json",
				success:function(data){
					alert(data.message);
					if(data.state == 1){
						$("#username_hi").val(newUserName);
					}
				},
				error:function(){
					alert("服务器正在维修哦！稍等！");
				}
			});
		}else{
			alert("修改信息不正确哦！");
		}
		});
	$("#phone_button").click(function (){
		var newPhone = $("#phone").val();
		if(checkPhone()){
			$.ajax({
				url:"system/UserInfoAction_upUserPhone.do",
				type:"post",
				data:{
					phone:newPhone
				},
				dataType:"json",
				success:function(data){
					alert(data.message);
					if(data.state == 1){
						$("#phone_hi").val(newPhone);
					}
				},
				error:function(){
					alert("服务器正在维修哦！稍等！");
				}
			});
		}else{
			alert("修改信息不正确哦！");
		}
		});	
	$("#email_button").click(function (){
		if(checkEmail()){
			var newEmail = $("#email").val();
			$.ajax({
				url:"system/UserInfoAction_upUserEmail.do",
				type:"post",
				data:{
					email:newEmail
				},
				dataType:"json",
				success:function(data){
					alert(data.message);
					if(data.state == 1){
						$("#email_hi").val(newEmail);
					}
				},
				error:function(){
					alert("服务器正在维修哦！稍等！");
				}
			});
		}else{
			alert("修改信息不正确哦！");
		}
		});	
	$("#psw_button").click(function (){
		
		 var patternpsw = /[\w\W]{6,12}/;
		 var setPsw = $("#newpaw").val();
		
		 if(!patternpsw.test(setPsw)){
			 $("#newpsw_message").css("display","block");
			 $("#newpsw_message").text("*密码必须为6-20位哦！");			 
		}else if(!patternpsw.test(setPsw)){			
			 alert("修改信息不正确哦！");
		}else if(checkOdlPwd()){
			var odlpaw = $("#odlpaw").val();
			var newPsw = $("#newpaw").val();
			$.ajax({
				url:"system/UserInfoAction_upUserPsw.do",
				type:"post",
				data:{
					odlPsw:odlpaw,
					newPsw:newPsw
				},
				dataType:"json",
				success:function(data){
					alert(data.message);
				},
				error:function(){
					alert("服务器正在维修哦！稍等！");
				}
			});
			
		}else{
			alert("旧密码必须正确才能修改！");
		}
		});
	}

function checkOdlPwd(){
	var odlpaw = $("#odlpaw").val();	
	var flag = false;
	if(odlpaw == "") {
		$("#psw_message").css("display","block");
		$("#psw_message").text("*密码不为空哦！");
		return false;
	}else{
		$.ajax({
			url:"system/UserInfoAction_checkUserOdlPsw.do",
			type:"post",
			async:false,
			data:{
				odlPsw:odlpaw
			},
			dataType:"json",
			success:function(data){
				if(data.state == 0){
					$("#psw_message").css("display","block");
					$("#psw_message").text(data.message);
				}
				if(data.state == 1){
					$("#psw_message").css("display","block");
					$("#psw_message").text(data.message);
					flag = true;
				}
			},
			error:function(){
				alert("服务器正在维修哦！稍等！");
			}
		});
		return flag;
	}
}

function checkEmail(){
	var newEmail = $("#email").val();
	var odlEmail = $("#email_hi").val();
	var flag = false;
	var patternEmail = /^\w+([-+]\w+)*@\w+([-+]\w+)*\.\w+([-.]\w+)*$/;
	if(newEmail == odlEmail){
		return false;
	}else if(newEmail == "") {
		$("#email_message").css("display","block");
		$("#email_message").text("*邮箱不能为空哦！");
		return false;
	}else if(!patternEmail.test(newEmail)){
		$("#email_message").css("display","block");
		$("#email_message").text("*邮箱格式不对哦！");
		return false;
	}else{
		$.ajax({
			url:"system/UserInfoAction_checkUserEmailExit.do",
			type:"post",
			data:{
				rootemail:newEmail
			},
			dataType:"json",
			async:false,
			success:function(data){
				if(data.state == 0){
					$("#email_message").css("display","block");
					$("#email_message").text("*该邮箱已注册！");					
				}
				if(data.state == 1){
					$("#email_message").css("display","none");
					flag = true;
				}
			},
			error:function(){
				alert("服务器正在维修哦！稍等！");
			}
		});
		return flag;
	}
}

function checkPhone(){
	var newPhone = $("#phone").val();
	var odlPhone = $("#phone_hi").val();
	var phoneReg= /^0?1[3|4|5|8][0-9]\d{8}$/;
	var flag = false;
	if(newPhone == odlPhone){
		return false;
	}else if(newPhone == "") {
		$("#phone_message").css("display","block");
		$("#phone_message").text("*手机号不能为空哦！");
		return false;
	}else if(!phoneReg.test(newPhone)){
		$("#phone_message").css("display","block");
		$("#phone_message").text("*手机号格式不对哦！");
		return false;
	}else{
		$.ajax({
			url:"system/UserInfoAction_checkUserPhone.do",
			type:"post",
			async:false,
			data:{
				phone:newPhone
			},
			dataType:"json",
			success:function(data){
				if(data.state == 0){
					$("#phone_message").css("display","block");
					$("#phone_message").text("*该手机号已注册");
				}
				if(data.state == 1){
					$("#phone_message").css("display","none");
					flag = true;
				}
			},
			error:function(){
				alert("服务器正在维修哦！稍等！");
			}
		});
		return flag;
	}
}
function checkUserName(){
	var newUserName = $("#username").val();
	var odlUserName = $("#username_hi").val();
	
	var userName1 = /<[^>]+>/g;
	var flag = false;
	if(newUserName == odlUserName){
		return false;
	}else if(newUserName == "") {
		$("#username_message").css("display","block");
		$("#username_message").text("*昵称不能为空哦！");
		return false;
	}else if(userName1.test(newUserName)){
		$("#username_message").css("display","block");
		$("#username_message").text("*昵称不能包含<>等HTML标签！");
		return false;
	}else if(newUserName.length > 30){
		$("#username_message").css("display","block");
		$("#username_message").text("*昵称长度不能大于30个字符");
			return false;
		
	}else{
		$.ajax({
			url:"system/UserInfoAction_checkUserNameExit.do",
			type:"post",
			async:false,
			data:{
				regusername:newUserName
			},
			dataType:"json",
			success:function(data){
				if(data.state == 0){
					$("#username_message").css("display","block");
					$("#username_message").text("*该昵称已注册");
					
				}
				if(data.state == 1){
					$("#username_message").css("display","none");
					flag = true;
				}
			},
			error:function(){
				alert("服务器正在维修哦！稍等！");
			}
		});
		return flag;
	}
}