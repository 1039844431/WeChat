$(function (){
	
	collect();
	initalTopicDiv();
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
	var appAetailID = $("#appDetailID").val();
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
			var username = $("#session_user").val();
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
			var username = $("#session_user").val();
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
				
					var appDetailID = $("#appDetailID").val();
					$.ajax({
						url:"system/CommentAction_submitCommentDetail.do",
						type:"post",
						dataType:"json",
						data:{
							appDetailID:appDetailID,
							commentDeatil:commentDeatil
							},
						success:function(data){
							
						}
					});
						   $(".new_comment_li").remove();
							getComment(1);
							$(".comment_textarea").val("我来说两句");
							$(".comment_textarea").css("color","#c3c3c3");
				}
			}
		}else{
			alert("亲，需要登录才能评论哦！");
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

function collect(){
	
	$(".collect").on("click",function(){	
		
			 if($("#session_user").val() == ""){
					 if(!window.confirm('您还没有登录哦，现在登录吗？')){
			             return;
			         }else{
			        	window.location.href = "mobileLoginHome.html";
			        	 return;
			         }	
			}
			var appDetailID = $("#appDetailID").val();
			$(".collect_active").removeClass("active");
			$(".collect_active").addClass("collect_start");
			 $.ajax({  
			        url :"system/CollectAction_addCollect.do", 
			        type:"post",      
			        data:{
			        	appAetailID:appDetailID
			        },
			        dataType:"json",
			        success:function(data){
			        	if(data.state == 0){
			        		alert(data.message);
			        	}
			        },
			        error:function(){
			        	alert("服务器未响应");
			        }
				});
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
}