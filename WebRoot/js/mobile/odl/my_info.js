
$(function(){
//	$(".container").css("height",$(document.body).height()*0.9);
	nickName();
	realName();
	password();
	abolishNewPassword();
	reviseNewPassword();
	sendMessage();
	closePassWord();
});

function nickName(){
	$(".revise_nickname").on("click",function(event){
		var getNickName = $(".info_nickname").text();
		$(".info_list_nickname").addClass("info_list_shadow");
		$(".info_nickname").css("display","none");
		$(".info_nickname_input").css("display","block");
		$(".info_nickname_input").focus();
		$(".info_nickname_input").val(getNickName);
		$(".info_nickname_input").blur(function(){
			$(".info_nickname_input").css("display","none");
			$(".info_nickname").css("display","block");
			$(".info_nickname").html($(".info_nickname_input").val());
			$(".info_list_nickname").removeClass("info_list_shadow");
		});
	});
}
function realName(){
	$(".revise_realname").on("click",function(event){
		var getRealName = $(".info_realname").text();
		$(".info_list_realname").addClass("info_list_shadow");
		$(".info_realname").css("display","none");
		$(".info_realname_input").css("display","block");
		$(".info_realname_input").focus();
		$(".info_realname_input").val(getRealName);
		$(".info_realname_input").blur(function(){
			$(".info_realname_input").css("display","none");
			$(".info_realname").css("display","block");
			$(".info_realname").html($(".info_realname_input").val());
			$(".info_list_realname").removeClass("info_list_shadow");
		});
	});
}
function password(){
	$(".revise_password").on("click",function(event){
		$(".old_info_password").css("display","none");
		$(".new_info_password_container").css("display","block");
		$(".odl_password_name").focus();
	});
}
function abolishNewPassword(){
	    $(".abolish_new_password").on("click",function(event){
	    $(".abolish_new_password").removeClass("button_shadow");
	    setTimeout(function(){
			$(".abolish_new_password").addClass("button_shadow");
		},200);
		$(".new_info_password_container").css("display","none");
		$(".old_info_password").css("display","block");
	});
}
function reviseNewPassword(){
	$(".revise_new_password").on("click",function(event){
	    $(".revise_new_password").removeClass("button_shadow");
	    setTimeout(function(){
			$(".revise_new_password").addClass("button_shadow");
		},200);
	   
	    
	    if($(".new_password_name").val() == ''){
	    	alert("亲，密码不能为空哦！");
	    	$(".new_password_name").focus();
	    	return;
	    }
	    if($(".new_password_name").val() != $(".revise_password_name").val()){
	    	alert("亲，两次输入的密码不一致哦！");
	    	$(".revise_password_name").focus();
	    	return;
	    }
	    /*
	     * 此处要从后台获取是否密码正确
	     */
	    $(".set_new_password").html($(".revise_password_name").val());
		$(".new_info_password_container").css("display","none");
		$(".old_info_password").css("display","block");
	});
}
function closePassWord(){
	$(".close").on("click",function(event){
		$(".new_info_phone_container").css("display","none");
		$(".info_list_phone").css("display","block");
	});
}

function sendMessage(){
	$(".revise_phone").on("click",function(){
		$(".info_list_phone").css("display","none");
		$(".new_info_phone_container").css("display","block");
	
	});
	$(".confire_message").on("click",function(event){
		$(".new_info_phone_container").css("display","none");
		(".info_list_phone").css("display","block");
		alert($(".phone_number").val()); 
		$(".phone_div").html($(".phone_number").val());
		
	});
}



