
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
<title>搜索|NICE小程序商店|小程序推广</title>


<LINK href="${pageContext.request.contextPath }/css/mobile/ListCard.css"
	type="text/css" rel="stylesheet">
<LINK href="${pageContext.request.contextPath }/css/mobile/loder_listCard.css"
	type="text/css" rel="stylesheet">
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/jquery.1.11.3.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/searchCard.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/iscroll.js"></script>	     
</head>
<body style="font-size: 12px;">
	<div class="list_bar">
				<a class="back" href="javascript:history.go(-1)"></a>
			  	<div class="list_bar_title"><s:property value="#request.searchKey"/>|NICE小程序商店|小程序推广</div>
			  	<div class="publish"></div>  
    </div>

	<div class="search_container">
			<input type="text" class="search_input" value="<s:property value="#request.searchKey"/>">
			<div class="search_buttom"></div>
   </div>
	

<div class="container">

 <div id="wrapper" style="margin-top: .5rem;">
		<div id="scroller">
			<div id="pullDown">
				<span class="pullDownIcon" ></span><span class="pullDownLabel pullLabel" style="display: none">下拉刷新...</span>
			</div>	
			
			<ul id="thelist" class="main_ul">
				 <div class="add_search_div"></div>
	 			  <div class="empty search_no" style="display: none">
		 			  <div class="no_favorite_word find_private search_no_word">
		 				 没有找到哦
		 			  </div>
		 			  <div class="no_favorite_image"></div> 
	 			  </div>

	 			
			</ul>
			
			<div id="pullUp" class="pullUp mypullUp">
				<span class="pullUpIcon" ></span>
				<span class="pullUpLabel pullLabel mypullLabel" style="display: none">上拉加载更多...</span>
			</div>
			
		</div>
	</div>
	<input type="hidden" id="session_user" value='<s:property value="#session.userNameKey"/>'>
 	<input type="hidden" name="pageNO" id="pageNO" value="0">
    <input type="hidden" name="sumPage" id="sumPage">
 </div>
	
 
</body>

</html>