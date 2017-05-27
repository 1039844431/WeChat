package com.nicexcx.daoIpml;


import org.springframework.stereotype.Repository;

import com.nicexcx.dao.IGoodRecommendDao;
import com.nicexcx.domain.GoodRecommend;





@Repository(IGoodRecommendDao.SERVICE_NAME)
public class GoodRecommendDaoImpl extends CommonDaoImpl<GoodRecommend> implements IGoodRecommendDao{


}
