package com.nicexcx.serviceIpml;




import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import com.nicexcx.dao.IAppDetailDao;
import com.nicexcx.domain.AppDetail;
import com.nicexcx.domain.AppIntroImg;
import com.nicexcx.domain.CategoryDic;
import com.nicexcx.domain.Collect;
import com.nicexcx.domain.UserInfo;
import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.from.PageAppDetailFrom;
import com.nicexcx.service.IAppDetailService;
import com.nicexcx.util.PageInfo;
import com.nicexcx.util.StringHelp;
import com.sun.corba.se.spi.servicecontext.UEInfoServiceContext;


@Transactional(readOnly=true)
@Service(IAppDetailService.SERVICE_NAME)
public class AppDetailServiceImpl implements IAppDetailService{

	
	@Resource(name=IAppDetailDao.SERVICE_NAME)
	private IAppDetailDao appDetailDao;

	/*
	    * @Name: findAppDetailByID
		* @Description: 根据ID进行查询
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String ID  id
	 				  
		* @Return: 每个App的详细对象AppDetail
	 */
	public AppDetail findAppDetailByID(String ID) {
		String hqlWhere = " o.ID = ?";
		Object[] params = {ID};
		List<AppDetail> list = appDetailDao.findCollectionByConditionNopage(hqlWhere, params, null);
		AppDetail appDetail = null;
		if(list !=null && list.size() > 0 ){
			appDetail = list.get(0);
		}
		return appDetail;
	}

	/*
	    * @Name: saveAppDetail
		* @Description: 根据AppDetail进行存储
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: AppDetail appDetail	 				  
		* @Return: 无
	 */
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public void saveAppDetail(AppDetail appDetail) {		
		appDetailDao.save(appDetail);
	}
	/*
	    * @Name: saveAppDetail
		* @Description: 根据AppDetailFrom进行存储
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: AppDetailFrom getAppImgDetailFrom	 				  
		* @Return: 无
	 */
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public void saveAppDetail(AppDetailFrom getAppImgDetailFrom) {		
		AppDetail appDetail = appDetailVOToPO(getAppImgDetailFrom);
		saveAppDetail(appDetail);
	}
	/*
	    * @Name: appDetailVOToPO
		* @Description: 将AppDetailFrom的VO对象转换成PO对象
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: AppDetailFrom getAppImgDetailFrom	 				  
		* @Return: 无
	 */
	public AppDetail appDetailVOToPO(AppDetailFrom getAppImgDetailFrom){
		AppDetail appDetail = new AppDetail();
		if(getAppImgDetailFrom.getAppImg() != null){
			appDetail.setAppImg(getAppImgDetailFrom.getAppImg());
		}
		if(getAppImgDetailFrom.getAppName() != null){
			appDetail.setAppName(getAppImgDetailFrom.getAppName());
		}
		if(getAppImgDetailFrom.getCategory() != null){
			CategoryDic categoryDic = new CategoryDic();
			categoryDic.setID(getAppImgDetailFrom.getCategory());
			appDetail.setCategoryDic(categoryDic);
		}
		if(getAppImgDetailFrom.getUserId() != null && !getAppImgDetailFrom.getUserId().equals("")){
			UserInfo user = new UserInfo();
			user.setID(getAppImgDetailFrom.getUserId());
			appDetail.setUserID(user);
		}
		if(getAppImgDetailFrom.getErweiImg() != null){
			appDetail.setErweiImg(getAppImgDetailFrom.getErweiImg());
		}
		if(getAppImgDetailFrom.getIntro() != null){
			appDetail.setIntro(getAppImgDetailFrom.getIntro());
		}
		if(getAppImgDetailFrom.getTag() != null){
			appDetail.setTag(getAppImgDetailFrom.getTag());
		}
		
	    appDetail.setPeopleLookNum(0);		
		appDetail.setIssueTime(new Date());
		appDetail.setIsIssue(0);
		appDetail.setIsDelete(1);
		if(getAppImgDetailFrom.getIntroImgPath() != null){
			AppIntroImg introImg = null;
			List<String> introImgPathList = getAppImgDetailFrom.getIntroImgPath();
			for(String introImgPath:introImgPathList){
				introImg = new AppIntroImg();
				introImg.setAppIntroImg(introImgPath);
				introImg.setAppDetailID(appDetail);
				appDetail.getAppIntroImgs().add(introImg);
			}			
		}
		return appDetail;
	}
	/*
	    * @Name: findAppDetailListByCategory
		* @Description: 通过类别查找AppDetail
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String category	 				  
		* @Return: List<AppDetailFrom>
	 */
	public PageAppDetailFrom findAppDetailListByCategory(HttpServletRequest request, String category) {
		
		String hqlWhere = "";
		List<String> paramList = new ArrayList<String>();
		Object []params = null;
		if(category != null && !category.equals("0")){
			hqlWhere += " and o.categoryDic.key = ? and o.isIssue = 1 and o.isDelete = 1";
			paramList.add(category);
			params = paramList.toArray();
		}else{
			hqlWhere += " and o.isIssue = 1 and o.isDelete = 1";
		}
		
		
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put(" o.issueTime", " desc");
		PageAppDetailFrom pageAppDetailFrom = new PageAppDetailFrom();
		PageInfo pageInfo = new PageInfo(request,6);
		List<AppDetail> list = appDetailDao.findCollectionByConditionWithpage(hqlWhere, params, orderby, pageInfo);
		List<AppDetailFrom> appDetailFromsList =  appDetailListVOToPO(list);
		if(appDetailFromsList != null){
			pageAppDetailFrom.setAppDetailFromList(appDetailFromsList);		
		}
		pageAppDetailFrom.setCurrentPageNo(pageInfo.getPageBean().getPageNo());
		pageAppDetailFrom.setTotalResult(pageInfo.getPageBean().getTotalResult());
		pageAppDetailFrom.setTotalPage(pageInfo.getPageBean().getSumPage());
		
		return pageAppDetailFrom;
	}

