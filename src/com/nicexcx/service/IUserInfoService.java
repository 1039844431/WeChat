package com.nicexcx.service;



import com.nicexcx.domain.UserInfo;





public interface IUserInfoService {

	public final static String SERVICE_NAME = "com.nicexcx.serviceIpml.UserInfoServiceImpl";
	
	public UserInfo findUserByName(String userName);

	public UserInfo login(String userName, String passWord);

	public boolean register(String userName, String passWord, String phone);

	public boolean checkUserByUserName(String userName);

	public boolean checkUserByEmail(String email);

	public UserInfo findUserByUserName(String userName);

	public boolean checkUserByPhone(String phone);

	public UserInfo findUserByUserID(String userID);

	public boolean upUserInfo(UserInfo userInfo);
}
