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
    <script src="/static/javascript/message.js"></script>
    <script src="/static/javascript/userMessage.js"></script>
    <link rel="stylesheet" href="/static/css/me.css">
    <!- #include virtual="./me.html" ->
</head>
<body>
<jsp:include page="/me.jsp"></jsp:include>
<!--所有的演出厅-->
<div id = "table">
    <table class="table table-striped " id = 'studio' onclick="studioRow(this)">
        <caption style="text-align: center">那一年影院人员</caption>
        <tr class="warning">
            <td>登录帐号</td>
            <td>姓名</td>
            <td>联系方式</td>
            <td>住址</td>
            <td>邮箱</td>
        </tr>
        <tbody id ="tbody">

        </tbody>
    </table>
    <div id = "test1"></div>
</div>
<div style="margin:0px 30px">第<u id="now_page">1</u>页
    <button onclick="other_page(-1)"><</button>
    <button onclick="other_page(1)">></button>
    每页显示
    <select id="each_nums" onchange="reset_get()">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
    </select>
</div>
<li id="delete_now" style="display: none"></li>

<!--人员的增删改查-->
<div>
    <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="查找人员">
        </div>
    </form>
    <button type="submit" class="btn btn-default" ><i class="fa fa-search" aria-hidden="true"></i>查找</button>
    <button type="button" class="btn btn-default navbar-btn" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus" aria-hidden="true"></i> 添加人员</button>
    <button type="button" class="btn btn-default navbar-btn" id = 'deleteStudio' onclick="removeStudio()"><i class="fa fa-minus" aria-hidden="true"></i> 删除人员</button>
    <button type="button" class="btn btn-default navbar-btn" id="changeStudio" onclick="change()"  ><i class="fa fa-pencil-square-o" aria-hidden="true"></i> 修改人员信息</button>
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
                    姓名：<input type="text" name = "emp_name" id="emp_name" class="form-control" placeholder="请输入需要添加的人员信息" required/><br>
                    手机号：<input type="text" name="emp_tel_num" id = "emp_tel_num" class="form-control" placeholder="请输入新用户的手机号" onblur="check2()" required/><span id = 'phone_err'></span>
                    住址：<input type="text" name = "emp_addr" id = "emp_addr" class="form-control" placeholder="请输入用户住址" required><br>
                    邮箱：<input type="text" name ="emp_email" id = "emp_email" class="form-control" placeholder="请输入新用户的邮箱" onblur="check1()" required/><span id = 'email_err'></span><br>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal">关闭</button>
                        <input class="btn btn-primary" type="submit" id = 'add' data-dismiss="modal" onclick="return addStudio()">
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>

<!--修改人员信息-->
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
                    修改名字：<input type="text" name = "emp_name"  class="form-control" id = "changeName" disabled/><br>
                    修改邮箱：<input type="text" name="emp_email"  id = 'changeEmail' class="form-control"  required/><br>
                    修改住址：<input type="text" name = "emp_addr" id = "changeAddr" class="form-control" required/>
                    修改手机号: <input type="text" name="emp_tel_num"  class="form-control" id = 'changeTel'/>
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
</html>