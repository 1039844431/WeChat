<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML>
<html xmlns="">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="小程序,微信小程序,小程序推广,小程序商店,小程序市场,小应用,nice小程序,微信公众号平台,开发,应用号,小程序怎么用,小程序在哪里,微信" />
<meta name="description" content="NICE小程序（nicexcx.com）拥有最新最全微信小程序应用和微信小程序资源、小程序资讯等，作为小程序推广和小程序制作，致力于为用户提供优质的微信小程序体验" />
<title>NICE小程序-个人信息设置</title>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />


<!--收藏用logo图标  -->
<link rel="bookmark"  type="image/x-icon"  href="${pageContext.request.contextPath }/img/headlogo.ico"/>
<!--网站显示页logo图标  -->
<link rel="shortcut icon" type='image/x-ico' href="${pageContext.request.contextPath }/img/headlogo.ico">
<link href="${pageContext.request.contextPath }/css/setUserInfo.css" rel="stylesheet" type="text/css" />

<link href="${pageContext.request.contextPath }/css/footer.css" rel="stylesheet" type="text/css" />
<script src="${pageContext.request.contextPath }/js/jquery-1.7.2.min.js"></script>

<script src="${pageContext.request.contextPath }/js/setUserInfo/setUserInfo.js"></script>

</head>
<body>
<!--HEADER-->
<div class="out_header_container">
	<div class="header_container">
		<div class="header_logo"></div>
		<div class="adver">
		     <span class="adver_main_title">全国最大的微信小程序推广平台</span>            
			 <div class="adver_little_title" style="margin-left: 0px;">
				 <div class="adver_img adver_img_one"></div> 
				 <div class="adver_little_name">最专业</div>
			 </div>
			 <div class="adver_little_title">
				 <div class="adver_img adver_img_two"></div> 
				 <div class="adver_img adver_little_name">最专一</div>
			 </div>
			 <div class="adver_little_title">
				  <div class="adver_img adver_img_three"></div> 
				 <div class="adver_img adver_little_name">最专心</div>
			 </div>
		</div>
	</div>
</div>

	<div class="user_input_container">
		<div class="input_title_container"><div class="back"></div>
			<div class="input_title_container_message">个人资料设置</div>
		</div>
			<input type="hidden" id="username_hi" name="username_hi" value="${request.userInfo.userName}">
			<input type="hidden" id="phone_hi" name="phone_hi" value="${request.userInfo.phone}">
			<input type="hidden" id="email_hi" name="email_hi" value="${request.userInfo.email}">
			<div class="input_title_name">昵称<font color="red">&nbsp;*</font> </div>
			<input class="input_detail" type="text" id="username" name="username" value="${request.userInfo.userName}">
			<div class="submit" id="username_button" name="username_button" >修改</div>
			<div class="setmessage" id="username_message" name ="username_message"></div>
			<div class="input_title_name">手机号<font color="red">&nbsp;*</font> </div>
			<input class="input_detail" type="text" id="phone" name="phone" value="${request.userInfo.phone}">
			<div class="submit" id="phone_button" name="phone_button">修改</div>
			<div class="setmessage" id="phone_message" name="phone_message"></div>
			<div class="input_title_name">邮箱<font color="red">&nbsp;*</font> </div>
			<input class="input_detail" type="text" id="email" name="email" value="${request.userInfo.email}">
			<div class="submit" id="email_button" name="email_button">修改</div>
			<div class="setmessage" id="email_message" name="email_message"></div>
			<div class="input_title_name">旧密码<font color="red">&nbsp;*</font> </div>
			<input class="input_detail" type="text" id="odlpaw" name="odlpaw">
			<div class="setmessage" id="psw_message" name="psw_message"></div>
			<div class="input_title_name">新密码<font color="red">&nbsp;*</font> </div>
			<input class="input_detail" type="text" id="newpaw" name="newpaw">
			<div class="submit" id="psw_button" name="psw_button">修改</div>
		    <div class="setmessage" id="newpsw_message" name="newpsw_message"></div>
	</div>


		<div class="footer">
	      <div class="tags">
	        <h5>友情链接</h5>
	        <a href="https://mp.weixin.qq.com/">微信公众平台</a>&nbsp;&nbsp;&nbsp;&nbsp;
	        <a href="https://mp.weixin.qq.com/debug/wxadoc/design/index.html">小程序设计指南</a>&nbsp;&nbsp;&nbsp;&nbsp;
	        <a href="https://mp.weixin.qq.com/debug/wxadoc/dev/component/">微信小程序组件</a>&nbsp;&nbsp;&nbsp;&nbsp;
          </div> 
	</div>
	<div class="footer-bot">
	    <div class="footer_link">
	    	<a href="index.html" style="color: #EDFFBE">NICE小程序</a>&nbsp;|&nbsp;
	        <a href="friendlink.html" style="color: #EDFFBE">友情链接</a>&nbsp;|&nbsp;
	        <a href="idea.html" style="color: #EDFFBE">意见反馈</a>&nbsp;|&nbsp;
	        <a href="business.html" style="color: #EDFFBE">商务合作</a>&nbsp;|&nbsp;
	        <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" style="color: #EDFFBE">湘ICP备17002247号</a>
	    </div>
		<div class="footer-wrapper">Copyright © 2016-2017 www.nicexcx.com All Rights Reserved.  </div>		
	</div>
</body>
</html>
