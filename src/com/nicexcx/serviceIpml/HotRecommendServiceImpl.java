package com.nicexcx.serviceIpml;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.annotation.Resource;


import com.nicexcx.dao.IHotRecommendDao;

import com.nicexcx.domain.AppDetail;
import com.nicexcx.domain.HotRecommend;
import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.service.IHotRecommendService;
import com.nicexcx.util.StringHelp;


@Transactional(readOnly=true)
@Service(IHotRecommendService.SERVICE_NAME)
public class HotRecommendServiceImpl implements IHotRecommendService{

	
	@Resource(name=IHotRecommendDao.SERVICE_NAME)
	private IHotRecommendDao hotRecommendDao;


	
	public List<AppDetailFrom> findHotRecommendList() {
		List<AppDetailFrom> appDetailFromList = null;
		List<HotRecommend> list = hotRecommendDao.findCollectionByConditionNopage(" 1 = 1", null, null);
		
		if(list != null && list.size() > 0){
			appDetailFromList = new ArrayList<AppDetailFrom>();
			for(HotRecommend  hotRecommend : list){
				AppDetail  appDetail  = hotRecommend.getAppDetail();
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
	

