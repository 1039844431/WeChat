$(function (){
initalTopicDiv();
loadHotAppDetail();
putAppDetailByID();
addCollect();
addPeople();
mouse();
submitComment();
});
function getComment(pageNumber){
	var comment_div = '<div class="new_comment_li">'+
					 		'<div class="comment_user_img_container">'+
					 				'<div class="comment_user_img"></div>'+
							 '</div>'+
							'<div class="comment_user_name">RetrunUserName</div>'+
							'<div class="comment_time">RetrunCommentTime</div>'+
							'<div class="comment_detail">RetrunCommentDetail</div>'+
							'<div class="comment_zan">'+
							'    <div class="zan">RetrunCommentZanTop</div>'+
							'    <div class="zan_img zan_top_mouse zan_top_click zan_top"></div>			'+	 			
							'	 <div class="zan">RetrunCommentZanDown</div>'+
							'	 <div class="zan_img zan_down_mouse zan_down_click zan_down"></div>		'+
							'</div>'+
							'<input type="hidden" value="CommnetID">' +
					  '</div>';
	var appAetailID = $("#appAetailID").val();
	var pageNuberInt = parseInt(pageNumber);
	var totalInt = parseInt($("#commentTotalPage").val());
	if(pageNuberInt <= totalInt){
		$.ajax({
			url:"system/CommentAction_getCommentListByAppDetaiId.do",
			type:"post",
			dataType:"json",
			data:{
				appDetailID:appAetailID,
				pageNO:pageNumber
			},
			success:function(data){
				$("#commentCurrentPage").val(data.currentPageNo);
				$("#commentTotalPage").val(data.totalPage);
				$(".comment_number").text("");
				$(".comment_number").text(data.totalResult);
				$(data.commentList).each(function (i,comment){
					$(".add_comment_div").after(comment_div.replace("RetrunUserName", comment.userName)
			                  .replace("RetrunCommentTime", comment.commentTime)
			                  .replace("RetrunCommentDetail", comment.commentDetail)
			                  .replace("RetrunCommentZanTop", comment.zanTop)
			                  .replace("RetrunCommentZanDown", comment.zanDown)
			                  .replace("CommnetID", comment.ID)
					);
				});
			},
			error:function(){}
		});
	}
	
}

