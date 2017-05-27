package com.nicexcx.action;



import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import com.nicexcx.contains.ServiceProvider;
import com.nicexcx.from.CommentFrom;
import com.nicexcx.from.PageCommentFrom;
import com.nicexcx.service.ICommentService;



import com.opensymphony.xwork2.ModelDriven;
public class CommentAction extends MoreFileUploadAction implements ModelDriven<CommentFrom>{	
	private CommentFrom commentFrom = new CommentFrom();
	
	private ICommentService commentService = (ICommentService) ServiceProvider.getService(ICommentService.SERVICE_NAME);
	
	public CommentFrom getModel() {
		return commentFrom;
	}

   public String getCommentListByAppDetaiId(){
	   response.setCharacterEncoding("utf-8");
	   String appDetailId = request.getParameter("appDetailID");
	   PageCommentFrom pageCommentFrom = new PageCommentFrom();
	   if(appDetailId != null && !appDetailId.equals("")){
		   pageCommentFrom = commentService.getCommentListByAppDetaiId(request,appDetailId);
	   }
	   
	   JSONObject pageCommentFromJson = JSONObject.fromObject(pageCommentFrom);
	   try {
			response.getWriter().print(pageCommentFromJson.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	   return null;
   }
	

   public String commentZan(){
	   String topOrDown = request.getParameter("topOrDown");
	   String commentID = request.getParameter("commentID");
	   if(topOrDown != null && commentID != null && !topOrDown.equals("") && !commentID.equals("") && !commentID.equals("undefined")){
		   HttpSession session = request.getSession();
		  String userNameKey = (String) session.getAttribute("userNameKey");
		  String sessionCommentID = (String) session.getAttribute("sessionCommentID");
		  if(sessionCommentID == null){
			  if(userNameKey != null && !userNameKey.equals("")){
				  session.setAttribute("sessionCommentID", commentID);
				  commentService.upZanComment(topOrDown,commentID);
			  }
		  }else if(sessionCommentID != null && commentID!= null && !sessionCommentID.equals(commentID)){
			  session.setAttribute("sessionCommentID", commentID);
			  commentService.upZanComment(topOrDown,commentID);
		  }		 
	   }
	   try {
		response.getWriter().print("");
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	   return null;
   }
   
   public String submitCommentDetail(){
	   String appDetailID = request.getParameter("appDetailID");
	   String commentDeatil = request.getParameter("commentDeatil");
	   HttpSession session = request.getSession();
	   String userNameID = (String) session.getAttribute("userNameID");
	   if(appDetailID != null && commentDeatil != null && userNameID != null){
		   String regex = "<[^>]+>";
		   Pattern p = Pattern.compile(regex);
		   Matcher m = p.matcher(commentDeatil);
		   if(!m.find() && commentDeatil.length() < 400){
			   commentService.saveComment(appDetailID,userNameID,commentDeatil);
		   }
	   }
	   try {
			response.getWriter().print("");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//	   System.out.println(commentDeatil);
	   return null;
   }
}





