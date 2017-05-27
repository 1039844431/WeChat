package com.nicexcx.from;
import java.util.List;

import com.nicexcx.domain.Comment;

public class PageCommentFrom implements java.io.Serializable{

	private int totalPage;
	private int currentPageNo;
	private int totalResult;
	private List<CommentFrom> commentList;

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
	public List<CommentFrom> getCommentList() {
		return commentList;
	}
	public void setCommentList(List<CommentFrom> commentList) {
		this.commentList = commentList;
	}
	
	
	
	
	
}
