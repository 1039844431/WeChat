package com.nicexcx.serviceIpml;




import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import javax.annotation.Resource;


import com.nicexcx.dao.ICategoryDicDao;
import com.nicexcx.dao.IUserInfoDao;
import com.nicexcx.domain.CategoryDic;
import com.nicexcx.domain.UserInfo;
import com.nicexcx.service.ICategoryDicService;
import com.nicexcx.service.IUserInfoService;


@Transactional(readOnly=true)
@Service(ICategoryDicService.SERVICE_NAME)
public class CategoryDicServiceImpl implements ICategoryDicService{

	
	@Resource(name=ICategoryDicDao.SERVICE_NAME)
	private ICategoryDicDao categoryDicDao;

	/*
	    *  @Name: login
		* @Description: 根据昵称进行查询
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String userName  用户名
	 				  
		* @Return: 用户对象
	 */
	public CategoryDic findCategoryDicByKey(String key) {
		String hqlWhere = " o.key = ?";
		Object[] params = {key};
		List<CategoryDic> list = categoryDicDao.findCollectionByConditionNopage(hqlWhere, params, null);
		CategoryDic categoryDic = null;
		if(list !=null && list.size() > 0 ){
			categoryDic = list.get(0);
		}
		return categoryDic;
	}

	public List<CategoryDic> findCategoryDicList() {
		
		List<CategoryDic> list = categoryDicDao.findCollectionByConditionNopage(" 1 = 1 ORDER BY o.key", null, null);
		return list;
	}

	
	
}
	

