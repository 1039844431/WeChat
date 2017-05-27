package com.nicexcx.domain;

import java.util.Date;

public class AppIntroImg implements java.io.Serializable{
	private String ID;
	private AppDetail appDetailID;
	private String AppIntroImg;
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	
	public AppDetail getAppDetailID() {
		return appDetailID;
	}
	public void setAppDetailID(AppDetail appDetailID) {
		this.appDetailID = appDetailID;
	}
	public String getAppIntroImg() {
		return AppIntroImg;
	}
	public void setAppIntroImg(String appIntroImg) {
		AppIntroImg = appIntroImg;
	}
	
	
}
