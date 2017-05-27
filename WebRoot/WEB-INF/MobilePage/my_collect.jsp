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
<title>我的收藏|NICE小程序商店</title>


<style type="text/css">

</style>

<script type="text/javascript">
	
</script>


<LINK href="${pageContext.request.contextPath }/css/mobile/favorite_issue.css"
	type="text/css" rel="stylesheet">

<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/jquery.1.11.3.min.js"></script>
	
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/my_favorite.js"></script>	
	
</head>
<body style="font-size: 12px;">
	<div class="list_bar">
				<a class="back" href="javascript:history.go(-1)"></a>
			  	<div class="list_bar_title">我的收藏</div>
			  	<div class="publish"></div>  
    </div>
    <form id="SchoolJobDetail" name="SchoolJobDetail" method="post"></form>
 <div class="container">
 
 	<div class="add_collect"></div> 	    		
 	 
 	<div class="empty"><div class="no_favorite_word">您还没有收藏哦！</div><div class="no_favorite_image"></div> </div>
 	  
 </div>
 

</body>

</html>