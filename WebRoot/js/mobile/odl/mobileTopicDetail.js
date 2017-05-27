$(function (){
	
	collect();
	initalTopicDiv();
});


function collect(){
	
	$(".collect").on("click",function(){	
		
			 if($("#session_user").val() == ""){
					 if(!window.confirm('您还没有登录哦，现在登录吗？')){
			             return;
			         }else{
			        	window.location.href = "mobileLoginHome.html";
			        	 return;
			         }	
			}
			var appDetailID = $("#appDetailID").val();
			$(".collect_active").removeClass("active");
			$(".collect_active").addClass("collect_start");
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
		});
}
function initalTopicDiv(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        autoplay : 2000,
        autoplayDisableOnInteraction : true,
        slidesPerView : 2,
        centeredSlides : true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
}