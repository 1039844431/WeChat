<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML>
<html xmlns="">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="小程序,微信小程序,小程序推广,小程序商店,小程序市场,小应用,nice小程序,微信公众号平台,开发,应用号,小程序怎么用,小程序在哪里,微信" />
<meta name="description" content="NICE小程序（nicexcx.com）拥有最新最全微信小程序应用和微信小程序资源、小程序资讯等，作为小程序推广和小程序制作，致力于为用户提供优质的微信小程序体验" />
<title>NICE小程序-微信小程序官方推广|微信小程序官方市场</title>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />


<!--收藏用logo图标  -->
<link rel="bookmark"  type="image/x-icon"  href="../img/headlogo.ico"/>
<!--网站显示页logo图标  -->
<link rel="shortcut icon" type='image/x-ico' href="../img/headlogo.ico">


<script src="${pageContext.request.contextPath }/js/jquery-1.7.2.min.js"></script>
<link href="${pageContext.request.contextPath }/css/swiper.min.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/footer.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/category.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/search.css" rel="stylesheet" type="text/css" />
<script src="${pageContext.request.contextPath }/js/swiper.jquery.min.js"></script>
<script src="${pageContext.request.contextPath }/js/search/search.js" charset="utf-8"></script>
</head>
<body>

	<div id="header" class="clear">
	  <div class="header-wrapper">
	     <jsp:include page="headtitle.jsp"/>
	  </div>
	</div>
	
	<input type="hidden" value="1" id="morePage" name="morePage">
	<input type="hidden" id="totalPage" name="totalPage"> 
	<div class="category_search_container">
		<div class="search_logo_container category_logo_container">
			<a href="index.html"><div class="logo_container"></div></a>
			<div class="search_container">
				<input type="text" value="${request.searchKey}" class="search_input realSearchKey" style="height: 45px;">
				<input type="button" class="search_button realSearchButtom" value="搜索">
				<div class="search_or">或者</div>
				<input type="button" class="search_button issue_button" value="免费发布小程序">
			</div>
		</div>
	</div>
	
	
	
	<!-- 二维码 -->
	

	
    <!-- Swiper -->
    <div class="swiper-container" >
        <div class="swiper-wrapper" >
        	<div id="add_slide"></div>
             <div class="no_result">
             	<div class="no_result_img"></div>
             	<div class="no_result_message">小主！对不起，实在没找到！</div>
             </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev my_swiper-button-prev"></div>
        <div class="swiper-button-next my_swiper-button-next"></div>
    </div>
    

	<div class="footer-bot">
		<div class="footer_link">
	    	<a href="index.html" style="color: #EDFFBE">NICE小程序</a>&nbsp;|
	        <a href="friendlink.html" style="color: #EDFFBE">友情链接</a>&nbsp;|&nbsp;
	        <a href="idea.html" style="color: #EDFFBE">意见反馈</a>&nbsp;|&nbsp;
	        <a href="business.html" style="color: #EDFFBE">商务合作</a>&nbsp;|&nbsp;
	        <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" style="color: #EDFFBE">湘ICP备17002247号</a>
	    </div>
		<div class="footer-wrapper">Copyright © 2016-2017 All Rights Reserved.</div>
	</div>
</body>
</html>
