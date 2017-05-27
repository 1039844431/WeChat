
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
<title><s:property value="#request.pageAppDetailFrom.cateGoryValue"/>|NICE小程序商店|小程序推广</title>


<LINK href="${pageContext.request.contextPath }/css/mobile/ListCard.css"
	type="text/css" rel="stylesheet">
<LINK href="${pageContext.request.contextPath }/css/mobile/loder_listCard.css"
	type="text/css" rel="stylesheet">
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/jquery.1.11.3.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/ListCard.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/iscroll.js"></script>	     
</head>
<body style="font-size: 12px;">
	<div class="list_bar">
				<a class="back" href="javascript:history.go(-1)"></a>
			  	<div class="list_bar_title"><s:property value="#request.pageAppDetailFrom.cateGoryValue"/>|NICE小程序商店|小程序推广</div>
			  	<div class="publish"></div>  
    </div>
    <div class="search_container" style="margin-top: -100px;">
			<input type="text" class="search_input">
			<div class="search_buttom"></div>
	</div>
	<div class="condition">
	<div class="title_container_div">
		
	    
	</div>
	<div class="title_container_div">	
		<div class="select_title_position"><s:property value="#request.pageAppDetailFrom.cateGoryValue"/></div>
	</div>
	</div>

	<div class="job_select_container job_select_container_display">
		<s:if test="#request.categoryDicList != null && #request.categoryDicList.size() > 0">
			<s:iterator value="#request.categoryDicList" var="category">
				<div class="job_class"><s:property value="#category.value"/></div>
				<input type="hidden" value='<s:property value="#category.key"/>'>
			</s:iterator>
		</s:if>
	
	</div>
		
<div class="container">
 <div id="wrapper">
		<div id="scroller">
			<div id="pullDown">
				<span class="pullDownIcon"></span><span class="pullDownLabel pullLabel">下拉刷新...</span>
			</div>	
			<div class="tishi">点击图标可以查看二维码哦！</div>
			<ul id="thelist" class="main_ul">
				
			 <s:if test="#request.pageAppDetailFrom!=null && #request.pageAppDetailFrom.appDetailFromList != null && #request.pageAppDetailFrom.appDetailFromList.size() > 0">
					 <s:iterator value="%{#request.pageAppDetailFrom.appDetailFromList}" var="appDetailFrom">
					 <li>
						 	<div class="list_container">
						 	   <div class="book">
						 	    		<div class="clip"></div>
						 	   </div>
						 	   <div class="loader_word">疯狂加载</div>
						 	   <div class="loader">
						        <div class="loader-inner ball-pulse">
						          <div></div>
						          <div></div>
						          <div></div>
						        </div>
						      </div>
						      <img class="list_appImg cl_appImg" alt="<s:property value="%{#appDetailFrom.appName}"/>|NICE小程序商店" src="${pageContext.request.contextPath }/<s:property value="%{#appDetailFrom.appImg}"/>">
						      <img class="list_appImg cl_erweiImg" alt="<s:property value="%{#appDetailFrom.appName}"/>|NICE小程序商店" src="${pageContext.request.contextPath }/<s:property value="%{#appDetailFrom.erweiImg}"/>">
						      <a href="mobileAppDetail_<s:property value="%{#appDetailFrom.ID}"/>.html">
						 		<div class="detail_container">
						 		
							 		<div class="message_title"><s:property value="%{#appDetailFrom.appName}"/></div>
									<div class="company_message_common"><div class="company_name"><font style="color: #EE7621;"><s:property value="%{#appDetailFrom.appName}"/></font></div></div>
									<div class="company_message_common"><div class="company_money">类别：<font style="color: #EE7621;"><s:property value="%{#appDetailFrom.category}"/></font></div></div>
									<div class="company_message_common"><div class="company_adress">功能：<s:property value="%{#appDetailFrom.intro}"/></div></div>
								</div>
							  </a>
							  
								<div class="book_colse"></div>
						 		<div class="heart">
						 			<div class="heart_favorite_image click_image"><div class="collect have_colect">已收藏</div><div class="collect not_colect">已取消</div></div>
						 			<div id="shool_job_list_id" style="display: none;"><s:property value="%{#appDetailFrom.ID}"/></div>
						 		</div>
						 		<div class="close_container"></div>
						 		
						 		<div id="school_job_detail_id" style="display: none;"><s:property value="%{#appDetailFrom.ID}"/></div>
						 	</div>
					 	</li>	
					 </s:iterator>
			 	</s:if>
	 			<s:else>
	 			  <div class="empty">
		 			  <div class="no_favorite_word find_private">
		 				 没有找到哦
		 			  </div>
		 			  <div class="no_favorite_image"></div> 
	 			  </div>
	 			</s:else>
	 			
			</ul>
			
			<div id="pullUp" class="pullUp">
				<span class="pullUpIcon"></span><span class="pullUpLabel pullLabel">上拉加载更多...</span>
			</div>
			
		</div>
	</div>
	<input type="hidden" id="session_user" value='<s:property value="#session.userNameKey"/>'>
 	<input type="hidden" name="categoryKey" id="categoryKey" value="<s:property value="#request.pageAppDetailFrom.cateGoryKey"/>">
 	<input type="hidden" name="pageNO" id="pageNO" value="<s:property value="#request.pageAppDetailFrom.currentPageNo"/>">
    <input type="hidden" name="sumPage" id="sumPage" value="<s:property value="#request.pageAppDetailFrom.totalPage"/>">
 </div>
	
 
</body>

</html>