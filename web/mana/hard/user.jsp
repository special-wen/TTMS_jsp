<%@ page pageEncoding="UTF-8" isErrorPage="false" errorPage="error.jsp"%>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>人员管理</title>
    <link rel="stylesheet" type="text/css" href="/static/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="/static/css/user.css">
    <script src="/static/javascript/user.js"></script>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="/static/javascript/readmessge.js"></script>
    <script src="/static/javascript/userMessage.js"></script>
    <script src="/static/javascript/message.js"></script>
    <link rel="stylesheet" href="/static/css/me.css">
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


<!--所有的演出厅-->
<div id = "table">
    <table class="table table-striped " id = 'studio' onclick="studioRow(this)">
        <caption style="text-align: center">那一年影院人员</caption>
        <tbody>
        <tr class="warning">
            <td >姓名</td>
            <td >性别</td>
            <td >职位</td>
            <td>登录密码</td>
            <td >邮箱</td>
            <td >手机号</td>
        </tr>

        </tbody>
    </table>
</div>

<!--人员的增删改查-->
<div>
    <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="查找人员">
        </div>
        <button type="submit" class="btn btn-default" ><i class="fa fa-search" aria-hidden="true"></i>查找</button>
        <button type="button" class="btn btn-default navbar-btn" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus" aria-hidden="true"></i> 添加人员</button>
        <button type="button" class="btn btn-default navbar-btn" id = 'deleteStudio' onclick="removeStudio()"><i class="fa fa-minus" aria-hidden="true"></i> 删除人员</button>
        <button type="button" class="btn btn-default navbar-btn" id="changeStudio" onclick="change()"  ><i class="fa fa-pencil-square-o" aria-hidden="true"></i> 修改人员信息</button>
    </form>
</div>


<!--人员添加信息-->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabel" style="text-align: center">
                    添加人员信息
                </h4>
            </div>
            <div class="modal-body">
                <form role="form">
                    姓名: <input type="text" name = "studioName" id="studioName" class="form-control"  pattern="^.{2,20}$" oninvalid="setCustomValidity('2-20个字符');"  placeholder="请输入需要添加的新用户" required/><br>
                    性别：
                    <div class="form-group">
                        <select class="form-control" id = 'Sex'>
                            <option value = 'boy' >男</option>
                            <option value = 'girl'>女</option>
                        </select>
                    </div>
                    职位:
                    <div class="form-group">
                        <select class="form-control" id = 'Job'>
                            <option value = 'manager'>管理员</option>
                            <option value = 'sealer'>售票员</option>
                            <option value="boss">经理</option>
                        </select>
                    </div>
                    登录密码：<input type="password" name = "sateCol" id = "pass" class="form-control" placeholder="请输入含有字母和数字的密码" required/><br>
                    确认密码：<input type="password" name= "sat" id = "passAgain" class="form-control" placeholder="确认密码" onblur="check()" required/><span id = 'err'></span>
                    邮箱: <input type="text" name="studioState"  id = "studioState" class="form-control" placeholder="请输入新用户的邮箱" onblur="check1()" required/><span id = 'email_err'></span><br>
                    手机号: <input type="text" name="studioIntroduction" id = "studioIntroduction" class="form-control" placeholder="请输入新用户的手机号" onblur="check2()" required/><span id = 'phone_err'></span>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal">关闭</button>
                        <input class="btn btn-primary" type="submit" id = 'add' data-dismiss="modal" onclick="return addStudio()">
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>

<!--修改演出厅信息-->
<div class="modal fade" id = "myModals" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="ModalLabel" style="text-align: center">
                    修改人员信息
                </h4>
            </div>
            <div class="modal-body">
                <form role="form" id = "change">
                    修改名称: <input type="text" name = "studioName"  class="form-control" id = "changeName" required/><br>
                    修改性别：
                    <div class="form-group" id = "changeRow">
                        <select class="form-control" id = 'changeSex'>
                            <option value = 'boy'>男</option>
                            <option value = 'gil'>女</option>
                        </select>
                    </div>
                    修改职位:
                    <div class="form-group" id = "changeCol">
                        <select class="form-control" id = 'changeJob'>
                            <option value = 'manager'>管理员</option>
                            <option value = 'sealer'>售票员</option>
                            <option value="boss">经理</option>
                        </select>
                    </div>
                    修改密码：<input type="password" name = "sateCol" id = "changePass" class="form-control" placeholder="请输入含有字母和数字的密码" required/><br>
                    确认密码：<input type="password" name= "sat" id = "changeAgain" class="form-control" placeholder="确认密码">
                    修改邮箱: <input type="text" name="studioState"  id = 'changeState' class="form-control"  required/><br>
                    修改手机号: <input type="text" name="studioIntroduction"  class="form-control" id = 'changeInt'/>
                    <!--<input type="submit" class="btn btn-primary "  onclick="add()">-->
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal">关闭</button>
                        <!--<input type="submit" value="提交并更改">-->
                        <button type = 'submit' class="btn btn-primary "  onclick="add()">提交并更改</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!--报错提示框-->
<div class="modal fade" id="error" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="alert alert-warning">
            <a href="#" class="close" data-dismiss="alert">
                &times;
            </a>
            <strong>警告</strong><p id = 'waring'></p>
        </div>
    </div><!-- /.modal -->
</div>
</body>
<script>
    message('./user.html');
    get_user_message('/me.jsp');
    account();
</script>
</html>