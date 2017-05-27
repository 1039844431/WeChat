package com.nicexcx.action;


import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;

import net.sf.json.JSONObject;
import com.nicexcx.contains.ServiceProvider;
import com.nicexcx.domain.UserInfo;
import com.nicexcx.from.UserInfoFrom;
import com.nicexcx.service.IUserInfoService;
import com.nicexcx.util.ReturnMessageBean;
import com.nicexcx.util.VerifyCodeUtils;
import com.opensymphony.xwork2.ModelDriven;
public class UserInfoAction extends BaseAction implements ModelDriven<UserInfoFrom>{	
	private UserInfoFrom userInfoFrom = new UserInfoFrom();
	private IUserInfoService userInfoService = (IUserInfoService) ServiceProvider.getService(IUserInfoService.SERVICE_NAME);
	public UserInfoFrom getModel() {
		return userInfoFrom;
	}

	/*
	    * @Name: login
		* @Description: 根据用户名和密码进行登录
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String userName  用户名
	 				   String passWord  密码
		* @Return: 无
	 */
	public String login(){
		HttpSession session =  request.getSession();
		ReturnMessageBean registerBean = new ReturnMessageBean();
		response.setCharacterEncoding("utf-8");
		String userName = request.getParameter("loginusername").trim();
		String passWord = request.getParameter("loginpassword").trim();
		if(userName == null || userName.equals("")){
			registerBean.setMessage("用户名为空！");
			registerBean.setState("0");
		}else if(passWord == null || passWord.equals("")){
			registerBean.setMessage("密码不能为空！");
			registerBean.setState("0");
		}else{
			UserInfo userInfo  = userInfoService.login(userName,passWord);
			if(userInfo != null){
				registerBean.setMessage(userInfo.getUserName());
				registerBean.setState("1");
				session.setAttribute("userNameKey", userInfo.getUserName());
				session.setAttribute("userNameID", userInfo.getID());
			}else{
				registerBean.setMessage("用户名或密码错了哦！");
				registerBean.setState("0");
			}
		}
		send(response,registerBean);
		return null;
	}
	
	/*
	    * @Name: register
		* @Description: 根据用户名和密码、邮箱进行注册
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String userName  用户名
	 				   String passWord  密码
	 				   String email  邮箱
		* @Return: 无
	 */
	public String register(){		
		HttpSession session =  request.getSession();		
		ReturnMessageBean registerBean = new ReturnMessageBean();
		response.setCharacterEncoding("utf-8");
		String userName = request.getParameter("regusername").trim();
		String passWord = request.getParameter("regpassword").trim();
		String phone = request.getParameter("phone").trim();
		String verifyCode =  request.getParameter("verifyCode");
		String regUserName = "<[^>]+>";
		if(userName == null || userName.equals("")){
			registerBean.setMessage("* 用户名不能为空！");
			registerBean.setState("0");
		}else if(passWord == null || passWord.equals("")){
			registerBean.setMessage("* 密码不能为空！");
			registerBean.setState("0");
		}else if(phone == null || phone.equals("")){
			registerBean.setMessage("* 电话不能为空！");
			registerBean.setState("0");
		}else if(StringUtils.isBlank(verifyCode) || !verifyCode.equals(session.getAttribute("VERIFYCODERAND"))){
			registerBean.setMessage("验证码不正确哦！");
			registerBean.setState("0");
		}else if(checkReg(regUserName,userName)){
			registerBean.setMessage("不能包含<>等HTML标签字符");
			registerBean.setState("0");
		}else if(userName.length() > 30){
			registerBean.setMessage("用户名不能长于30个字符");
			registerBean.setState("0");
		}else if(phone.length() > 12 || passWord.length() > 21){
			registerBean.setMessage("电话或者密码格式不正确");
			registerBean.setState("0");
		}else{
			boolean existUserName = userInfoService.checkUserByUserName(userName);
			boolean existPhone = userInfoService.checkUserByPhone(phone);
			if(existUserName){
				registerBean.setMessage("* 昵称被哪个家伙用过了！");
				registerBean.setState("0");
			}else if(existPhone){
				registerBean.setMessage("* 电话被哪个家伙用过了！");
				registerBean.setState("0");
			}else{
				boolean loginFlag = userInfoService.register(userName,passWord,phone);
				if(loginFlag){
					registerBean.setMessage("注册成功");
					registerBean.setState("1");					
					session.setAttribute("userNameKey", userName);
					UserInfo userInfo = userInfoService.findUserByUserName(userName);
					session.setAttribute("userNameID", userInfo.getID());
				}
			}			
		}
		send(response,registerBean);
		return null;
	}
	
