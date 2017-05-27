package com.nicexcx.dao;

import java.io.Serializable;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;

import com.nicexcx.util.PageInfo;
public interface ICommonDao<T> {
	
	public void save(T t);//增
	public void deleteObjectByIDs(Serializable ...ids);//根据ID删
	public void deleteObjectByCollection(Collection<T> entities);//根据一个容器删除
	public T findObjectByID(Serializable id);//根据ID查找
	//根据条件查询
	public List<T> findCollectionByConditionNopage(String hqlWhere,Object[] params,LinkedHashMap<String, String>orderby);
	public List<T> findCollectionByConditionWithpage(String hqlWhere,
			final Object[] params, LinkedHashMap<String, String> orderby,
			final PageInfo pageInfo);
	public void update(T t);//改
	
}
