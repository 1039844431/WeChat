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
<title><s:property value="#request.appDetailFrom.appName"/>_NiCE小程序商店_小程序推广</title>


<style type="text/css">

</style>

<script type="text/javascript">
	
</script>


<LINK href="${pageContext.request.contextPath }/css/mobile/company.css"
	type="text/css" rel="stylesheet">
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/jquery.1.11.3.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/mobile/mobileTopicDetail.js"></script>
<link href="${pageContext.request.contextPath }/css/swiper.min.css" rel="stylesheet" type="text/css" />
<script src="${pageContext.request.contextPath }/js/swiper.jquery.min.js"></script>
</head>

<body style="font-size: 12px;">
	<div class="company_bar">
				<a class="back" href="javascript:history.go(-1)"></a>
			  	<div class="company_bar_title"><s:property value="#request.appDetailFrom.appName"/>|NICE小程序商店</div>
			  	<div class="publish"></div>  
    </div>

	<div class="company_basic_condition">
		
		<div class="title_icon_father_oneline company_name"><font style="color: #EE7621;">名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</font>&nbsp;&nbsp;<s:property value="#request.appDetailFrom.appName"/></div>
		<div class="title_icon_father_oneline time_start"><font style="color: #EE7621;">发布时间:</font>&nbsp;&nbsp;<s:property value="#request.appDetailFrom.issueTime"/></div>
		<div class="title_icon_father_oneline time_end"><font style="color: #EE7621;">来&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自:</font>&nbsp;&nbsp;
		<s:property value="#request.appDetailFrom.appName"/>		
		</div>
		<div class="title_icon_father_oneline interview_adress"><font style="color: #EE7621;">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</font>&nbsp;&nbsp;<s:property value="#request.appDetailFrom.category"/></div>	
		
				
	</div>

	
	
	<div class="company_rec_title">
			<div class="title">
			<div class="title_black"></div>
			<h2><s:property value="#request.appDetailFrom.appName"/>截图</h2>
		</div>
		<div class="company_detail">
				<div class="out_swiper_container">
				    <div class="swiper-container">
				        <div class="swiper-wrapper">
				            <s:if test="#request.appDetailFrom.introImgPath != null && #request.appDetailFrom.introImgPath.size() > 0">
				            	<s:iterator value="#request.appDetailFrom.introImgPath" var="introImgPath">
					            	<div class="swiper-slide">
					            	<img class="swiper_img" src="${pageContext.request.contextPath }/<s:property value="#introImgPath"/>">
					            	</div>
				            	</s:iterator>
				            </s:if>		           
				        </div>
				        <!-- Add Pagination -->
				        <div class="swiper-pagination"></div>
				    </div>
				</div>		 	          
		</div>
	</div>
	
	<div class="company_rec_title">
					<div class="title">
					<div class="title_black"></div>
					<h2><s:property value="#request.appDetailFrom.appName"/>介绍</h2>				
					</div>
					<div class="company_detail">						
						 <s:property value="#request.appDetailFrom.intro"/>
				    </div>
	</div>
	<div class="company_rec_title">
				<div class="title">
				<div class="title_black"></div>
				<h2><s:property value="#request.appDetailFrom.appName"/>二维码</h2>
			</div>
			<div class="company_detail">
			<div class="erwei_tontainer">				
					<img class="erwei_img" alt="<s:property value="#request.appDetailFrom.appName"/>二维码|NICE小程序商店" src="${pageContext.request.contextPath }/<s:property value="#request.appDetailFrom.erweiImg"/>">
			</div> 			 	          
			</div>
	</div>		
 <div class="company_rec_title">

	<div class="company_detail">
				 <div class="comment_tontainer">
						<div class="comment_title">我要评论</div>
						<div class="comment_issue comment_issue_img">发表</div>
						<textarea class="comment_textarea">我来说两句</textarea>	
						<div class="new_comment_container">
							<div class="new_comment_title">
								最新评论
							</div>
						<div class="new_comment_title_number">共&nbsp;
						<span class="comment_number">
							<s:if test="#request.pageCommentFrom != null">
								<s:property value="#request.pageCommentFrom.totalResult"/>
							</s:if>
						</span>&nbsp;条</div>
						<input type="hidden" id="commentTotalPage" name="commentTotalPage" value="1">
						<input type="hidden" id="commentCurrentPage" name="commentCurrentPage" value="0">
						 <div class="new_comment">
							 <div class="add_comment_div"></div>
						 	<s:if test="#request.pageCommentFrom.commentList != null && #request.pageCommentFrom.commentList.size() > 0">
							 	<s:iterator value="#request.pageCommentFrom.commentList" var="comment">
							 		<div class="new_comment_li">
							 		<div class="comment_user_img_container">
							 				<div class="comment_user_img"></div>
									 </div>
									<div class="comment_user_name"><s:property value="#comment.userName"/></div>
									<div class="comment_time"><s:property value="#comment.commentTime"/></div>
									<div class="comment_detail"><s:property value="#comment.commentDetail"/></div>
									<div class="comment_zan">
									    <div class="zan"><s:property value="#comment.zanTop"/></div>
									    <div class="zan_img zan_top_mouse zan_top_click zan_top"></div>	 			
										 <div class="zan"><s:property value="#comment.zanDown"/></div>
										 <div class="zan_img zan_down_mouse zan_down_click zan_down"></div>	
									</div>
									<input type="hidden" value="<s:property value="#comment.ID"/>">
							  </div>
							 	</s:iterator>
							 </s:if>	
						 	
						 </div>
						</div>			
			</div>			 	          
	</div>
</div>
<input type="hidden" id="session_user" value='<s:property value="#session.userNameKey"/>'>
<input type="hidden" id="appDetailID" name="appDetailID" value="<s:property value="#request.appDetailFrom.ID"/>">
<div class="footer_padding"></div>
<footer>
    <ul>
        <li><a href="index.html">首页</a></li>
        <li><a href="mobileIssue.html">发布</a></li>
        <li><a href="mobileLoginHome.html">我的</a></li>
        <li class="active collect_active"><a href="#" class="collect">收藏</a></li>
    </ul>
</footer>
</body>

</html>