	private List<AppDetailFrom> appDetailListVOToPO(List<AppDetail> list) {
		List<AppDetailFrom> appDetailFromsList = new ArrayList<AppDetailFrom>();
		for(AppDetail appDetail : list){
			AppDetailFrom appDetailFrom = appDetailNoIntroImgPOToVO(appDetail);
			if(appDetailFrom != null && appDetailFrom.getIntro() != null 
					&& !appDetailFrom.getIntro().equals("") && appDetailFrom.getIntro().length() > 20){
				appDetailFrom.setIntro(appDetailFrom.getIntro().substring(0, 20));
			}
			appDetailFromsList.add(appDetailFrom);
		}
		return appDetailFromsList;
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
		
	    appDetailFrom.setIsIssue(String.valueOf(appDetail.getIsIssue()));
	    if(appDetail.getPeopleLookNum() < 100000000){
	    	appDetailFrom.setPeopleLookNum(String.valueOf(appDetail.getPeopleLookNum()));	
	    }else{
	    	appDetailFrom.setPeopleLookNum("100000000+");
	    }
			
		return appDetailFrom;
	}
	private AppDetailFrom appDetailHaveIntroImgPOToVO(AppDetail appDetail) {
		AppDetailFrom appDetailFrom =  appDetailNoIntroImgPOToVO(appDetail);
		List<String> introImgPath = new ArrayList<String>();
		Set<AppIntroImg> introImgSet = appDetail.getAppIntroImgs();
		for(AppIntroImg appIntroImg:introImgSet){
			if(appIntroImg.getAppIntroImg() != null){
				introImgPath.add(appIntroImg.getAppIntroImg());
			}
		}
		appDetailFrom.setIntroImgPath(introImgPath);           
		return appDetailFrom;
	}

	public AppDetailFrom findAppDetailFromByID(String appID) {
		AppDetail appDetail = this.findAppDetailByID(appID);
		AppDetailFrom appDetailFrom = this.appDetailHaveIntroImgPOToVO(appDetail);
		return appDetailFrom;
	}

