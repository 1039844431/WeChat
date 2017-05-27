package com.nicexcx.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import com.nicexcx.contains.ServiceProvider;
import com.nicexcx.domain.CategoryDic;

import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.from.PageAppDetailFrom;
import com.nicexcx.from.PageCommentFrom;

import com.nicexcx.service.IAppDetailService;
import com.nicexcx.service.ICategoryDicService;
import com.nicexcx.service.ICommentService;

import com.nicexcx.util.PageNumber;
import com.nicexcx.util.ReturnMessageBean;

import com.opensymphony.xwork2.ModelDriven;
public class AppDetailAction extends MoreFileUploadAction implements ModelDriven<AppDetailFrom>{	
	private AppDetailFrom appDetailFrom = new AppDetailFrom();
	private ICommentService commentService = (ICommentService) ServiceProvider.getService(ICommentService.SERVICE_NAME);
	private IAppDetailService appDetailService = (IAppDetailService) ServiceProvider.getService(IAppDetailService.SERVICE_NAME);
	private ICategoryDicService categoryDicService = (ICategoryDicService) ServiceProvider.getService(ICategoryDicService.SERVICE_NAME);
	public AppDetailFrom getModel() {
		return appDetailFrom;
	}

	/*
	    * @Name: detail
		* @Description: 根据每条记录的ID进行查找
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: appID
		* @Return: 无
	 */
	public String detail(){
		String appID = request.getParameter("appID");
		if(appID != null && !appID.equals("")){
			AppDetailFrom appDetailFrom = appDetailService.findAppDetailFromByID(appID);
			PageCommentFrom  pageCommentFrom  = commentService.getCommentListByAppDetaiId(request, appID);
			request.setAttribute("appDetailFrom", appDetailFrom);
			request.setAttribute("pageCommentFrom", pageCommentFrom);
		}
		
		return "detail";
	}
	public String mobileDetail(){
		String appID = request.getParameter("appID");
		if(appID != null && !appID.equals("")){
			AppDetailFrom appDetailFrom = appDetailService.findAppDetailFromByID(appID);
			PageCommentFrom  pageCommentFrom  = commentService.getCommentListByAppDetaiId(request, appID);
			request.setAttribute("appDetailFrom", appDetailFrom);
			request.setAttribute("pageCommentFrom", pageCommentFrom);
		}
		return "mobileDetail";
	}
	public String putCategory(){
		String CategoryKey = request.getParameter("CategoryKey").trim();		
		String CategoryValue = "";
		List<CategoryDic> categoryDicList = categoryDicService.findCategoryDicList();
		if(CategoryKey != null && !CategoryKey.equals("") && categoryDicList != null && categoryDicList.size() > 0){
			for(CategoryDic categoryDic :categoryDicList){
				if(categoryDic != null && categoryDic.getKey() != null){
					if(CategoryKey.equals(categoryDic.getKey())){
						CategoryValue = categoryDic.getValue();
						break;
					}
				}
			}		
		}
		PageAppDetailFrom pageAppDetailFrom = appDetailService.findAppDetailListByCategory(request, CategoryKey);
		if(CategoryKey != null){
			pageAppDetailFrom.setCateGoryKey(CategoryKey);
		}
		if(CategoryValue != null){
			pageAppDetailFrom.setCateGoryValue(CategoryValue);
		}
		//添加页码信息
		
		if(pageAppDetailFrom != null && pageAppDetailFrom.getTotalResult() > 0){
			int totalPage = pageAppDetailFrom.getTotalPage();
			List<PageNumber> pageNumberList = new ArrayList<PageNumber>();
			String pageNum = request.getParameter("pageNO");
			if(pageNum != null && !pageNum.equals("")){
			int pageNumInt = Integer.valueOf(pageNum.trim());
			pageAppDetailFrom.setCurrentPageNo(pageNumInt);
			//1、当总的页面小于30页
			if(totalPage <= 30){
				for(int i = 1; i <= totalPage ; i ++){
					PageNumber pageNumber = new PageNumber();
					pageNumber.setNumber(i);
					pageNumber.setValue(String.valueOf(i));
					pageNumberList.add(pageNumber);
				}
				//2、总页数大于30页		
			}else if(pageNumInt < 30){
				//2.1 页码等于29时				
				for(int i = 1; i <= 30 ; i ++){
					PageNumber pageNumber = new PageNumber();
					pageNumber.setNumber(i);
					if(i == 30){
						pageNumber.setValue("...");
					}else{
						pageNumber.setValue(String.valueOf(i));
					}					
					pageNumberList.add(pageNumber);
				}
		    }else{
		    	//3、页码在30以上
		    	//3.1、最后一页时
		    	int numSize = pageNumInt/30;
		    	if(totalPage/30 == pageNumInt/30){		    		
					for(int i = numSize*30 -1 ; i < totalPage; i ++){
						PageNumber pageNumber = new PageNumber();
						pageNumber.setNumber(i);
						if(i == numSize*30 -1){
							pageNumber.setValue("...");
						}else{
							pageNumber.setValue(String.valueOf(i));
						}
						pageNumberList.add(pageNumber);
					}
					
		    	}else{
		        //3.1、不是最后一页时
					for(int i = numSize*30 - 1; i <= (numSize + 1)*30  && i < totalPage; i ++){
						PageNumber pageNumber = new PageNumber();
						pageNumber.setNumber(i);
						if(i == numSize*30 -1 || i == (numSize + 1)*30){
							pageNumber.setValue("...");
						}else{
							pageNumber.setValue(String.valueOf(i));
						}
						pageNumberList.add(pageNumber);
					}					
		    	}

		    }
				
			}
				pageAppDetailFrom.setPageNumberList(pageNumberList);
				
		}
		request.setAttribute("categoryDicList", categoryDicList);
		request.setAttribute("pageAppDetailFrom", pageAppDetailFrom);
		return "putCategory";
	}
	
