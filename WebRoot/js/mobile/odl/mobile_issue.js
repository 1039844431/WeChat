 $(function (){
 category();
 addPictrue();
 submit();
 initalIssue();
 });
 
 function submit(){
	 $(".submit").click(function (){
//		 if($(".app_img").val() == ""){
//			 alert("为空！");
//		 }else{
//			 alert($(".app_img").val());
//		 }
	 	     var reg1 = /<[^>]+>/g;
	 	     var appName = $("#appName").val();
	 	     var intro = $("#intro").val();
	 	     var tag = $("#tag").val();
		     var isLoginFlag = false;
			 if($("#appName").val() == ""){
				 $(".message_app_name").css("display","block");
			 }
			 if($("#category").val() == ""){
				 $(".message_category").css("display","block");
			 }
			 if($("#intro").val() == ""){
				 $(".message_detail_textarea").css("display","block");
			 }
			 if($("#appName").val() == "" || $("#category").val() == "" ||$("#intro").val() == ""){
				 alert("亲，还有内容没有添加哦！");
				 return;
			 }
			 if($(".app_img").val() == ""){
				 alert("亲，小程序图标还没添加哦！");
				 return;
			 }else{
				 $("#appImg").val(1);
			 }
			 if($(".erwei_img").val() == ""){
				 $("#erweiImg").val(0);
			 }else{
				 $("#erweiImg").val(1);
			 }
			 if($(document).find(".app_detail_img").length < 4){
				 alert("亲，小程序截图要三张以上哦！");
				 return;
			 }else{
				 $("#introImg").val(1);
			 }
			 if(reg1.test(appName)){
					alert("小程序名不能包含<>等标签字符");
					return;
				}
			if(reg1.test(intro)){
				alert("小程序介绍不能包含<>等标签字符");
				return;
			}
			if(reg1.test(tag)){
				alert("小程序标签不能包含<>等标签字符");
				return;
			}
			if(appName.length >= 30){
				alert("小程序名称不能大于30个字符");
				return;
			}
			if(tag.length >= 50){
				alert("小程序标签不能大于50个字符");
				return;
			}
			if(tag.length >= 500){
				alert("小程序介绍不能大于500个字符");
				return;
			}
			var isExitApp = false;
		 	 $.ajax({
					url:"system/IssueAppAction_isExitAppName.do",
					type:"post",
					data:{appName:appName},
					dataType:"json",
					async:false,
					success:function(data){
						if(data.state == 0){
							isExitApp = true;
							alert(data.message);
						}						
					}				
				});	
				if(isExitApp){
				return;
				}
			 $.ajax({
					url:"system/UserInfoAction_isLogin.do",
					type:"post",
					data:{},
					dataType:"json",
					async:false,
					success:function(data){
						if(data.state == 0){
							alert(data.message);
						}else{
							isLoginFlag = true;
						}
						
					}
				});
			 if(isLoginFlag){
				 document.Form1.action = "mobileIssueApp.html";
				 document.Form1.submit();
			 }
		   
		
	 });
 }
 
 function initalIssue(){	
	 $(".app_name").blur(function (){		
		 if($(".app_name").val() == ""){
			 $(".message_app_name").css("display","block");
			 return;
		 }
		 
		 	var appName = $(".app_name").val();
		 	 $.ajax({
					url:"system/IssueAppAction_isExitAppName.do",
					type:"post",
					data:{appName:appName},
					dataType:"json",
					success:function(data){
						if(data.state == 0){
							$(".message_app_name").text("");
							$(".message_app_name").text(data.message);
							$(".message_app_name").css("display","block");
						}						
					},
					error:function(){
						alert("服务器正在维修哦！稍等！");
					}
				});	
			 $(".message_app_name").css("display","none");
		 
	 });
	
	
	  $.ajax({
					url:"system/UserInfoAction_isLogin.do",
					type:"post",
					data:{},
					dataType:"json",
					async:false,
					success:function(data){
						if(data.state == 0){
							alert(data.message);
						}else{
							isLoginFlag = true;
						}
						
					},
					error:function(){
						alert("服务器正在维修哦！稍等！");
					}
				});	
 }
 function category(){
 	$(".category").focus(function (){
 		$(".category_container").css("display","block");
 		$(".category").removeClass("categoryarrowdown");
 		$(".category").addClass("categoryarrowtop");
 	});
 	$(".close_img").click(function (){
 		$(".category_container").css("display","none");
 		$(".category").addClass("categoryarrowdown");
 		$(".category").removeClass("categoryarrowtop");
 		if($(".category").val() == ""){
 			$(".message_category").css("display","block");
 		}else{
 			$(".message_category").css("display","none");
 		}
 	});
 	$(".category_name").click(function (){
 		
 		$(".category").val($(this).text());
 		$("#category").val($(this).next().val());
 		$(".category").addClass("categoryarrowdown");
 		$(".category").removeClass("categoryarrowtop");
 		$(".message_category").css("display","none");
 		if(!$(".step_sort_title").hasClass("step_title_action")){
 			$(".step_sort_title").addClass("step_title_action");
	 		$(".step_line2").removeClass("step_line_not_action");
	 		$(".step_line2").addClass("step_line_action");
	 		$(".step_circle2").removeClass("step_circle_not_action");
 	    	$(".step_circle2").addClass("step_circle_action");
 		} 		
 		$(".category_container").css("display","none");
 	});
 	
 
 }
 
 function addPictrue(){
 	
 	//鼠标经过暗色图片  开始
 	$(".title_img").mouseover(function (){
 		var picture_butten =  $(this).prev();
	 	if(picture_butten.hasClass("picture_butten_no_action")){
	 		picture_butten.removeClass("picture_butten_no_action");
	 		picture_butten.addClass("picture_butten_action");
	 	}
 	});
 	$(".title_img").mouseout(function (){
 		var picture_butten =  $(this).prev();
	 	if(picture_butten.hasClass("picture_butten_action")){
	 		picture_butten.removeClass("picture_butten_action");
	 		picture_butten.addClass("picture_butten_no_action");
	 	}
 	});
 	//鼠标经过暗色图片  结束----------
 	
 	//小程序图标 开始-----------------
 	$(".app_close").click(function (){
 		$(".app_img_preview").attr("src", "");
 		$(".app_img").val("");
 		$(".app_img_div").css("display","none");
 		
 	});
 	
	$(".app_img").change(function(){		
	var objUrl = getObjectURL(this.files[0]) ;
	console.log("objUrl = "+objUrl);
	
	if (objUrl) {
		$(".app_img_div").css("display","block");
		$(".app_img_preview").attr("src", objUrl);
		
	}
	});
	//小程序图标 开始-----------------
	
	
 	//二维图片添加 开始-----------------
	//关闭预览图片=====================
 	$(".erwei_pic_close").click(function (){
 		$(".erwei_img_preview").attr("src", "");
 		$(".erwei_img").val("");
 		$(".erwei_img_div").css("display","none");
 		
 	});
 	//添加图片================
	$(".erwei_img").change(function(){		
	var objUrl = getObjectURL(this.files[0]) ;
	console.log("objUrl = "+objUrl);
	if (objUrl) {
		$(".erwei_img_div").css("display","block");
		$(".erwei_img_preview").attr("src", objUrl);
		
	}
	});
	//二维图标 结束-----------------
	
	//小程序截图添加 开始-----------------
	//关闭预览图片=====================
 	$(document).on("click",".app_detail_close",function (){
 		
 		var appDetailContainer = $(this).parent().parent();
// 		alert(appDetailContainer);
 		appDetailContainer.remove();

 	});
 	//添加图片================
 	
 	var addHtml = " <div class=\"app_detail_container\"> " +
					 "  <div class=\"app_detail_img_div app_detail_div\" > " +
					 " 	     <div class=\"pic_close app_detail_close\" >  "  +
					 " 	     </div> " + 
					 " 	  	 <img src=\"\"  class=\"app_detail_preview app_detail_preview\">  " +
					 "   </div>		   	 " +
					 "   <div class=\"picture_butten picture_butten_no_action\" style=\"margin-left: 0px;\"></div>	 " +		
					 "   <input type=\"file\" name=\"image\" id=\"image\" class=\"title_img app_detail_img\" multiple=\"multiple\"> " +
			      " </div> ";
			 
	$(document).on("change",".app_detail_img",function(){
	
	if($(document).find(".app_detail_img").length == 10){
	alert("亲！最多添加9张哦！");
	return;
	}
	
	if(!$(".step_pic_title").hasClass("step_title_action")){
	 		$(".step_sort_title").addClass("step_title_action");
	 		$(".step_line3").removeClass("step_line_not_action");
	 		$(".step_line3").addClass("step_line_action");
	 		$(".step_circle3").removeClass("step_circle_not_action");
 	    	$(".step_circle3").addClass("step_circle_action");
 	}
		
	var appImgInput = $(this);
	
	var appImgButton = $(this).prev();
	
	var appDetailContainer = $(this).prev().prev();
	
	var appDetailPreview = appDetailContainer.children("img");
	
	var objUrl = getObjectURL(this.files[0]);
	console.log("objUrl = "+objUrl);
	appImgInput.parent().parent().append(addHtml);
	if (objUrl) {
		appImgInput.css("display","none");
	    appImgButton.css("display","none");
		appDetailContainer.css("display","block");
		appDetailPreview.attr("src", objUrl);
		
	}
	});
	//小程序截图添加  结束-----------------
	
	//建立一個可存取到該file的url
	function getObjectURL(file) {
		var url = null ; 
		if (window.createObjectURL!=undefined) { // basic
			url = window.createObjectURL(file) ;
		} else if (window.URL!=undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(file) ;
		} else if (window.webkitURL!=undefined) { // webkit or chrome
			url = window.webkitURL.createObjectURL(file) ;
		}
		return url ;
	} 
 }