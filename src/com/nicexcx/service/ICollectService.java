package com.nicexcx.service;





import javax.servlet.http.HttpServletRequest;
import com.nicexcx.from.PageAppDetailFrom;






public interface ICollectService {

	public final static String SERVICE_NAME = "com.nicexcx.serviceIpml.CollectServiceImpl";

	PageAppDetailFrom findCollectListByUserID(HttpServletRequest request,String userID);

	boolean addCollectByAppDetail(String appDetail, String userID);

	boolean deleteDetail(String userID, String appDetailID);
	
	


	
}
