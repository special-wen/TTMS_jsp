/**
 * Created by zxw on 17-12-18.
 */
'use strict';
function get_studio() {
    let each_nums = document.getElementById('each_nums').value;
    let now_page = document.getElementById('now_page').innerText;
    let studio_name = document.getElementById('studio_name').value;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            let res = JSON.parse(xhr.responseText);
            if(res.status == false) {
                document.getElementById('now_page').innerText =parseInt(now_page)-1;
                layui.use('layer',function () {
                    let layer = layui.layer;
                    layer.msg('已到最后一页！',{
                        icon:5,
                        time:2000
                    })
                });
                return ;
            }

            let tbody = document.getElementById('tbody');
            tbody.innerText = '';
            let json = res.object;
            for(let i = 0;i<json.length;i++){
                let tr = document.createElement('tr');
                let td0 = document.createElement('td');
                td0.innerText = json[i][0];
                td0.setAttribute('style','display: none;');
                let td1 = document.createElement('td');
                td1.innerText = json[i][1];
                let td2 = document.createElement('td');
                td2.innerText = json[i][2];
                let td3 = document.createElement('td');
                td3.innerText = json[i][3];
                let td4 = document.createElement('td');
                td4.innerText = json[i][4];

                let td5 = document.createElement('td');
                //td5.innerText = json[i][5];
                if(json[i][5] == '1')
                    td5.setAttribute('bgcolor','#00FF7F');
                else
                    td5.setAttribute('bgcolor','#DC143C');

                // let td6 = document.createElement('td');
                // td6.innerHTML = '<div class="layui-btn-group site-demo-button" id="layerDemo">\
                //         <a href="StudioAdd.html?id='
                //     +json[i][0]+
                //     '" data-method="notice" class="layui-btn layui-btn-primary layui-btn-small" title="修改">\
                //         <i class="layui-icon">&#xe642;</i>\
                //     </a>\
                //     <button class="layui-btn layui-btn-primary layui-btn-small" title="删除" onclick="are_you_suer('
                //     +json[i][0] + ')">\
                //         <i class="layui-icon">&#xe640;</i>\
                //     </button>\
                //     <a href="SeatManager.html">\
                //         <button class="layui-btn layui-btn-primary layui-btn-small" title="管理座位">\
                //         <i class="layui-icon">&#xe602;</i>\
                //     </button>\
                //     </a>\
                //     </div>';
                tr.appendChild(td0);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                // tr.appendChild(td6);
                tbody.appendChild(tr);
            }


        }
    };
    xhr.open('GET','/api/studio?page='+now_page+'&nums='+each_nums+'&name='+studio_name);
    xhr.send();
}

function other_page(offset) {
    let now_page = document.getElementById('now_page');
    if(offset < 0 && parseInt(now_page.innerText) == 1){
        layui.use('layer',function () {
            let layer = layui.layer;
            layer.msg('已到第一页！',{
                icon:5,
                time:2000
            })
        })
    }else {
        now_page.innerText = parseInt(now_page.innerText) + offset;
        get_studio();
    }
}

function reset_get() {
    document.getElementById('now_page').innerText = '1';
    get_studio();
}
get_studio();

function del_studio() {

    layui.use('layer',function () {
        let layer = layui.layer;
        layer.closeAll('dialog');
    });
    let id = document.getElementById('delete_now').innerText;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            if(JSON.parse(xhr.responseText).status){
                layui.use('layer',function () {
                    let layer = layui.layer;
                    layer.alert('删除成功！', {
                        icon: 1,
                        title: "提示"
                    },function () {
                        layer.closeAll('dialog');
                        get_studio();

                    });
                });
            }else{
                layui.use('layer',function () {
                    let layer = layui.layer;
                    layer.msg('删除失败，或许重试试？');
                });
            }
        }
    };
    xhr.open('DELETE','/api/studio');
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send('id='+id);
}

function are_you_suer(id) {
    document.getElementById('delete_now').innerText = id;
    layui.use('layer',function () {
        let layer = layui.layer;
        layer.open({
            content:'是否删除？'
            ,btn:['确定','取消']
            //,btn1:del_studio(id)
            ,yes:function () {
                del_studio();
            }
        });
    })}