	/*
	    * @Name: checkUserNameExit
		* @Description: 根据用户名检查用户名是否存在
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String regusername  ajax参数用户名
		* @Return: 无
	 */
	public String checkUserNameExit(){
		ReturnMessageBean registerBean = new ReturnMessageBean();
		response.setCharacterEncoding("utf-8");
		String regusername = request.getParameter("regusername").trim();
		if(regusername == null){
			registerBean.setMessage("* 昵称不能为空哦！");
			registerBean.setState("0");
		}else{
			boolean existUserName = userInfoService.checkUserByUserName(regusername);
			if(existUserName){
				registerBean.setMessage("* 昵称被哪个家伙用过了！");
				registerBean.setState("0");
			}else{
				registerBean.setMessage("* 恭喜，昵称可以用！");
				registerBean.setState("1");
			}
		}
		send(response,registerBean);
		return null;
	}
	/*
	    * @Name: checkUserNameExit
		* @Description: 根据用户名检查用户名是否存在
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String regusername  ajax参数用户名
		* @Return: 无
	 */
	public String checkUserPhone(){
		ReturnMessageBean registerBean = new ReturnMessageBean();
		response.setCharacterEncoding("utf-8");
		String phone = request.getParameter("phone").trim();
		if(phone == null){
			registerBean.setMessage("* 电话号码不能为空哦！");
			registerBean.setState("0");
		}else{
			boolean existPhone = userInfoService.checkUserByPhone(phone);
			if(existPhone){
				registerBean.setMessage("* 电话被哪个家伙用过了！");
				registerBean.setState("0");
			}else{
				registerBean.setMessage("* 恭喜，电话可以用！");
				registerBean.setState("1");
			}
		}
		send(response,registerBean);
		return null;
	}	
	/*
	    * @Name: checkUserNameExit
		* @Description: 根据邮箱检查用户名是否存在
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: String rootemail  ajax参数邮箱
		* @Return: 无
	 */
	public String checkUserEmailExit(){
		ReturnMessageBean registerBean = new ReturnMessageBean();
		response.setCharacterEncoding("utf-8");
		String email = request.getParameter("rootemail").trim();
		if(email == null){
			registerBean.setMessage("* 邮箱不能为空哦！");
			registerBean.setState("0");
		}else{
			boolean existEmail = userInfoService.checkUserByEmail(email);
			if(existEmail){
				registerBean.setMessage("* 邮箱被哪个家伙用过了！");
				registerBean.setState("0");
			}else{
				registerBean.setMessage("* 恭喜，邮箱可以用！");
				registerBean.setState("1");
			}
		}
		send(response,registerBean);
		return null;
	}
	