function submitComment(){
	
	
		$(document).on("click",".zan_img",function (){
			var username = $("#userNameisLogin").val();
			if(username != null && username != ""){				
				if($(this).hasClass("zan_top_click") && $(this).hasClass("zan_top_mouse")){
					
					$(this).addClass("zan_top_act");
					$(this).removeClass("zan_top_mouse");
					var commentID = $(this).parent().next().val();
					//点赞top
					$.ajax({
						url:"system/CommentAction_commentZan.do",
						type:"post",
						dataType:"json",
						data:{
							commentID:commentID,
							topOrDown:"top"
							}
					});
					
					var topNum = parseInt($(this).prev().text());
					$(this).prev().text(topNum + 1);
				}
				if($(this).hasClass("zan_down_click") && $(this).hasClass("zan_down_mouse")){
					
					$(this).addClass("zan_down_act");
					$(this).removeClass("zan_down_mouse");
					var commentID = $(this).parent().next().val();
					//点赞down
					$.ajax({
						url:"system/CommentAction_commentZan.do",
						type:"post",
						dataType:"json",
						data:{
							commentID:commentID,
							topOrDown:"down"
							}
					});
					var downNum = parseInt($(this).prev().text());
					$(this).prev().text(downNum + 1);
				}	
			}else{
				alert("您还没有登录哦！");
			}
	});
		$(document).on("click",".comment_issue",function (){
			var username = $("#userNameisLogin").val();
			if(username != null && username != ""){
			var commentDeatil = $(".comment_textarea").val();
			if(commentDeatil == "我来说两句"){
				alert("评论内容不能为空哦！");
			}else if(commentDeatil.length >= 500){
				alert("评论内容不能大于400个字符");
			}else{
				var reg1 = /<[^>]+>/g;
				var reg2 = /www|com|.net|.org/;
				if(reg1.test(commentDeatil)){
					alert("提交内容不能包含<>等标签字符");
					return;
				}else if(reg2.test(commentDeatil)){
					alert("提交内容不能包含网址");
					return;
				}else{
					var appDetailID = $("#appAetailID").val();
					$.ajax({
						url:"system/CommentAction_submitCommentDetail.do",
						type:"post",
						dataType:"json",
						data:{
							appDetailID:appDetailID,
							commentDeatil:commentDeatil
							},
						success:function(data){
							$(".new_comment_li").remove();
							getComment(1);
							$(".comment_textarea").val("我来说两句");
							$(".comment_textarea").css("color","#c3c3c3");
						}
					});
					
				}
			}
		}else{
			alert("亲，需要登录才能评论哦！");
		}
	});
				
}
function mouse(){
	$(document).on("mouseover",".comment_issue",function (){
		$(".comment_issue").removeClass("comment_issue_img");
		$(".comment_issue").addClass("comment_issue_img_act");
	});
	$(document).on("mouseout",".comment_issue",function (){
		
		$(".comment_issue").removeClass("comment_issue_img_act");
		$(".comment_issue").addClass("comment_issue_img");
	});
	$(document).on("mouseover",".zan_img",function (){
		if($(this).hasClass("zan_top") && $(this).hasClass("zan_top_mouse")){
			$(this).removeClass("zan_top");
			$(this).addClass("zan_top_act");
		}
		if($(this).hasClass("zan_down") && $(this).hasClass("zan_down_mouse")){
			$(this).removeClass("zan_down");
			$(this).addClass("zan_down_act");
		}
		
	});
	$(document).on("mouseout",".zan_img",function (){
		if($(this).hasClass("zan_top_act") && $(this).hasClass("zan_top_mouse")){
			$(this).removeClass("zan_top_act");
			$(this).addClass("zan_top");
		}
		if($(this).hasClass("zan_down_act") && $(this).hasClass("zan_down_mouse")){
			$(this).removeClass("zan_down_act");
			$(this).addClass("zan_down");
		}	
});
	$(".comment_textarea").focus(function (){
		if($(".comment_textarea").val() == "我来说两句"){
			$(".comment_textarea").val("");
			$(".comment_textarea").css("color","black");
		}
	});
	$(".comment_textarea").blur(function (){
		if($(".comment_textarea").val() == ""){
			$(".comment_textarea").val("我来说两句");
			$(".comment_textarea").css("color","#c3c3c3");
		}
	});
	
}
function addCollect(){
	$(".collect_img").click(function (){
		var username = $("#userNameisLogin").val();
		if(username != null && username != ""){
			$(".collect_img").removeClass("add_collect_noact");
			$(".collect_img").addClass("add_collect_act");
			var appAetailID = $("#appAetailID").val();
			$.ajax({
				url:"system/CollectAction_addCollect.do",
				type:"post",
				dataType:"json",
				data:{appAetailID:appAetailID},
				success:function(data){
					
				},
				error:function(){}
			});
		}else{
			alert("亲，要先登录哦！");
		}
	});
	
}
function addPeople(){
	$.ajax({
		url:"system/AppDetailAction_addLookPeople.do",
		type:"post",
		dataType:"json",
		data:{appDetailID:$("#appAetailID").val()}
	});
}
function putAppDetailByID(){
	$(document).on("click",".hot_img_container",function (){
		var appID = $(this).next().val();
//		alert(appID);
		window.location.href = "appDetail_" + appID + ".html";
//		window.location.href = "system/AppDetailAction_detail.do?appID=" + appID;
	});
}

function loadHotAppDetail(){
	var parentPath = window.document.location.href;
	var rootPath = parentPath.substring(0,parentPath.indexOf("WeChat")) + "WeChat/";
	var appDetai = "<div class='hot_img_container'>  " +
						"<div class='img_container'>     " +
						"	<a href='#'><img src='"+ rootPath + "APPDETAILIMG' ></a> " +
					    "</div> " +
					    "<span class='img_title'>APPNAME</span> " +
					    "<span class='img_title img_sort'>APPNAMECATEGORY</span> " +			   
				   "</div>" +
				   "<input type='hidden' value='APPDETAILID'> ";
	$.ajax({
		url:"system/RecommendAction_findHotRecommendList.do",
		type:"post",
		dataType:"json",
		success:function (data){
			$(data).each(function (i,appDetail){
				$(".add_hot").after(appDetai.replace("APPDETAILIMG", appDetail.appImg)
											  .replace("APPNAME", appDetail.appName)
											  .replace("APPNAMECATEGORY", appDetail.category)
											  .replace("APPDETAILID", appDetail.ID)
				);
			});
		}

	});
}

function initalTopicDiv(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        autoplay : 2000,
        autoplayDisableOnInteraction : true,
        slidesPerView : 2,
        centeredSlides : true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
	
	$(document).on("mouseover",".add_collect",function (){
		
		$(".collect_message").css("color","#FF9900");
		
	});
	$(document).on("mouseout",".add_collect",function (){
		$(".collect_message").css("color","#808080");
	});
}