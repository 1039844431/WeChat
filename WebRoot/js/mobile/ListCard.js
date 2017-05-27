var parentPath = window.document.location.href;
var rootPath = parentPath.substring(0,parentPath.indexOf("WeChat")) + "WeChat/";
var appendDiv = '<div class="list_container"> '+
			 	 '  <div class="book" >'+
			   '  		<div class="clip"></div >'+
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

$(function(){
	
	clickImage(); 
	select_job();
	clickErWei();
	serch();
});

function serch(){
	$(".publish").click(function (){	
	    $(".search_container").animate({
		    marginTop: ".3rem"
		    },300);	
		    $(".publish").css("display","none");
		    $(".search_input").focus();
		});
	$(".search_input").blur(function (){	
		 $(".publish").css("display","block");
		  $(".search_container").animate({
		    marginTop: "-2rem"
		    },300);	
	});
	$(".search_buttom").click(function (){
		var searchKey = $(".search_input").val();
		window.location.href = "mobileSearch.html&key=" + searchKey;
	});
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
	 
	 setTimeout(function(){		 
		  $(".tishi").css("display","none");		
	 },3000);

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
	var categoryKey = $("#categoryKey").val();
	if(currentPage == sumPage){	
		$(".pullUpLabel").text("没有更多了");
		return;
	}else{
		var currentPage = parseInt($("#pageNO").val()) + 1;
		$("#pageNO").val(parseInt(currentPage));
	 var el, li;
		el = document.getElementById('thelist');	
		$.ajax({  
	        url :"system/AppDetailAction_findCategoryAppDetail.do", 
	        type:"post",      
	        data:{
	        	pageNO:currentPage,
	        	CategoryKey:categoryKey
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
	$(".main_ul>li").remove();
	parseInt($("#pageNO").val(0));

	nextPage();

}
function select_job(){
	
	$(".select_title_position").on("click",function (){

		$(".not_job").css("display","none");

		if($(".job_select_container").hasClass("job_select_container_display")){

			$(".job_select_container").removeClass("job_select_container_display");
		}else {
			$(".job_select_container").addClass("job_select_container_display");
		}
		
		$(".job_class").removeClass("select_money_checkmark");
		var select = $(".select_title_position").text();
		$(".job_select_container div").each(function(){
			if($(this).text() == select){
				$(this).addClass("select_money_checkmark");
			}
		});
	});
	$(".job_class").on("click",function(){
		
		$(".job_class").removeClass("select_money_checkmark");
		$(this).addClass("select_money_checkmark");
		var job = $(this).text().trim();
		$(".select_title_position").text(job);
		$(".job_select_container").addClass("job_select_container_display");
		$("#categoryKey").val($(this).next().val());
		firstPage();
		
	});
}
