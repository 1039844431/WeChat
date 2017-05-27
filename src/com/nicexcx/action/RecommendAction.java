package com.nicexcx.action;



import java.io.IOException;
import java.util.List;



import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.nicexcx.contains.ServiceProvider;
import com.nicexcx.domain.CategoryDic;
import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.service.IAppDetailService;
import com.nicexcx.service.ICategoryDicService;
import com.nicexcx.service.IGoodRecommendService;
import com.nicexcx.service.IHotRecommendService;

import com.opensymphony.xwork2.ModelDriven;
public class RecommendAction extends BaseAction implements ModelDriven<AppDetailFrom>{	
	private AppDetailFrom appDetailFrom = new AppDetailFrom();
	private IHotRecommendService hotRecommendService = (IHotRecommendService) ServiceProvider.getService(IHotRecommendService.SERVICE_NAME);
	private IGoodRecommendService goodRecommendService = (IGoodRecommendService) ServiceProvider.getService(IGoodRecommendService.SERVICE_NAME);
	public AppDetailFrom getModel() {
		return appDetailFrom;
	}

	/*
	    * @Name: categoryDic
		* @Description: 进入加载热门推荐
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: 无
		* @Return: 无
	 */
	public String findHotRecommendList(){
		 response.setCharacterEncoding("utf-8");
		 List<AppDetailFrom> hotRecommendList = hotRecommendService.findHotRecommendList();
		 JSONArray  hotRecommendListJson  = JSONArray.fromObject(hotRecommendList);
		 try {
				response.getWriter().print(hotRecommendListJson.toString());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return null;
	}
	
	/*
	    * @Name: categoryDic
		* @Description: 进入加载精品推荐
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: 无
		* @Return: 无
	 */
	public String findGoodRecommendList(){
		 response.setCharacterEncoding("utf-8");
		 List<AppDetailFrom> goodRecommendList = goodRecommendService.findGoodRecommendList();
		 JSONArray  goodRecommendListJson  = JSONArray.fromObject(goodRecommendList);
		 try {
				response.getWriter().print(goodRecommendListJson.toString());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return null;
	}
}





