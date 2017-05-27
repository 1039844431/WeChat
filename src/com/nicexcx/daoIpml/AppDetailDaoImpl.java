package com.nicexcx.daoIpml;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.stereotype.Repository;

import com.nicexcx.dao.IAppDetailDao;
import com.nicexcx.dao.IUserInfoDao;
import com.nicexcx.domain.AppDetail;
import com.nicexcx.domain.UserInfo;



@Repository(IAppDetailDao.SERVICE_NAME)
public class AppDetailDaoImpl extends CommonDaoImpl<AppDetail> implements IAppDetailDao{

	
	

}
