package com.nicexcx.serviceIpml;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.annotation.Resource;
import com.nicexcx.dao.IGoodRecommendDao;
import com.nicexcx.domain.AppDetail;
import com.nicexcx.domain.GoodRecommend;
import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.service.IGoodRecommendService;
import com.nicexcx.util.StringHelp;


@Transactional(readOnly=true)
@Service(IGoodRecommendService.SERVICE_NAME)
public class GoodRecommendServiceImpl implements IGoodRecommendService{

	
	@Resource(name=IGoodRecommendDao.SERVICE_NAME)
	private IGoodRecommendDao goodRecommendDao;


	
	public List<AppDetailFrom> findGoodRecommendList() {
		List<AppDetailFrom> appDetailFromList = null;
		List<GoodRecommend> list = goodRecommendDao.findCollectionByConditionNopage(" 1 = 1", null, null);
		
		if(list != null && list.size() > 0){
			appDetailFromList = new ArrayList<AppDetailFrom>();
			for(GoodRecommend  goodRecommend : list){
				AppDetail  appDetail  = goodRecommend.getAppDetail();
				AppDetailFrom appDetailFrom = appDetailNoIntroImgPOToVO(appDetail);
				appDetailFromList.add(appDetailFrom);
			}
		}
		return appDetailFromList;
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
		appDetailFrom.setPeopleLookNum(String.valueOf(appDetail.getPeopleLookNum()));		
		return appDetailFrom;
	}
}
	

