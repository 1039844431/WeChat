package com.nicexcx.action;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.xwork.StringUtils;
import org.apache.struts2.ServletActionContext;

import com.nicexcx.from.AppDetailFrom;
import com.nicexcx.util.StringHelp;
import com.opensymphony.xwork2.ActionSupport;

public class MoreFileUploadAction extends BaseAction {

    private File[] image; //上传的文件
    private String[] imageFileName; //文件名称
    private String[] imageContentType; //文件类型
    private String savePath;
	public File[] getImage() {
		return image;
	}
	public void setImage(File[] image) {
		this.image = image;
	}
	public String[] getImageFileName() {
		return imageFileName;
	}
	public void setImageFileName(String[] imageFileName) {
		this.imageFileName = imageFileName;
	}
	public String[] getImageContentType() {
		return imageContentType;
	}
	public void setImageContentType(String[] imageContentType) {
		this.imageContentType = imageContentType;
	}

	public AppDetailFrom upFiles(AppDetailFrom appDetailFrom, String erweiImg) {
		 try {
			ServletActionContext.getRequest().setCharacterEncoding("UTF-8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	        //取得需要上传的文件数组
	        File[] files = getImage();
	        FileOutputStream fos = null;
            FileInputStream fis = null;
            String rootPath = request.getRealPath("/");
            List<String> introImgPath = new ArrayList<String>();
	        if (files !=null && files.length > 0) {
	            for (int i = 0; i < files.length; i++) {
	              String saveFileName = getFilePath(i,erweiImg,getImageFileName()[i]);
	              String realPath = rootPath + "/" + saveFileName;
	              if(i == 0){
	            	  appDetailFrom.setAppImg(saveFileName);
	              }
				 if(i == 1 && erweiImg != null && erweiImg.equals("1")){
					 appDetailFrom.setErweiImg(saveFileName);    	  
				   }else if(i == 1){
					 appDetailFrom.setErweiImg("AppImages/no_erwei.png");  
				   }
				 if(i > 1 || (erweiImg != null && erweiImg.equals("0") && i > 0)){					 
					 introImgPath.add(saveFileName);
				 }
					try {
						fos = new FileOutputStream(realPath);
						fis = new FileInputStream(files[i]);
					} catch (FileNotFoundException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
	                //建立上传文件的输入流
	                byte[] buffer = new byte[1024];
	                int len = 0;
	                try {
						while ((len=fis.read(buffer))>0) {
						    fos.write(buffer, 0, len);
						}
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
	                try {
						fos.close();
						fis.close();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
	                
	            }
	        }
	        appDetailFrom.setIntroImgPath(introImgPath);
	        return appDetailFrom;
	}
	
	private String getFilePath(int parent,String erWei,String fileName){
		StringBuffer rootPath =	new StringBuffer();
		StringBuffer sqlSavePath = new StringBuffer();
		rootPath.append(request.getRealPath("/"))
		        .append("/");
		sqlSavePath.append("AppImages");
		String dateFile =   StringHelp.dateCoverStringDate(new Date());
		String [] dotFile = fileName.split("\\.");
		if(parent == 0){
			sqlSavePath.append("/")
					.append("title")
					.append("/")
					.append(dateFile);
		}
		if(parent == 1 && erWei != null && erWei.equals("1")){
			sqlSavePath.append("/")
			.append("erwei")
			.append("/")
			.append(dateFile);
		}
		if(parent > 1 || (erWei != null && erWei.equals("0") && parent > 0)){
			sqlSavePath.append("/")
			.append("intro")
			.append("/")
			.append(dateFile);
		}
		String realPaht = rootPath.append(sqlSavePath).toString();
		File file = new File(realPaht);
		boolean dirsFlag = false;
		if(!file.exists()){
			dirsFlag = file.mkdirs();
		}else{
			dirsFlag = true;
		}
		if(dirsFlag){
			String randomNumber = (int) (Math.random()*10000) + "";
			sqlSavePath.append("/")
					.append(String.valueOf(System.currentTimeMillis()))
					.append(String.valueOf(parent))
					.append(randomNumber)
					.append(".")
					.append(dotFile[dotFile.length-1]);
			return sqlSavePath.toString();
		}
		return null;
	}
}