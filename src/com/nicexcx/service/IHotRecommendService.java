package com.nicexcx.service;



import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.nicexcx.domain.AppDetail;
import com.nicexcx.domain.AppIntroImg;
import com.nicexcx.from.AppDetailFrom;






public interface IHotRecommendService {

	public final static String SERVICE_NAME = "com.nicexcx.serviceIpml.HotRecommendServiceImpl";

	List<AppDetailFrom> findHotRecommendList();
	
	


	
}
