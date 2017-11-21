<%--
  Created by IntelliJ IDEA.
  User: zxw
  Date: 17-11-16
  Time: 下午7:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page pageEncoding="UTF-8" isErrorPage="false" errorPage="../../error.jsp"%>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>演出厅管理</title>
    <!--<link rel="stylesheet" type="text/css" href="./Bootstrap/bootstrap.css">-->
    <link rel="stylesheet" type="text/css" href="/static/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="/static/css/studio.css">
    <!--<script src="./jquery/jquery.js"></script>-->
    <script src="./javascript/studio.js"></script>
    <!--<script src="./Bootstrap/bootstrap.js"></script>-->
    <!--<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>-->
    <!--<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
</head>
<body>
<!--导航-->

<!--所有的演出厅-->
<div id="table">
    <table class="table table-striped " id = 'studio' onclick="studioRow(this)" >
        <caption style="text-align: center">那一年影院演出厅</caption>
        <tr class="warning">
            <td>演出厅名称</td>
            <td>座位行</td>
            <td>座位列</td>
            <td>演出厅状态</td>
            <td>演出厅简介</td>
        </tr>
        <tbody>
        <tr >
            <td>1号演出厅</td>
            <td>10</td>
            <td>8</td>
            <td>可用</td>
            <td>巨幕演出厅</td>
        </tr>
        <tr >
            <td>2号演出厅</td>
            <td>8</td>
            <td>6</td>
            <td>维修中</td>
            <td>3D环绕演出厅</td>
        </tr>
        <tr >
            <td>3号演出厅</td>
            <td>10</td>
            <td>10</td>
            <td>维修中</td>
            <td>巨幕3D演出厅</td>
        </tr>
        <tr>
            <td>4号演出厅</td>
            <td>4</td>
            <td>8</td>
            <td>可用</td>
            <td>小型演出厅</td>
        </tr>
        </tbody>
    </table>
</div>

<!--演出厅的增删改查-->
<div>
    <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="查找演出厅">
        </div>
        <button type="submit" class="btn btn-default" ><i class="fa fa-search" aria-hidden="true"></i>查找</button>
        <button type="button" class="btn btn-default navbar-btn" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus" aria-hidden="true"></i> 添加演出厅</button>
        <button type="button" class="btn btn-default navbar-btn" id = 'deleteStudio' onclick="removeStudio()"><i class="fa fa-minus" aria-hidden="true"></i> 删除演出厅</button>
        <button type="button" class="btn btn-default navbar-btn" id="changeStudio" onclick="change()" data-toggle="modal" data-target="#myModals" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i> 修改演出厅</button>
    </form>
</div>

<!--演出厅添加信息-->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabel" style="text-align: center">
                    添加演出厅
                </h4>
            </div>
            <div class="modal-body">
                <form role="form">
                    演出厅名称: <input type="text" name = "studioName" id="studioName" class="form-control" placeholder="请输入演出厅名称" onblur="check()" required/><br><span id = 'err'></span><br>
                    座位行数: <input type="text" name = "sateRow" id="sateRow" class="form-control" placeholder="请输入演出厅中座位的行数" onblur="check1()"required/><br><span id = 'err1'></span><br>
                    座位列数: <input type="text" name = "sateCol" id = "sateCol" class="form-control" placeholder="请输入演出厅的列数" onblur="check2()" required/><br><span id = 'err2'></span><br>
                    演出厅状态: <input type="text" name="studioState" value="可用" id = "studioState" class="form-control" onblur="check3()" required/><br><span id = 'err3'></span><br>
                    演出厅简介: <input type="text" name="studioIntroduction" id = "studioIntroduction" class="form-control" placeholder="请输入演出厅简介"/>

                </form>
                <div class="modal-footer">
                    <button class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button class="btn btn-primary " onclick="addStudio()" data-dismiss="modal">提交更改</button>
                </div>
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
                    修改演出厅信息
                </h4>
            </div>
            <div class="modal-body">
                <form role="form" id = "change">
                    演出厅名称: <input type="text" name = "studioName"  class="form-control" id = "changeName" onblur="check4()"required/><span id = 'err4'></span><br>
                    座位行数: <input type="text" name = "sateRow"  class="form-control" id = "changeRow" onblur="check5()" required/><span id = 'err5'></span><br>
                    座位列数: <input type="text" name = "sateCol"  class="form-control" id = "changeCol" onblur="check6()" required/><span id = 'err6'></span><br>
                    演出厅状态: <input type="text" name="studioState"   class="form-control" id = 'changeState' onblur="check7()" required/><span id = 'err7'></span><br>
                    演出厅简介: <input type="text" name="studioIntroduction"  class="form-control" id = 'changeInt'/>
                </form>
                <div class="modal-footer">
                    <button class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button class="btn btn-primary " data-dismiss="modal">提交更改</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!--<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#error"></button>-->

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

