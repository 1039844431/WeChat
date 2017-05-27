<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/header/headtitle.css" type="text/css"></link> 
	<script src="${pageContext.request.contextPath }/js/head/loginreg.js"></script>
    <div class="out_head1"> 
	    <div class="head1">	
		   	   <div class="headleft">		   	   
			   	   
			   	   <s:if test="%{#request.categoryDicList != null && #request.categoryDicList.size() > 0}">

			   	   	<s:iterator value="%{#request.categoryDicList}" var="categoryDic">
			   	   		<div class="headleftselct cateNav">
				   	   		<a href="category_<s:property value="#categoryDic.key"/>_1.html"> 
				   	   			<s:property value="#categoryDic.value"/>
				   	   		</a> 
			   	   		</div> 
			   	   	</s:iterator>
			   	   </s:if>
			   	   <s:else>
			   	   	<div class="headleftselct cateNav">
				   	   <a href="index.html">nice小程序商店专注小程序</a>
				   	   </div> 
			   	   </s:else>
			   	   
			   	    
			   	   <input type="hidden" class="cateNavAll" value="0">
		   	   </div>
		   	   <div class="headright">	   	   
			   	   <div class="headleftselct head_login"><a href="#">亲，请登录</a></div>
			   	   <div class="headleftselct head_register"><a href="#">免费注册</a></div>
			   	   <div class="headleftselct myUser"></div>
			   	   <div class="headleftselct"><a href="#" id="myAppInUser">我的小程序</a></div> 
		   	   </div>	   	     	   
	    </div>
    </div>
   <input type="hidden" id="userNameisLogin" name="userNameisLogin" value="${session.userNameKey}">
    <div class="login_body_container">
    	<div class="login_container">
    		<div class="login_title_container">
	    		<div class="login_close_container">
	    			<div class="login_close"></div>
	    		</div>
	    		<div class="login_title_name login_container_onclick">
	    			登录
	    		</div>
	    		<div class="login_title_name register_container_onclick">
	    		         注册
	    		</div>
    		</div>
    		<div class="input_container login_input_container">
    			<input type="text" class="input_name rootusername loginusername" value="手机号/昵称/邮箱">
    			<input type="text" class="input_name rootpassword virtual" value="密码">
    			<input type="password" class="input_name rootpassword real loginpassword">
    			<input type="button" class="submit_button login_button" value="登录">
    		</div>
    		<div class="message regmessage"></div>
    		<div class="input_container register_input_container">    			
    		    <input type="text" class="input_name rootphone" value="请输入手机号">    		    
    		    <input type="text" class="input_name rootusername regusername" value="请输入昵称" style="margin-top: 20px">
    			<input type="text" class="input_name rootpassword regpassword" value="密码(6-20位)">
    			<input type="text" class="input_name verification" value="验证码">
    			<div class="verification_buttom">获取验证码</div>
    			<img class="code_image" >
    			<input type="button" class="submit_button register_button" value="注册">
    	   </div>    	   
    	</div>    	
    </div>
