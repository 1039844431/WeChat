$(function (){

initContainer();
addSwiperSlide();
putAppDetailByID();
erweiImg();
openMorPage();
});
//项目根路径
var parentPath = window.document.location.href;
var rootPath = parentPath.substring(0,parentPath.indexOf("WeChat")) + "WeChat/";
//添加图片模块
var imgDiv = "<div class='item'> "	+					        	
				"<img src='"+ rootPath+ "APPIMGPATH' class='item_img'>		"	+					        	
				"<div class='li_detail'>  "	+	
				    "<h3 class='li_title'>APPNAME</h3> "	+	
				     "<div class='li_title_saosao'>扫码</div> "	+	
				     "<div class='erwei_container'> " +
						 "	<img src='"+ rootPath+ "APPERWEIIMG' class='erwei_img'>" +
						 "	<div class='erwei_message'>微信扫描体验</div> " +
					  " </div>" +
					  " <div class='li_intro li_time'>发布时间：APPEISSUETIME</div> " +
				     "<div class='li_intro'>功能：APPINRO</div> "	+	
				"  </div> "	+	
				"  <div class='li_category_container'> "	+	
				"    <div class='li_category'>APPCATEGORY</div>			 "	+				             
				"    <div class='people_number'>APPLOOKNUM</div> "	+	
				"    <div class='li_eye'></div> "	+	
				"  </div> "	+	
			 " </div> "  +
			"<input type='hidden' value='APPDETAILID'> ";

//添加滑动模块
var add_slide_div = "<div class='swiper-slide'> " +
					"	<div class='mycategory_container'>" +
					"		<div class='title_container'>" +
					"			<div class='video_container'>" +
					"				<div class='video_name'>MAINAPPCATEGORY</div> " +
					"			</div>" +
					"			<div class='category_img_li'>" +
					"			      <section id='work'> " +
					"			    	 <div id='ADDCURRENTPAGE'></div>" +
					"                    <input type='hidden' id='ISADDIMGDIV'> " +
					"			      </section>     " +
					"	      </div>" +
					"		</div>" +
					"	</div>" +
				   " </div>";

//每个滑动模块id前缀
var swiper_id = "ADD_DIV_SWIPER_SLIDE_";
//是否已经加载判断字id前缀,如果加载了value就存当前的页码
var isAdd = "IS_AddImgDiv_";
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
function putAppDetailByID(){
	$(document).on("click",".item",function (){
		var appID = $(this).next().val();
//		alert(appID);
		window.location.href = "appDetail_" + appID + ".html";
//		window.location.href = "system/AppDetailAction_detail.do?appID=" + appID;
	});
}

function addImgDiv(clickPage){
	var isAddImg =  $("#" + isAdd + clickPage).val();
	var realSearchKey = $(".realSearchKey").val();
	if(isAddImg == null || isAddImg == ""){
		$.ajax({
			url:"system/AppDetailAction_search.do",
			type:"post",
			data:{
				searchKey:realSearchKey,
				pageNO:clickPage
				},
			dataType:"json",
			success:function(data){
				
				$("#" + isAdd + clickPage).val(data.currentPageNo);
				$(data.appDetailFromList).each(function (i,category){
					$("#" + swiper_id + clickPage).after(imgDiv.replace("APPIMGPATH", category.appImg)
							                  .replace("APPNAME", category.appName)
							                  .replace("APPERWEIIMG", category.erweiImg)
							                  .replace("APPINRO", category.intro)
							                  .replace("APPCATEGORY", category.category)
							                  .replace("APPLOOKNUM", category.peopleLookNum)
							                  .replace("APPEISSUETIME", category.issueTime)
							                  .replace("APPDETAILID", category.ID)
					);
				});
			},
			error:function (){}
		});
	}
	
	
}
function addSwiperSlide(){

	$(".swiper-slide").remove();
	var realSearchKey = $(".realSearchKey").val();
	$.ajax({
		url:"system/AppDetailAction_search.do",
		type:"post",
		data:{
			searchKey:realSearchKey
			},
		dataType:"json",
		success:function(data){
			if(data.totalResult == 0){
				$(".no_result").css("display","block");
			}else{
				$(".no_result").css("display","none");
				for(var i = data.totalPage ; i >= 1; i --){
					var addSwiperSlideID = swiper_id + i;
					var isAddImgDiv = isAdd + i;
		
					$("#add_slide").after(add_slide_div.replace("MAINAPPCATEGORY", data.category)
						                               .replace("ADDCURRENTPAGE", addSwiperSlideID)
						                               .replace("ISADDIMGDIV", isAddImgDiv)
														);
				}
				initCategory();
				$("#" + isAdd + "1").val(1);
				$(data.appDetailFromList).each(function (i,category){
					$("#" + swiper_id + "1").after(imgDiv.replace("APPIMGPATH", category.appImg)
							                  .replace("APPNAME", category.appName)
							                  .replace("APPERWEIIMG", category.erweiImg)
							                  .replace("APPINRO", category.intro)
							                  .replace("APPCATEGORY", category.category)
							                  .replace("APPLOOKNUM", category.peopleLookNum)
							                  .replace("APPEISSUETIME", category.issueTime)
							                  .replace("APPDETAILID", category.ID)
					);
				});
			}
					 
			
		},
		error:function (){}
	});
}