	public PageAppDetailFrom findAppDetailByName(HttpServletRequest request,
			String searchKey) {
		String hqlWhere = "";
		List<String> paramList = new ArrayList<String>();
		Object []params = null;		
		hqlWhere += " and o.appName like ? and o.isIssue = 1 and o.isDelete = 1";
		paramList.add("%" + searchKey + "%");
		params = paramList.toArray();
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put(" o.issueTime", " desc");
		PageAppDetailFrom pageAppDetailFrom = new PageAppDetailFrom();
		PageInfo pageInfo = new PageInfo(request,6);
		List<AppDetail> list = appDetailDao.findCollectionByConditionWithpage(hqlWhere, params, orderby, pageInfo);
		List<AppDetailFrom> appDetailFromsList =  appDetailListVOToPO(list);
		if(appDetailFromsList != null){
			pageAppDetailFrom.setAppDetailFromList(appDetailFromsList);
		}
		pageAppDetailFrom.setCurrentPageNo(pageInfo.getPageBean().getPageNo());
		pageAppDetailFrom.setTotalResult(pageInfo.getPageBean().getTotalResult());
		pageAppDetailFrom.setTotalPage(pageInfo.getPageBean().getSumPage());
		return pageAppDetailFrom;
	}

	public PageAppDetailFrom findAppDetailListByUserID(
			HttpServletRequest request, String id) {
		String hqlWhere = "";
		List<String> paramList = new ArrayList<String>();
		Object []params = null;
		if(id != null){
			hqlWhere += " and o.userID.id = ? and o.isDelete = 1";
			paramList.add(id);
			params = paramList.toArray();
		}
		
		
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put(" o.issueTime", " desc");
		PageAppDetailFrom pageAppDetailFrom = new PageAppDetailFrom();
		PageInfo pageInfo = new PageInfo(request,6);
		List<AppDetail> list = appDetailDao.findCollectionByConditionWithpage(hqlWhere, params, orderby, pageInfo);
		List<AppDetailFrom> appDetailFromsList =  appDetailListVOToPO(list);
		if(appDetailFromsList != null){
			pageAppDetailFrom.setAppDetailFromList(appDetailFromsList);
		}
		pageAppDetailFrom.setCurrentPageNo(pageInfo.getPageBean().getPageNo());
		pageAppDetailFrom.setTotalResult(pageInfo.getPageBean().getTotalResult());
		pageAppDetailFrom.setTotalPage(pageInfo.getPageBean().getSumPage());
		return pageAppDetailFrom;
	}
	
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public boolean untruthDeleteDetail(String userID, String appDetailID) {
		String hqlWhere = "";
		List<String> paramList = new ArrayList<String>();
		hqlWhere += " o.id = ? and o.userID.id = ?";
		paramList.add(appDetailID);
		paramList.add(userID);
		Object []params = paramList.toArray();
		List<AppDetail> list = appDetailDao.findCollectionByConditionNopage(hqlWhere, params, null);
		if(list != null && list.size() > 0){
			AppDetail appDetail = list.get(0);
			appDetail.setIsDelete(0);
			appDetailDao.update(appDetail);
			return true;
		}
		return false;
	}
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public void addLookPeople(String appDetailID) {
		AppDetail appDetail = this.findAppDetailByID(appDetailID);
		if(appDetail != null){
			int peopleSize = appDetail.getPeopleLookNum();
			if(peopleSize < 100000000){
				appDetail.setPeopleLookNum(peopleSize +1);
				appDetailDao.update(appDetail);
			}
		}
	}

	public boolean findAppDetailByAppName(String appName) {
		String hqlWhere = "";
		List<String> paramList = new ArrayList<String>();
		hqlWhere += " o.appName = ? ";
		paramList.add(appName);
		Object []params = paramList.toArray();
		List<AppDetail> list = appDetailDao.findCollectionByConditionNopage(hqlWhere, params, null);
		if(list != null && list.size() > 0){
			return true;
		}
		return false;
	}
}
	

