<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html>
<html data-dpr="1" style="font-size: 54px;">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">

<!-- 是针对一些老的不识别viewport的浏览器，列如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 
    meta标签表示：强制让文档的宽度与设备的宽度保持1:1，并且文档最大的宽度比例是1.0，且不允许用户点击屏幕放大浏览；尤其要注意的是
    content里多个属性的设置一定要用分号+空格来隔开，如果不规范将不会起作用
   -->
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">

<!-- 这个主要是针对移动网站添加到快捷方式（添加到主屏幕） -->
<meta name="apple-mobile-web-app-capable" content="yes">
<!-- 
  meta标签表示：告诉设备忽略将页面中的数字识别为电话号码
   -->
<meta name="format-detection" content="telephone=no">

<!--  -->
<title>NICE小程序商店个人中心</title>


<style type="text/css">

</style>

<script type="text/javascript">
	
</script>


<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/jquery.1.11.3.min.js"></script>

<LINK href="${pageContext.request.contextPath }/css/mobile/my_home.css"
	type="text/css" rel="stylesheet">
<LINK href="${pageContext.request.contextPath }/css/mobile/loaders.css"
	type="text/css" rel="stylesheet">

<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/my_home.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/login_register.js"></script>
<LINK href="${pageContext.request.contextPath }/css/mobile/login_register.css"
	type="text/css" rel="stylesheet">
</head>
<body>
   	<div id="user_title" class="uer_title">
   			<div class="uer_title_bar">
				<a class="back" href="javascript:history.go(-1)"></a>
			  	<div class="uer_title_bar_name">NICE小程序商店_宝贝中心</div>
    		</div>
    		
    		
    		
    		
			
			
			<div id="my_icon_block" class="user_name_block user_name_block_white">
				
	    			<div id="my_icon_image" class="user_name_image user_name_image_shadow"></div>		
	    			<s:if test="#session.userNameKey == null">
		    			<div class="no_login_user_name">
		    			点击登录
		    			</div>
		    			<div class="circle circle_shadow"></div>	
	    			</s:if>
	    			<s:else>
		    			<div class="user_name">
		    			  <s:property value="#session.userNameKey"/>
		    			</div>
		    			<div class="circle circle_shadow"></div>	
		    			<div class="user_medal">金牌VIP</div>
	    			</s:else>
	    					  		
	    	</div>
			
    		
    	<input type="hidden" id="session_user" value='<s:property value="#session.userNameKey"/>'>
	</div>
	<div class="semi-circle"></div>
		<div class="my_home_list my_home_list_mycollect mycollect_list_onclick" style="margin-top: 20px;" id="gotoMobileCollect" >
			<div class="my_home_list_icon mycollect_icon"></div>
			<div class="mycollect_name">我的收藏</div>
			<div class="arrow_right"></div>
		</div>
	
	
		<div class="my_home_list my_home_list_myissue myissue_list_onclick" id="gotoMobileIssue">
			<div class="my_home_list_icon myissue_icon"></div>
			<div class="mycollect_name">我的发布</div>
			<div class="arrow_right"></div>
		</div>
	

	<div class="loder_block" style="display: none;">
       <div class="loader">
        <div class="loader-inner ball-scale-ripple-multiple">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="loder_name">玩命加载中...</div>
  </div>
  <div class="user_login_container">
		<div class="user_login_white">
			<div style="width: 100%;height:.4rem;">
				<div class="login_close_yellow"></div>
			</div>
				<div class="login_register_bar">
					<div class="login_register_title login_register_action  login_container">登录</div>
					<div class="login_register_title register_container">注册</div>
				</div>
				
				<div class="login_input_container">		
				   <div class="message login_message"></div>		
					<div class="register_name_container login_phone_container">		   
					   <input class="login_input username_image login_phone" value="手机号/用户名/邮箱">
					</div>
					
					<div class="login_name_container login_password_container">
					   <div class="login_input password_image login_password_div">请输入密码</div>
					   <input type="password" class="login_input password_action real_password">
					</div>
					<div class="login_button button_shadow login">登录</div>	
					<div style="width: 100%;height: .3rem;"></div>
				</div>
				
				<div class="register_input_container">
					<div class="message phone_message"></div>
					   
					<div class="register_name_container register_phone_container">	
					    <input class="login_input username_image register_phone" value="请输入手机号码">	   
					</div>
					<div class="message password_message"></div>
					<div class="register_name_container register_password_container">
					   <input class="login_input password_image register_password" value="请输入含有字母的6~20位密码">
					</div>
					<div class="message verify_message"></div>
					<div class="register_name_container">
					   <input class="code_input lock" value="请输入验证码">
					   <div class="code_button"><div class="code_button_word">获取验证码</div><img class="code_image wait_image"  src=""></div>
					</div>
					<div class="login_button button_shadow register">注册</div>	
					<div style="width: 100%;height: .3rem;"></div>
				</div>
				
		</div>
		<div class="footer_padding"></div>
 </div>   
 
<footer>
    <ul>
        <li><a href="index.html">首页</a></li>
        <li><a href="mobileIssue.html">发布</a></li>
        <li class="active"><a href="mobileLoginHome.html">我的</a></li>
        <li><a href="Mobile_0_1.html">更多</a></li>
    </ul>
</footer>
 
</body>

</html>