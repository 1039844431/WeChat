package com.nicexcx.contains;

import org.apache.commons.lang.xwork.StringUtils;

public class ServiceProvider {
	public static ServiceProviderCord spc;
	static{
		spc = new ServiceProviderCord();
		spc.load("beans.xml");
	}
	
	public static Object getService(String serviceName){
		if(StringUtils.isBlank(serviceName)){
			throw new RuntimeException("当前的服务不存在");
		}
		Object object = null;
		if(spc.ac.containsBean(serviceName)){
		object = spc.ac.getBean(serviceName);	
		}
		if(object == null){
			throw new RuntimeException("当前的服务名称【 " + serviceName + " 】下的节点不存在");
		}
		return object;
	}
}