	public String putMobileCategory(){
		String CategoryKey = request.getParameter("CategoryKey").trim();		
		String CategoryValue = "";
		List<CategoryDic> categoryDicList = categoryDicService.findCategoryDicList();
		if(CategoryKey != null && !CategoryKey.equals("") && categoryDicList != null && categoryDicList.size() > 0){
			for(CategoryDic categoryDic :categoryDicList){
				if(categoryDic != null && categoryDic.getKey() != null){
					if(CategoryKey.equals(categoryDic.getKey())){
						CategoryValue = categoryDic.getValue();
						break;
					}
				}
			}		
		}
		PageAppDetailFrom pageAppDetailFrom = appDetailService.findAppDetailListByCategory(request, CategoryKey);
		if(CategoryKey != null){
			pageAppDetailFrom.setCateGoryKey(CategoryKey);
		}
		if(CategoryValue != null){
			pageAppDetailFrom.setCateGoryValue(CategoryValue);
		}
		
		request.setAttribute("categoryDicList", categoryDicList);
		request.setAttribute("pageAppDetailFrom", pageAppDetailFrom);
		return "putMobileCategory";
	}
	
	public String findCategoryAppDetail(){
		response.setCharacterEncoding("utf-8");
		String CategoryKey = request.getParameter("CategoryKey").trim();
		CategoryDic categoryDic = null;
		String categoryValue = "";
		if(CategoryKey != null && !CategoryKey.equals("")){
			categoryDic = categoryDicService.findCategoryDicByKey(CategoryKey);
		}
		if(categoryDic != null){
			categoryValue = categoryDic.getValue();
		}
		PageAppDetailFrom pageAppDetailFrom = appDetailService.findAppDetailListByCategory(request,CategoryKey);
		if(categoryValue != null){
			pageAppDetailFrom.setCategory(categoryValue);
		}
		
		JSONObject pageAppDetailFromJson = JSONObject.fromObject(pageAppDetailFrom);
		try {
			response.getWriter().print(pageAppDetailFromJson.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	

	public String findAppDetailByUserId(){
		HttpSession session =  request.getSession();
		String userID = (String) session.getAttribute("userNameID");
		response.setCharacterEncoding("utf-8");
		PageAppDetailFrom pageAppDetailFrom = new PageAppDetailFrom();
		if(userID != null && !userID.equals("")){
			pageAppDetailFrom = appDetailService.findAppDetailListByUserID(request,userID);
		}
		
		JSONObject pageAppDetailFromJson = JSONObject.fromObject(pageAppDetailFrom);
		try {
			response.getWriter().print(pageAppDetailFromJson.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	
	public String setSearchKey(){
		String searchKey = request.getParameter("searchKey");
		if(searchKey != null){
			request.setAttribute("searchKey", searchKey);
		}
		
		return "searchHome";
	}
	
	public String setMobileSearchKey(){
		String searchKey = request.getParameter("searchKey");
		if(searchKey != null){
			request.setAttribute("searchKey", searchKey);
		}
		return "serchAppList";
	}
	
	public String search(){
		response.setCharacterEncoding("utf-8");
		String searchKey = request.getParameter("searchKey");
		PageAppDetailFrom pageAppDetailFrom = appDetailService.findAppDetailByName(request,searchKey);
		pageAppDetailFrom.setCategory("搜索");
		JSONObject pageAppDetailFromJson = JSONObject.fromObject(pageAppDetailFrom);
		try {
			response.getWriter().print(pageAppDetailFromJson.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public String deleteAppdetail(){
		response.setCharacterEncoding("utf-8");
		String appDetailID =  request.getParameter("deleteID");
		HttpSession session = request.getSession();
		boolean flag = false;
		String userID = (String) session.getAttribute("userNameID");
		if(appDetailID != null && userID != null && !appDetailID.equals("") && !userID.equals("")){
			 flag = appDetailService.untruthDeleteDetail(userID,appDetailID);
		}
		ReturnMessageBean registerBean = new ReturnMessageBean();
		if(flag){
			registerBean.setState("1");
			registerBean.setMessage("删除成功");
		}else{
			registerBean.setState("0");
			registerBean.setMessage("删除失败");
		}
		JSONObject  registerBeanJDON  = JSONObject.fromObject(registerBean);
		try {
			response.getWriter().print(registerBeanJDON.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public String addLookPeople(){
		response.setCharacterEncoding("utf-8");
		String appDetailID =  request.getParameter("appDetailID");
		appDetailService.addLookPeople(appDetailID);
		try {
			response.getWriter().print("");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}





