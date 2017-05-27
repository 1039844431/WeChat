package com.nicexcx.service;



import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.nicexcx.domain.AppDetail;
import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.from.PageAppDetailFrom;






public interface IAppDetailService {

	public final static String SERVICE_NAME = "com.nicexcx.serviceIpml.AppDetailServiceImpl";
	
	

	public void saveAppDetail(AppDetail appDetail);

	public AppDetail findAppDetailByID(String id);

	public void saveAppDetail(AppDetailFrom getAppImgDetailFrom);

	public PageAppDetailFrom findAppDetailListByCategory(HttpServletRequest request, String category);

	public AppDetailFrom findAppDetailFromByID(String appID);

	public PageAppDetailFrom findAppDetailByName(HttpServletRequest request,
			String searchKey);

	public PageAppDetailFrom findAppDetailListByUserID(
			HttpServletRequest request, String id);

	public boolean untruthDeleteDetail(String userID, String appDetailID);

	public void addLookPeople(String appDetailID);

	public boolean findAppDetailByAppName(String appName);

	
}
