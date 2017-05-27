package com.nicexcx.daoIpml;




import org.springframework.stereotype.Repository;
import com.nicexcx.dao.ICommentDao;
import com.nicexcx.domain.Comment;




@Repository(ICommentDao.SERVICE_NAME)
public class CommentDaoImpl extends CommonDaoImpl<Comment> implements ICommentDao{

	
	

}
