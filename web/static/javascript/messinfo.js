/**
 * Created by zxw on 17-12-18.
 */
'use strict';
//个人信息显示
function account() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let json = JSON.parse(xmlhttp.responseText);
            if(json.login == true){
                let table = document.getElementById('table');
                let length = table.rows.length;
                json = json.mess;
                let rows = 0;
                let i;
                for(i in json){
                    if(rows <length){
                        let cell = table.rows[rows].insertCell(1);
                        cell.innerText = json[i];
                        rows ++;
                    }
                }
            }
        }
    };
    xmlhttp.open('GET','/MyInfo');
    xmlhttp.send();
}

//获取界面中的信息
function info() {
    let array = [];
    let table = document.getElementById('table');
    let length = table.rows.length;
    for(let i = 0;i<length;i++){
        // alert(table.rows[i].cells[1].innerHTML);
        array[i] = table.rows[i].cells[1].innerHTML;
    }
    return array
}

//点击事件 “修改员工信息”
function butInfo() {
    let mesInfo = info();
    let emp_no = document.getElementById('emp_no');
    let emp_name = document.getElementById('emp_name');
    let emp_addr = document.getElementById('emp_addr');
    let emp_email = document.getElementById('emp_email');
    let emp_tel = document.getElementById('emp_tel');

    emp_no.setAttribute('placeholder',mesInfo[0]);
    emp_name.setAttribute('placeholder',mesInfo[1]);
    emp_addr.setAttribute('placeholder',mesInfo[2]);
    emp_email.setAttribute('placeholder',mesInfo[3]);
    emp_tel.setAttribute('placeholder',mesInfo[4]);
}

//根据员工登录帐号查找员工id
function findId() {
    let mesInfo = info();
    let emp_no = mesInfo[0];
    let emp_name = mesInfo[1];
    let emp_addr = mesInfo[2];
    let emp_email = mesInfo[3];
    let emp_tel = mesInfo[4];

    

}

function changeInfo() {
//    let mesInfo = butInfo();
    let emp_no = document.getElementById('emp_no').value;
    let emp_name = document.getElementById('emp_name').value;
    let emp_addr = document.getElementById('emp_addr').value;
    let emp_email = document.getElementById('emp_email').value;
    let emp_tel = document.getElementById('emp_tel').value;

    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if(xml.readyState == 4 && xml.status == 200){
            let json = JSON.parse(xml.responseText);
            if(json.state){
                account();
                alert("刷新");
            }else{
                alert("失败，请重试！");
            }
        }
    };
    let sss = window.location.search;
    let method = 'PUT';
}


//更改头像

