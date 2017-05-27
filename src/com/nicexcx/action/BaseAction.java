package com.nicexcx.action;

import java.io.IOException;
import java.io.OutputStream;
import java.util.zip.GZIPOutputStream;
import java.util.zip.ZipOutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import com.opensymphony.xwork2.ActionSupport;

public class BaseAction extends ActionSupport implements ServletRequestAware,ServletResponseAware{

	protected HttpServletRequest request= null;
	protected HttpServletResponse response= null;
	public void setServletRequest(HttpServletRequest request){		
		this.request = request;		
	}
	public void setServletResponse(HttpServletResponse response){		
		this.response = response;		
	}
}
