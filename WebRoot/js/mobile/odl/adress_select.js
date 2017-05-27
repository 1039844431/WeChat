$(function(){
	function Dsy(){
		this.Items = {};
	}
	Dsy.prototype.add = function(id,iArray){
		this.Items[id] = iArray;
	}
	Dsy.prototype.Exists = function(id){
		if(typeof(this.Items[id]) == "undefined") return false;
		return true;
	}
	var dsy = new Dsy();
	dsy.add("0",["北京市","深圳市","上海市","重庆市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西","海南省","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海省","宁夏","新疆","香港","澳门","台湾省"]);
	dsy.add("0_0",["北京市"]);
	dsy.add("0_1",["深圳市"]);
	dsy.add("0_2",["上海市"]);
	dsy.add("0_3",["重庆市"]);
	dsy.add("0_4",["石家庄市","张家口市","承德市","秦皇岛市","唐山市","廊坊市","保定市","衡水市","沧州市","邢台市","邯郸市"]);
	dsy.add("0_5",["太原市","朔州市","大同市","阳泉市","长治市","晋城市","忻州市","晋中市","临汾市","吕梁市","运城市"]);
	dsy.add("0_6",["呼和浩特市","包头市","乌海市","赤峰市","通辽市","呼伦贝尔市","鄂尔多斯市","乌兰察布市","巴彦淖尔市","兴安盟","锡林郭勒盟","阿拉善盟"]);
	dsy.add("0_7",["沈阳市","朝阳市","阜新市","铁岭市","抚顺市","本溪市","辽阳市","鞍山市","丹东市","大连市","营口市","盘锦市","锦州市","葫芦岛市"]);
	dsy.add("0_8",["长春市","白城市","松原市","吉林市","四平市","辽源市","通化市","白山市","延边州"]);
	dsy.add("0_9",["哈尔滨市","齐齐哈尔市","七台河市","黑河市","大庆市","鹤岗市","伊春市","佳木斯市","双鸭山市","鸡西市","牡丹江市","绥化市","大兴安岭地区"]);
	dsy.add("0_10",["南京市","徐州市","连云港市","宿迁市","淮安市","盐城市","扬州市","泰州市","南通市","镇江市","常州市","无锡市","苏州市"]);
	dsy.add("0_11",["杭州市","湖州市","嘉兴市","舟山市","宁波市","绍兴市","衢州市","金华市","台州市","温州市","丽水市"]);
	dsy.add("0_12",["合肥市","宿州市","淮北市","亳州市","阜阳市","蚌埠市","淮南市","滁州市","马鞍山市","芜湖市","铜陵市","安庆市","黄山市","六安市","巢湖市","池州市","宣城市"]);
	dsy.add("0_13",["福州市","南平市","莆田市","三明市","泉州市","厦门市","漳州市","龙岩市","宁德市"]);
	dsy.add("0_14",["南昌市","九江市","景德镇市","鹰潭市","新余市","萍乡市","赣州市","上饶市","抚州市","宜春市","吉安市"]);
	dsy.add("0_15",["济南市","青岛市","聊城市","德州市","东营市","淄博市","潍坊市","烟台市","威海市","日照市","临沂市","枣庄市","济宁市","泰安市","莱芜市","滨州市","菏泽市"]);
	dsy.add("0_16",["郑州市","开封市","三门峡市","洛阳市","焦作市","新乡市","鹤壁市","安阳市","濮阳市","商丘市","许昌市","漯河市","平顶山市","南阳市","信阳市","周口市","驻马店市","济源市"]);
	dsy.add("0_17",["武汉市","十堰市","襄樊市","荆门市","孝感市","黄冈市","鄂州市","黄石市","咸宁市","荆州市","宜昌市","随州市","省直辖县级行政单位","恩施州"]);
	dsy.add("0_18",["长沙市","张家界市","常德市","益阳市","岳阳市","株洲市","湘潭市","衡阳市","郴州市","永州市","邵阳市","怀化市","娄底市","湘西州"]);
	dsy.add("0_19",["广州市","深圳市","清远市","韶关市","河源市","梅州市","潮州市","汕头市","揭阳市","汕尾市","惠州市","东莞市","珠海市","中山市","江门市","佛山市","肇庆市","云浮市","阳江市","茂名市","湛江市"]);
	dsy.add("0_20",["南宁市","桂林市","柳州市","梧州市","贵港市","玉林市","钦州市","北海市","防城港市","崇左市","百色市","河池市","来宾市","贺州市"]);
	dsy.add("0_21",["海口市","三亚市","省直辖行政单位"]);
	dsy.add("0_22",["成都市","广元市","绵阳市","德阳市","南充市","广安市","遂宁市","内江市","乐山市","自贡市","泸州市","宜宾市","攀枝花市","巴中市","达州市","资阳市","眉山市","雅安市","阿坝州","甘孜州","凉山州"]);
	dsy.add("0_23",["贵阳市","六盘水市","遵义市","安顺市","毕节地区","铜仁地区","黔东南州","黔南州","黔西南州"]);
	dsy.add("0_24",["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","思茅市","临沧市","德宏州","怒江州","迪庆州","大理州","楚雄州","红河州","文山州","西双版纳州"]);
	dsy.add("0_25",["拉萨市","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区"]);
	dsy.add("0_26",["西安市","延安市","铜川市","渭南市","咸阳市","宝鸡市","汉中市","榆林市","安康市","商洛市"]);
	dsy.add("0_27",["兰州市","嘉峪关市","白银市","天水市","武威市","酒泉市","张掖市","庆阳市","平凉市","定西市","陇南市","临夏州","甘南州"]);
	dsy.add("0_28",["西宁市","海东地区","海北州","海南州","黄南州","果洛州","玉树州","海西州"]);
	dsy.add("0_29",["银川市","石嘴山市","吴忠市","固原市","中卫市"]);
	dsy.add("0_30",["乌鲁木齐市","克拉玛依市","自治区直辖县级行政单位","喀什地区","阿克苏地区","和田地区","吐鲁番地区","哈密地区","克孜勒苏柯州","博尔塔拉州","昌吉州","巴音郭楞州","伊犁州","塔城地区","阿勒泰地区"]);
	dsy.add("0_31",["香港特别行政区"]);
	dsy.add("0_32",["澳门特别行政区"]);
	dsy.add("0_33",["台北","高雄","台中","花莲","基隆","嘉义","金门","连江","苗栗","南投","澎湖","屏东","台东","台南","桃园","新竹","宜兰","云林","彰化"]);
	dsy.add("0",["北京市","天津市","上海市","重庆市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西","海南省","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海省","宁夏","新疆","香港","澳门","台湾省"]);


		$(".select_title_city").on("click",function(e){
		$(".xiala>div").remove();
		//省目录加载
		if($(".xiala").css("display")==="none"){
		var ss="";
		var si="";
		var qq="";
		if($(".xiala").css("display")==="none"){
			$(".xiala").css("display","block");
			for(var i=0; i<dsy.Items[0].length; i++){
			$(".xiala").append("<div class='0_"+i+"'><span>"+dsy.Items[0][i]+"</span><p></p></div>");
			}
		}
		//一级目录加载
		$(".xiala").on("click",function(e){
		e.stopPropagation();
		$(".xiala").css("display","none");
		$(".xiala>div>p").css("display","none");
		$(".xiala>div>p>div>p").css("display","none");
		});
		
		
		var x=0;
		
		$(".xiala>div").on("click",function(event){
		event.stopPropagation();
		
		if(($(this).children("p").css("display"))=="none"){
			
		$(".xiala>div>p").css("display","none");
		
		$(".xiala>div>p").html("");
		var position_x =  	$(this).position().left;//父亲的左边距
		var margin_left = document.body.offsetWidth*0.01 - position_x;//设置左边距
		$(this).children("p").css("width",document.body.offsetWidth*0.91);//设置市的大框宽度
		$("#point_direction").remove();
		$(this).children("p").after("<div id=\"point_direction\" class=\"point_direction\"></div>");
		$(this).children("p").css("margin-left",margin_left);
		$(this).children("p").css({
		"display":"block"
		});
		$(".xiala>div").css({
		"background": "#f5f5f5",
		"color":"#666" 
		});
		$(this).css({
		"background":"#ddd",
		"color":"#ff00ff"
		});	
		//ss 省级名称
		ss=$(this).children("span").html();
		$(".select_title_city>span").html(ss);	
		
		x=$(this).attr("class");
		if(($(this).children("p").children("div").length)==""){
		for(var j=0;j<dsy.Items[x].length;j++){
		$(this).children("p").append("<div class='"+x+"_"+j+"'><span>"+dsy.Items[x][j]+"</span><p></p></div>");//加载二级目录
		}
		}
			$(".xiala>div>p>div").on("click",function(ee){
			ee.stopPropagation();
				if(($(this).children("p").css("display"))=="none"){
				si=$(this).children("span").html();
				$(".select_title_city>span").html(si);
				$("#city").val(si);
				$(".xiala>div>p>div>p").css("display","none");
				$(this).children("p").css("display","block");
				var y=$(this).attr("class");
				
				$(".xiala>div>p>div").css({
				"background":"#f5f5f5",
				"color":"#666"
				});
				$(this).css({
				"background":"#ddd",
				"color":"#ff00ff"
				});
				$(this).children("p").css("display","none");
				var xhr=si;
				
				$(".select_title_city>span").html(xhr);
				$("#city").val(si);
				$(".xiala").css("display","none");
				$(".xiala>div>p").css("display","none");

				firstPage(ss);
				
		        
			}else{
				$(this).children("p").css("display","none");
				$(".xiala>div>p>div").children("p").html("");
			}
		});
			}else{
			$(this).children("p").css("display","none");
			$(".xiala>div").children("p").html("");
		}
		});
		}else{
		$(".xiala").css("display","none");
		$(".xiala").html("");
		$(".xiala>div>p").css("display","none");
		$(".xiala>div>p>div>p").css("display","none");
		}
	});
});

