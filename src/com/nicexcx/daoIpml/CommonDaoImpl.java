package com.nicexcx.daoIpml;


import java.io.Serializable;
import java.sql.SQLException;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import com.nicexcx.dao.ICommonDao;
import com.nicexcx.util.GenericSuperClass;
import com.nicexcx.util.PageInfo;

public class CommonDaoImpl<T> extends HibernateDaoSupport implements ICommonDao<T>{

	//根据反射机制得到对应的类
	private  Class entity = (Class)GenericSuperClass.getClass(this.getClass());
	/**  
	* @Name: save
	* @Description: 保存对象的方法
	* @Author: 傅建仁（作者）
	* @Version: V1.00 （版本号）
	* @Create Date: 2015-10-13 （创建日期）
	* @Parameters: T entity 对象
	* @Return: 无
	*/
	public void save(T entity) {
		this.getHibernateTemplate().save(entity);
	}
	/**  
	* @Name: setSessionFactoryDi
	* @Description: 将spring内的SessionFactory注入到这个类中这样使这个类可以使用hibernate的方法
	* @Author: 傅建仁（作者）
	* @Version: V1.00 （版本号）
	* @Create Date: 2015-10-13 （创建日期）
	* @Parameters: SessionFactory sessionFactory 对象
	* @Return: 无
	*/
	@Resource(name="sessionFactory")
	public final void setSessionFactoryDi(SessionFactory sessionFactory){
		super.setSessionFactory(sessionFactory);
	}

	/**  
	* @Name: update
	* @Description: 更新对象的方法
	* @Author: 傅建仁（作者）
	* @Version: V1.00 （版本号）
	* @Create Date: 2015-10-13 （创建日期）
	* @Parameters: SessionFactory sessionFactory 对象
	* @Return: 无
	*/
	public void update(T t) {
		this.getHibernateTemplate().update(t);
	}
	/**  
	* @Name: deteleObjectByID
	* @Description: 根据ID数组删除对象的方法
	* @Author: 傅建仁（作者）
	* @Version: V1.00 （版本号）
	* @Create Date: 2015-10-13 （创建日期）
	* @Parameters:Serializable... id 对象
	* @Return: 无
	*/

	public void deleteObjectByIDs(Serializable... ids) {
		for(int i = 0;i < ids.length; i++){
			Serializable id  = ids[i];
			Object object = this.getHibernateTemplate().get(entity,id);
			this.getHibernateTemplate().delete(object);
		}	
	}
	
	/**  
	* @Name: deleteObjectByCollection
	* @Description: 根据一个容器删除的方法
	* @Author: 傅建仁（作者）
	* @Version: V1.00 （版本号）
	* @Create Date: 2015-10-13 （创建日期）
	* @Parameters: Collection<T> entities 对象
	* @Return: 无
	*/
	public void deleteObjectByCollection(Collection<T> entities) {
		this.getHibernateTemplate().deleteAll(entities);		
	}
	/**  
	*@name:findObjectByID
	*@Description：根据一个容器删除方法
	*@Author:傅建仁（作者）
	*@Version:V1.00(版本号)
	*Creat Date:2015-10-13(创建日期)
	*@parameters：Serializable id
	*Rrturn:T
	*/
	public T findObjectByID(Serializable id) {
		return (T)this.getHibernateTemplate().get(entity,id);
	}
	
	/**  
	* @Name: findCollectionByConditionNopage
	* @Description: 根据一个条件查询对象的方法
	* @Author: 傅建仁（作者）
	* @Version: V1.00 （版本号）
	* @Create Date: 2015-10-13 （创建日期）
	* @Parameters: String hqlWhere,where条件
			       Object[] params, 条件里的参数
			       LinkedHashMap<String, String> orderby 排序
	* @Return: 无
	*/
	public List<T> findCollectionByConditionNopage(String hqlWhere,
			final Object[] params, LinkedHashMap<String, String> orderby) {
		String hql = "from " + entity.getSimpleName()+ " o where 1=1 and";
		String order = this.getOrderBy(orderby);
		hql = hql + hqlWhere + order;
		 final String  findhql = hql;
		List<T> list = (List<T>)this.getHibernateTemplate().execute(new HibernateCallback() {
			
			public Object doInHibernate(Session session) throws HibernateException,
					SQLException {
				Query query = session.createQuery(findhql);
				setParams(query,params);
				return query.list();
			}
		});
		return list;
	}
	private String getOrderBy(LinkedHashMap<String, String> orderby) {
		StringBuffer buffer = new StringBuffer("");
		if(orderby != null ){
		buffer.append(" order by ");
		for(Map.Entry<String, String> map:orderby.entrySet()){
			buffer.append(map.getKey() + " " + map.getValue() + ",");
		}
		buffer.deleteCharAt(buffer.length()-1);
		}
		return buffer.toString();
	}

	private void setParams(Query query, Object[] params) {
		for(int i = 0 ; params != null && i < params.length ; i++){
			query.setParameter(i, params[i]);
		}
		
	}
	
	/**  
	* @Name: findCollectionByConditionNopage
	* @Description: 根据一个条件查询对象的方法
	* @Author: 傅建仁（作者）
	* @Version: V1.00 （版本号）
	* @Create Date: 2015-10-13 （创建日期）
	* @Parameters: String hqlWhere,where条件
			       Object[] params, 条件里的参数
			       LinkedHashMap<String, String> orderby 排序
			       pageInfo分页功能实现
	* @Return: 无
	*/
	public List<T> findCollectionByConditionWithpage(String hqlWhere,
			final Object[] params, LinkedHashMap<String, String> orderby,
			final PageInfo pageInfo) {

		String hql = " from " +  entity.getSimpleName() + " o where 1=1";
		String hqlOderBy = this.getOrderBy(orderby);
		hql = hql + hqlWhere + hqlOderBy;
		final String finalHql = hql;
		List<T> list = (List<T>)this.getHibernateTemplate().execute(new HibernateCallback() {			
			public Object doInHibernate(Session session) throws HibernateException,
					SQLException {
				Query query = session.createQuery(finalHql);
				setParams(query, params);
				pageInfo.setTotalResult(query.list().size());
				query.setFirstResult(pageInfo.getBeginResult());
				query.setMaxResults(pageInfo.getPageSize());
				return query.list();
			}
		});
		return list;
	}
		
}
