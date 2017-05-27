package com.nicexcx.service;



import java.util.List;

import com.nicexcx.domain.CategoryDic;
import com.nicexcx.domain.UserInfo;





public interface ICategoryDicService {

	public final static String SERVICE_NAME = "com.nicexcx.serviceIpml.CategoryDicServiceImpl";

	List<CategoryDic> findCategoryDicList();

	CategoryDic findCategoryDicByKey(String category);
	

}
