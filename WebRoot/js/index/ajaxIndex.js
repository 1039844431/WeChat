$(function (){
initialPoster();
itemContainer();
loadGoodRecommend();
loadHotRecommend();
loadEveryCateDetailDiv();
erweiImg();
});

function initialPoster(){
	$(window).load(function() {
		$('.flexslider').flexslider();
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
	$(document).on("mouseover",".look_more",function (){
		$(this).addClass("look_more_imgact");
	});
	$(document).on("mouseout",".look_more",function (){
		$(this).removeClass("look_more_imgact");
	
	});
	$(document).on("mouseover",".look_last_a",function (){
		$(this).addClass("look_last_a_imgact");
	});
	$(document).on("mouseout",".look_last_a",function (){
		$(this).removeClass("look_last_a_imgact");
	
	});
}
var parentPath = window.document.location.href;
var rootPath = parentPath.substring(0,parentPath.indexOf("WeChat")) + "WeChat/";
var addGoodAndHotRecommend = '<a href = "appDetail_APPDETAILID.html"><div class="good_item"> ' + 
                             '<img src=" '+ rootPath +'APPIMG " > ' + 
                             '<h3>APPNAME</h3> ' +      
                              '</div></a>';

var appDetailDiv = "<a href='appDetail_APPDETAILID.html'><div class='item ajaxItem'> "	+					        	
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
						" </div> </a>" ;

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

function loadEveryCateDetailDiv(){
	cateDetailDiv(1,"yinying");
	cateDetailDiv(12,"shejiao");
	cateDetailDiv(7,"gongju");
	cateDetailDiv(5,"jinrong");	
	cateDetailDiv(3,"chuxing");
}

function cateDetailDiv(categoryKey,className){
	////影音
	$.ajax({
		url:"system/AppDetailAction_findCategoryAppDetail.do",
		type:"post",
		data:{
			CategoryKey:categoryKey,
			pageNO:1
			},
		dataType:"json",
		success:function(data){
			$(data.appDetailFromList).each(function (i,category){
				$("." + className).after(appDetailDiv.replace("APPIMGPATH", category.appImg)
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


function loadGoodRecommend(){
	$.ajax({
		url:"system/RecommendAction_findGoodRecommendList.do",
		type:"post",
		dataType:"json",
		success:function(data){
			$(data).each(function (i,goodRecommend){
				$(".add_good_div").after(addGoodAndHotRecommend.replace("APPIMG", goodRecommend.appImg)
						                                       .replace("APPNAME", goodRecommend.appName)
						                                       .replace("APPDETAILID", goodRecommend.ID)
						                 );
			});
		},
		error:function (){}
	});
}

function loadHotRecommend(){
	$.ajax({
		url:"system/RecommendAction_findHotRecommendList.do",
		type:"post",
		dataType:"json",
		success:function(data){
			$(data).each(function (i,hotRecommend){
				$(".add_hot_div").after(addGoodAndHotRecommend.replace("APPIMG", hotRecommend.appImg)
						                                       .replace("APPNAME", hotRecommend.appName)
						                                       .replace("APPDETAILID", hotRecommend.ID)
						                 );
			});
		},
		error:function (){}
	});
}
function itemContainer(){
	$(document).on("mouseover",".good_item",function(){
		$(this).addClass("item_hover");
		$(this).find("img").css("opacity",1);
		$(this).find("h3").css("color","#FF9900");
	});
	$(document).on("mouseout",".good_item",function(){
		$(this).removeClass("item_hover");
		$(this).find("img").css("opacity",0.8);
		$(this).find("h3").css("color","#000");
	});	
}