<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML>
<html>
<head>
<title>NICE小程序商店|微信小程序商店|微信小程序推广</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="小程序商店,小程序推广,微信小程序商店,微信小程序推广,nice小程序商店" />
<meta name="description" content="NICE小程序商店（nicexcx.com）拥有最新最全微信小程序应用和微信小程序资源、小程序资讯等，作为小程序推广和小程序制作，致力于为用户提供优质的微信小程序体验" />

<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />
<meta name="360-site-verification" content="61d9cd3043a2a8ff1c4ade7c4aa39bc3" />
<!--收藏用logo图标  -->
<link rel="bookmark"  type="image/x-icon"  href="${pageContext.request.contextPath }/img/headlogo.ico"/>
<!--网站显示页logo图标  -->
<link rel="shortcut icon" type='image/x-ico' href="${pageContext.request.contextPath }/img/headlogo.ico">

<link href="${pageContext.request.contextPath }/css/index.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/flexslider.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/search.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/footer.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery.flexslider.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/index/index.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath }/css/header/headtitle.css" type="text/css"></link> 
<script src="${pageContext.request.contextPath }/js/head/loginreg.js"></script>

</head>
<body>
<!--HEADER-->
<div id="header" class="clear">
  <div class="header-wrapper">
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
				   	   <a href="index.html">NICE专注微信小程序</a>
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
  </div>
</div>

<div class="out_search_container">
	<div class="search_logo_container">
		<a href="index.html"><div class="logo_container"></div></a>
		<div class="search_container">
			<input type="text" class="search_input setSearchInput" value="请输入关键字">
			<input type="button" class="search_button setSearchKey" value="搜索">
			<div class="search_or">或者</div>
			<a href="issue.html"><input type="button" class="search_button issue_button" value="免费发布小程序"></a>
		</div>
	</div>
</div>

