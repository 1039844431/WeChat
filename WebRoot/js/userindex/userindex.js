$(function (){
	isLoginSuce();
});

function isLoginSuce(){
	$(".header_logo").click(function (){
		window.location.href = "index.html";
	});
	var isLogin = $("#isLogin").val();
	
	if(isLogin != null && isLogin != ""){
		
		initPersonal();
		initIssue();
		initCollect();
		erweiImg();
		deleteIssueCollect();
		clickUserIndexNav();
		clickAppDetail();
		goIssuePage();
		logOut();
	}else{
		alert("亲，你还没有登录哦！");
	}
}
//项目根路径
var parentPath = window.document.location.href;
var rootPath = parentPath.substring(0,parentPath.indexOf("WeChat")) + "WeChat/";
//我的收藏页面
var issue_div = "<div class='item_personal'> " +
			    "  <div class='issue_detail'>		" +			        	
				"	<img src='"+ rootPath+ "APPIMGPATH' class='item_img'>		" +			        	
				"	<div class='li_detail'>  " +
				"	    <h3 class='li_title'>APPNAME</h3> " +
				"	     <div class='li_title_saosao'>扫码</div> 	" +
				"	     <div class='erwei_container'> " +
				"			 	<img src='"+ rootPath+ "APPERWEIIMG' class='erwei_img'>" +
				"			 	<div class='erwei_message'>微信扫描体验</div> " +
				"		  </div> " +
				"		 <div class='li_intro li_time'>发布时间：APPEISSUETIME</div> " +
				"	     <div class='li_intro'>功能：APPINRO</div> 	" +
				"	  </div> " +
				"	  <div class='li_category_container'> 	" +
				"	    <div class='li_category'>APPCATEGORY</div>			 " +				             
				"	    <div class='people_number'>APPLOOKNUM</div> 	" +
				"	    <div class='li_eye'></div> 	" +
				"	  </div> " +
				"	  </div>" +
				"	  <div class='detail_operate'>" +
				"	  	<div class='operate operate_state'>STATE</div>" +
				"	  	<div class='operate operate_delete'>删除</div>" +
				"	  </div>	" +
			    " </div> "  +
				" <input type='hidden' value='APPDETAILID'>"; 
//添加我的发布的分页数字
var issue_num_div = '<div class="size_number morePagenoact issue_number" name="issue_number">setnumber</div>';
var issue_num_dotdiv = '<div class="size_number morePagenoact issue_dot" name="issue_dot">...</div><div class="size_number morePagenoact issue_number" name="issue_number">setnumber</div>';
var issue_num_actdiv = '<div class="size_number morePagenoact size_number_act issue_number" name="issue_number">setnumber</div>';

//添加我的收藏的分页数字
var collect_num_div = '<div class="size_number morePagenoact collect_number" name="collect_number">setnumber</div>';
var collect_num_dotdiv = '<div class="size_number morePagenoact collect_dot" name="collect_dot">...</div><div class="size_number morePagenoact collect_number" name="collect_number">setnumber</div>';
var collect_num_actdiv = '<div class="size_number morePagenoact size_number_act collect_number" name="collect_number">setnumber</div>';
function goIssuePage(){
	$(".user_issue_buttom").click(function (){
		window.location.href = "issue.html";
	});

}
function clickAppDetail(){
	$(document).on("click",".issue_detail",function (){
		window.location.href = "appDetail_" + $(this).parent().next().val() + ".html";
		
	});
}
function initIssue(){
	$(".user_nav_li").removeClass("user_nav_li_action");
	$(".my_issue").addClass("user_nav_li_action");
	$(".user_collect_container").css("display","none");
	$(".user_issue_container").css("display","block");
	$.ajax({
		url:"system/AppDetailAction_findAppDetailByUserId.do",
		type:"post",
		dataType:"json",
		data:{pageNO:1},
		async:false,
		success:function(data){
			if(data.totalResult == 0){
				$(".issue_noresult").css("display","block");
			}else{			
				$(".issue_noresult").css("display","none");
				 $(".issue_number_container").css("display","block");
                var addNumDiv = "";
                $("#issue_totalPage").val(data.totalPage);
                for(var i = 1 ; i <= data.totalPage ; i ++){
                	if(i == 1){
                		addNumDiv = addNumDiv + issue_num_actdiv.replace("setnumber", i);
                	}else if(i%16 == 0){
                		addNumDiv = addNumDiv + issue_num_dotdiv.replace("setnumber", i);
                	}else{
                		addNumDiv = addNumDiv + issue_num_div.replace("setnumber", i);
                	}
                	
				}
                $(".add_issue_number").after(addNumDiv);
				$(data.appDetailFromList).each(function (i,category){
					var issue_div_state = issue_div.replace("APPIMGPATH", category.appImg)
	                  .replace("APPNAME", category.appName)
	                  .replace("APPERWEIIMG", category.erweiImg)
	                  .replace("APPINRO", category.intro)
	                  .replace("APPCATEGORY", category.category)
	                  .replace("APPLOOKNUM", category.peopleLookNum)
	                  .replace("APPEISSUETIME", category.issueTime)
	                  .replace("APPDETAILID", category.ID);
					if(category.isIssue == "0"){
						$(".addMyIssue").after(
						issue_div_state.replace("STATE", "审核中")
						);
					}else{
						$(".addMyIssue").after(
								issue_div_state.replace("STATE", "审核通过")
						);
					}
					
				});
			}
		
		},
		error:function (){}
	});
	
	openIssueMorePage("issue_number","issue_dot","issue_morPage","issue_totalPage");
	
	$(document).on("click",".issue_number",function(){
		 $(".issue_number").removeClass("size_number_act");
		 $(this).addClass("size_number_act");
		 personalIssue($(this).text());
	 });
}

