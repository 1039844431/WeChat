<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE HTML>
<html xmlns="">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="小程序商店,小程序推广,微信小程序商店,微信小程序推广,nice小程序" />
<meta name="description" content="NICE小程序（nicexcx.com）拥有最新最全微信小程序应用和微信小程序资源、小程序资讯等，作为小程序推广和小程序制作，致力于为用户提供优质的微信小程序体验" />
<title>NICE小程序-微信小程序官方推广|微信小程序官方市场</title>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />


<!--收藏用logo图标  -->
<link rel="bookmark"  type="image/x-icon"  href="${pageContext.request.contextPath }/img/headlogo.ico"/>
<!--网站显示页logo图标  -->
<link rel="shortcut icon" type='image/x-ico' href="${pageContext.request.contextPath }/img/headlogo.ico">

<link href="${pageContext.request.contextPath }/css/issue.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath }/css/footer.css" rel="stylesheet" type="text/css" />


<script src="${pageContext.request.contextPath }/js/jquery-1.7.2.min.js"></script>

<script src="${pageContext.request.contextPath }/js/issue/issue.js"></script>

</head>
<body>
<!--HEADER-->

                 
				

<div class="out_header_container">
	<div class="header_container">
		<div class="header_logo"></div>
		<div class="adver">
		     <span class="adver_main_title">全国最大的微信小程序推广平台</span>            
			 <div class="adver_little_title" style="margin-left: 0px;">
				 <div class="adver_img adver_img_one"></div> 
				 <div class="adver_little_name">最专业</div>
			 </div>
			 <div class="adver_little_title">
				 <div class="adver_img adver_img_two"></div> 
				 <div class="adver_img adver_little_name">最专一</div>
			 </div>
			 <div class="adver_little_title">
				  <div class="adver_img adver_img_three"></div> 
				 <div class="adver_img adver_little_name">最专心</div>
			 </div>
		</div>
		
	</div>
</div>
<div class="body_container">
	<div class="step_container">
		<div class="step_title_container">
			<div class="step_title step_title_action" style="margin-left: 0">
				填写名称
			</div>
			<div class="step_title step_sort_title">
				填写类别
			</div>
			<div class="step_title step_pic_title">
				上传图片
			</div>
			<div class="step_title">
				等待审核
			</div>
		</div>
		<div class="step_number_container">
			<div class="step_line step_line_action"></div>
			<div class="step_circle step_circle_action">1</div>
			<div class="step_line step_line_action"></div>
			<div class="step_line step_line2 step_line_not_action"></div>
			<div class="step_circle step_circle2 step_circle_not_action">2</div>
			<div class="step_line step_line2 step_line_not_action"></div>
			<div class="step_line step_line3 step_line_not_action"></div>
			<div class="step_circle step_circle3 step_circle_not_action">3</div>
			<div class="step_line step_line3 step_line_not_action"></div>
			<div class="step_line step_line4 step_line_not_action"></div>
			<div class="step_circle step_circle_not_action">4</div>
			<div class="step_line step_line4 step_line_not_action" style="width:100px;"></div>
		</div>		
	</div>
	<s:form name="Form1" method="post" enctype="multipart/form-data">
	<input type="hidden" id="appImg" name="appImg" value="0">
	<input type="hidden" id="erweiImg" name="erweiImg" value="0">
	<input type="hidden" id="introImg" name="introImg" value="0">
	<div class="input_out_container">
		<div class="input_title_container">
			<div class="input_title">发布小程序,有味道的推广！</div> 
		</div>
		<div class="input_container">
			
			<div class="input_title_name">小程序名称<font color="red">&nbsp;*</font> </div>
			<input class="input_detail app_name" type="text" id="appName" name="appName">
			<div class="message message_app_name">* 小程序名称不能为空哦！</div>
			<div class="input_title_name">类别 <font color="red">&nbsp;*</font></div>
			<input class="input_detail categoryarrowdown category " type="text" readonly="readonly">
			<input type="hidden"  id="category" name="category">
			<div class="message message_category">* 小程序类别不能为空哦！</div>
			<div class="category_container">
				<div class="category_close">
				    <div class="close_img"></div>
				</div>
				<div class="category_name_container">	
					<s:if test="#request.categoryDicList != null && #request.categoryDicList.size() > 0">
						<s:iterator value="#request.categoryDicList" var="categoryDic">
						<s:if test="#categoryDic.key != 0">
						   <div class="category_name"><s:property value="#categoryDic.value"/></div>
							<input type="hidden" value="<s:property value="#categoryDic.key"/>">
						</s:if>

							
						</s:iterator>
					</s:if>				
					
				</div>
			</div>
			<div class="input_title_name">标签(多个以,分隔)</div>
			<input class="input_detail" type="text" id="tag" name="tag">
			<div class="input_title_name">小程序介绍（介绍越详细，越有利于用户关注）<font color="red">&nbsp;*</font></div>
			<textarea  class="detail_textarea" id="intro" name="intro"></textarea>
			<div class="message message_detail_textarea">* 小程序介绍不能为空哦！</div>
			<div class="input_title_name">小程序图标(大小不能超过1M，建议正方形图片) <font color="red">&nbsp;*</font></div>		
			   <div id="" class="title_img_div app_img_div">
			     <div id="" class="pic_close app_close">
			     </div>
			  	 <img src="" id="" class="title_img_preview app_img_preview">
			   </div>	
			   <div class="picture_butten picture_butten_no_action"></div>			
			   <input type="file" name="image" id="image" class="title_img app_img" multiple="multiple">
			   
			<div class="input_title_name">二维码图片(大小不能超过1M，建议正方形图片) </div>	
			   <div class="title_img_div erwei_img_div" id="">
			     <div class="pic_close erwei_pic_close" id="">
			     </div>
			  	 <img src="" id="" class="title_img_preview erwei_img_preview">
			   </div>
			   <div class="picture_butten picture_butten_no_action"></div>			
			   <input type="file" name="image" id="image" class="title_img erwei_img" multiple="multiple">
			   
		   <div class="input_title_name" id="app_detail_addpic">小程序截图 (总大小不能超过1M,建议至少上传三张,最多9张)<font color="red">&nbsp;*</font></div>
		   
		   
		   <div class="app_detail_container root">
			   <div class="app_detail_img_div app_detail_div">
				     <div class="pic_close app_detail_close">
				     </div>
				  	 <img src="" id="" class="app_detail_preview app_detail_preview">
			   </div>		   	
			   <div class="picture_butten picture_butten_no_action" style="margin-left: 10px;"></div>			
			   <input type="file" name="image" id="image" class="title_img app_detail_img" multiple="multiple">
		   </div> 
		   </div>	
		   <div class="submit_container"><input class="submit" type="button" value="提交审核"></div>	   
		</div>
	</s:form>
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
	    	<a href="index.html" style="color: #EDFFBE">NICE小程序</a>&nbsp;|
	        <a href="friendlink.html" style="color: #EDFFBE">友情链接</a>&nbsp;|&nbsp;
	        <a href="idea.html" style="color: #EDFFBE">意见反馈</a>&nbsp;|&nbsp;
	        <a href="business.html" style="color: #EDFFBE">商务合作</a>&nbsp;|&nbsp;
	        <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" style="color: #EDFFBE">湘ICP备17002247号</a>
	    </div>
		<div class="footer-wrapper">Copyright © 2016-2017 All Rights Reserved. </div>
	</div>
</body>
</html>
