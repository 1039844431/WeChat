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
<meta name="keywords" content="小程序商店,小程序推广,微信小程序商店,微信小程序推广,nice小程序商店" />
<meta name="description" content="NICE小程序商店（nicexcx.com）拥有最新最全微信小程序应用和微信小程序资源、小程序资讯等，作为小程序推广和小程序制作，致力于为用户提供优质的微信小程序体验" />
<!--  -->
<title>NICE小程序商店|微信小程序商店|微信小程序推广</title>


<style type="text/css">

</style>

<script type="text/javascript">
	
</script>


<LINK href="${pageContext.request.contextPath }/css/mobile/index.css"
	type="text/css" rel="stylesheet">
<LINK href="${pageContext.request.contextPath }/css/mobile/swiper.min.css"
	type="text/css" rel="stylesheet">
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/jquery.1.11.3.min.js"></script>
<script src="${pageContext.request.contextPath }/js/swiper.jquery.min.js"></script>
<script type="text/javascript"
    src="${pageContext.request.contextPath }/js/mobile/index.js"></script>	
<LINK href="${pageContext.request.contextPath }/css/mobile/card.css"
	type="text/css" rel="stylesheet">
</head>

<body style="font-size: 12px;">
	<div class="home_bar">	 
		<div class="publish"></div>
		<div class="search_container">
			<input type="text" class="search_input">
			<div class="search_buttom"></div>
		</div>
  </div>




<div class="swiper-container home_banner swiper-container-horizontal">
    <div class="swiper-wrapper" >
    	<div class="swiper-slide" >
    		<img src="${pageContext.request.contextPath}/img/poster/1.png" style="width: 100%;height: 100%">
    	</div>
        <div class="swiper-slide" >
        	<img src="${pageContext.request.contextPath}/img/poster/2.png" style="width: 100%;height: 100%">
        </div>   
    </div>
  	<div class="swiper-pagination swiper-pagination-clickable">
  		<span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
  		<span class="swiper-pagination-bullet"></span>
  		<span class="swiper-pagination-bullet"></span>
  		<span class="swiper-pagination-bullet"></span>
  		</div>
</div>

<div class="psort">
	<ul>
    	<li><a href="Mobile_12_1.html"><i></i>社交</a></li>
        <li><a href="Mobile_9_1.html"><i></i>教育</a></li>
        <li><a href="Mobile_5_1.html"><i></i>金融</a></li>
        <li><a href="Mobile_10_1.html"><i></i>生活</a></li>
        <li><a href="Mobile_0_1.html"><i></i>更多</a></li>
    </ul>
</div>

<div class="home_rec_p">
	<div class="title"><h2>精品推荐</h2></div>
	<div class="add_good_div"></div>
	<div class="title"><h2>热门动态</h2></div>
	<div class="add_hot_div"></div>
	<div class="title"><a><h2>影音播放</h2></a></div>
	<div class="add_yinying_div"></div>
	<div class="title"><a><h2>社交聊天</h2></a></div>
	<div class="add_shejiao_div"></div>
	<div class="title"><a><h2>金融理财</h2></a></div>
	<div class="add_jinrong_div"></div>
	<div class="title"><a><h2>实用工具</h2></a></div>
	<div class="add_shiyong_div"></div>
    
</div>


<div class="footer_padding"></div>
<footer>
    <ul>
        <li class="active"><a href="index.html">首页</a></li>
        <li><a href="mobileIssue.html">发布</a></li>
        <li><a href="mobileLoginHome.html">我的</a></li>
        <li><a href="Mobile_0_1.html">更多</a></li>
    </ul>
</footer>


</body>

</html>