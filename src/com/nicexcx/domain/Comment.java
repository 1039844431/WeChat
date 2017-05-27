package com.nicexcx.domain;

import java.util.Date;


public class Comment implements java.io.Serializable{
	private String ID;
	private String appDetaiId;
	private Date commentTime; 
	private int zanTop;
	private int zanDown;
	private String commentDetail;
	private UserInfo userId;
	
	public String getAppDetaiId() {
		return appDetaiId;
	}
	public void setAppDetaiId(String appDetaiId) {
		this.appDetaiId = appDetaiId;
	}
	public UserInfo getUserId() {
		return userId;
	}
	public void setUserId(UserInfo userId) {
		this.userId = userId;
	}
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public Date getCommentTime() {
		return commentTime;
	}
	public void setCommentTime(Date commentTime) {
		this.commentTime = commentTime;
	}
	public int getZanTop() {
		return zanTop;
	}
	public void setZanTop(int zanTop) {
		this.zanTop = zanTop;
	}
	public int getZanDown() {
		return zanDown;
	}
	public void setZanDown(int zanDown) {
		this.zanDown = zanDown;
	}
	public String getCommentDetail() {
		return commentDetail;
	}
	public void setCommentDetail(String commentDetail) {
		this.commentDetail = commentDetail;
	}
	
	
	
}
