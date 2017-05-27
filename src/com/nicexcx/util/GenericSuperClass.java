package com.nicexcx.util;

import java.lang.reflect.ParameterizedType;

public class GenericSuperClass {

	public static Class getClass(Class tClass){
		ParameterizedType parameterizedType =(ParameterizedType)tClass.getGenericSuperclass();
		Class entity = (Class)parameterizedType.getActualTypeArguments()[0];
		return entity;
	}
	
}
