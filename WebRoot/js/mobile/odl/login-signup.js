$(document).ready(function(e) {
		var $form_modal = $('.cd-user-modal'),
		$form_login = $form_modal.find('#cd-login'),
		$form_signup = $form_modal.find('#cd-signup'),
		$form_modal_tab = $('.cd-switcher'),
		$tab_login = $form_modal_tab.children('li').eq(0).children('a'),
		$tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
		$tab_close = $form_modal_tab.children('li').eq(2).children('a');
		
		//定义去除字符串函数trim
		String.prototype.trim=function() {
			return this.replace(/(^\s*)|(\s*$)/g,'');
		};
		
		
		
		//注册失去焦点验证用户名
		$("#signup-username").blur(function(){
			var username=$("#signup-username").val().trim();
			$.ajax({  
	            url :"CheckUserNameServlet", 
	            type:"post",      
	            data:{
	            	username:$("#signup-username").val().trim()
	            },
	            dataType:"json",
	            success:function(data){
	            	var res=data.checkUserName;
	            	if(username.length>19){
	    				$("#info-username").html("用户名过长");
	    			}else if(res=='userNameIsNull'){
	    				$("#info-username").html("请输入用户名");
	    			}else if(res=='isExist'){
	    				$("#info-username").html("用户名已被使用");
	    			}else if(res=='succeed'){
	    				$("#info-username").html("");
	    			}else{
	    				$("#info-username").html("服务器未响应");
	    			}
	            },
	            error:function(){
	            	alert("服务器未响应");
	            }
			});
		});
		
		//注册失去焦点验证密码
		$("#signup-password").blur(function(){
			var password=$("#signup-password").val().trim();
			var reg=/^(\w){6,20}$/; 
			if(reg.test(password)){
				$("#info-password").html("");
			}else{
				$("#info-password").html("请输入6-20位密码，可包含字母、数字、下划线");
			}
		});
		
		//注册失去焦点验证电话
		$("#signup-phone").blur(function(){
			var reg= /^0?1[3|4|5|8][0-9]\d{8}$/;
			var phone=$("#signup-phone").val().trim();
			if(reg.test(phone)){
				$("#info-phone").html("");
			}else{
				$("#info-phone").html("请输入正确的手机号码");
			}
		});
		
		//登录失去焦点验证用户名
		$("#signin-username").blur(function(){
			var username=$("#signin-username").val().trim();
			$.ajax({  
	            url :"CheckUserNameServlet", 
	            type:"post",      
	            data:{
	            	username:username
	            },
	            dataType:"json",
	            success:function(data){
	            	var res=data.checkUserName;
	            	if(res=='isExist'){
	    				$("#info-signin").html("");
	    			}else if(res=='userNameIsNull'){
	    				$("#info-signin").html("请输入用户名");
	    			}else if(res=='succeed'){
	    				$("#info-signin").html("用户名不存在");
	    			}else{
	    				$("#info-signin").html("服务器未响应");
	    			}
	            },
	            error:function(){
	            	alert("服务器未响应");
	            }
			});
		});
		
		//获得焦点清空提醒
		$("#signup-username").focus(function(){
			$("#info-username").html("");
		});
		$("#signin-username").focus(function(){
			$("#info-signin").html("");
		});
		$("#signup-phone").focus(function(){
			$("#info-phone").html("");
		});
		$("#signup-password").focus(function(){
			$("#info-password").html("");
		});
		
		//登录操作
		$("#login-submit").click(function(){
			$.ajax({  
	            url :"LoginServlet", 
	            type:"post",      
	            data:{
	            	username:$("#signin-username").val().trim(),
	            	password:$("#signin-password").val().trim()
	            },
	            dataType:"json",
	            success:function(data){
	            	var res=data.username;	
	            	if(res=='false'){
	            		alert("密码错误");
	            	}else{
	            		$("#signin-show").css('display','none');
	            		$("#signup-show").css('display','none');
	            		$("#username-show").css('display','block');
	            		$("#username-show").html(res);
	            		$form_modal.removeClass('is-visible');
	            	}
	            },
	            error: function() {
					alert("服务器未响应");
				}            
			});  
		});		
		
		//注册操作
		$("#signup-submit").click(function(){
			var phone_reg= /^0?1[3|4|5|8][0-9]\d{8}$/;
			var password_reg=/^(\w){6,20}$/; 
			var phone=$("#signup-phone").val().trim();
			var password=$("#signup-password").val().trim();
			var username=$("#signup-username").val().trim();
			
			if(!phone_reg.test(phone)||!password_reg.test(password)||username.length>19){
				alert('请检查注册信息');
			}else{
				$.ajax({  
		            url :"RegisterServlet", 
		            type:"post",      
		            data:{
		            	username:$("#signup-username").val().trim(),
		            	password:$("#signup-password").val().trim(),
		            	phone:$("#signup-phone").val().trim(),
		            },
		            dataType:"json",
		            success:function(data){
		            	var res=data.register;
		            	if(res=='phoneIsNull'||res=='userNameIsNull'||res=='passWordIsNull'||res=='isExist'){
		            		alert("请检查注册信息");
		            	}else if(res=='succeed'){
		            		alert('注册成功');
		            		$("#signin-show").css('display','none');
		            		$("#signup-show").css('display','none');
		            		$("#username-show").css('display','block');
		            		$("#username-show").html($("#signup-username").val().trim());
		            		$form_modal.removeClass('is-visible');
		            	}else{
		            		alert("服务器未响应");
		            	};
		            },
		            error: function() {
						alert("服务器未响应");
					}        
				});
			}
			  
		});	
		
	//显示弹出窗口
	$("#signin-show").click(function(){
		$form_modal.addClass('is-visible');	
		login_selected();
	});
	
	$("#signup-show").click(function(){
		$form_modal.addClass('is-visible');	
		signup_selected();
	});

	//切换及关闭窗口
	$tab_login.click(function(){
		login_selected();
	});
	$tab_signup.click(function(){
		signup_selected();
	});
	$tab_close.click(function(){
		$form_modal.removeClass('is-visible');
	});

	function login_selected(){
		$form_login.addClass('is-selected');
		$form_signup.removeClass('is-selected');
		//$form_forgot_password.removeClass('is-selected');
		$tab_login.addClass('selected');
		$tab_signup.removeClass('selected');
	}

	function signup_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.addClass('is-selected');
		//$form_forgot_password.removeClass('is-selected');
		$tab_login.removeClass('selected');
		$tab_signup.addClass('selected');
	}

});


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});

};