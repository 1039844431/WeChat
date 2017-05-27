$(function() {
			logininital();
			login();
			register();
			// loadNav();

			gotoUserIndex();
		});

function gotoUserIndex() {
	$(".myUser").click(function() {
				var isLogin = $("#userNameisLogin").val();
				if (isLogin != null && isLogin != "") {
					window.location.href = "userIndex.html";
				} else {
					alert("亲，你还没有登录哦！");
				}

			});
	$("#myAppInUser").click(function() {
				var isLogin = $("#userNameisLogin").val();
				if (isLogin != null && isLogin != "") {
					window.location.href = "userIndex.html";
				} else {
					alert("亲，你还没有登录哦！");
				}
			});
}

function login() {
	$(".login_button").click(function() {
				var loginusername = $(".loginusername").val();
				var loginpassword = $(".loginpassword").val();
				if (loginusername == "" || loginusername == "手机号/昵称/邮箱") {
					alert("用户名不能为空哦");
					return;
				}
				if (loginpassword == "") {
					alert("密码不能为空哦");
					return;
				}
				$.ajax({
							url : "system/UserInfoAction_login.do",
							type : "post",
							data : {
								loginusername : loginusername,
								loginpassword : loginpassword
							},
							dataType : "json",
							success : function(data) {
								if (data.state == 0) {
									alert(data.message);
								}
								if (data.state == 1) {
									$(".myUser").css("display", "block");
									$(".myUser").text(data.message);
									$(".head_login").css("display", "none");
									$(".head_register").css("display", "none");
									$("#userNameisLogin").val(data.message);
									close();

								}
							},
							error : function() {
								alert("服务器正在维修哦！稍等！");
							}
						});
			});
}

function register() {
	$(".register_button").click(function() {
				var phone = $(".rootphone").val();
				var regusername = $(".regusername").val().trim();
				var regpassword = $(".regpassword").val().trim();
				var verifyCode = $(".verification").val().trim();
				// var patternEmail =
				// /^\w+([-+]\w+)*@\w+([-+]\w+)*\.\w+([-.]\w+)*$/;
				var phoneReg = /^0?1[3|4|5|8][0-9]\d{8}$/;
				var patternpsw = /[\w\W]{6,12}/;
				var userName1 = /<[^>]+>/g;
				if (phone == "" || phone == "请输入手机号") {
					alert("电话不能为空哦!");
					$(".rootphone").focus();
					return;
				}
				if (regusername == "" || regusername == "请输入昵称") {
					alert("昵称不能为空哦!");
					$(".regusername").focus();
					return;
				}
				if (regpassword == "" || regpassword == "密码(6-20位)") {
					alert("密码不能为空哦!");
					$(".regpassword").focus();
					return;
				}
				if (verifyCode == "") {
					alert("验证码不能为空哦!");
					$(".verification").focus();
					return;
				}
				flagPhone = phoneReg.test(phone);
				flagpsw = patternpsw.test(regpassword);
				if (!flagPhone) {
					alert("电话格式不正确哦！");
					$(".rootphone").focus();
					return;
				}
				if (!flagpsw) {
					alert("密码长度不对哦！应该为6到20位哦！");
					$(".regpassword").focus();
					return;
				}
				if (userName1.test(regusername)) {
					alert("昵称不能为含<>等HTML标签");
					return;
				}
				if (regusername.length > 30) {
					alert("昵称长度不能大于30个字符");
					return;
				}
				$(".register_button").text("已发送");
				$.ajax({
							url : "system/UserInfoAction_register.do",
							type : "post",
							data : {
								phone : phone,
								regusername : regusername,
								regpassword : regpassword,
								verifyCode : verifyCode
							},
							dataType : "json",
							success : function(data) {
								if (data.state == 0) {
									$(".register_button").text("注册");
									setMessage(data.message);
								}
								if (data.state == 1) {
									$(".myUser").css("display", "block");
									$(".myUser").text(regusername);
									$(".head_login").css("display", "none");
									$(".head_register").css("display", "none");
									alert("恭喜小主，注册成功！");
									$("#userNameisLogin").val(regusername);
									close();
								}
							},
							error : function() {
								alert("服务器正在维修哦！稍等！");
							}
						});
			});
}