function initCollect(){
	
	$.ajax({
		url:"system/CollectAction_findCategoryAppDetail.do",
		type:"post",
		dataType:"json",
		data:{pageNO:1},
		async:false,
		success:function(data){
			if(data.totalResult == 0){	
				$(".no_collect").css("display","block");
			}else{
				
				$(".no_collect").css("display","none");
				$(".collect_number_container").css("display","block");
				   var addNumDiv = "";
	                $("#collect_totalPage").val(data.totalPage);
	                for(var i = 1 ; i <= data.totalPage ; i ++){
	                	if(i == 1){
	                		addNumDiv = addNumDiv + collect_num_actdiv.replace("setnumber", i);
	                	}else if(i%16 == 0){
	                		addNumDiv = addNumDiv + collect_num_dotdiv.replace("setnumber", i);
	                	}else{
	                		addNumDiv = addNumDiv + collect_num_div.replace("setnumber", i);
	                	}
					}
	                $(".add_collect_number").after(addNumDiv);
				$(data.appDetailFromList).each(function (i,category){
					var collect_div = issue_div.replace("APPIMGPATH", category.appImg)
	                  .replace("APPNAME", category.appName)
	                  .replace("APPERWEIIMG", category.erweiImg)
	                  .replace("APPINRO", category.intro)
	                  .replace("APPCATEGORY", category.category)
	                  .replace("APPLOOKNUM", category.peopleLookNum)
	                  .replace("APPEISSUETIME", category.issueTime)
	                  .replace("APPDETAILID", category.ID);
					if(category.isDelete == "1"){
						collect_div = collect_div.replace("STATE", "收藏于：" + category.collectTime);
					}else{
						collect_div = collect_div.replace("STATE", "已下架");
					}
						$(".addMyCollect").after(collect_div);						
				});
			}
		
		},
		error:function (){}
	});
	
	openIssueMorePage("collect_number","collect_dot","collect_morPage","collect_totalPage");
	
	$(document).on("click",".collect_number",function(){
		 $(".collect_number").removeClass("size_number_act");
		 $(this).addClass("size_number_act");
		 personalCollect($(this).text());
	 });
}
function openIssueMorePage(numberClassName,dotClassName,more_pagename,totalPageName){
	
	 $.each($("div[name='"+numberClassName+"']"),function(i){				 
     	if(i < 15){
   		 	$(this).removeClass("morePagenoact");
    	} 
	 });
	 $.each($("div[name='"+dotClassName+"']"),function(i){				 
	     	if(i == 0){
	   		 	$(this).removeClass("morePagenoact");
	    	} 
		 });
 
	$(document).on("click","."+dotClassName+"",function(){		
		var page = $("#"+more_pagename+"").val();
		 page = parseInt(page);
		 if(!$(this).hasClass("later")){
			 forForword(page,numberClassName,dotClassName,more_pagename,totalPageName);		 
		 }else{
			 forLater(page,numberClassName,dotClassName,totalPageName,more_pagename);
		 }
	});
}

