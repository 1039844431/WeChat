package com.nicexcx.from;
import java.util.List;

public class AppDetailFrom implements java.io.Serializable{
	private String ID;
	private String appImg;
	private String appName;
	private String erweiImg;
	private String issueTime;
	private String tag;
	private String category;
	private String intro;
	private String introImg;
	private String peopleLookNum;
	private String userId;
	private String isIssue;
	private String collectTime;
	private String isDelete;
	
	public String getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}
	public String getCollectTime() {
		return collectTime;
	}
	public void setCollectTime(String collectTime) {
		this.collectTime = collectTime;
	}
	public String getIsIssue() {
		return isIssue;
	}
	public void setIsIssue(String isIssue) {
		this.isIssue = isIssue;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPeopleLookNum() {
		return peopleLookNum;
	}
	public void setPeopleLookNum(String peopleLookNum) {
		this.peopleLookNum = peopleLookNum;
	}
	private List<String> introImgPath;
	public String getIntroImg() {
		return introImg;
	}
	public void setIntroImg(String introImg) {
		this.introImg = introImg;
	}
	
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public String getAppImg() {
		return appImg;
	}
	public void setAppImg(String appImg) {
		this.appImg = appImg;
	}
	public String getAppName() {
		return appName;
	}
	public void setAppName(String appName) {
		this.appName = appName;
	}
	public String getErweiImg() {
		return erweiImg;
	}
	public void setErweiImg(String erweiImg) {
		this.erweiImg = erweiImg;
	}
	public String getIssueTime() {
		return issueTime;
	}
	public void setIssueTime(String issueTime) {
		this.issueTime = issueTime;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public List<String> getIntroImgPath() {
		return introImgPath;
	}
	public void setIntroImgPath(List<String> introImgPath) {
		this.introImgPath = introImgPath;
	}
	
	
}
