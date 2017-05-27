<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML>
<html xmlns="">
<head>
<title><s:property value="#request.appDetailFrom.appName"/>_nice小程序商店_小程序推广</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="小程序商店,小程序推广,微信小程序商店,微信小程序推广,nice小程序商店" />
<meta name="description" content="NICE小程序商店（nicexcx.com）拥有最新最全微信小程序应用和微信小程序资源、小程序资讯等，作为小程序推广和小程序制作，致力于为用户提供优质的微信小程序体验" />

<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />
<!--收藏用logo图标  -->
<link rel="bookmark"  type="image/x-icon"  href="${pageContext.request.contextPath }/img/headlogo.ico"/>
<!--网站显示页logo图标  -->
<link rel="shortcut icon" type='image/x-ico' href="${pageContext.request.contextPath }/img/headlogo.ico">

<link href="${pageContext.request.contextPath }/css/topic.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/footer.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/search.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/swiper.min.css" rel="stylesheet" type="text/css" />
<script src="${pageContext.request.contextPath }/js/jquery-1.7.2.min.js"></script>
<script src="${pageContext.request.contextPath }/js/topic/topic.js"></script>
<script src="${pageContext.request.contextPath }/js/swiper.jquery.min.js"></script>

</head>
<body>
<!--HEADER-->
<div id="header" class="clear">
  <div class="header-wrapper">
     <jsp:include page="headtitle.jsp"/>
  </div>
</div>

<div class="out_search_container">
	<div class="search_logo_container">
		<a href="index.html"><div class="logo_container"></div></a>
		<div class="search_container">
			<input type="text" class="search_input setSearchInput">
			<input type="button" class="search_button setSearchKey" value="搜索">
			<div class="search_or">或者</div>
			<input type="button" class="search_button issue_button" value="免费发布小程序">
		</div>
	</div>
</div>
<div class="out_container">
	<div class="container">
		<div class="detail_container">
			<div class="detail_top">
				<div class="detail_top_left">
					<div class="detail_image_container">
						<div class="detail_top_image"><img src="${pageContext.request.contextPath }/<s:property value="#request.appDetailFrom.appImg"/>" title="<s:property value="#request.appDetailFrom.appName"/>|小程序商店" alt="<s:property value="#request.appDetailFrom.appName"/>|nice小程序商店"></div>
						<input type="hidden" id="appAetailID" name="appAetailID" value="<s:property value="#request.appDetailFrom.ID"/>">
						<div class="detail_top_image_right">
							<h1 class="main_title"><s:property value="#request.appDetailFrom.appName"/></h1>
							<div class="share_container">
									<div class="jiathis_style_24x24">
										<a class="jiathis_button_qzone"></a>
										<a class="jiathis_button_tsina"></a>
										<a class="jiathis_button_tqq"></a>
										<a class="jiathis_button_weixin"></a>
										<a class="jiathis_button_renren"></a>
										<a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
									</div>	
							</div>
							<div class="add_collect">
								<div class="collect_img add_collect_noact"></div><div class="collect_message">收藏至小程序商店</div> 
							</div>
						</div>
						<div class="information_container">
							<div class="information_title_container">
								<div class="information_title_strip"></div>
								<div class="information_title_name"><s:property value="#request.appDetailFrom.appName"/> </div>
								<div class="information_detail">
									<div class="information_li">分类：<s:property value="#request.appDetailFrom.category"/></div>
									<div class="information_li">发布：<s:property value="#request.appDetailFrom.issueTime"/></div>
									<div class="information_li">来自：<s:property value="#request.appDetailFrom.appName"/></div>
									<div class="information_li">标签：<s:property value="#request.appDetailFrom.tag"/></div>
								</div>
							</div>
						</div>
					</div>
				</div>				
				<div class="detail_top_right"><img src="${pageContext.request.contextPath }/<s:property value="#request.appDetailFrom.erweiImg"/>" alt="微信小程序，nicexcx.com"></div>
			</div>
			<div class="image_swap_container">
				<div class="information_title_strip"></div>
				<div class="information_title_name"><s:property value="#request.appDetailFrom.appName"/>截图</div>
				 <!-- Swiper -->
				<div class="out_swiper_container">
				    <div class="swiper-container">
				        <div class="swiper-wrapper">
				            <s:if test="#request.appDetailFrom.introImgPath != null && #request.appDetailFrom.introImgPath.size() > 0">
				            	<s:iterator value="#request.appDetailFrom.introImgPath" var="introImgPath">
					            	<div class="swiper-slide">
					            	<img src="${pageContext.request.contextPath }/<s:property value="#introImgPath"/>" title="<s:property value="#request.appDetailFrom.appName"/>|小程序商店" alt="<s:property value="#request.appDetailFrom.appName"/>|nice小程序商店">
					            	</div>
				            	</s:iterator>
				            </s:if>		           
				        </div>
				        <!-- Add Pagination -->
				        <div class="swiper-pagination"></div>
				    </div>
				</div>
    <!-- Swiper JS -->
			</div>
			<div class="intro_container">
				<div class="information_title_strip"></div>
				<div class="information_title_name"><s:property value="#request.appDetailFrom.appName"/>简介</div>
				<div class="intro_detail">
				   <s:property value="#request.appDetailFrom.intro"/>		   
                </div>
			</div>
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
		<div class="hot_container">
			<span class="hot_title">热门排行</span>
			<div class="add_hot"></div>
	   </div>
</div>
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
		<div class="footer-wrapper">Copyright © 2016-2017 All Rights Reserved.</div>
	</div>
	

	
	<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"></script>
	<script>
	window._bd_share_config={
	"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},
	"share":{},
	"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},
	"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
</body>
</html>

