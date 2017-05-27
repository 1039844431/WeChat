package com.nicexcx.contains;



import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class ServiceProviderCord {

	protected static ApplicationContext ac;
	public static void load(String filename){
		ac = new ClassPathXmlApplicationContext(filename);
	}
}
