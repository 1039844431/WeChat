$(function(){
	companyName();
	companyPhone();
	companyInterview();
	website();
	companyIntroduction();
	email();
});
function companyName(){
	$(".info_company_name").on("click",function(event){
			$(".company_name_line").css("display","block");
			$(".company_name_revise").css("display","block");
			$(".info_company_name").css("display","none");
			$(".info_company_name_input").css("display","block");
			$(".info_list_company_name").addClass("info_list_shadow");	
			if($(".info_company_name").text() == "(必填)请填写公司名称"){	
				$(".info_company_name_input").val("");
			}else{
				$(".info_company_name_input").val($(".info_company_name").text());
			}
			$(".info_company_name_input").focus();	
			$(".info_company_name_input").blur(function(){	
				$(".company_name_line").css("display","none");
				$(".company_name_revise").css("display","none");
				if($(".info_company_name_input").val() == ""){
					$(".info_company_name").addClass("darkness_font");
					$(".info_company_name").html("(必填)请填写公司名称");
				}else{
					$(".info_company_name").html($(".info_company_name_input").val());
					$(".info_company_name").removeClass("darkness_font");
				}
				$(".info_company_name_input").css("display","none");
				$(".info_list_company_name").removeClass("info_list_shadow");
				$(".info_company_name").css("display","block");
			});
		});
}
function companyPhone(){
	$(".part_time_info_company_phone").on("click",function(event){
		$(".part_time_company_phone_line").css("display","block");
		$(".part_time_company_phone_revise").css("display","block");
		$(".part_time_info_company_phone").css("display","none");
		$(".part_time_info_company_phone_input").css("display","block");
		$(".part_time_info_list_company_phone").addClass("info_list_shadow");	
		if($(".part_time_info_company_phone").text() == "(必填)请填写联系电话"){	
			$(".part_time_info_company_phone_input").val("");
		}else{
			$(".part_time_info_company_phone_input").val($(".part_time_info_company_phone").text());
		}
		$(".part_time_info_company_phone_input").focus();	
		$(".part_time_info_company_phone_input").blur(function(){	
			$(".part_time_company_phone_line").css("display","none");
			$(".part_time_company_phone_revise").css("display","none");
			if($(".part_time_info_company_phone_input").val() == ""){
				$(".part_time_info_company_phone").addClass("darkness_font");
				$(".part_time_info_company_phone").html("(必填)请填写联系电话");
			}else{
				$(".part_time_info_company_phone").html($(".part_time_info_company_phone_input").val());
				$(".part_time_info_company_phone").removeClass("darkness_font");
			}
			$(".part_time_info_company_phone_input").css("display","none");
			$(".part_time_info_list_company_phone").removeClass("info_list_shadow");
			$(".part_time_info_company_phone").css("display","block");
		});
	});
}
function companyInterview(){

	$(".info_company_interview").on("click",function(event){
		$(".interview_container").css("display","block");	
		$(".info_list_company_interview").addClass("info_list_shadow");	

	});	
	$(".interview_close").on("click",function(event){
		$(".xiala").css("display","none");
		$(".interview_container").css("display","none");
		if($(".info_company_interview").text() == "请填写详细的面试地址" || $(".info_company_interview").text() == ""){
			$(".info_company_interview").html("请填写详细的面试地址");
			$(".info_company_interview").addClass("darkness_font");
		}

		$(".info_list_company_interview").removeClass("info_list_shadow");	
	});
	$(".detail_textarea").focus(function(event){
		if($(".detail_textarea").val().trim() == "请填写详细地址..."){
			$(".detail_textarea").val("  ");
		}
	});
	$(".detail_textarea").blur(function(event){
		if($(".detail_textarea").val().trim() == ""){
			$(".detail_textarea").val("  请填写详细地址...");
		}
	});
	$(".detail_textarea_revise").on("click",function(event){
		if($(".select_interview_city>span").text() == "请选择城市"){
			alert("请选择面试城市");
			return;
		}
		if($(".detail_textarea").val().trim() == "请填写详细地址..." || $(".detail_textarea").val().trim() == ""){
			alert("请填写详细的面试地点");
			return;
		}
		$(".info_company_interview").removeClass("darkness_font");
		$(".info_company_interview").html($(".detail_textarea").val().trim());
		$(".interview_container").css("display","none");
		$(".info_list_company_interview").removeClass("info_list_shadow");	
	});

}

