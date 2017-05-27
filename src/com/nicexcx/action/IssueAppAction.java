package com.nicexcx.action;



import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import com.nicexcx.contains.ServiceProvider;
import com.nicexcx.domain.CategoryDic;
import com.nicexcx.domain.UserInfo;
import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.service.IAppDetailService;
import com.nicexcx.service.ICategoryDicService;
import com.nicexcx.service.IUserInfoService;
import com.nicexcx.util.ReturnMessageBean;

import com.opensymphony.xwork2.ModelDriven;
public class IssueAppAction extends MoreFileUploadAction implements ModelDriven<AppDetailFrom>{	
	private AppDetailFrom appDetailFrom = new AppDetailFrom();
	private IUserInfoService userInfoService = (IUserInfoService) ServiceProvider.getService(IUserInfoService.SERVICE_NAME);
	private IAppDetailService appDetailService = (IAppDetailService) ServiceProvider.getService(IAppDetailService.SERVICE_NAME);
	private ICategoryDicService categoryDicService = (ICategoryDicService) ServiceProvider.getService(ICategoryDicService.SERVICE_NAME);
	public AppDetailFrom getModel() {
		return appDetailFrom;
	}

	/*
	    * @Name: home
		* @Description: 进入发布页面
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: 无
		* @Return: 无
	 */
	public String home(){
		 List<CategoryDic> categoryDicList = categoryDicService.findCategoryDicList();
		 request.setAttribute("categoryDicList", categoryDicList);
		return "home";
	}
	public String mobileHome(){
		 List<CategoryDic> categoryDicList = categoryDicService.findCategoryDicList();
		 request.setAttribute("categoryDicList", categoryDicList);
		return "mobileHome";
	}
	public String issue(){
		 HttpSession session = request.getSession();
		 String userName = (String) session.getAttribute("userNameKey");
		 if(userName == null || userName.equals("")){
			 return "issuefail";
		 }
		 UserInfo userInfo = userInfoService.findUserByUserName(userName);
		 if(userInfo == null){
			 return "issuefail";
		 }
		 String appImg = appDetailFrom.getAppImg();
		 String introImg = appDetailFrom.getIntroImg();
		 String erweiImg = appDetailFrom.getErweiImg();
		 
		 if(appImg != null && introImg != null && erweiImg != null && appImg.equals("1")
				  && introImg.equals("1") && appDetailFrom != null && appDetailFrom.getAppName() != null){
			 boolean flag = appDetailService.findAppDetailByAppName(appDetailFrom.getAppName());
			 if(!flag){
				 AppDetailFrom getAppImgDetailFrom = upFiles(appDetailFrom,erweiImg);
				 getAppImgDetailFrom.setUserId(userInfo.getID());
				 appDetailService.saveAppDetail(getAppImgDetailFrom);
			 }else{
				 return "issuefail";
			 }			 
		 }		
		return "issuesuccess";
	}
	
	public String mobileIssue(){
		 HttpSession session = request.getSession();
		 String userName = (String) session.getAttribute("userNameKey");
		 if(userName == null || userName.equals("")){
			 return "mobileIssuefail";
		 }
		 UserInfo userInfo = userInfoService.findUserByUserName(userName);
		 if(userInfo == null){
			 return "mobileIssuefail";
		 }
		 String appImg = appDetailFrom.getAppImg();
		 String introImg = appDetailFrom.getIntroImg();
		 String erweiImg = appDetailFrom.getErweiImg();
		 
		 if(appImg != null && introImg != null && erweiImg != null && appImg.equals("1")
				  && introImg.equals("1") && appDetailFrom != null && appDetailFrom.getAppName() != null){
			 boolean flag = appDetailService.findAppDetailByAppName(appDetailFrom.getAppName());
			 if(!flag){
				 AppDetailFrom getAppImgDetailFrom = upFiles(appDetailFrom,erweiImg);
				 getAppImgDetailFrom.setUserId(userInfo.getID());
				 appDetailService.saveAppDetail(getAppImgDetailFrom);
			 }else{
				 return "mobileIssuefail";
			 }
			 
		 }		
		return "mobileIssuesuccess";
	}
	
	
	public String issuesuccess(){
		return "issuesuccess";
	}
	public String isExitAppName(){
		response.setCharacterEncoding("utf-8");
		String appName = request.getParameter("appName").trim();
		ReturnMessageBean messageBean = new ReturnMessageBean();
		if(appName != null && !appName.equals("")){
			boolean flag = appDetailService.findAppDetailByAppName(appName);
			if(flag){
				messageBean.setState("0");
				messageBean.setMessage("该小程序已存在，不能添加，如有问题，请联系我们！");
			}else{
				messageBean.setState("1");
				messageBean.setMessage("可以添加！");
			}
		}
		JSONObject  registerBeanJDON  = JSONObject.fromObject(messageBean);
		try {
			response.getWriter().print(registerBeanJDON.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
}





