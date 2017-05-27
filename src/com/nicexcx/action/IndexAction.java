package com.nicexcx.action;



import java.io.IOException;
import java.util.List;



import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.nicexcx.contains.ServiceProvider;
import com.nicexcx.domain.CategoryDic;
import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.from.PageAppDetailFrom;
import com.nicexcx.service.IAppDetailService;
import com.nicexcx.service.ICategoryDicService;
import com.nicexcx.service.IGoodRecommendService;
import com.nicexcx.service.IHotRecommendService;
import com.nicexcx.util.StringHelp;

import com.opensymphony.xwork2.ModelDriven;
public class IndexAction extends BaseAction implements ModelDriven<AppDetailFrom>{	
	private AppDetailFrom appDetailFrom = new AppDetailFrom();
	private IAppDetailService appDetailService = (IAppDetailService) ServiceProvider.getService(IAppDetailService.SERVICE_NAME);
	private ICategoryDicService categoryDicService = (ICategoryDicService) ServiceProvider.getService(ICategoryDicService.SERVICE_NAME);
	private IHotRecommendService hotRecommendService = (IHotRecommendService) ServiceProvider.getService(IHotRecommendService.SERVICE_NAME);
	private IGoodRecommendService goodRecommendService = (IGoodRecommendService) ServiceProvider.getService(IGoodRecommendService.SERVICE_NAME);
	public AppDetailFrom getModel() {
		return appDetailFrom;
	}

	/*
	    * @Name: categoryDic
		* @Description: 进入首页加载类别
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: 无
		* @Return: 无
	 */
	public String categoryDic(){
		 response.setCharacterEncoding("utf-8");
		 List<CategoryDic> categoryDicList = categoryDicService.findCategoryDicList();
		 JSONArray  categoryDicjson  = JSONArray.fromObject(categoryDicList);
		 try {
				response.getWriter().print(categoryDicjson.toString());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return null;
	}
	
	public String index(){
		String ua = request.getHeader("User-Agent");
		if(StringHelp.checkAgentIsMobile(ua)){
			
			return "mobileIndex";
		}else{
			List<CategoryDic> categoryDicList = categoryDicService.findCategoryDicList();
			PageAppDetailFrom yinyingDetailFrom  = appDetailService.findAppDetailListByCategory(request, "1");
			PageAppDetailFrom shejiaoDetailFrom  = appDetailService.findAppDetailListByCategory(request, "12");
			PageAppDetailFrom jinrongDetailFrom  = appDetailService.findAppDetailListByCategory(request, "5");
			PageAppDetailFrom gongjuDetailFrom  = appDetailService.findAppDetailListByCategory(request, "7");
			PageAppDetailFrom luyouDetailFrom  = appDetailService.findAppDetailListByCategory(request, "3");
			request.setAttribute("yinyingDetailFrom", yinyingDetailFrom);
			request.setAttribute("shejiaoDetailFrom", shejiaoDetailFrom);
			request.setAttribute("jinrongDetailFrom", jinrongDetailFrom);
			request.setAttribute("gongjuDetailFrom", gongjuDetailFrom);
			request.setAttribute("luyouDetailFrom", luyouDetailFrom);
			request.setAttribute("categoryDicList", categoryDicList);
		}
		return "index";
	}

	public String mobileIndex(){
		return "mobileIndex";
	}
}





