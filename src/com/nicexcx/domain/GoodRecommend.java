package com.nicexcx.domain;


public class GoodRecommend implements java.io.Serializable{
	private String ID;
	private AppDetail appDetail;
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
	
	
	
}