function website(){
	$(".info_company_website").on("click",function(event){
		$(".company_website_line").css("display","block");
		$(".company_website_revise").css("display","block");
		$(".info_company_website").css("display","none");
		$(".info_company_website_input").css("display","block");
		$(".info_list_company_website").addClass("info_list_shadow");	
		if($(".info_company_website").text() == "请填写简历申请地址"){	
			$(".info_company_website_input").val("");
		}else{
			$(".info_company_website_input").val($(".info_company_website").text());
		}
		$(".info_company_website_input").focus();	
		$(".info_company_website_input").blur(function(){	
			$(".company_website_line").css("display","none");
			$(".company_website_revise").css("display","none");
			if($(".info_company_website_input").val() == ""){
				$(".info_company_website").addClass("darkness_font");
				$(".info_company_website").html("请填写简历申请地址");
			}else{
				$(".info_company_website").html($(".info_company_website_input").val());
				$(".info_company_website").removeClass("darkness_font");
			}
			$(".info_company_website_input").css("display","none");
			$(".info_list_company_website").removeClass("info_list_shadow");
			$(".info_company_website").css("display","block");
		});
	});
	
}
function companyIntroduction(){

	$(".info_company_introduction").on("click",function(event){
		$(".info_list_company_introduction").addClass("info_list_shadow");
		$(".company_introduction_container").css("display","block");
		$(".company_introduction_textarea").focus();
		
		if($(".info_company_introduction").text() == "请填写公司简介"){
			$(".company_introduction_textarea").val("  ");
		}
		});

	$(".company_introduction_close").on("click",function(event){
		$(".company_introduction_container").css("display","none");
		$(".info_list_company_introduction").removeClass("info_list_shadow");
	});

	$(".company_introduction_textarea_revise").on("click",function(event){	
		if($(".company_introduction_textarea").val().trim() == ""){
			alert("您还没有填写内容");
			$(".company_introduction_textarea").focus();
			$(".company_introduction_textarea").val("  ");
		}else{			
			$(".info_company_introduction").html($(".company_introduction_textarea").val().trim());
			$(".info_company_introduction").removeClass("darkness_font");
			$(".company_introduction_container").css("display","none");
			$(".info_list_company_introduction").removeClass("info_list_shadow");
		}
	});
}
function email(){
	$(".info_company_email").on("click",function(event){
		$(".company_email_line").css("display","block");
		$(".company_email_revise").css("display","block");
		$(".info_company_email").css("display","none");
		$(".info_company_email_input").css("display","block");
		$(".info_list_company_email").addClass("info_list_shadow");	
		if($(".info_company_email").text() == "简历投递邮箱"){	
			$(".info_company_email_input").val("");
		}else{
			$(".info_company_email_input").val($(".info_company_email").text());
		}
		$(".info_company_email_input").focus();	
		$(".info_company_email_input").blur(function(){	
			$(".company_email_line").css("display","none");
			$(".company_email_revise").css("display","none");
			if($(".info_company_email_input").val() == ""){
				$(".info_company_email").addClass("darkness_font");
				$(".info_company_email").html("简历投递邮箱");
			}else{
				$(".info_company_email").html($(".info_company_email_input").val());
				$(".info_company_email").removeClass("darkness_font");
			}
			$(".info_company_email_input").css("display","none");
			$(".info_list_company_email").removeClass("info_list_shadow");
			$(".info_company_email").css("display","block");
		});
	});
}