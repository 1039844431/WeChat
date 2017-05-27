$(function(){
	companyNameOnclick();
	money();
	interviewOnclick();
	clearCity();
	detailTextarea();
	website();
	jobDetailsClose();
	jobDetailTextareaRevise();
	companyJobDetails();
	majorSelect();
	jobSelect();
	jobSelectClose();
	companyPractice();
	workClassContainer();
	time();
	weekSelect();
});

function companyNameOnclick(){

	//兼职电话
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
	//兼职招聘人数
	$(".part_time_people_count").on("click",function(event){
		$(".part_time_people_count_line").css("display","block");
		$(".part_time_people_count_revise").css("display","block");
		$(".unit_people").css("display","block");
		$(".part_time_people_count").css("display","none");
		$(".part_time_people_count_input").css("display","block");
		$(".part_time_info_list_people_count").addClass("info_list_shadow");	
		if($(".part_time_people_count").text() == "(必填)请填宣招聘人数(人)"){	
			$(".part_time_people_count_input").val("");
		}else{
			$(".part_time_people_count_input").val($(".part_time_people_count").text());
		}
		$(".part_time_people_count_input").focus();	
		$(".part_time_people_count_input").blur(function(){	
			$(".part_time_people_count_line").css("display","none");
			$(".part_time_people_count_revise").css("display","none");
			if($(".part_time_people_count_input").val() == ""){
				$(".part_time_people_count").addClass("darkness_font");
				$(".part_time_people_count").html("(必填)请填宣招聘人数(人)");
				$(".unit_people").css("display","none");
			}else{
				$(".part_time_people_count").html($(".part_time_people_count_input").val());
				$(".part_time_people_count").removeClass("darkness_font");
				$(".part_time_people_count").addClass("part_time_people_count_width");
			}
			$(".part_time_people_count_input").css("display","none");
			$(".part_time_info_list_people_count").removeClass("info_list_shadow");
			$(".part_time_people_count").css("display","block");
		});
	});
	//////////兼职待遇
	$(".part_time_info_money_day").on("click",function(event){
		$(".part_time_money_day_line").css("display","block");
		$(".part_time_money_day_revise").css("display","block");
		$(".unit_day").css("display","block");
		$(".part_time_info_money_day").css("display","none");
		$(".part_time_money_day_input").css("display","block");
		$(".part_time_info_list_money_day").addClass("info_list_shadow");	
		if($(".part_time_info_money_day").text() == "(必填)请填写待遇(元/天)"){	
			$(".part_time_money_day_input").val("");
		}else{
			$(".part_time_money_day_input").val($(".part_time_info_money_day").text());
		}
		$(".part_time_money_day_input").focus();	
		$(".part_time_money_day_input").blur(function(){	
			$(".part_time_money_day_line").css("display","none");
			$(".part_time_money_day_revise").css("display","none");
			if($(".part_time_money_day_input").val() == ""){
				$(".part_time_info_money_day").addClass("darkness_font");
				$(".part_time_info_money_day").html("(必填)请填写待遇(元/天)");
				$(".unit_day").css("display","none");
			}else{
				$(".part_time_info_money_day").html($(".part_time_money_day_input").val());
				$(".part_time_info_money_day").removeClass("darkness_font");
				$(".part_time_info_money_day").addClass("part_time_people_count_width");
			}
			$(".part_time_money_day_input").css("display","none");
			$(".part_time_info_list_money_day").removeClass("info_list_shadow");
			$(".part_time_info_money_day").css("display","block");
		});
	});
 }

function money(){	
	$(".money_close").on("click",function(event){
		$(".info_list_company_money").removeClass("info_list_shadow");
		$(".money_container").css("display","none");
	});
	$(".info_company_money").on("click",function(event){
		$(".info_list_company_money").addClass("info_list_shadow");
		$(".money_container").css("display","block");
	});
	$(".money_every_container>div").on("click",function(event){	
		$(".money_every_container>div").removeClass("select_money_checkmark");
		$(".money_every_container>div").addClass("no_select_money_circle");
		$(this).removeClass("no_select_money_circle");
		$(this).addClass("select_money_checkmark");
		$(".info_company_money").html($(this).text());
	});
	$(".part_time_sex_every_container>div").on("click",function(event){	
		$(".part_time_sex_every_container>div").removeClass("select_money_checkmark");
		$(".part_time_sex_every_container>div").addClass("no_select_money_circle");
		$(this).removeClass("no_select_money_circle");
		$(this).addClass("select_money_checkmark");
		$(".part_time_info_part_time_sex").html($(this).text());
	});
	$(".part_time_info_part_time_sex").on("click",function(event){
		$(".part_time_info_list_sex").addClass("info_list_shadow");
		$(".part_time_sex_container").css("display","block");
	});
	$(".part_time_sex_close").on("click",function(event){
		$(".part_time_info_list_sex").removeClass("info_list_shadow");
		$(".part_time_sex_container").css("display","none");
	});
}

