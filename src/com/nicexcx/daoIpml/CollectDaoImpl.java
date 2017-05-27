package com.nicexcx.daoIpml;

import java.sql.SQLException;

import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.stereotype.Repository;

import com.nicexcx.dao.ICollectDao;

import com.nicexcx.domain.Collect;




@Repository(ICollectDao.SERVICE_NAME)
public class CollectDaoImpl extends CommonDaoImpl<Collect> implements ICollectDao{

	
	

}
