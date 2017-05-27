package com.nicexcx.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class StringHelp {

	public static Date stringDateCoverDate(String stringDate){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		
		try {
			date = sdf.parse(stringDate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return date;
	}
	
	public static String dateCoverStringDate(Date date){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		return sdf.format(date);
	}
	/*
	 * 判断是不是移动设备
	 * 返回false不是移动设备
	 * 返回true是移动设备
	 */
	public static boolean checkAgentIsMobile(String ua) {
		final String[] agent = { "Android", "iPhone", "iPod","iPad", "Windows Phone", "MQQBrowser" }; 
		boolean flag = false;
		if (!ua.contains("Windows NT") || (ua.contains("Windows NT") && ua.contains("compatible; MSIE 9.0;"))) {
			// 排除 苹果桌面系统
			if (!ua.contains("Windows NT") && !ua.contains("Macintosh")) {
				for (String item : agent) {
					if (ua.contains(item)) {
					flag = true;
					break;
					}
				}
			}
		}
		return flag;
		}
}