function logininital() {

	var isLogin = $("#userNameisLogin").val();
	$(".verification_buttom").click(function() {
		$(".code_image").attr("src",
				"system/UserInfoAction_getVerifyCode.do?" + Math.random());
		$(".verification_buttom").css("display", "none");
		$(".code_image").css("display", "block");
	});
	$(".code_image").click(function() {
		$(".code_image").attr("src",
				"system/UserInfoAction_getVerifyCode.do?" + Math.random());
	});
	if (isLogin != null && isLogin != "") {
		$(".myUser").css("display", "block");
		$(".myUser").text(isLogin);
		$(".head_login").css("display", "none");
		$(".head_register").css("display", "none");
	}
	$(".setSearchKey").click(function() {
				var searchKey = $(".search_input").val();
				if (searchKey != "" && searchKey != "请输入关键字") {
					window.location.href = "search.html&key=" + searchKey;
				} else {
					window.location.href = "category_0_0.html";
				}
			});
	$(".setSearchInput").keydown(function(event) {
				if (event.keyCode == 13) {
					var searchKey = $(".search_input").val();
					if (searchKey != "" && searchKey != "请输入关键字") {
						window.location.href = "search.html&key=" + searchKey;
					} else {
						window.location.href = "category_0_0.html";
					}
				}
			});
	$(".login_container_onclick").click(function() {
		$(".login_input_container").css("display", "block");
		$(".register_input_container").css("display", "none");
		if (!$("login_container_onclick").hasClass("login_title_name_act")) {
			$(".login_container_onclick").addClass("login_title_name_act");
			$(".register_container_onclick")
					.removeClass("login_title_name_act");
		}
	});
	$(".register_container_onclick").click(function() {
				$(".login_input_container").css("display", "none");
				$(".register_input_container").css("display", "block");
				if (!$("register_input_container")
						.hasClass("login_title_name_act")) {
					$(".register_container_onclick")
							.addClass("login_title_name_act");
					$(".login_container_onclick")
							.removeClass("login_title_name_act");
				}
			});
	$(".login_close").click(function() {
				close();
			});
	$(".head_login").click(function() {
				$(".login_body_container").css("display", "block");
				$(".login_input_container").css("display", "block");
				$(".login_container_onclick").addClass("login_title_name_act");

			});
	$(".head_register").click(function() {
				$(".login_body_container").css("display", "block");
				$(".register_input_container").css("display", "block");
				$(".register_container_onclick")
						.addClass("login_title_name_act");
			});
	$(".loginusername").focus(function() {
				if ($(".loginusername").val() == "手机号/昵称/邮箱") {
					$(".loginusername").val("");
				}
			});
	$(".loginusername").blur(function() {
				if ($(".loginusername").val() == "") {
					$(".loginusername").val("手机号/昵称/邮箱");
					$(".loginusername").css("color", "#D3D3D3");
				} else {
					$(".loginusername").css("color", "black");
				}
			});

	$(".virtual").focus(function() {
				$(".virtual").css("display", "none");
				$(".real").css("display", "block");
				$(".real").focus();
			});
	$(".real").blur(function() {
				if ($(".real").val() == "") {
					$(".virtual").css("display", "block");
					$(".virtual").val("密码");
					$(".real").css("display", "none");
				}
			});

	$(".rootphone").focus(function() {
				if ($(".rootphone").val() == "请输入手机号") {
					$(".rootphone").val("");
					$(".rootphone").css("color", "black");
				}
			});
	$(".rootphone").blur(function() {
				if ($(".rootphone").val() == "") {
					$(".rootphone").val("请输入手机号");
					$(".rootphone").css("color", "#D3D3D3");
				} else {
					$(".rootphone").css("color", "black");
					// var patternEmail =
					// /^\w+([-+]\w+)*@\w+([-+]\w+)*\.\w+([-.]\w+)*$/;
					var phoneReg = /^0?1[3|4|5|8][0-9]\d{8}$/;
					flagPhone = phoneReg.test($(".rootphone").val());
					if (!flagPhone) {
						setMessage("手机号格式不正确哦！");
						return;
					} else {
						closeMessage();
					}
					$.ajax({
								url : "system/UserInfoAction_checkUserPhone.do",
								type : "post",
								data : {
									phone : $(".rootphone").val()
								},
								dataType : "json",
								success : function(data) {
									if (data.state == 0) {
										setMessage(data.message);
									}
									if (data.state == 1) {
										closeMessage();
									}
								},
								error : function() {
									alert("服务器正在维修哦！稍等！");
								}
							});
				}
			});

	$(".regusername").focus(function() {
				if ($(".regusername").val() == "请输入昵称") {
					$(".regusername").val("");
					$(".regusername").css("color", "black");
				}
			});
	$(".regusername").blur(function() {
				if ($(".regusername").val() == "") {
					$(".regusername").val("请输入昵称");
					$(".regusername").css("color", "#D3D3D3");
				} else {
					$(".regusername").css("color", "black");

					var regusername = $(".regusername").val();
					var userName1 = /<[^>]+>/g;

					if (userName1.test(regusername)) {
						setMessage("昵称不能为含<>等HTML标签");
						return;
					}
					if (regusername.length > 30) {
						setMessage("昵称长度不能大于30个字符");
						return;
					}
					closeMessage();
					$.ajax({
								url : "system/UserInfoAction_checkUserNameExit.do",
								type : "post",
								data : {
									regusername : $(".regusername").val()
								},
								dataType : "json",
								success : function(data) {
									if (data.state == 0) {
										setMessage(data.message);
									}
									if (data.state == 1) {
										closeMessage();
									}
								},
								error : function() {
									alert("服务器正在维修哦！稍等！");
								}
							});
				}
			});

	$(".regpassword").focus(function() {
				if ($(".regpassword").val() == "密码(6-20位)") {
					$(".regpassword").val("");
					$(".regpassword").css("color", "black");
				}
			});
	$(".regpassword").blur(function() {
				if ($(".regpassword").val() == "") {
					$(".regpassword").val("密码(6-20位)");
					$(".regpassword").css("color", "#D3D3D3");
				} else {
					$(".regpassword").css("color", "black");
					var patternpsw = /[\w\W]{6,12}/;
					flagEmail = patternpsw.test($(".regpassword").val());
					if (!flagEmail) {
						setMessage("* 密码要在6到20位哦！！");
						return;
					} else {
						closeMessage();
					}

				}
			});

	$(".verification").focus(function() {
				if ($(".verification").val() == "验证码") {
					$(".verification").val("");
					$(".verification").css("color", "black");
				}
			});
	$(".verification").blur(function() {
		if ($(".verification").val() == "") {
			$(".verification").val("验证码");
			$(".verification").css("color", "#D3D3D3");
		} else {
			$(".verification").css("color", "black");

			if ($(".verification").val() != "") {
				$.ajax({
							url : "system/UserInfoAction_checkVerifyCode.do",
							type : "post",
							data : {
								verifyCode : $(".verification").val()
							},
							dataType : "json",
							success : function(data) {
								setMessage(data.message);
								if (data.state == 0) {
									$(".code_image").attr(
											"src",
											"system/UserInfoAction_getVerifyCode.do?"
													+ Math.random());
								}
							},
							error : function() {
								$(".user_login_white").css("margin-top", "15%");
								alert("服务器未响应");

							}
						});
			}

		}
	});

	$(".issue_button").click(function() {
				window.location.href = "issue.html";
			});

	$(".setSearchInput").focus(function() {
				if ($(".setSearchInput").val() == "请输入关键字") {
					$(".setSearchInput").val("");
					$(".setSearchInput").css("color", "black");
				}
			});
	$(".setSearchInput").blur(function() {
				if ($(".setSearchInput").val() == "") {
					$(".setSearchInput").val("请输入关键字");
					$(".setSearchInput").css("color", "#999999");
				}
			});
}
function close() {
	$(".login_body_container").css("display", "none");
	$(".login_input_container").css("display", "none");
	$(".register_input_container").css("display", "none");
	$(".login_container_onclick").removeClass("login_title_name_act");
	$(".register_container_onclick").removeClass("login_title_name_act");
}
function setMessage(message) {
	$(".regmessage").text(message);
	$(".regmessage").css("display", "block");
	$(".register_input_container").css("margin-top", "0");
}
function closeMessage() {
	$(".regmessage").css("display", "none");
	$(".register_input_container").css("margin-top", "20px");
}