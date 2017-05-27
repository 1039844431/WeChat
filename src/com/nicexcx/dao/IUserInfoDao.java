package com.nicexcx.dao;


import java.util.List;

import com.nicexcx.domain.UserInfo;


public interface IUserInfoDao extends ICommonDao<UserInfo>{

	public final static String SERVICE_NAME = "com.nicexcx.daoIpml.UserDaoImpl";

	List<Object[]> findUserListByName(String userName);

	List<Object> findUserPopedomByUserName(String userName);


}