<img class="shouji_erwei" alt="手机访问" src="${pageContext.request.contextPath }/img/shouji_url.png">
<div class="shouji_title">手机访问入口</div>

	<div class="out_container">
	
		<div id="container">
	     <div id="slider" class="flexslider">
	      <ul class="slides">
	          <li>
	          <img src="${pageContext.request.contextPath }/img/poster/1.png" class="swaller_pic" alt="小程序商店海报" title="图文小程序商店" />
	          
	        <li> 
	          <img src="${pageContext.request.contextPath }/img/poster/2.png" class="swaller_pic" alt="微信小程序" title="微信小程序" />
	        </li>
	        <li><img src="${pageContext.request.contextPath }/img/poster/3.png" class="swaller_pic" alt="微信小程序，Nice小程序商店" title="微信小程序，nice小程序商店" />
	      </ul>
	    </div>
	
		<div class="has-divider"></div>
	    <div class="fancy-text">
	          <h3>精品推荐</h3>
	          <div id="work">
	          <div class="add_good_div"></div>
			  </div>       
	      </div>
	      
	    <div class="has-divider"></div>
	    <div class="fancy-text">
	          <h3>热门推荐</h3>
			      <div id="work">
			       <div class="add_hot_div"></div>
			      </div>       
	      </div>
	      
	    <div class="has-divider"></div>
	    <div class="fancy-text">
	          <h3 class="cate_h3">影音播放</h3> 
	          <a class="look_more look_more_img" href="category_1_1.html">查看更多</a>
			      <div id="work">
			      <s:if test="#request.yinyingDetailFrom.appDetailFromList != null && #request.yinyingDetailFrom.appDetailFromList.size() > 0">
			      	<s:iterator value="#request.yinyingDetailFrom.appDetailFromList" var="yinyingDetail">
			      		<a href='appDetail_<s:property value="#yinyingDetail.ID"/>.html' title="<s:property value="#yinyingDetail.appName"/>">
						<div class='item ajaxItem'>					        	
							<img src='${pageContext.request.contextPath }/<s:property value="#yinyingDetail.appImg"/>' class='item_img' alt="<s:property value="#yinyingDetail.appName"/>发布于nice小程序商店进行小程序推广" title="<s:property value="#yinyingDetail.appName"/>">							        	
							<div class='li_detail'>  	
							    <h3 class='li_title'><s:property value="#yinyingDetail.appName"/></h3> 	
							     <div class='li_title_saosao'>扫码</div> 	
							     <div class='erwei_container'>
									 	<img src='${pageContext.request.contextPath }/<s:property value="#yinyingDetail.erweiImg"/>' class='erwei_img' alt="<s:property value="#yinyingDetail.appName"/>" title="<s:property value="#yinyingDetail.appName"/>">
									 	<div class='erwei_message'>微信扫描体验</div> 
								   </div>
								   <div class='li_intro li_time'>发布时间：<s:property value="#yinyingDetail.issueTime"/></div> 
							     <div class='li_intro'>功能：<s:property value="#yinyingDetail.intro"/></div> 
							 </div> 	
							  <div class='li_category_container'> 	
							   <div class='li_category'><s:property value="#yinyingDetail.category"/></div>				             
							    <div class='people_number'><s:property value="#yinyingDetail.peopleLookNum"/></div> 	
							    <div class='li_eye'></div> 	
							  </div> 	
							</div> 
						</a>
			      	</s:iterator>
			      </s:if>
								
			      </div>       
	      </div> 
	    <div class="has-divider"></div>
	    <div class="fancy-text">
	          <h3 class="cate_h3">金融购物</h3>
	          <a class="look_more look_more_img"  href="category_5_1.html">查看更多</a>
			      <div id="work">
					<s:if test="#request.jinrongDetailFrom.appDetailFromList != null && #request.jinrongDetailFrom.appDetailFromList.size() > 0">
			      	<s:iterator value="#request.jinrongDetailFrom.appDetailFromList" var="jinrongDetail">
			      		<a href='appDetail_<s:property value="#jinrongDetail.ID"/>.html' title="<s:property value="#jinrongDetail.appName"/>">
						<div class='item ajaxItem'>					        	
							<img src='${pageContext.request.contextPath }/<s:property value="#jinrongDetail.appImg"/>' class='item_img' alt="<s:property value="#jinrongDetail.appName"/>发布于nice小程序商店进行小程序推广" title="<s:property value="#jinrongDetail.appName"/>">							        	
							<div class='li_detail'>  	
							    <h3 class='li_title'><s:property value="#jinrongDetail.appName"/></h3> 	
							     <div class='li_title_saosao'>扫码</div> 	
							     <div class='erwei_container'>
									 	<img src='${pageContext.request.contextPath }/<s:property value="#jinrongDetail.erweiImg"/>' class='erwei_img' alt="<s:property value="#jinrongDetail.appName"/>" title="<s:property value="#jinrongDetail.appName"/>">
									 	<div class='erwei_message'>微信扫描体验</div> 
								   </div>
								   <div class='li_intro li_time'>发布时间：<s:property value="#jinrongDetail.issueTime"/></div> 
							     <div class='li_intro'>功能：<s:property value="#jinrongDetail.intro"/></div> 
							 </div> 	
							  <div class='li_category_container'> 	
							   <div class='li_category'><s:property value="#jinrongDetail.category"/></div>				             
							    <div class='people_number'><s:property value="#jinrongDetail.peopleLookNum"/></div> 	
							    <div class='li_eye'></div> 	
							  </div> 	
							</div> 
						</a>
			      	</s:iterator>
			      </s:if>			
			      </div>       
	    </div> 
	    <div class="has-divider"></div>
	    <div class="fancy-text">
	          <h3 class="cate_h3">社交通讯</h3>
	          <a class="look_more look_more_img"  href="category_12_1.html">查看更多</a>
			      <div id="work">
					<s:if test="#request.shejiaoDetailFrom.appDetailFromList != null && #request.shejiaoDetailFrom.appDetailFromList.size() > 0">
			      	<s:iterator value="#request.shejiaoDetailFrom.appDetailFromList" var="shejiaoDetail">
			      		<a href='appDetail_<s:property value="#shejiaoDetail.ID"/>.html' title="<s:property value="#shejiaoDetail.appName"/>">
						<div class='item ajaxItem'>					        	
							<img src='${pageContext.request.contextPath }/<s:property value="#shejiaoDetail.appImg"/>' class='item_img' alt="<s:property value="#shejiaoDetail.appName"/>发布于nice小程序商店进行小程序推广" title="<s:property value="#shejiaoDetail.appName"/>">							        	
							<div class='li_detail'>  	
							    <h3 class='li_title'><s:property value="#shejiaoDetail.appName"/></h3> 	
							     <div class='li_title_saosao'>扫码</div> 	
							     <div class='erwei_container'>
									 	<img src='${pageContext.request.contextPath }/<s:property value="#shejiaoDetail.erweiImg"/>' class='erwei_img' alt="<s:property value="#shejiaoDetail.appName"/>" title="<s:property value="#shejiaoDetail.appName"/>">
									 	<div class='erwei_message'>微信扫描体验</div> 
								   </div>
								   <div class='li_intro li_time'>发布时间：<s:property value="#shejiaoDetail.issueTime"/></div> 
							     <div class='li_intro'>功能：<s:property value="#shejiaoDetail.intro"/></div> 
							 </div> 	
							  <div class='li_category_container'> 	
							   <div class='li_category'><s:property value="#shejiaoDetail.category"/></div>				             
							    <div class='people_number'><s:property value="#shejiaoDetail.peopleLookNum"/></div> 	
							    <div class='li_eye'></div> 	
							  </div> 	
							</div> 
						</a>
			      	</s:iterator>
			      </s:if>			
			      </div>       
	    </div> 	 
	    <div class="has-divider"></div>
	    <div class="fancy-text">
	          <h3 class="cate_h3">实用工具</h3>
	          <a class="look_more look_more_img"  href="category_7_1.html">查看更多</a>
			      <div id="work">
					<s:if test="#request.gongjuDetailFrom.appDetailFromList != null && #request.gongjuDetailFrom.appDetailFromList.size() > 0">
			      	<s:iterator value="#request.gongjuDetailFrom.appDetailFromList" var="gongjuDetail">
			      		<a href='appDetail_<s:property value="#gongjuDetail.ID"/>.html' title="<s:property value="#gongjuDetail.appName"/>">
						<div class='item ajaxItem'>					        	
							<img src='${pageContext.request.contextPath }/<s:property value="#gongjuDetail.appImg"/>' class='item_img' alt="<s:property value="#gongjuDetail.appName"/>发布于nice小程序商店进行小程序推广" title="<s:property value="#gongjuDetail.appName"/>">							        	
							<div class='li_detail'>  	
							    <h3 class='li_title'><s:property value="#gongjuDetail.appName"/></h3> 	
							     <div class='li_title_saosao'>扫码</div> 	
							     <div class='erwei_container'>
									 	<img src='${pageContext.request.contextPath }/<s:property value="#gongjuDetail.erweiImg"/>' class='erwei_img' alt="<s:property value="#gongjuDetail.appName"/>" title="<s:property value="#gongjuDetail.appName"/>">
									 	<div class='erwei_message'>微信扫描体验</div> 
								   </div>
								   <div class='li_intro li_time'>发布时间：<s:property value="#gongjuDetail.issueTime"/></div> 
							     <div class='li_intro'>功能：<s:property value="#gongjuDetail.intro"/></div> 
							 </div> 	
							  <div class='li_category_container'> 	
							   <div class='li_category'><s:property value="#gongjuDetail.category"/></div>				             
							    <div class='people_number'><s:property value="#gongjuDetail.peopleLookNum"/></div> 	
							    <div class='li_eye'></div> 	
							  </div> 	
							</div> 
						</a>
			      	</s:iterator>
			      </s:if>			
			      </div>       
	    </div> 
	     <div class="has-divider"></div>
	    <div class="fancy-text">
	          <h3 class="cate_h3">旅游出行</h3>
	          <a class="look_more look_more_img"  href="category_3_1.html">查看更多</a>
			      <div id="work">
					<s:if test="#request.luyouDetailFrom.appDetailFromList != null && #request.luyouDetailFrom.appDetailFromList.size() > 0">
			      	<s:iterator value="#request.luyouDetailFrom.appDetailFromList" var="luyouDetail">
			      		<a href='appDetail_<s:property value="#luyouDetail.ID"/>.html' title="<s:property value="#luyouDetail.appName"/>">
						<div class='item ajaxItem'>					        	
							<img src='${pageContext.request.contextPath }/<s:property value="#luyouDetail.appImg"/>' class='item_img' alt="<s:property value="#luyouDetail.appName"/>发布于nice小程序商店进行小程序推广" title="<s:property value="#luyouDetail.appName"/>">							        	
							<div class='li_detail'>  	
							    <h3 class='li_title'><s:property value="#luyouDetail.appName"/></h3> 	
							     <div class='li_title_saosao'>扫码</div> 	
							     <div class='erwei_container'>
									 	<img src='${pageContext.request.contextPath }/<s:property value="#luyouDetail.erweiImg"/>' class='erwei_img' alt="<s:property value="#luyouDetail.appName"/>" title="<s:property value="#luyouDetail.appName"/>">
									 	<div class='erwei_message'>微信扫描体验</div> 
								   </div>
								   <div class='li_intro li_time'>发布时间：<s:property value="#luyouDetail.issueTime"/></div> 
							     <div class='li_intro'>功能：<s:property value="#luyouDetail.intro"/></div> 
							 </div> 	
							  <div class='li_category_container'> 	
							   <div class='li_category'><s:property value="#luyouDetail.category"/></div>				             
							    <div class='people_number'><s:property value="#luyouDetail.peopleLookNum"/></div> 	
							    <div class='li_eye'></div> 	
							  </div> 	
							</div> 
						</a>
			      	</s:iterator>
			      </s:if>				
			      </div>       
	    </div> 
	    <div class="look_last"><a class="look_last_a look_last_a_img" href="category_0_1.html">查看更多</a></div>
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
	    	<a href="index.html" style="color: #EDFFBE">nice小程序商店</a>&nbsp;|&nbsp;
	        <a href="friendlink.html" style="color: #EDFFBE">友情链接</a>&nbsp;|&nbsp;
	        <a href="idea.html" style="color: #EDFFBE">意见反馈</a>&nbsp;|&nbsp;
	        <a href="business.html" style="color: #EDFFBE">商务合作</a>&nbsp;|&nbsp;
	        <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" style="color: #EDFFBE">湘ICP备17002247号</a>
	    </div>
		<div class="footer-wrapper">Copyright © 2016-2017 www.nicexcx.com All Rights Reserved.  </div>		
	</div>
</body>
</html>

