$(function(){

initailCollect();		 
addCollect();


});

var my_collect = 	
					'<div class="list_container"> '+
				 	'    <div class="book"> '+
				 	 '   		<div class="clip"></div>'+
				 	'    </div>'+
				 	'<a href="mobileAppDetail_APPDETAILID.html"> '+
				 	'	<div class="detail_container">'+
					' 		<input type="hidden" id="schoolJobListID" name="schoolJobListID" value="APPID">'+
					' 		<div class="message_title">APPTITLE</div>'+
					' 		<div class="company_message_common"><div class="collect_time">收藏时间:<font style="color: #EE7621;">COLLECTTIME</font></div></div>'+
					'		<div class="company_message_common"><div class="company_name">名&nbsp;&nbsp;&nbsp;&nbsp;称：<font style="color: #EE7621;">APPNAME</font></div></div>'+
					'		<div class="company_message_common"><div class="company_money">类&nbsp;&nbsp;&nbsp;&nbsp;别：<font style="color: #EE7621;">APPCATE</font></div></div>'+
					'		<div class="company_message_common"><div class="company_adress">功&nbsp;&nbsp;&nbsp;&nbsp;能：：<font style="color: #EE7621;">APPINTRO</font></div></div>'+
					'	</div>'+
					' <a>'+
					'	<div class="book_colse"></div>'+
				 	'	<div class="delete">'+				 		
				 	'		<div class="delete_favorite_image"></div>'+
				 	'		<input type="hidden" id="collectID" name="collectID" value="DELETEID">'+
				 	'	</div>'+
				 	'	<div class="close_container"></div>'+
 		       		'</div>';


 		       		
function addCollect(){
	$.ajax({
		url:"system/CollectAction_findCategoryAppDetail.do",
		type:"post",
		dataType:"json",
		data:{pageNO:1},
		async:false,
		success:function(data){
			if(data.totalResult == 0){	
				$(".empty").css("display","block");
			}else{				
				$(".empty").css("display","none");				   
				$(data.appDetailFromList).each(function (i,category){
					var collect_div = my_collect.replace("APPTITLE", category.appName)
							                  .replace("APPNAME", category.appName)			
							                  .replace("APPINTRO", category.intro)
							                  .replace("APPCATE", category.category)							
							                  .replace("COLLECTTIME", category.issueTime)
							                  .replace("DELETEID", category.ID)
							                  .replace("APPDETAILID", category.ID);
						$(".add_collect").after(collect_div);						
				});
			}
		
		},
		error:function (){}
	});
}
function initailCollect(){
	$(document).on("click",".delete",function(){
			
		 if(!window.confirm('你确定取消收藏吗？')){
             return;
         }	
	 var me = $(this); 
	 var collectID = me.children("input[id='collectID']").val();
	
	setTimeout(function(){
		me.parent().parent().remove();
		$.ajax({  
	        url :"system/CollectAction_deleteCollect.do", 
	        type:"post",      
	        data:{
	        	deleteID:collectID
	        },
	        dataType:"json",
	        success:function(data){
	        	
	        },
	        error:function(){	
	        	alert("服务器未响应");
	        }
		});
	 },300);
     $(this).next().animate({
	    height: "40px",
	    width: "50px"
	    },100);	
     
	 setTimeout(function(){
		 me.next(".close_container").remove();
		 me.css("display","none");
		 me.prev(".book_colse").css("display","block");
		 me.prev().css("display","block");
	 },100);
	
	setTimeout(function(){
			 me.prev(".detail_container").animate({ 
				    width: "1"
			    },100);			
		 },100); 
	 me.prev().prev().css("display","none");

	});
	
}