//点击...向前
function forForword(page,numberClassName,dotClassName,more_pagename,totalPageName){	
	if(page == 1){	
		forLater(page,numberClassName,dotClassName,totalPageName,more_pagename);
	}else if(page == 2){
		$.each($("div[name='"+dotClassName+"']"),function(i){
		    if($(this).hasClass("later")){
					 $(this).removeClass("later");
			 }
			if(i == 0){
				if($(this).hasClass("morePagenoact")){
					 $(this).removeClass("morePagenoact");
			      }
			}else{
				if(!$(this).hasClass("morePagenoact")){
					 $(this).addClass("morePagenoact");
			      }
			 }
		 });
		 $.each($("div[name='"+numberClassName+"']"),function(i){			 
			 if(-1 < i && i < 15){				 
				 if($(this).hasClass("morePagenoact")){
					 $(this).removeClass("morePagenoact");
				 }
			 }else{
				 if(!$(this).hasClass("morePagenoact")){
					 $(this).addClass("morePagenoact");
				 }
			 }		 
		 });	
		 $("#"+more_pagename+"").val(page - 1);
	}else{
		$.each($("div[name='"+dotClassName+"']"),function(i){
		    if(i == page - 2){
		    	if(!$(this).hasClass("later")){
					 $(this).addClass("later");
		    		}
		    }else{
		    	if($(this).hasClass("later")){
					 $(this).removeClass("later");
			    }
		    }			
			if(i == (page - 2) || i == (page - 3)){
				if($(this).hasClass("morePagenoact")){
					 $(this).removeClass("morePagenoact");
			      }
			}else{
				if(!$(this).hasClass("morePagenoact")){
					 $(this).addClass("morePagenoact");
			      }
			 }
		 });
		 $.each($("div[name='"+numberClassName+"']"),function(i){			 
			 if((page-2)*15 -1 < i && i < (page-1)*15-1){				 
				 if($(this).hasClass("morePagenoact")){
					 $(this).removeClass("morePagenoact");
				 }
			 }else{
				 if(!$(this).hasClass("morePagenoact")){
					 $(this).addClass("morePagenoact");
				 }
			 }		 
		 });	
		 $("#"+more_pagename+"").val(page - 1);
	}
}
//点击...向后
function forLater(page,numberClassName,dotClassName,totalPageName,more_pagename){
	
	   var totalPage =   $("#"+totalPageName+"").val();
		totalPage = parseInt(totalPage);
		var dotSize = parseInt(totalPage/15);
		if(page == (dotSize + 1)){
			forForword(page,numberClassName,dotClassName,more_pagename);			
		}else if(page == dotSize){
			 $.each($("div[name='"+dotClassName+"']"),function(i){
				 if(i == (page - 1)){
					 $(this).addClass("later");
				 }else{
					 if(!$(this).hasClass("later")){
						 $(this).removeClass("later");
					 }
				 }				 
				 if(i == (page - 1)){
					 if($(this).hasClass("morePagenoact")){
						 $(this).removeClass("morePagenoact");
					 }
				 }else{
					 if(!$(this).hasClass("morePagenoact")){
						 $(this).addClass("morePagenoact");
					 }
				 }
			 });			
			 $.each($("div[name='"+numberClassName+"']"),function(i){				 
				 if(page*15 < i && i < (page+1)*15){					 
					 if($(this).hasClass("morePagenoact")){
						 $(this).removeClass("morePagenoact");
					 }
				 }else{
					 if(!$(this).hasClass("morePagenoact")){
						 $(this).addClass("morePagenoact");
					 }
				 }		 
			 });
			 $("#"+more_pagename+"").val(page + 1);
		}else{
			$.each($("div[name='"+dotClassName+"']"),function(i){
				 if(i == page){
					 $(this).addClass("later");
				 }else{
					 if(!$(this).hasClass("later")){
						 $(this).removeClass("later");
					 }
				 }				 
				 if(i == (page - 1) || i == page){
					 if($(this).hasClass("morePagenoact")){
						 $(this).removeClass("morePagenoact");
					 }
				 }else{
					 if(!$(this).hasClass("morePagenoact")){
						 $(this).addClass("morePagenoact");
					 }
				 }
			 });			
			 $.each($("div[name='"+numberClassName+"']"),function(i){				 
				 if(page*15 < i && i < (page+1)*15){					 
					 if($(this).hasClass("morePagenoact")){
						 $(this).removeClass("morePagenoact");
					 }
				 }else{
					 if(!$(this).hasClass("morePagenoact")){
						 $(this).addClass("morePagenoact");
					 }
				 }		 
			 });
			 $("#"+more_pagename+"").val(page + 1);
		}	
}



