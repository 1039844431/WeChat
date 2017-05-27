var parentPath = window.document.location.href;
var rootPath = parentPath.substring(0,parentPath.indexOf("WeChat")) + "WeChat/";

var appendDiv = '<div class="list_container"> '+
			 	 '  <div class="book" >'+
			     '  	<div class="clip"></div >'+
			 	'   </div >'+
			 	'   <div class="loader_word">疯狂加载</div >'+
			 	'   <div class="loader" >'+
			   '     <div class="loader-inner ball-pulse" >'+
			   '       <div></div >'+
			   '       <div></div >'+
			   '       <div></div >'+
			   '     </div >'+
			   '   </div >'+
			   '   <img class="list_appImg cl_appImg" alt="APPIMGNAME|NICE小程序商店" src=" '+ rootPath +'APPIMG " /> '+
			   '   <img class="list_appImg cl_erweiImg" alt="APPERWEINAME|NICE小程序商店" src=" '+ rootPath +'ERWEIIMG " />'+
			   '   <a href="mobileAppDetail_APPID.html" >'+
			 	'	<div class="detail_container" >'+			 		
				' 		<div class="message_title">APPTITLENAME</div >'+
				'		<div class="company_message_common"><div class="company_name"><font style="color: #EE7621;">APPNAME</font></div></div >'+
				'		<div class="company_message_common"><div class="company_money">类别：<font style="color: #EE7621;">APPCATE</font></div></div >'+
				'		<div class="company_message_common"><div class="company_adress">功能：APPINFO</div></div> '+
				'	</div> '+
				 ' </a> '+				  
				'	<div class="book_colse"></div> '+
			 	'	<div class="heart"> '+
			 	'		<div class="heart_favorite_image click_image"><div class="collect have_colect">已收藏</div><div class="collect not_colect">已取消</div></div> '+
			 	'		<div id="shool_job_list_id" style="display: none;">APPCOLLECTID</div> '+
			 	'	</div> '+
			 	'	<div class="close_container"></div> '+			 		
			 	'	<div id="school_job_detail_id" style="display: none;">APPDETAILID</div> '+
			 	'</div>';
var haveAppendLi = '<li>' + appendDiv + '</li>';
$(function(){
	
	searchByKey(1);	
	clickImage(); 
	clickErWei();
	research();
});
function research(){
	$(".search_buttom").click(function (){
	searchByKey(1);
	});
}
function searchByKey(currentPage){
	var realSearchKey = $(".search_input").val();
	if(realSearchKey != null && realSearchKey != ""){		
		$.ajax({
			url:"system/AppDetailAction_search.do",
			type:"post",
			data:{
				searchKey:realSearchKey,
				pageNO:currentPage
				},
			dataType:"json",
			success:function(data){	
				$("li").remove();
				if(data.totalResult != 0){
					$("#pageNO").val(data.currentPageNo);
					$("#sumPage").val(data.totalPage);
					
					$(data.appDetailFromList).each(function (i,category){
						
						$(".add_search_div").after(
												haveAppendLi.replace("APPIMGNAME", category.appName)
							    		         .replace("APPIMG", category.appImg)
							    		         .replace("APPERWEINAME", category.appName)
							    		         .replace("ERWEIIMG", category.erweiImg)
							    		         .replace("APPID", category.ID)
							    		         .replace("APPTITLENAME", category.appName)
							    		         .replace("APPNAME", category.appName)
							    		         .replace("APPCATE", category.category)
							    		         .replace("APPINFO", category.intro)
							    		         .replace("APPCOLLECTID", category.ID)
							    		         .replace("APPDETAILID", category.ID)
						);
					});
				}else{
					$(".empty").css("display","block");
				}
				
			},
			error:function (){}
		});
	}else{
	alert("查询内容不能为空哦！");
	}
	
}

