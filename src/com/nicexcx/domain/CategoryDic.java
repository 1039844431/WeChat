package com.nicexcx.domain;

import java.util.Date;

public class CategoryDic implements java.io.Serializable{
	private String ID;
	private String key;
	private String value;
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	
}
