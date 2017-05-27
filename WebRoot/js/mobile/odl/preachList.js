var appendDiv = "<div class=\"list_container\"><div class=\"book\"><div class=\"clip\"></div></div>" +
		"<div class=\"loader_word\">正在加载</div><div class=\"loader\"><div class=\"loader-inner ball-pulse\">" +
		"<div></div><div></div><div></div></div></div><div class=\"detail_container\"><div class=\"message_title\">title1111</div>" +
		"<div class=\"company_message_common\"><div class=\"company_start_time\">开始时间：<font style=\"color: #EE7621;\">company1111</font></div></div>" +
		"<div class=\"company_message_common\"><div class=\"company_end_time\">结束时间：<font style=\"color: #EE7621;\">money1111</font></div></div>" +
		"<div class=\"company_message_common\"><div class=\"company_adress\">宣讲地址：adress1111</div></div></div><div class=\"book_colse\"></div><div class=\"heart\">" +
		"<div class=\"heart_favorite_image click_image\"><div class=\"collect have_colect\" style=\"display:none;\">已收藏</div><div class=\"collect not_colect\">已取消</div>" +
		"</div> <div  id=\"preach_list_id\" style=\"display: none;\">" + 
				"list_id1111</div></div><div class=\"close_container\"></div><div  id=\"preach_detail_id\"" +
				" style=\"display: none;\">detail_id1111</div></div>";

var direction = "0";
$(function(){
	
	detailContainer();
	clickImage(); 
	select_job();
});

function detailContainer(){
	 $(".detail_container").click(function() {
		 
			var me = $(this); 
			
			setTimeout(function(){
				me.next().next().next().animate({
				    height: "40px",
				    width: "50px",
				    },100);
				var preachDetailID =  me.next().next().next().next().text().trim();//点开详细信息
				var preachListID =  me.next().next().children("div[id='shool_job_list_id']").text().trim();//点开详细信息
				
				document.preachDetailID.action = "system/PreachDetailAction_getPreachDetail.do?preachDetailID=" + preachDetailID + "&preachListID=" + preachListID;
		        document.preachDetailID.submit();

			},100); 
			setTimeout(function(){
				me.next().next().next().remove();
				
			},200);
			setTimeout(function(){
				me.next().css("display","block");
				me.next().next().css("display","none");
				me.animate({
					 width: "1px"
				});
			},200);
			setTimeout(function(){
				me.css("display","none");
				me.next().css("display","none");
			},400);
			setTimeout(function(){
				me.prev().css("display","block");
				me.prev().prev().css("display","block");
			},450);
			});
}
function clickImage(){
	$(".click_image").on("click",function(){
		 
		 if($("#session_user").val() == ""){
				 if(!window.confirm('您还没有登录哦，现在登录吗？')){
		             return;
		         }else{
		        	 $("#login_home").submit();
		        	 return;
		         }	
		}
		 if($(this).hasClass("heart_favorite_image")){
			 $(this).removeClass("heart_favorite_image");
			 $(this).addClass("heart_favorite_image_action");
			 $(this).find(".have_colect").fadeIn(300);
			 $(this).find(".have_colect").fadeOut(1000);
			 var preachListID =  $(this).next().text().trim();//这条列表的id
			 $.ajax({  
			        url :"system/MyCollectAction_collectPreachList.do", 
			        type:"post",      
			        data:{
			        	preachListID:preachListID
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
//	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
//		var el, li, i;
//		el = document.getElementById('thelist');
//		
//		for (i=0; i<3; i++) {
//			li = document.createElement('li');
//			li.innerHTML = appendDiv;
//			el.insertBefore(li, el.childNodes[0]);
//		}
//		
//		myScroll.refresh();		//数据加载完成后，调用界面更新方法   Remember to refresh when contents are loaded (ie: on ajax completion)
//	}, 1000);	// <-- Simulate network congestion, remove setTim eout from production!
//	$.post("system/ShoolJobListAction_getSchoolJobList.do");
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
function nextPage(province){
	var currentPage = parseInt($("#pageNO").val());
	var sumPage = parseInt($("#sumPage").val());
	var city = $(".select_title_city_name").text().trim();
	var jobClass = $(".select_title_position").text().trim();
	
	if(jobClass == "" || jobClass =="全部职位"){
		jobClass = null;
	}
	if(currentPage == sumPage){	
		$(".pullUpLabel").text("没有更多了");
		return;
	}else{
		var currentPage = parseInt($("#pageNO").val()) + 1;
		$("#pageNO").val(currentPage);
	 var el, li;
		el = document.getElementById('thelist');				
		$.ajax({  
	        url :"system/PreachListAction_ajaxGetPreachList.do", 
	        type:"post",      
	        data:{
	        	pageNO:currentPage,
	        	city:city,
	        	province:province,
	        	jobClass:jobClass
	        },
	        dataType:"json",
	        success:function(data){
	        	if(data == "0"){
	        		myScroll.refresh();
	        		if($(".empty").hasClass("not_job")){
	        			$(".empty").removeClass("not_job");
	        		}		
	        	}else{
	        		if(!$(".empty").hasClass("not_job")){
	        			$(".empty").addClass("not_job");
	        		}
	        		$(data).each(function(i,obj){ 
						var newappendDiv = appendDiv.replace("title1111", obj.title)
						    		         .replace("company1111", obj.start_time)
						    		         .replace("money1111", obj.end_time)
						    		         .replace("adress1111", obj.preach_adress)
						    		         .replace("list_id1111", obj.preach_list_id)
						    		         .replace("detail_id1111", obj.preach_detail_id);
		        		li = document.createElement('li');
		    			li.innerHTML = newappendDiv;
		    			el.appendChild(li, el.childNodes[0]);
		    			myScroll.refresh();
		        	});
	        	}
	        	
	        	detailContainer();
	        	clickImage(); 
	        },
	        error:function(){
	        	alert("服务器未响应");
	        }
		});
	}


}
function firstPage(province){	
	$(".main_ul>li").remove();
	parseInt($("#pageNO").val(0));
	
	nextPage(province);

}


