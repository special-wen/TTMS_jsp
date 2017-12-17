<!--<%@ page pageEncoding="UTF-8" isErrorPage="false" errorPage="error.jsp"%>-->

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>座位管理</title>
    <link rel="stylesheet" href="/static/css/aboutMe.css">
    <link rel="stylesheet" type="text/css" href="/static/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="/static/javascript/message.js"></script>
</head>
<body>
<jsp:include page="/me.jsp"></jsp:include>
<div class="container" id = "about">
    <div class="row">
        <div class="col-md-3" id = "headPath">
            <div id = "img"></div>
        </div>
        <div class="col-md-9" id = "message">
           <div id = "info">
               <table class="table table-hover" id = "table">
                   <tbody>
                   <tr>
                       <td>员工编号</td>
                       <td></td>
                   </tr>
                   <tr>
                       <td>员工姓名</td>
                       <td></td>
                   </tr>
                   <tr>
                       <td>联系方式</td>
                       <td></td>
                   </tr>
                   <tr>
                       <td>员工住址</td>
                       <td></td>
                   </tr>
                   <tr>
                       <td>员工邮箱</td>
                       <td></td>
                   </tr>
                   </tbody>
               </table>
           </div>
        </div>
    </div>
</div>
</body>
<script>
    message('./aboutMe.html');
    account();
</script>
</html>
