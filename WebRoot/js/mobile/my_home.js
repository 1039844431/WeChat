$(function(){
	$(".user_name_block_white").removeClass("user_name_block_white");
	$(".mycollect_list_onclick").removeClass("mycollect_list_onclick");
	$(".myissue_list_onclick").removeClass("myissue_list_onclick");
	$(".myemploy_list_onclick").removeClass("myemploy_list_onclick");
	
	

	///////////
	$(".my_home_list_mycollect").on("click",function(e){
		$(".my_home_list_mycollect").addClass('mycollect_list_onclick');
		
		$(".my_home_list_mycollect").removeClass('my_home_list_mycollect');
		setTimeout(function(){
			$(".mycollect_list_onclick").addClass('my_home_list_mycollect');
			
			$(".mycollect_list_onclick").removeClass('mycollect_list_onclick');
			
			},100);
		
	});
	///////
	$(".my_home_list_myissue").on("click",function(e){
		$(".my_home_list_myissue").addClass('myissue_list_onclick');
		
		$(".my_home_list_myissue").removeClass('my_home_list_myissue');
		setTimeout(function(){
			$(".myissue_list_onclick").addClass('my_home_list_myissue');
			
			$(".myissue_list_onclick").removeClass('myissue_list_onclick');
			},100);
	});
	
		$(".user_name_block").on("click",function(e){		
		if($("#session_user").val() == ""){
			$(".user_login_container").css("display","block");
			$(".code_image").attr("src","system/LoginAction_getVerifyCode.do?" + Math.random());
			return;
		}

	});
	////////
	$(".my_home_list_myemploy").on("click",function(e){
		
		
		$(".my_home_list_myemploy").addClass('myemploy_list_onclick');
		
		$(".my_home_list_myemploy").removeClass('my_home_list_myemploy');
		setTimeout(function(){
			$(".myemploy_list_onclick").addClass('my_home_list_myemploy');
			
			$(".my_home_list_myemploy").removeClass('myemploy_list_onclick');
			},100);
	});
gotoMobileCollect();
gotoMobileIssue();
});

function gotoMobileCollect(){
	$("#gotoMobileCollect").click(function (){
		if($("#session_user").val() == ""){
			alert("宝贝，你还没有登录哦！");
		}else{
			window.location.href = "gotoMobileCollect.html";
		};
	});
}

function gotoMobileIssue(){
	$("#gotoMobileIssue").click(function (){
		if($("#session_user").val() == ""){
			alert("宝贝，你还没有登录哦！");
		}else{
			window.location.href = "gotoMobileIssue.html";
		};
	});
}