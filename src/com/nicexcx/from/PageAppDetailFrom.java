package com.nicexcx.from;
import java.util.List;

import com.nicexcx.util.PageNumber;

public class PageAppDetailFrom implements java.io.Serializable{
	private List<AppDetailFrom> appDetailFromList;
	private int totalPage;
	private int currentPageNo;
	private String category;
	private int totalResult;
	private String cateGoryKey;
	private String cateGoryValue;
	private List<PageNumber> pageNumberList;
	
	public List<PageNumber> getPageNumberList() {
		return pageNumberList;
	}
	public void setPageNumberList(List<PageNumber> pageNumberList) {
		this.pageNumberList = pageNumberList;
	}
	public String getCateGoryValue() {
		return cateGoryValue;
	}
	public void setCateGoryValue(String cateGoryValue) {
		this.cateGoryValue = cateGoryValue;
	}
	public String getCateGoryKey() {
		return cateGoryKey;
	}
	public void setCateGoryKey(String cateGoryKey) {
		this.cateGoryKey = cateGoryKey;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public List<AppDetailFrom> getAppDetailFromList() {
		return appDetailFromList;
	}
	public void setAppDetailFromList(List<AppDetailFrom> appDetailFromList) {
		this.appDetailFromList = appDetailFromList;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public int getCurrentPageNo() {
		return currentPageNo;
	}
	public void setCurrentPageNo(int currentPageNo) {
		this.currentPageNo = currentPageNo;
	}
	public int getTotalResult() {
		return totalResult;
	}
	public void setTotalResult(int totalResult) {
		this.totalResult = totalResult;
	}
	
	
}
