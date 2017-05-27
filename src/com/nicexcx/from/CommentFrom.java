package com.nicexcx.from;


import com.nicexcx.domain.UserInfo;

public class CommentFrom implements java.io.Serializable{
	private String ID;
	private String appDetaiId;
	private String commentTime; 
	private String zanTop;
	private String zanDown;
	private String commentDetail;
	private String userName;
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public String getAppDetaiId() {
		return appDetaiId;
	}
	public void setAppDetaiId(String appDetaiId) {
		this.appDetaiId = appDetaiId;
	}
	public String getCommentTime() {
		return commentTime;
	}
	public void setCommentTime(String commentTime) {
		this.commentTime = commentTime;
	}
	public String getZanTop() {
		return zanTop;
	}
	public void setZanTop(String zanTop) {
		this.zanTop = zanTop;
	}
	public String getZanDown() {
		return zanDown;
	}
	public void setZanDown(String zanDown) {
		this.zanDown = zanDown;
	}
	public String getCommentDetail() {
		return commentDetail;
	}
	public void setCommentDetail(String commentDetail) {
		this.commentDetail = commentDetail;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}

	
	
}
