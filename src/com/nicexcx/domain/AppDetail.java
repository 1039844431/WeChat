package com.nicexcx.domain;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class AppDetail implements java.io.Serializable{
	private String ID;
	private String appImg;
	private String appName;
	private String erweiImg;
	private Date issueTime;
	private String tag;	
	private String intro;
	private int isIssue;
	private int peopleLookNum;
	private int isDelete;
	private Set<AppIntroImg> appIntroImgs = new HashSet<AppIntroImg>();
	private CategoryDic categoryDic;
	private UserInfo userID;
	
	
	public int getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(int isDelete) {
		this.isDelete = isDelete;
	}
	public UserInfo getUserID() {
		return userID;
	}
	public void setUserID(UserInfo userID) {
		this.userID = userID;
	}
	public CategoryDic getCategoryDic() {
		return categoryDic;
	}
	public void setCategoryDic(CategoryDic categoryDic) {
		this.categoryDic = categoryDic;
	}
	public int getPeopleLookNum() {
		return peopleLookNum;
	}
	public void setPeopleLookNum(int peopleLookNum) {
		this.peopleLookNum = peopleLookNum;
	}
	public int getIsIssue() {
		return isIssue;
	}
	public void setIsIssue(int isIssue) {
		this.isIssue = isIssue;
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
	public Date getIssueTime() {
		return issueTime;
	}
	public void setIssueTime(Date issueTime) {
		this.issueTime = issueTime;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public Set<AppIntroImg> getAppIntroImgs() {
		return appIntroImgs;
	}
	public void setAppIntroImgs(Set<AppIntroImg> appIntroImgs) {
		this.appIntroImgs = appIntroImgs;
	}
	
	
	
}