function clickErWei(){
	$(document).on("click",".list_appImg",function (){
		if($(this).hasClass("cl_appImg")){
			$(this).css("display","none");
			$(this).next().css("display","block");
		}
		if($(this).hasClass("cl_erweiImg")){
			$(this).css("display","none");
			$(this).prev().css("display","block");
		}
	});
}
function clickImage(){
	
	
	
	$(document).on("click",".click_image",function(){
		 
		 if($("#session_user").val() == ""){
				 if(!window.confirm('您还没有登录哦，现在登录吗？')){
		             return;
		         }else{
		        	 window.location.href = "mobileLoginHome.html";
		        	 return;
		         }	
		}
		 if($(this).hasClass("heart_favorite_image")){
			 $(this).removeClass("heart_favorite_image");
			 $(this).addClass("heart_favorite_image_action");
			 $(this).find(".have_colect").fadeIn(300);
			 $(this).find(".have_colect").fadeOut(1000);
			 var appDetailID =  $(this).next().text().trim();//这条列表的id
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
		 }else{
			 $(this).addClass("heart_favorite_image");
			 $(this).removeClass("heart_favorite_image_action");
			 $(this).find(".not_colect").fadeIn(300);
			 $(this).find(".not_colect").fadeOut(1000);
		 }
	 });
	 

}
var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;

/**
 * 下拉刷新 （自定义实现此方法）
 * myScroll.refresh();		// 数据加载完成后，调用界面更新方法
 */
function pullDownAction () {
	firstPage();
}

/**
 * 滚动翻页 （自定义实现此方法）
 * myScroll.refresh();		// 数据加载完成后，调用界面更新方法
 */
function pullUpAction () {
	 
	 nextPage();
}

/**
 * 初始化iScroll控件
 */
function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	
	myScroll = new iScroll('wrapper', {
		scrollbarClass: 'myScrollbar', /* 重要样式 */
		useTransition: false, /* 此属性不知用意，本人从true改为false */
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
			}
		},
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';				
				pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';				
				pullUpAction();	// Execute custom function (ajax call?)
			}
		}
	});
	
	setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
}

//初始化绑定iScroll控件 
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false); 


//向下拉时访问数据库
function nextPage(){
	var currentPage = parseInt($("#pageNO").val());
	var sumPage = parseInt($("#sumPage").val());
	if(currentPage == sumPage){	
		$(".pullUpLabel").css("display","block");
		$(".pullUpLabel").text("没有更多了");
		return;
	}else{
		$(".pullUpLabel").css("display","block");
		var realSearchKey = $(".search_input").val();
		var currentPage = parseInt($("#pageNO").val()) + 1;
		$("#pageNO").val(parseInt(currentPage));		
	 	var el, li;
		el = document.getElementById('thelist');	
		$.ajax({  
	        url :"system/AppDetailAction_search.do", 
	        type:"post",      
	        data:{
	        	searchKey:realSearchKey,
				pageNO:currentPage
	        },
	        dataType:"json",
	        success:function(data){
	        	
	        	if(data.totalResult == 0){
	        		myScroll.refresh();
	        		if($(".empty").hasClass("not_job")){
	        			$(".empty").removeClass("not_job");
	        		}		
	        	}else{
	        		if(!$(".empty").hasClass("not_job")){
	        			$(".empty").addClass("not_job");
	        		}
	        		$(data.appDetailFromList).each(function(i,obj){ 
	        			
						var newappendDiv = appendDiv.replace("APPIMGNAME", obj.appName)
						    		         .replace("APPIMG", obj.appImg)
						    		         .replace("APPERWEINAME", obj.appName)
						    		         .replace("ERWEIIMG", obj.erweiImg)
						    		         .replace("APPID", obj.ID)
						    		         .replace("APPTITLENAME", obj.appName)
						    		         .replace("APPNAME", obj.appName)
						    		         .replace("APPCATE", obj.category)
						    		         .replace("APPINFO", obj.intro)
						    		         .replace("APPCOLLECTID", obj.ID)
						    		         .replace("APPDETAILID", obj.ID);					    		         ;
		        		li = document.createElement('li');
		    			li.innerHTML = newappendDiv;
		    			el.appendChild(li, el.childNodes[0]);
		    			myScroll.refresh();
		        	});
	        	}
	        	
	        	
	        	clickImage(); 
	        },
	        error:function(){
	        	alert("服务器未响应");
	        }
		});
	}
}
function firstPage(){	


}


