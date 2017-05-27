<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML>
<html xmlns="">
<head>
<title>
	<s:if test="%{#request.pageAppDetailFrom != null}">
			<s:property value="#request.pageAppDetailFrom.cateGoryValue"/>
	</s:if>
_nice小程序商店_微信小程序推广
</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="小程序商店,小程序推广,微信小程序商店,微信小程序推广,nice小程序" />
<meta name="description" content="NICE小程序（nicexcx.com）拥有最新最全微信小程序应用和微信小程序资源、小程序资讯等，作为小程序推广和小程序制作，致力于为用户提供优质的微信小程序体验" />

<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />


<!--收藏用logo图标  -->
<link rel="bookmark"  type="image/x-icon"  href="../img/headlogo.ico"/>
<!--网站显示页logo图标  -->
<link rel="shortcut icon" type='image/x-ico' href="../img/headlogo.ico">


<script src="${pageContext.request.contextPath }/js/jquery-1.7.2.min.js"></script>
<link href="${pageContext.request.contextPath }/css/footer.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/swiper.min.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/category.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/search.css" rel="stylesheet" type="text/css" />
<script src="${pageContext.request.contextPath }/js/swiper.jquery.min.js"></script>
<script src="${pageContext.request.contextPath }/js/category/category.js"></script>
</head>
<body>

	<div id="header" class="clear">
	  <div class="header-wrapper">
	     <jsp:include page="headtitle.jsp"/>
	  </div>
	</div>
	<s:if test="%{#request.pageAppDetailFrom != null}">
	<input type="hidden" value="<s:property value="#request.pageAppDetailFrom.cateGoryKey"/>" id="CategoryKey" name="CategoryKey"> 
	<input type="hidden" value="<s:property value="#request.pageAppDetailFrom.cateGoryValue"/>" id="CategoryValue" name="CategoryValue"> 
	</s:if>
	<s:if test="%{#request.pageAppDetailFrom != null}">
	  <input type="hidden" id="currentPage" name="currentPage" value="<s:property value="#request.pageAppDetailFrom.currentPageNo"/>">
	</s:if>
	<input type="hidden" value="" id="rootPath" name="rootPath">
	<input type="hidden" value="1" id="morePage" name="morePage">
	<input type="hidden" id="totalPage" name="totalPage"> 
	<div class="category_search_container">
		<div class="search_logo_container category_logo_container">
			<a href="index.html"><div class="logo_container"></div></a>
			<div class="search_container">
				<input type="text" class="search_input setSearchInput" style="height: 45px;color: #999999" value="请输入关键字">
				<input type="button" class="search_button setSearchKey" value="搜索">
				<div class="search_or">或者</div>
				<a><input type="button" class="search_button issue_button" value="免费发布小程序"></a>
			</div>
		</div>
	</div>
	
	<div class="category_nav_container">
		<ul class="category_nav">
		<s:if test="%{#request.categoryDicList != null && #request.categoryDicList.size() > 0}">
			<s:iterator value="%{#request.categoryDicList}" var="categoryDic">
			<a href="category_<s:property value="#categoryDic.key"/>_1.html"> 
				<li class="mycategory">					
		   	   			<s:property value="#categoryDic.value"/>		   	   		
				</li>
		   </a>
			</s:iterator>		  
		</s:if>		
		</ul>
	</div>
	
	<!-- 二维码 -->
	

	
    <!-- Swiper -->
    <div class="swiper-container" >
        <div class="swiper-wrapper" >
        <!--	<div id="add_slide"></div>  -->
            <div class='swiper-slide'>  
						<div class='mycategory_container'> 
							<div class='title_container'> 
								<div class='video_container'> 
									<div class='video_name'>
									<s:if test="%{#request.pageAppDetailFrom != null}">
									<s:property value="#request.pageAppDetailFrom.cateGoryValue"/>
									</s:if>
									</div>  
								 </div>									
										<div class='category_img_li'> 
									      <div id='work'>  
									         <s:if test="%{#request.pageAppDetailFrom.appDetailFromList != null && #request.pageAppDetailFrom.appDetailFromList.size > 0}">
													<s:iterator value="%{#request.pageAppDetailFrom.appDetailFromList}" var="appDetail">
													      <a href="appDetail_<s:property value="#appDetail.ID"/>.html">
													    	 <div class='item'>					        	
																<img src='${pageContext.request.contextPath }/<s:property value="#appDetail.appImg"/>' alt="<s:property value="#appDetail.appName"/>发布于nice小程序商店进行小程序推广" title="<s:property value="#appDetail.appName"/>图标" class='item_img'>					        	
																<div class='li_detail'>	
																    <h3 class='li_title'><s:property value="#appDetail.appName"/></h3> 	
																     <div class='li_title_saosao'>扫码</div> 	
																     <div class='erwei_container'> 
																		 	<img src='${pageContext.request.contextPath }/<s:property value="#appDetail.erweiImg"/>' alt="<s:property value="#appDetail.appName"/>二维码" title="<s:property value="#appDetail.appName"/>二维码" class='erwei_img'>
																		 	<div class='erwei_message'>微信扫描体验</div> 
																	   </div>
																	   <div class='li_intro li_time'>发布时间：<s:property value="#appDetail.issueTime"/></div> 
																     <div class='li_intro'>功能：<s:property value="#appDetail.intro"/></div> 	
																  </div> 	
																  <div class='li_category_container'> 	
																    <div class='li_category'><s:property value="#appDetail.category"/></div>			 				             
																    <div class='people_number'><s:property value="#appDetail.peopleLookNum"/></div> 	
																    <div class='li_eye'></div> 	
																  </div> 	
															  </div> 
														</a>
												</s:iterator>																							
											</s:if>
											<s:else>
		
											<div class="no_result" style="display: block;">
								             	<div class="no_result_img"></div>
								             	<div class="no_result_message">小主！对不起，实在没找到！</div>
								             </div>
											</s:else>
								      </div>      
					      		   </div>
	      		   			      
							</div> 									
						</div> 
				    </div> 
				    <div id="add_slide"></div> 
				    
        </div>        
        <!-- Add Pagination -->
        
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev my_swiper-button-prev"></div>
        <div class="swiper-button-next my_swiper-button-next"></div>
    </div>
    <div class="pageNumOutContainer">
	    <div class="pageNumContainer">
			   <s:if test="%{#request.pageAppDetailFrom != null}">
			   		<s:if test="%{#request.pageAppDetailFrom.pageNumberList != null && #request.pageAppDetailFrom.pageNumberList.size() > 0}">
			   			<s:iterator value="%{#request.pageAppDetailFrom.pageNumberList}" var="pageNumber">
			   				<a href="category_<s:property value="#request.pageAppDetailFrom.cateGoryKey"/>_<s:property value="#pageNumber.number"/>.html" class="pageNumDive" name="pageNum" ><s:property value="#pageNumber.value"/></a>
			   			</s:iterator>
			   		</s:if>
			   </s:if>																			  									    
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
		<div class="footer-wrapper">Copyright © 2016-2017 All Rights Reserved. </div>
	</div>
</body>
</html>
