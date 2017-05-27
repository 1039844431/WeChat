package com.nicexcx.daoIpml;


import org.springframework.stereotype.Repository;

import com.nicexcx.dao.IHotRecommendDao;

import com.nicexcx.domain.HotRecommend;




@Repository(IHotRecommendDao.SERVICE_NAME)
public class HotRecommendDaoImpl extends CommonDaoImpl<HotRecommend> implements IHotRecommendDao{


}
