package com.nicexcx.dao;


import java.util.List;

import com.nicexcx.domain.CategoryDic;
import com.nicexcx.domain.UserInfo;


public interface ICategoryDicDao extends ICommonDao<CategoryDic>{

	public final static String SERVICE_NAME = "com.nicexcx.daoIpml.CategoryDicDaoImpl";

	Object [] findCategoryByKey(String category);

	


}