function interviewOnclick(){
	
	//////宣讲会
	$(".preach_info_company_adress").on("click",function(event){
		$(".preach_interview_container").css("display","block");	
		$(".preach_info_list_company_adress").addClass("info_list_shadow");	

	});	
	$(".preach_interview_close").on("click",function(event){
		$(".xiala").css("display","none");
		$(".preach_interview_container").css("display","none");
		if($(".preach_info_company_adress").text() == "(必填)请填宣讲地址" || $(".preach_info_company_adress").text() == ""){
			$(".preach_info_company_adress").html("(必填)请填宣讲地址");
			$(".preach_info_company_adress").addClass("darkness_font");
		}
		
		$(".preach_info_list_company_adress").removeClass("info_list_shadow");	
	});
	
	/////兼职地址
	$(".part_time_info_company_adress").on("click",function(event){
		$(".part_time_adress_container").css("display","block");	
		$(".part_time_info_list_adress").addClass("info_list_shadow");	

	});	
	$(".part_time_adress_close").on("click",function(event){
		$(".xiala").css("display","none");
		$(".part_time_adress_container").css("display","none");
		if($(".part_time_info_company_adress").text() == "(必填)请填工作地址" || $(".preach_info_company_adress").text() == ""){
			$(".part_time_info_company_adress").html("(必填)请填宣讲地址");
			$(".part_time_info_company_adress").addClass("darkness_font");
		}		
		$(".part_time_info_list_adress").removeClass("info_list_shadow");	
	});
		
 }

function clearCity(){
	$(".work_city_revise").on("click",function(event){
		$(".select_adress").html("(必填)可多选");
		$(".select_adress").addClass("darkness_font");
		$(".work_city_line").css("display","none");
		$(".work_city_revise").css("display","none");
		$(".select_title_work_city").removeClass("select_work_city_width");
	});
	}
