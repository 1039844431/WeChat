package com.nicexcx.action;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;


import net.sf.json.JSONObject;

import com.nicexcx.contains.ServiceProvider;

import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.from.PageAppDetailFrom;

import com.nicexcx.service.ICollectService;

import com.nicexcx.util.ReturnMessageBean;

import com.opensymphony.xwork2.ModelDriven;
public class CollectAction extends MoreFileUploadAction implements ModelDriven<AppDetailFrom>{	
	private AppDetailFrom appDetailFrom = new AppDetailFrom();
	
	private ICollectService collectService = (ICollectService) ServiceProvider.getService(ICollectService.SERVICE_NAME);
	
	public AppDetailFrom getModel() {
		return appDetailFrom;
	}

	public String addCollect(){
		response.setCharacterEncoding("utf-8");
		String appDetail = request.getParameter("appAetailID");
		HttpSession session = request.getSession();
		String userID = (String) session.getAttribute("userNameID");
		
		boolean flag = false;
		if(appDetail != null && !appDetail.equals("") && userID != null && userID != ""){
			flag = collectService.addCollectByAppDetail(appDetail,userID);
		}
		ReturnMessageBean registerBean = new ReturnMessageBean();
		if(flag){
			registerBean.setState("1");
			registerBean.setMessage("收藏成功");
		}else{
			registerBean.setState("0");
			registerBean.setMessage("收藏失败");
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
	public String deleteCollect(){
		response.setCharacterEncoding("utf-8");
		String appDetail =  request.getParameter("deleteID");
		HttpSession session = request.getSession();
		boolean flag = false;
		String userID = (String) session.getAttribute("userNameID");
		if(appDetail != null && userID != null && !appDetail.equals("") && !userID.equals("")){
			 flag = collectService.deleteDetail(userID,appDetail);
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
	public String findCategoryAppDetail(){
		response.setCharacterEncoding("utf-8");
		PageAppDetailFrom pageAppDetailFrom = new PageAppDetailFrom();
		HttpSession session = request.getSession();
		String userName =  (String) session.getAttribute("userNameKey");
		if(userName != null || !userName.equals("")){
			String userID = (String) session.getAttribute("userNameID");
			pageAppDetailFrom = collectService.findCollectListByUserID(request, userID);
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
	

	public String gotoMobileCollect(){
		
		return "gotoMobileCollect";
	}
	public String gotoMobileIssue(){
		
		return "gotoMobileIssue";
	}
}





