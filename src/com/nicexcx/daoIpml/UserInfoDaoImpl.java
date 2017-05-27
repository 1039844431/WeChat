package com.nicexcx.daoIpml;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.stereotype.Repository;

import com.nicexcx.dao.IUserInfoDao;
import com.nicexcx.domain.UserInfo;



@Repository(IUserInfoDao.SERVICE_NAME)
public class UserInfoDaoImpl extends CommonDaoImpl<UserInfo> implements IUserInfoDao{

	public List<Object []> findUserListByName(final String userName) {
		final String hql = "SELECT * FROM tb_user WHERE tb_user.NAME LIKE ?";
		
	List<Object []> list = (List<Object[]>)this.getHibernateTemplate().executeFind(new HibernateCallback() {
			
			public Object doInHibernate(Session session) throws HibernateException,
					SQLException {
				Query query = session.createSQLQuery(hql);
				query.setString(0, "%" +userName + "%");
				return query.list();
			}
		});
		return list;
	}

	public List<Object> findUserPopedomByUserName(final String userName) {
		final String hql = "SELECT tb_role_popedom.popedom FROM tb_role_popedom  " +
				"LEFT OUTER JOIN tb_role ON tb_role_popedom.roleid = tb_role.RoleCode " + 
			  "	INNER JOIN tb_user ON tb_role.RoleName = tb_user.ID AND tb_user.USERNAME = ?";
		List<Object> list = (List<Object>) this.getHibernateTemplate().executeFind(new HibernateCallback() {
			
			public Object doInHibernate(Session session) throws HibernateException,
					SQLException {
				Query query = session.createSQLQuery(hql);
				query.setString(0, userName);
				return query.list();
			}
		});
		return list;
	}

}
