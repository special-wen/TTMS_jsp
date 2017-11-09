<%--
  Created by IntelliJ IDEA.
  User: zxw
  Date: 17-10-19
  Time: 下午3:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.io.*, java.util.*"%>
<%@ page import="java.util.regex.Pattern" %>
<html>
<head>
    <title>表单信息</title>
</head>
<body>
<%
      String username = request.getParameter("user");
      String password = request.getParameter("pass");
      if(username.equals("") || password.equals("")){
          session.setAttribute("loginError","用户名和密码不能为空");
          response.setStatus(response.SC_MOVED_TEMPORARILY);
          response.setHeader("LOCATION","./Servlet.Login.jsp");

//          out.println("用户名和密码不能为空");

      }else{
          String match_user = "^[a-zA-Z0-9]{6,}$";
          Boolean user = Pattern.matches(match_user,username);
          Boolean word = Pattern.matches(match_user,password);
          if(!user || !word){
              session.setAttribute("loginError","用户名和密码不符合要求");
              response.setStatus(response.SC_MOVED_TEMPORARILY);
              response.setHeader("LOCATION","./Servlet.Login.jsp");
          }else{
              response.setStatus(response.SC_MOVED_TEMPORARILY);
              response.setHeader("LOCATION","./index.jsp");
          }
      }
%>
</body>
</html>
