<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>我的信息</title>
    <link rel="stylesheet" href="/static/css/me.css">
    <link rel="stylesheet" href="/static/font-awesome-4.7.0/css/font-awesome.min.css">
    <script src="/static/javascript/readmessge.js"></script>
    <link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="/static/javascript/userMessage.js"></script>
</head>
<body>
<div id="usermessage">
    <div id="header">
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <ul class="nav nav-tabs" id = "navbar">
                    <li class="nav navbar-nav navbar-right" id = "logout"><a href="/out"><span><i class="fa fa-sign-out" aria-hidden="true"></i></span>退出登录</a></li>
                    <li class="nav navbar-nav navbar-right" id = "user"></li>
                    <li class="nav navbar-nav navbar-right" id = "name"></li>
                </ul>

            </div>
        </nav>
    </div>
</div>
</body>
<script>
    get_user_message('/me.jsp');
//    get_back_entry();
</script>
</html>