	public String checkUserOdlPsw(){
		ReturnMessageBean registerBean = new ReturnMessageBean();
		response.setCharacterEncoding("utf-8");
		String odlpsw = request.getParameter("odlPsw").trim();
		
		if(odlpsw == null || odlpsw.equals("")){
			registerBean.setMessage("* 密码不能为空哦！");
			registerBean.setState("0");
		}else{
			HttpSession session = request.getSession();
			String userID = (String) session.getAttribute("userNameID");
			UserInfo userInfo = null;
			if(userID != null && !userID.equals("")){
				 userInfo =  userInfoService.findUserByUserID(userID);
			}else{
				registerBean.setState("0");
				registerBean.setMessage("登录超时，请重新登录！");
			}
			if(userInfo != null){
				if(userInfo.getPassWord() != null && userInfo.getPassWord().equals(odlpsw)){
					registerBean.setState("1");
					registerBean.setMessage("密码正确");
				}else{
					registerBean.setState("0");
					registerBean.setMessage("密码错误！");
				}
			}
		}
		send(response,registerBean);
		return null;
	}
	/*
	    * @Name: checkUserNameExit
		* @Description: 根据HttpServletResponse和ReturnMessageBean返回信息
		* @Author: 傅建仁（作者）
		* @Version: V1.00 （版本号）
		* @Create Date: 2015-10-13 （创建日期）
		* @Parameters: HttpServletResponse response  
			 		   ReturnMessageBean registerBean
		* @Return: 无
	 */
	public void send(HttpServletResponse response,ReturnMessageBean registerBean){
		JSONObject  registerBeanJDON  = JSONObject.fromObject(registerBean);
		try {
			response.getWriter().print(registerBeanJDON.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public String isLogin(){
		response.setCharacterEncoding("utf-8");
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("userNameKey");
		ReturnMessageBean registerBean = new ReturnMessageBean();
		if(userName == null || userName.equals("")){
			registerBean.setMessage("亲，先登录再发布哦！");
			registerBean.setState("0");
		}else{
			registerBean.setMessage(userName);
			registerBean.setState("1");
		}
		send(response,registerBean);
		return null;
	}
	
	public String userIndex(){	
		return "userIndex";
	}
	public String checkVerifyCode(){
		response.setCharacterEncoding("utf-8");
		ReturnMessageBean registerBean = new ReturnMessageBean();
		String verifyCode =  request.getParameter("verifyCode");
		HttpSession session =  request.getSession();
		if(StringUtils.isBlank(verifyCode) || !verifyCode.equals(session.getAttribute("VERIFYCODERAND"))){
			registerBean.setMessage("*验证码不正确，请重新输入!");
			registerBean.setState("0");
		}else{
			registerBean.setMessage("验证码输入正确");
			registerBean.setState("1");
		}
		JSONObject  registerBeanJDON  = JSONObject.fromObject(registerBean);
		try {
			response.getWriter().print(registerBeanJDON.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	public String getVerifyCode(){
	    response.setHeader("Pragma", "No-cache");  
        response.setHeader("Cache-Control", "no-cache");  
        response.setDateHeader("Expires", 0);  
        response.setContentType("image/jpeg");     
        //生成随机字串  
        String verifyCode = VerifyCodeUtils.generateVerifyCode(4);  
        //存入会话session  
        HttpSession session = request.getSession(true);  
        session.setAttribute("VERIFYCODERAND", verifyCode.toLowerCase());  
        int w = 80, h = 40;  
        try {
			VerifyCodeUtils.outputImage(w, h, response.getOutputStream(), verifyCode);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}  
	return null;
	}
	
	public String setUserInfo(){
		HttpSession session = request.getSession();
		String userID = (String) session.getAttribute("userNameID");
		UserInfo userInfo = null;
		if(userID != null && !userID.equals("")){
			 userInfo =  userInfoService.findUserByUserID(userID);
		}
		if(userInfo != null){
			request.setAttribute("userInfo", userInfo);	
			return "setUserInfo";
			
		}	
		return "loginerror";
	}
	public String upUserName(){
		response.setCharacterEncoding("utf-8");
		HttpSession session = request.getSession();
		String regUserName = "<[^>]+>";
		ReturnMessageBean registerBean = new ReturnMessageBean();
		String userName = request.getParameter("userName");
		if(userName != null && !userName.equals("")){		
			if(userInfoService.checkUserByUserName(userName)){
				registerBean.setState("0");
				registerBean.setMessage("更新失败，该昵称已被注册！");
			}else if(checkReg(regUserName,userName)){
				registerBean.setMessage("不能包含<>等HTML标签字符");
				registerBean.setState("0");
			}else if(regUserName.length() > 30){
				registerBean.setMessage("用户名不能超过30个字符");
				registerBean.setState("0");
			}else{
				String userID = (String) session.getAttribute("userNameID");
				UserInfo userInfo = null;		
				if(userID != null && !userID.equals("")){
					 userInfo =  userInfoService.findUserByUserID(userID);
				}
				if(userInfo == null){
					registerBean.setState("0");
					registerBean.setMessage("登录超时，请重新登录");
				}else{
					userInfo.setUserName(userName);
					boolean flag = userInfoService.upUserInfo(userInfo);
					if(flag){
						registerBean.setState("1");
						registerBean.setMessage("更新成功！");
					}else{
						registerBean.setState("0");
						registerBean.setMessage("更新失败！稍后再试");
					}
				}
			}
		}else{
			registerBean.setState("0");
			registerBean.setMessage("更新失败，昵称不能为空");
			}
		send(response,registerBean);
		return null;
	}
	public String upUserPhone(){
		response.setCharacterEncoding("utf-8");
		HttpSession session = request.getSession();
		ReturnMessageBean registerBean = new ReturnMessageBean();
		String phone = request.getParameter("phone");
		if(phone != null && !phone.equals("")){		
			if(userInfoService.checkUserByPhone(phone)){
				registerBean.setState("0");
				registerBean.setMessage("更新失败，该手机号已被注册！");
			}else{
				String userID = (String) session.getAttribute("userNameID");
				UserInfo userInfo = null;		
				if(userID != null && !userID.equals("")){
					 userInfo =  userInfoService.findUserByUserID(userID);
				}
				if(userInfo == null){
					registerBean.setState("0");
					registerBean.setMessage("登录超时，请重新登录");
				}else{
					userInfo.setPhone(phone);
					boolean flag = userInfoService.upUserInfo(userInfo);
					if(flag){
						registerBean.setState("1");
						registerBean.setMessage("更新成功！");
					}else{
						registerBean.setState("0");
						registerBean.setMessage("更新失败！稍后再试");
					}
				}
			}
		}else{
			registerBean.setState("0");
			registerBean.setMessage("更新失败，手机号不能为空");
			}
		send(response,registerBean);
		return null;
	}
	public String upUserEmail(){
		response.setCharacterEncoding("utf-8");
		HttpSession session = request.getSession();
		ReturnMessageBean registerBean = new ReturnMessageBean();
		String email = request.getParameter("email");
		if(email != null && !email.equals("")){		
			if(userInfoService.checkUserByEmail(email)){
				registerBean.setState("0");
				registerBean.setMessage("更新失败，该邮箱已被注册！");
			}else{
				String userID = (String) session.getAttribute("userNameID");
				UserInfo userInfo = null;		
				if(userID != null && !userID.equals("")){
					 userInfo =  userInfoService.findUserByUserID(userID);
				}
				if(userInfo == null){
					registerBean.setState("0");
					registerBean.setMessage("登录超时，请重新登录");
				}else{
					userInfo.setEmail(email);
					boolean flag = userInfoService.upUserInfo(userInfo);
					if(flag){
						registerBean.setState("1");
						registerBean.setMessage("更新成功！");
					}else{
						registerBean.setState("0");
						registerBean.setMessage("更新失败！稍后再试");
					}
				}
			}
		}else{
			registerBean.setState("0");
			registerBean.setMessage("更新失败，邮箱不能为空");
			}
		send(response,registerBean);
		return null;
	}
	public String upUserPsw(){
		response.setCharacterEncoding("utf-8");
		HttpSession session = request.getSession();
		ReturnMessageBean registerBean = new ReturnMessageBean();
		String odlPsw = request.getParameter("odlPsw");
		String newPsw = request.getParameter("newPsw");
		if(odlPsw != null && !odlPsw.equals("") && newPsw != null && !newPsw.equals("")){				
				String userID = (String) session.getAttribute("userNameID");
				UserInfo userInfo = null;		
				if(userID != null && !userID.equals("")){
					 userInfo =  userInfoService.findUserByUserID(userID);
				}
				if(userInfo == null){
					registerBean.setState("0");
					registerBean.setMessage("登录超时，请重新登录");
				}else if(newPsw.length() > 21){
					registerBean.setState("0");
					registerBean.setMessage("密码不能超过指定长度！");
				}else{
					if(userInfo.getPassWord() != null && odlPsw.equals(userInfo.getPassWord())){
						userInfo.setPassWord(newPsw);
						boolean flag = userInfoService.upUserInfo(userInfo);
						if(flag){
							registerBean.setState("1");
							registerBean.setMessage("更新成功！");
						}else{
							registerBean.setState("0");
							registerBean.setMessage("更新失败！稍后再试");
						}
					}else{
						registerBean.setState("0");
						registerBean.setMessage("注册失败，旧密码错误！");
					}					
				}
			}else{
			registerBean.setState("0");
			registerBean.setMessage("更新失败，密码不能为空");
			}
		send(response,registerBean);
		return null;
	}
	
	public String logOut(){
		HttpSession session = request.getSession();
		session.removeAttribute("userNameID");
		session.removeAttribute("userNameKey");
		try {
			response.getWriter().print("");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	
	public boolean checkReg(String regex,String detail){
		
		if(regex != null && detail != null){
			 Pattern p = Pattern.compile(regex);
			 Matcher m = p.matcher(detail);
			 return m.find();
		}
		return false;
		
	}
	
	public String mobileLoginHome(){
		return "mobileLoginHome";
	}
}





