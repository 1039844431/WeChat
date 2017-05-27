$(function (){
	loadGoodRecommend();
	loadHotRecommend();
	serch();
	initalIndex();
});


var parentPath = window.document.location.href;
var rootPath = parentPath.substring(0,parentPath.indexOf("WeChat")) + "WeChat/";
var addGoodAndHotRecommend = '<li> <a href="mobileAppDetail_APPDETAILID.html" data-rel="dialog" data-transition="flip"> ' +
							       ' <img src=" '+ rootPath +'APPIMG " > ' +
							       '  <p class="pname">APPNAME</p> ' +
							       '  <p class="pway">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<font style="color: red;">APPCATE</font></p>' +
							       '  <p class="padr">详细功能：APPINFO</p>' +
							       '  <p class="ptime_start">发布时间：<font style="color: #EE7621;">APPTIME</font></p>' +
							       '  <p class="pucount">人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;气：<font style="color: red;">APPLOOKNUM</font>人</p>' +
						       ' </a>' +
						    '</li> ';

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
						                                       .replace("APPCATE", goodRecommend.category)
						                                       .replace("APPINFO", goodRecommend.intro)
						                                       .replace("APPTIME", goodRecommend.issueTime)
						                                       .replace("APPLOOKNUM", goodRecommend.peopleLookNum)
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
						                                       .replace("APPCATE", hotRecommend.category)
						                                       .replace("APPINFO", hotRecommend.intro)
						                                       .replace("APPTIME", hotRecommend.issueTime)
						                                       .replace("APPLOOKNUM", hotRecommend.peopleLookNum)
						                 );
			});
		},
		error:function (){}
	});
}
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
		    marginTop: "-1rem"
		    },300);	
	});
	$(".search_buttom").click(function (){
		var searchKey = $(".search_input").val();
		window.location.href = "mobileSearch.html&key=" + searchKey;
	});
}
function initalIndex(){
		var swiper = new Swiper('.quick_buy', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 3,
		        paginationClickable: true
		    });
		if($('.home_banner .swiper-slide').length > 1) {
			var swiper = new Swiper('.home_banner', {
				loop: true,
				pagination: '.home_banner .swiper-pagination',
				paginationClickable: true
			});
			setInterval(function () {
				swiper.slideNext();
			}, 5000);
		}else{
			$('.home_banner .swiper-pagination').hide();
		}	
}