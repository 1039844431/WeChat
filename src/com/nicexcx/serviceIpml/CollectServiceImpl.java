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



import com.nicexcx.dao.ICollectDao;
import com.nicexcx.dao.IGoodRecommendDao;
import com.nicexcx.domain.AppDetail;
import com.nicexcx.domain.CategoryDic;
import com.nicexcx.domain.Collect;
import com.nicexcx.domain.GoodRecommend;
import com.nicexcx.domain.UserInfo;
import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.from.PageAppDetailFrom;
import com.nicexcx.service.ICollectService;

import com.nicexcx.util.PageInfo;
import com.nicexcx.util.StringHelp;


@Transactional(readOnly=true)
@Service(ICollectService.SERVICE_NAME)
public class CollectServiceImpl implements ICollectService{

	
	@Resource(name=ICollectDao.SERVICE_NAME)
	private ICollectDao collectDao;


	
	public PageAppDetailFrom findCollectListByUserID(HttpServletRequest request, String userID) {
		String hqlWhere = "";
		List<String> paramList = new ArrayList<String>();
		Object []params = null;		
		hqlWhere += " and o.userID.id = ? ";
		paramList.add(userID);
		params = paramList.toArray();
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put(" o.collectTime", " desc");
		PageInfo pageInfo = new PageInfo(request,6);
		List<Collect> list = collectDao.findCollectionByConditionWithpage(hqlWhere, params, orderby, pageInfo);
		List<AppDetailFrom> appDetailFromList = null;
		if(list != null && list.size() > 0){
			appDetailFromList = new ArrayList<AppDetailFrom>();
			for(Collect  collect : list){
				AppDetail  appDetail  = collect.getAppDetail();
				AppDetailFrom appDetailFrom = appDetailNoIntroImgPOToVO(appDetail);
				if(collect.getCollectTime() != null){
					appDetailFrom.setCollectTime(StringHelp.dateCoverStringDate(collect.getCollectTime()));
				}
				appDetailFromList.add(appDetailFrom);
			}
		}
		PageAppDetailFrom pageAppDetailFrom = new PageAppDetailFrom(); 
		if(appDetailFromList != null){
			pageAppDetailFrom.setAppDetailFromList(appDetailFromList);
		}
		
		pageAppDetailFrom.setCurrentPageNo(pageInfo.getPageBean().getPageNo());
		pageAppDetailFrom.setTotalResult(pageInfo.getPageBean().getTotalResult());
		pageAppDetailFrom.setTotalPage(pageInfo.getPageBean().getSumPage());
		return pageAppDetailFrom;
	}

	private AppDetailFrom appDetailNoIntroImgPOToVO(AppDetail appDetail) {
		AppDetailFrom appDetailFrom = new AppDetailFrom();	
		
		if(appDetail.getAppImg() != null){
			appDetailFrom.setAppImg(appDetail.getAppImg());
			}		
		if(appDetail.getAppName() != null){
			appDetailFrom.setAppName(appDetail.getAppName());
			}	
		if(appDetail.getCategoryDic() != null && appDetail.getCategoryDic().getValue() != null){
				appDetailFrom.setCategory(appDetail.getCategoryDic().getValue());
			}		
		if(appDetail.getErweiImg() != null){
			appDetailFrom.setErweiImg(appDetail.getErweiImg());
			}		
		if(appDetail.getID() != null){
			appDetailFrom.setID(appDetail.getID());
			}		
		if(appDetail.getIntro() != null){
			appDetailFrom.setIntro(appDetail.getIntro());
			}			
		if(appDetail.getIssueTime() != null){
			appDetailFrom.setIssueTime(StringHelp.dateCoverStringDate(appDetail.getIssueTime()));
			}			
		if(appDetail.getTag() != null){
			appDetailFrom.setTag(appDetail.getTag());
			}
		appDetailFrom.setIsDelete(String.valueOf(appDetail.getIsDelete()));
		appDetailFrom.setPeopleLookNum(String.valueOf(appDetail.getPeopleLookNum()));		
		return appDetailFrom;
	}
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public boolean addCollectByAppDetail(String appDetailID,String userID) {
		Collect odlCollect = this.findCollectByUserIDAndAppDetail(appDetailID, userID);
		if(odlCollect == null){
			Collect collect = new Collect();
			UserInfo userInfo = new UserInfo();
			userInfo.setID(userID);
			AppDetail appDetail = new AppDetail();
			appDetail.setID(appDetailID);
			collect.setUserID(userInfo);
			collect.setAppDetail(appDetail);
			collect.setCollectTime(new Date());
			collectDao.save(collect);
		}
		return true;
	}

	private Collect findCollectByUserIDAndAppDetail(String appDetailID,
			String userID) {
		String hqlWhere = "";
		List<String> paramList = new ArrayList<String>();
		hqlWhere += " o.appDetail.id = ? and o.userID.id = ?";
	
		paramList.add(appDetailID);
		paramList.add(userID);
		Object []params = paramList.toArray();
		List<Collect> list = collectDao.findCollectionByConditionNopage(hqlWhere, params, null);
		if(list != null && list.size() > 0){
			return list.get(0);
		}
		return null;
	}

	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public boolean deleteDetail(String userID, String appDetailID) {
		Collect collect = this.findCollectByUserIDAndAppDetail(appDetailID, userID);
		if(collect != null){
			collectDao.deleteObjectByIDs(collect.getID());
			return true;
		}
		return false;
	}
}
	