function initCategory(){
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        onSlideChangeStart: function(swiper){
        	addImgDiv(swiper.activeIndex + 1);
          },
        paginationBulletRender: function (index, className) {
        	if(index < 30){
       		 return '<span id="pageClick" name="pageClick" class="' + className + '">' + (index + 1) + '</span>';	
       	}else{
       		if(index == 30){
       			 return '<div id ="dotMorPage" name="dotMorPage" class="'+className+'">..</div><span id="pageClick" name="pageClick" class="morePagenoact ' + className + '">' + (index + 1) + '</span>';
       		}else{
       			if(index%30 == 0){
  	           		 return '<div id ="dotMorPage" name="dotMorPage" class="morePagenoact '+className+'">..</div><span id="pageClick" name="pageClick" class="morePagenoact ' + className + '">' + (index + 1) + '</span>';       		  
  	           		}else{
  	     			 return '<span id="pageClick" name="pageClick" class="morePagenoact ' + className + '">' + (index + 1) + '</span>';
  	       			}
       		}
       		  
       	}       
        }
    });
}


function openMorPage(){
	$(document).on("click","#dotMorPage",function(){
		var page = $("#morePage").val();
		 page = parseInt(page);
		 if(!$(this).hasClass("later")){
			 forForword(page);		 
		 }else{
			 forLater(page);
		 }
	});
}
//点击...向前
function forForword(page){	
	if(page == 1){	
		forLater(page);
	}else if(page == 2){
		$.each($("div[name='dotMorPage']"),function(i){
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
		 $.each($("span[name='pageClick']"),function(i){			 
			 if(-1 < i && i < 30){				 
				 if($(this).hasClass("morePagenoact")){
					 $(this).removeClass("morePagenoact");
				 }
			 }else{
				 if(!$(this).hasClass("morePagenoact")){
					 $(this).addClass("morePagenoact");
				 }
			 }		 
		 });	
		 $("#morePage").val(page - 1);
	}else{
		$.each($("div[name='dotMorPage']"),function(i){
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
		 $.each($("span[name='pageClick']"),function(i){			 
			 if((page-2)*30 -1 < i && i < (page-1)*30){				 
				 if($(this).hasClass("morePagenoact")){
					 $(this).removeClass("morePagenoact");
				 }
			 }else{
				 if(!$(this).hasClass("morePagenoact")){
					 $(this).addClass("morePagenoact");
				 }
			 }		 
		 });	
		 $("#morePage").val(page - 1);
	}
}
//点击...向后
function forLater(page){
	
	   var totalPage =  $("#totalPage").val();
		totalPage = parseInt(totalPage);
		var dotSize = parseInt(totalPage/30);
		if(page == (dotSize + 1)){
			forForword(page);			
		}else if(page == dotSize){
			 $.each($("div[name='dotMorPage']"),function(i){
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
			 $.each($("span[name='pageClick']"),function(i){				 
				 if(page*30 < i && i < (page+1)*30){					 
					 if($(this).hasClass("morePagenoact")){
						 $(this).removeClass("morePagenoact");
					 }
				 }else{
					 if(!$(this).hasClass("morePagenoact")){
						 $(this).addClass("morePagenoact");
					 }
				 }		 
			 });
			 $("#morePage").val(page + 1);
		}else{
			$.each($("div[name='dotMorPage']"),function(i){
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
			 $.each($("span[name='pageClick']"),function(i){				 
				 if(page*30 < i && i < (page+1)*30){					 
					 if($(this).hasClass("morePagenoact")){
						 $(this).removeClass("morePagenoact");
					 }
				 }else{
					 if(!$(this).hasClass("morePagenoact")){
						 $(this).addClass("morePagenoact");
					 }
				 }		 
			 });
			 $("#morePage").val(page + 1);
		}	
}



function initContainer(){
	
	$(document).on("click","#pageClick",function (){
		addImgDiv($(this).text());
	});
	$(".realSearchButtom").click(function (){
		addSwiperSlide();
	});
	$(".realSearchKey").keydown(function(event){
		if (event.keyCode == 13) { 
			addSwiperSlide();
        }  
	});
	$(document).on("mouseover",".item",function (){
		$(this).addClass("item_hover");
		$(this).find("h3").css("color","#FF9900");
		$(this).find("img").css("opacity",1);
	});
	$(document).on("mouseout",".item",function (){
		$(this).removeClass("item_hover");
		$(this).find("h3").css("color","#000");
		$(this).find("img").css("opacity",0.8);
	});
}