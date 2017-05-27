package com.nicexcx.domain;

import java.util.Date;


public class Collect implements java.io.Serializable{
	private String ID;
	private AppDetail appDetail;
	private UserInfo userID;
	private Date collectTime;
	
	public Date getCollectTime() {
		return collectTime;
	}
	public void setCollectTime(Date collectTime) {
		this.collectTime = collectTime;
	}
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public AppDetail getAppDetail() {
		return appDetail;
	}
	public void setAppDetail(AppDetail appDetail) {
		this.appDetail = appDetail;
	}
	public UserInfo getUserID() {
		return userID;
	}
	public void setUserID(UserInfo userID) {
		this.userID = userID;
	}
	
	
	
	
}
