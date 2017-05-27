package com.nicexcx.serviceIpml;



import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;




import com.nicexcx.dao.ICommentDao;
import com.nicexcx.domain.Comment;
import com.nicexcx.domain.UserInfo;
import com.nicexcx.from.CommentFrom;
import com.nicexcx.from.PageCommentFrom;
import com.nicexcx.service.ICommentService;
import com.nicexcx.util.PageInfo;
import com.nicexcx.util.StringHelp;



@Transactional(readOnly=true)
@Service(ICommentService.SERVICE_NAME)
public class CommentServiceImpl implements ICommentService{

	
	@Resource(name=ICommentDao.SERVICE_NAME)
	private ICommentDao commentDao;

	public PageCommentFrom getCommentListByAppDetaiId(HttpServletRequest request,String appDetailId) {
		PageCommentFrom pageCommentFrom = new PageCommentFrom();
		String hqlWhere = "";
		List<String> paramList = new ArrayList<String>();
		Object []params = null;		
		hqlWhere += " and o.appDetaiId = ?";
		paramList.add(appDetailId);
		params = paramList.toArray();
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put(" o.commentTime", " desc");
		
		PageInfo pageInfo = new PageInfo(request,8);
		List<Comment> commentList = commentDao.findCollectionByConditionWithpage(hqlWhere, params, orderby, pageInfo);
		List<CommentFrom> commentFromList = this.commentListPOTOListVO(commentList);
		if(commentList != null){
			pageCommentFrom.setCommentList(commentFromList);
		}
		pageCommentFrom.setCurrentPageNo(pageInfo.getPageBean().getPageNo());
		pageCommentFrom.setTotalPage(pageInfo.getPageBean().getSumPage());
		pageCommentFrom.setTotalResult(pageInfo.getPageBean().getTotalResult());
		return pageCommentFrom;
	}

	private List<CommentFrom> commentListPOTOListVO(List<Comment> commentList) {
		List<CommentFrom> commentFomeList = new ArrayList<CommentFrom>();
		if(commentList != null && commentList.size() > 0){
			for(Comment comment : commentList){
				CommentFrom commentFrom = new CommentFrom();
				if(comment.getID()  != null){
					commentFrom.setID(comment.getID());
				}
				if(comment.getCommentDetail()  != null){
					commentFrom.setCommentDetail(comment.getCommentDetail());		
					}
				if(comment.getCommentTime()  != null){
					commentFrom.setCommentTime(StringHelp.dateCoverStringDate(comment.getCommentTime()));
				}
				if(comment.getUserId()  != null && comment.getUserId().getUserName() != null){
					commentFrom.setUserName(comment.getUserId().getUserName());
				}
				commentFrom.setZanDown(String.valueOf(comment.getZanDown()));
				commentFrom.setZanTop(String.valueOf(comment.getZanTop()));
				commentFomeList.add(commentFrom);
			}
		}
		return commentFomeList;
	}

	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public void upZanComment(String topOrDown, String commentID) {
		if(topOrDown !=  null && commentID != null){
			Comment  comment  = commentDao.findObjectByID(commentID);
			if(comment != null){
				if(topOrDown.equals("top")){
					int top = comment.getZanTop();
					if(top < 100000){
						comment.setZanTop(top + 1);
					}
				}
				if(topOrDown.equals("down")){
					int down = comment.getZanDown();
					if(down < 100000){
						comment.setZanDown(down + 1);
					}
				}
				commentDao.update(comment);
			}
		}
		
	}
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public void saveComment(String appDetailID, String userNameID,
			String commentDeatil) {
		if(appDetailID != null && userNameID != null && commentDeatil != null){
			Comment comment = new Comment();
			comment.setAppDetaiId(appDetailID);
			comment.setCommentDetail(commentDeatil);
			comment.setCommentTime(new Date());
			UserInfo userInfo = new UserInfo();
			userInfo.setID(userNameID);
			comment.setUserId(userInfo);
			comment.setZanDown(0);
			comment.setZanTop(0);
			commentDao.save(comment);
		}
		
	}


	
	
}
	

