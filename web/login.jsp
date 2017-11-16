<%--
  Created by IntelliJ IDEA.
  User: zxw
  Date: 17-10-19
  Time: 下午2:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <base href="<%=basePath%>">
    <title>登录</title>
    <%--<link rel="stylesheet" type="text/css" href="./Bootstrap/bootstrap.css">--%>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="./font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="./css/login.css">
    <script src="./jquery/jquery.js"></script>
    <script src="./javascript/login.js"></script>
</head>
<body>

<p class="tip" style="color: #ef4238">欢迎来到那一年影城</p>
<div id="login"></div>
<div class="cont">
    <div class="form sign-in">
        <form method="post" action="Login">
            <label>
                <span>账号</span>
                <input type="text" name = "user" class = "name" id="name"/>
            </label>
            <label>
                <span>密码</span>
                <input type="password" name = "pass" class = "password" id="password" />
            </label>
            <label for="name" style="color: #cfcfcf">选择身份</label>
            <select class="form-control" name = "select" style="width: 200px;margin: auto">
                <option value="administrator" style="color: #cfcfcf">管理员</option>
                <option value="manager" style="color: #cfcfcf">经理</option>
                <option value="saler" style="color: #cfcfcf">售票员</option>
            </select>
            <label>
                <%
                    String error = (String)request.getAttribute("loginError");
                    if(error != null){
                        out.println(error);
                        session.removeAttribute("loginError");
                    }
                %>
            </label>
            <p class="forgot-pass">忘记密码？</p>
            <button type="button" class="submit"><input type="submit" /></button>
            <button type="button" class="fb-btn">Connect with <span>facebook</span></button>
        </form>
    </div>
    <div class="sub-cont">
        <div class="img">
            <div class="img__text m--up">
                <h2>One of us?</h2>
                <p>if you already has an account,just sign in.We've missed you!</p>
            </div>
        </div>
    </div>
</div>

</body>
</html>
