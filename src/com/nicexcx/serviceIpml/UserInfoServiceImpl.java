package com.nicexcx.serviceIpml;




import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import javax.annotation.Resource;


import com.nicexcx.dao.IUserInfoDao;
import com.nicexcx.domain.UserInfo;
import com.nicexcx.service.IUserInfoService;


@Transactional(readOnly=true)
@Service(IUserInfoService.SERVICE_NAME)
public class UserInfoServiceImpl implements IUserInfoService{

	
	@Resource(name=IUserInfoDao.SERVICE_NAME)
	private IUserInfoDao userDao;

	/*
	    *  @Name: login
		* @Description: 根据昵称进行查询
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String userName  用户名
	 				  
		* @Return: 用户对象
	 */
	public UserInfo findUserByName(String userName) {
		String hqlWhere = " o.userName = ?";
		Object[] params = {userName};
		List<UserInfo> list = userDao.findCollectionByConditionNopage(hqlWhere, params, null);
		UserInfo user = null;
		if(list !=null && list.size() > 0 ){
		 user = list.get(0);
		}
		return user;
	}
	/*
	    *  @Name: login
		* @Description: 根据昵称进行查询
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String userName  用户名	 				  
		* @Return: 用户对象
	 */
	public UserInfo findUserByEmail(String email) {
		String hqlWhere = " o.email = ?";
		Object[] params = {email};
		List<UserInfo> list = userDao.findCollectionByConditionNopage(hqlWhere, params, null);
		UserInfo user = null;
		if(list !=null && list.size() > 0 ){
		 user = list.get(0);
		}
		return user;
	}
/*
    *  @Name: login
	* @Description: 根据昵称进行查询
	* @Author: 傅建仁（作者）
	* @Version: V1.00 （版本号）
	* @Create Date: 2015-10-13 （创建日期）
	* @Parameters: String userName  用户名	 				  
	* @Return: 用户对象
 */
	public UserInfo findUserByPhone(String phone) {
		String hqlWhere = " o.phone = ?";
		Object[] params = {phone};
		List<UserInfo> list = userDao.findCollectionByConditionNopage(hqlWhere, params, null);
		UserInfo user = null;
		if(list !=null && list.size() > 0 ){
		 user = list.get(0);
		}
		return user;
	}
/*
    *  @Name: login
	* @Description: 根据用户名和密码进行登录
	* @Author: 傅建仁（作者）
	* @Version: V1.00 （版本号）
	* @Create Date: 2015-10-13 （创建日期）
	* @Parameters: String userName  用户名
 				   String passWord  密码
	* @Return: 无
 */
	public UserInfo login(String userName, String passWord) {
		UserInfo user =	this.findUserByPhone(userName);
		if(user == null){
			user =	this.findUserByEmail(userName);
		}
		if(user == null){
			user =	this.findUserByName(userName);
		}
		if(user != null){
		String psw = user.getPassWord();
		if(psw != null && !psw.equals("")){
			if(psw.equals(passWord)){
				return user;
			}
		}
		}
		return null;
	}
	
	/*
	    *  @Name: register
		* @Description: 根据用户名和密码、邮箱进行登录
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String userName  用户名
	 				   String passWord  密码
	 				   String email 邮箱
		* @Return: 注册成功返回ture，如果注册不成功则返回false
	 */
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public boolean register(String userName, String passWord, String phone) {
		if(userName != null && passWord != null && phone != null){
			UserInfo userInfo = new UserInfo();
			userInfo.setPhone(phone);
			userInfo.setUserName(userName);
			userInfo.setPassWord(passWord);
			userInfo.setLimit(1);
			userDao.save(userInfo);
			return true;
		}
		return false;
	}
	/*
	    *  @Name: register
		* @Description: 根据用户名检查是否存在
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String userName  用户名
		* @Return: 如果存在成功返回ture，如果不存在则返回false
	 */
	public boolean checkUserByUserName(String userName) {
		UserInfo user =	this.findUserByName(userName);
		if(user != null){
			return true;
		}
		return false;
	}
	/*
	    *  @Name: register
		* @Description: 根据用户名检查是否存在
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String email  邮箱
		* @Return: 如果存在成功返回ture，如果不存在则返回false
	 */
	public boolean checkUserByEmail(String email) {
		UserInfo user =	this.findUserByEmail(email);
		if(user != null){
			return true;
		}
		return false;
	}
	public UserInfo findUserByUserName(String userName) {
		UserInfo user =	this.findUserByName(userName);
		if(user == null){
			user =	this.findUserByEmail(userName);
		}
		return user;
	}
	public boolean checkUserByPhone(String phone) {
		UserInfo user =	this.findUserByPhone(phone);
		if(user != null){
			return true;
		}
		return false;
	}
	public UserInfo findUserByUserID(String userID) {
		if(userID != null){
			return userDao.findObjectByID(userID);
		}
		
		return null;
	}
	
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public boolean upUserInfo(UserInfo userInfo) {
		if(userInfo != null){
			userDao.update(userInfo);
			return true;
		}		
		return false;
	}	
}
	

