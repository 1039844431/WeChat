package com.nicexcx.service;

import javax.servlet.http.HttpServletRequest;

import com.nicexcx.from.PageCommentFrom;








public interface ICommentService {

	public final static String SERVICE_NAME = "com.nicexcx.serviceIpml.CommentServiceImpl";

	PageCommentFrom getCommentListByAppDetaiId(HttpServletRequest request, String appDetailId);

	void upZanComment(String topOrDown, String commentID);

	void saveComment(String appDetailID, String userNameID, String commentDeatil);


	
	


	
}
