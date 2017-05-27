<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML>
<html xmlns="">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="小程序,微信小程序,小程序推广,小程序商店,小程序市场,小应用,nice小程序,微信公众号平台,开发,应用号,小程序怎么用,小程序在哪里,微信" />
<meta name="description" content="NICE小程序（nicexcx.com）拥有最新最全微信小程序应用和微信小程序资源、小程序资讯等，作为小程序推广和小程序制作，致力于为用户提供优质的微信小程序体验" />
<title>NICE小程序-微信小程序官方推广|微信小程序官方市场</title>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />


<!--收藏用logo图标  -->
<link rel="bookmark"  type="image/x-icon"  href="${pageContext.request.contextPath }/img/headlogo.ico"/>
<!--网站显示页logo图标  -->
<link rel="shortcut icon" type='image/x-ico' href="${pageContext.request.contextPath }/img/headlogo.ico">
<link href="${pageContext.request.contextPath }/css/userindex.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/category.css" rel="stylesheet" type="text/css" />

<script src="${pageContext.request.contextPath }/js/jquery-1.7.2.min.js"></script>

<script src="${pageContext.request.contextPath }/js/userindex/userindex.js"></script>

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
<div class="body_container">
	<div class="user_container">
		<div class="user_img"></div>
		<div class="username_container">${session.userNameKey}</div>
		<div class="setUser">设置账号</div>
		<div class="user_bottom_container">
		    <div class="user_bottom_div" style="margin-top: 2.5px"></div>
			<div class="user_bottom_div logout">注销</div>
			<div class="user_bottom_div"></div>
		</div>
	</div>
	<div class="operate_container">
	
	<input type="hidden" id="isLogin" name="isLogin" value="${session.userNameKey}">
	<input type="hidden" id="issue_collect_detele" name="issue_collect_detele" value="1">
	<input type="hidden" id="issue_morPage" name="issue_morPage" value="1">
	<input type="hidden" id="issue_totalPage" name="issue_totalPage">
	<input type="hidden" id="collect_morPage" name="collect_morPage" value="1">
	<input type="hidden" id="collect_totalPage" name="collect_totalPage">
		<div class="user_nav">
			<div class="user_nav_li my_issue">我的发布</div>
			<div class="user_nav_li my_collect">我的收藏</div>
		</div>
		<div class="user_operate user_issue_container">
			    <div class="addMyIssue"></div>
			    <div class="size_number_container issue_number_container">
			    		<div class="add_issue_number"></div>
			    </div>
			    
			    <div class="no_issue issue_noresult">
			    	<div class="no_img"></div>
             	    <div class="no_issue_message">小主！还没有发布哦！快去发布吧！</div>
             	    <div class="user_issue">
             	    	<div class="user_issue_buttom">免费发布小程序</div>
             	    </div>
			    </div>  
				<div style="float: left;width: 100%;width: 40px;"></div>
			
		</div>
		<div class="user_operate user_collect_container">
			<div class="addMyCollect"></div>
			<div class="size_number_container collect_number_container">
			    		<div class="add_collect_number"></div>
			</div>
			    
			    <div class="no_issue no_collect">
			    	<div class="no_img"></div>
             	    <div class="no_issue_message">小主！还没有收藏哦！快去收藏吧！</div>
             	    
			    </div>  
				
			<div style="float: left;width: 100%;width: 40px;"></div>
		</div>
	</div>
</div>	


	
	<div class="footer-bot">
	 	<div class="footer_link">
	    	<a href="index.html" class="link_a">NICE小程序</a>&nbsp;|&nbsp;
	        <a href="friendlink.html" class="link_a">友情链接</a>&nbsp;|&nbsp;
	        <a href="idea.html" class="link_a">意见反馈</a>&nbsp;|&nbsp;
	        <a href="business.html" class="link_a">商务合作</a>&nbsp;|&nbsp;
	        <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" class="link_a">湘ICP备17002247号</a>
	    </div>
		<div class="footer-wrapper">Copyright © 2016-2017 All Rights Reserved.</div>
	</div>
</body>
</html>
