$(function (){
initialPoster();
itemContainer();
loadGoodRecommend();
loadHotRecommend();
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