function detailTextarea(){	
	//////////////实习校招
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
//////////////宣讲会
	$(".preach_detail_textarea").focus(function(event){
		if($(".preach_detail_textarea").val().trim() == "请填写详细地址..."){
			$(".preach_detail_textarea").val("  ");
		}
	});
	$(".preach_detail_textarea").blur(function(event){
		if($(".preach_detail_textarea").val().trim() == ""){
			$(".preach_detail_textarea").val("  请填写详细地址...");
		}
	});
	$(".preach_detail_textarea_revise").on("click",function(event){
		if($(".preach_select_interview_city>span").text() == "请选择城市"){
			alert("请选择宣讲会城市");
			return;
		}
		if($(".preach_detail_textarea").val().trim() == "请填写详细地址..." || $(".preach_detail_textarea").val().trim() == ""){
			alert("请填写详细的宣讲会地点");
			return;
		}
		$(".preach_info_company_adress").removeClass("darkness_font");
		$(".preach_info_company_adress").html($(".preach_detail_textarea").val().trim());
		$(".preach_interview_container").css("display","none");
		$(".preach_info_list_company_adress").removeClass("info_list_shadow");	
	});
	////////兼职地点
	$(".part_time_adress_textarea").focus(function(event){
		if($(".part_time_adress_textarea").val().trim() == "请填写详细地址..."){
			$(".part_time_adress_textarea").val("  ");
		}
	});
	$(".part_time_adress_textarea").blur(function(event){
		if($(".part_time_adress_textarea").val().trim() == ""){
			$(".part_time_adress_textarea").val("  请填写详细地址...");
		}
	});
	$(".part_time_adress_textarea_revise").on("click",function(event){
		if($(".select_part_time_city>span").text() == "请选择城市"){
			alert("请选择面试城市");
			return;
		}
		if($(".part_time_adress_textarea").val().trim() == "请填写详细地址..." || $(".part_time_adress_textarea").val().trim() == ""){
			alert("请填写详细的工作地点");
			return;
		}
		$(".part_time_info_company_adress").removeClass("darkness_font");
		$(".part_time_info_company_adress").html($(".part_time_adress_textarea").val().trim());
		$(".part_time_adress_container").css("display","none");
		$(".part_time_info_list_adress").removeClass("info_list_shadow");	
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
	
	$(".info_company_email").on("click",function(event){
		$(".company_email_line").css("display","block");
		$(".company_email_revise").css("display","block");
		$(".info_company_email").css("display","none");
		$(".info_company_email_input").css("display","block");
		$(".info_list_company_email").addClass("info_list_shadow");	
		if($(".info_company_email").text() == "(必填)简历投递邮箱"){	
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
				$(".info_company_email").html("(必填)简历投递邮箱");
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
function jobDetailsClose(){//招聘要求和公司简介关闭
	//招聘要求
	$(".job_details_close").on("click",function(event){
		$(".job_details_container").css("display","none");
		$(".info_list_company_job_details").removeClass("info_list_shadow");
	});
	//公司简介
	$(".company_introduction_close").on("click",function(event){
		$(".company_introduction_container").css("display","none");
		$(".info_list_company_introduction").removeClass("info_list_shadow");
	});
	//宣讲会公司简介
	$(".preach_company_introduction_close").on("click",function(event){
		$(".preach_company_introduce_container").css("display","none");
		$(".preach_info_list_company_introduce").removeClass("info_list_shadow");
	});
	//宣讲说明
	$(".preach_company_state_close").on("click",function(event){
		$(".preach_company_state_container").css("display","none");
		$(".preach_info_list_company_state").removeClass("info_list_shadow");
	});
	//兼职标题
	$(".part_time_title_close").on("click",function(event){
		$(".part_time_title_container").css("display","none");
		$(".part_time_info_list_title").removeClass("info_list_shadow");
	});
	//校招标题
	$(".school_job_title_close").on("click",function(event){
		$(".school_job_title_container").css("display","none");
		$(".school_job_info_list_title").removeClass("info_list_shadow");
	});
	//兼职岗位介绍
	$(".part_time_job_detail_close").on("click",function(event){
		$(".part_time_job_detail_container").css("display","none");
		$(".part_time_info_list_job_detail").removeClass("info_list_shadow");
	});
}
function jobDetailTextareaRevise(){//公司简介和招聘要求确定按钮
	//招聘要求
	$(".job_detail_textarea_revise").on("click",function(event){	
		if($(".job_detail_textarea").val().trim() == ""){
			
			$(".job_details_container").css("display","none");
			$(".info_company_job_details").addClass("darkness_font");
			$(".info_list_company_job_details").removeClass("info_list_shadow");
		}else{			
			$(".info_company_job_details").html($(".job_detail_textarea").val().trim());
			$(".info_company_job_details").removeClass("darkness_font");
			$(".job_details_container").css("display","none");
			$(".info_list_company_job_details").removeClass("info_list_shadow");
		}
	});
	//公司简介
	$(".company_introduction_textarea_revise").on("click",function(event){	
		if($(".company_introduction_textarea").val().trim() == ""){
			alert("您还没有填写内容");
			$(".company_introduction_textarea").focus();
			$(".company_introduction_textarea").val("  ");
		}else{			
			$(".info_company_introduction").html($(".job_detail_textarea").val().trim());
			$(".info_company_introduction").removeClass("darkness_font");
			$(".company_introduction_container").css("display","none");
			$(".info_list_company_introduction").removeClass("info_list_shadow");
		}
	});
	//宣讲会公司简介提交
	$(".preach_company_introduce_textarea_revise").on("click",function(event){	
		if($(".preach_company_introduce_textarea").val().trim() == ""){
			alert("您还没有填写内容");
			$(".preach_company_introduce_textarea").focus();
			$(".preach_company_introduce_textarea").val("  ");
		}else{			
			$(".preach_info_company_introduce").html($(".preach_company_introduce_textarea").val().trim());
			$(".preach_info_company_introduce").removeClass("darkness_font");
			$(".preach_company_introduce_container").css("display","none");
			$(".preach_info_list_company_introduce").removeClass("info_list_shadow");
		}
	});
	//宣讲说明
	$(".preach_company_state_textarea_revise").on("click",function(event){	
		if($(".preach_company_state_textarea").val().trim() == ""){
			alert("您还没有填写内容");
			$(".preach_company_state_textarea").focus();
			$(".preach_company_state_textarea").val("  ");
		}else{			
			$(".preach_info_company_state").html($(".preach_company_state_textarea").val().trim());
			$(".preach_info_company_state").removeClass("darkness_font");
			$(".preach_company_state_container").css("display","none");
			$(".preach_info_list_company_state").removeClass("info_list_shadow");
		}
	});
	//兼职标题
	$(".part_time_title_textarea_revise").on("click",function(event){	
		if($(".part_time_title_textarea").val().trim() == ""){
			alert("您还没有填写内容");
			$(".part_time_title_textarea").focus();
			$(".part_time_title_textarea").val("  ");
		}else{			
			$(".part_time_info_title").html($(".part_time_title_textarea").val().trim());
			$(".part_time_info_title").removeClass("darkness_font");
			$(".part_time_title_container").css("display","none");
			$(".part_time_info_list_title").removeClass("info_list_shadow");
		}
	});
	//兼职岗位
	$(".part_time_job_detail_textarea_revise").on("click",function(event){	
		if($(".part_time_job_detail_textarea").val().trim() == ""){
			alert("您还没有填写内容");
			$(".part_time_job_detail_textarea").focus();
			$(".part_time_job_detail_textarea").val("  ");
		}else{			
			$(".part_time_info_job_detail").html($(".part_time_job_detail_textarea").val().trim());
			$(".part_time_info_job_detail").removeClass("darkness_font");
			$(".part_time_job_detail_container").css("display","none");
			$(".part_time_info_list_job_detail").removeClass("info_list_shadow");
		}
	});
}
function companyJobDetails(){
	//招聘要求
	$(".info_company_job_details").on("click",function(event){
	$(".info_list_company_job_details").addClass("info_list_shadow");
	$(".job_details_container").css("display","block");
	$(".job_detail_textarea").focus();

	if($(".info_company_job_details").text() == "请输入招聘要求"){
		$(".job_detail_textarea").val("  ");
	}
	});
	
	//宣讲说明
	$(".preach_info_company_state").on("click",function(event){
		$(".preach_info_list_company_state").addClass("info_list_shadow");
		$(".preach_company_state_container").css("display","block");
		$(".preach_company_state_textarea").focus();
		
		if($(".preach_info_company_state").text() == "请填宣讲说明"){
			$(".part_time_title_textarea").val("  ");
		}
		
		});
	//兼职标题
	$(".part_time_info_title").on("click",function(event){
		$(".part_time_info_list_title").addClass("info_list_shadow");
		$(".part_time_title_container").css("display","block");
		$(".part_time_title_textarea").focus();
		if($(".part_time_info_title").text() == "(必填,少于20字)一句话描叙内容"){
			$(".part_time_title_textarea").val("  ");
		}	
		});
	//招聘实习标题
	$(".school_job_info_title").on("click",function(event){
		$(".school_job_info_list_title").addClass("info_list_shadow");
		$(".school_job_title_container").css("display","block");
		$(".school_job_title_textarea").focus();
		if($(".school_job_info_title").text() == "(必填,少于20字)一句话描叙内容"){
			$(".school_job_title_textarea").val("  ");
		}	
		});
	//兼职介绍
	$(".part_time_info_job_detail").on("click",function(event){
		$(".part_time_info_list_job_detail").addClass("info_list_shadow");
		$(".part_time_job_detail_container").css("display","block");
		$(".part_time_job_detail_textarea").focus();
		if($(".part_time_info_job_detail").text() == "(必填)请填写工作内容"){
			$(".part_time_job_detail_textarea").val("  ");
		}	
		});
}

function majorSelect(){	
	$(".major_select_close").on("click",function(event){
		$(".info_list_company_major_select").removeClass("info_list_shadow");
		$(".major_select_container").css("display","none");
	});
	$(".info_company_major_select").on("click",function(event){
		$(".info_list_company_major_select").addClass("info_list_shadow");
		$(".major_select_container").css("display","block");
	});
	$(".major_every_container>div").on("click",function(event){	
		$(".info_company_major_select").removeClass("darkness_font");
		$(".major_every_container>div").removeClass("select_money_checkmark");
		$(".major_every_container>div").addClass("no_select_money_circle");
		$(this).removeClass("no_select_money_circle");
		$(this).addClass("select_money_checkmark");
		$(".info_company_major_select").html($(this).text());
	});
}

function jobSelect(){
	$(".no_all_job>div").on("click",function(event){	
		if($(this).hasClass("select_money_checkmark")){
			$(this).removeClass("select_money_checkmark");	
			if($(".info_company_job_select").text().indexOf(",") == -1){
				$(".info_company_job_select").text("(必填)请选择招收岗位");
				
			}else{	
				var job = "," + $(this).text();
				$(".info_company_job_select").text($(".info_company_job_select").text().replace(job,""));
			}	
		}else{
			$(this).removeClass("no_select_money_circle");
			$(this).addClass("select_money_checkmark");
			if($(".info_company_job_select").text() == "(必填)请选择招收岗位"){
				$(".info_company_job_select").text($(this).text());
			}else{
				
				$(".info_company_job_select").text($(".info_company_job_select").text() + "," + $(this).text());
			}
		}
		if($(".info_company_job_select").text() == "(必填)请选择招收岗位"){
			$(".info_company_job_select").addClass("darkness_font");
		}else{
			$(".info_company_job_select").removeClass("darkness_font");
		}
		$(".all_job").removeClass("select_money_checkmark");
	});
	$(".all_job").on("click",function(event){
		    $(".info_company_job_select").text("全部职能");
			$(".no_all_job>div").removeClass("select_money_checkmark");
			
			
			$(".all_job").addClass("select_money_checkmark");
		
	});
}


function weekSelect(){
	$(".no_all_week>div").on("click",function(event){	
		if($(this).hasClass("select_money_checkmark")){
			$(this).removeClass("select_money_checkmark");	
			if($(".part_time_info_week").text().indexOf(",") == -1){
				$(".part_time_info_week").text("不限");
				$(".all_week").addClass("select_money_checkmark");
				
			}else{	
				var week = "," + $(this).text();
				$(".part_time_info_week").text($(".part_time_info_week").text().replace(week,""));
			}	
		}else{
			$(this).removeClass("no_select_money_circle");
			$(this).addClass("select_money_checkmark");
			if($(".part_time_info_week").text() == "不限"){
				$(".part_time_info_week").text($(this).text());
			}else{
				
				$(".part_time_info_week").text($(".part_time_info_week").text() + "," + $(this).text());
			}
		}
		$(".all_week").removeClass("select_money_checkmark");
		$(".all_week").addClass("no_select_money_circle");
	});
	$(".all_week").on("click",function(event){	
		    $(".part_time_info_week").text("不限");
			$(".no_all_week>div").removeClass("select_money_checkmark");
			$(".no_all_week>div").addClass("no_select_money_circle");
			$(".all_week").removeClass("no_select_money_circle");
			$(".all_week").addClass("select_money_checkmark");
		
	});
}

function jobSelectClose(){
	$(".info_company_job_select").on("click",function(event){
		$(".job_container").css("display","block");
		$(".info_list_company_job_select").addClass("info_list_shadow");
	});
	
	$(".job_select_close").on("click",function(event){
		$(".job_container").css("display","none");
		$(".info_list_company_job_select").removeClass("info_list_shadow");
	});
	$(".part_time_week_close").on("click",function(event){
		$(".part_time_week_container").css("display","none");
		$(".part_time_info_list_week").removeClass("info_list_shadow");
	});
	
	$(".part_time_info_week").on("click",function(event){
		$(".part_time_week_container").css("display","block");
		$(".part_time_info_list_week").addClass("info_list_shadow");
	});
}

function companyPractice(){
	$(".info_list_company_practice").on("click",function(enevt){
		if($(".info_company_practice").text() == "实习"){
			$(".info_company_practice").text("校招");
		}else{
			$(".info_company_practice").text("实习");
		}
	});
}
function workClassContainer(){
	$(".work_class_container>div").on("click",function(event){
		$(".work_class_container>div").removeClass("select_checkmark");
		$(".work_class_container>div").addClass("no_select_circle");
		$(this).removeClass("no_select_circle");
		$(this).addClass("select_checkmark");
		if($(this).hasClass("work_class_school")){
			$(".school_details_container").css("display","block");
			$(".preach_details_container").css("display","none");
			$(".part_time_details_container").css("display","none");
		}else if($(this).hasClass("work_class_preach")){
			$(".school_details_container").css("display","none");
			$(".preach_details_container").css("display","block");
			$(".part_time_details_container").css("display","none");
		}else{
			$(".school_details_container").css("display","none");
			$(".preach_details_container").css("display","none");
			$(".part_time_details_container").css("display","block");
		}
	});
}
function time(){
	$('#beginTime').date();
	$('#endTime').date({theme:"datetime"});
	$(".part_time_start_time").date();
	$(".part_time_end_time").date();
}