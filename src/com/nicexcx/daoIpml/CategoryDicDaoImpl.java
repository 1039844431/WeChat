package com.nicexcx.daoIpml;


import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.stereotype.Repository;
import com.nicexcx.dao.ICategoryDicDao;
import com.nicexcx.domain.CategoryDic;





@Repository(ICategoryDicDao.SERVICE_NAME)
public class CategoryDicDaoImpl extends CommonDaoImpl<CategoryDic> implements ICategoryDicDao{

	public Object [] findCategoryByKey(final String category) {
		
	List<Object []> list = (List<Object[]>)this.getHibernateTemplate().executeFind(new HibernateCallback() {
		
		   final String hql = "SELECT * FROM categorydic WHERE categorydic.categoryDic_key = ?";
		
			public Object doInHibernate(Session session) throws HibernateException,
					SQLException {
				Query query = session.createSQLQuery(hql);
				query.setString(0, category);
				return query.list();
			}
		});
	
		if(list != null && list.size() > 0){
			return list.get(0);
		}
		return null;
	}

	

}