function personalIssue(clickPage){
		$(".user_issue_container > .item_personal").remove();
		$.ajax({
			url:"system/AppDetailAction_findAppDetailByUserId.do",
			type:"post",
			dataType:"json",
			data:{pageNO:clickPage},
			success:function(data){
				if(data.totalResult == 0){
					$(".issue_noresult").css("display","block");
				}else{
					$(".issue_noresult").css("display","none");
					$(data.appDetailFromList).each(function (i,category){
						var issue_div_state = issue_div.replace("APPIMGPATH", category.appImg)
		                  .replace("APPNAME", category.appName)
		                  .replace("APPERWEIIMG", category.erweiImg)
		                  .replace("APPINRO", category.intro)
		                  .replace("APPCATEGORY", category.category)
		                  .replace("APPLOOKNUM", category.peopleLookNum)
		                  .replace("APPEISSUETIME", category.issueTime)
		                  .replace("APPDETAILID", category.ID);
						if(category.isIssue == "0"){
							$(".addMyIssue").after(
							issue_div_state.replace("STATE", "审核中")
							);
						}else{
							$(".addMyIssue").after(
									issue_div_state.replace("STATE", "审核通过")
							);
						}
						
					});
				}
			
			},
			error:function (){}
		});

}
function personalCollect(clickPage){
	$(".user_collect_container > .item_personal").remove();
	$.ajax({
		url:"system/CollectAction_findCategoryAppDetail.do",
		type:"post",
		dataType:"json",
		data:{pageNO:clickPage},
		success:function(data){
			if(data.totalResult == 0){	
				$(".no_collect").css("display","block");
			}else{
				
				$(".no_collect").css("display","none");
				$(data.appDetailFromList).each(function (i,category){
					var collect_div = issue_div.replace("APPIMGPATH", category.appImg)
	                  .replace("APPNAME", category.appName)
	                  .replace("APPERWEIIMG", category.erweiImg)
	                  .replace("APPINRO", category.intro)
	                  .replace("APPCATEGORY", category.category)
	                  .replace("APPLOOKNUM", category.peopleLookNum)
	                  .replace("APPEISSUETIME", category.issueTime)
	                  .replace("APPDETAILID", category.ID);
					if(category.isDelete == "1"){
						collect_div = collect_div.replace("STATE", "收藏于：" + category.collectTime);
					}else{
						collect_div = collect_div.replace("STATE", "已下架");
					}
						$(".addMyCollect").after(collect_div);						
				});
			}
		
		},
		error:function (){}
	});

}
function deleteIssueCollect(){
	$(document).on("click",".operate_delete",function (){
		 if(!window.confirm('你确定删除吗？')){
             return;
         }
		 var deleteID = $(this).parent().parent().next().val();
		 var issueCollectDiv = $(this).parent().parent();
		 var issueCollect = $("#issue_collect_detele").val();
		 var deleteSql = "";
		 
		 if(issueCollect == 1){
			 deleteSql = "system/AppDetailAction_deleteAppdetail.do";
		 }
		if(issueCollect == 2){
			 deleteSql = "system/CollectAction_deleteCollect.do";
		}
		$.ajax({
			url:deleteSql,
			type:"post",
			dataType:"json",
			data:{deleteID:deleteID},
			success:function(data){
				
			if(data.state == "1"){
				
				issueCollectDiv.css("display","none");
			}
			
			},
			error:function (){}
		});
	});
}


function clickUserIndexNav(){
	
	$(".my_issue").click(function(){
		$(".user_nav_li").removeClass("user_nav_li_action");
		$(".my_issue").addClass("user_nav_li_action");
		$(".user_collect_container").css("display","none");
		$(".user_issue_container").css("display","block");
		
		//删除发布
		$("#issue_collect_detele").val(1);
	});
	$(".my_collect").click(function(){
		$(".user_nav_li").removeClass("user_nav_li_action");
		$(".my_collect").addClass("user_nav_li_action");
		$(".user_collect_container").css("display","block");
		$(".user_issue_container").css("display","none");
		//删除收藏
		$("#issue_collect_detele").val(2);
	});
}
function erweiImg(){
	$(document).on("mouseover",".li_title_saosao",function(){
		$(this).css("color","#FF9900");
		$(this).next().css("display","block");
	});
	$(document).on("mouseout",".li_title_saosao",function(){
		$(this).next().css("display","none");
		$(this).css("color","#828282");
	});	
}

function initPersonal(){
	$(document).on("mouseover",".item_personal",function (){
		$(this).addClass("item_hover");
		$(this).find("h3").css("color","#FF9900");
		$(this).find("img").css("opacity",1);
	});
	$(document).on("mouseout",".item_personal",function (){
		$(this).removeClass("item_hover");
		$(this).find("h3").css("color","#000");
		$(this).find("img").css("opacity",0.8);
	});
	$(document).on("mouseover",".operate_delete",function (){
		$(this).addClass("operate_delete_action");
		
	});
	$(document).on("mouseout",".operate_delete",function (){
		$(this).removeClass("operate_delete_action");
	});
	$(".setUser").click(function (){
		window.location.href = "myinfo.html";
	});
}

function logOut(){
	$(".logout").click(function (){
		$.ajax({
			url:"system/UserInfoAction_logOut.do",
			type:"post",
			dataType:"json",
			async:false
		});
		window.location.href = "index.html";
	});
}