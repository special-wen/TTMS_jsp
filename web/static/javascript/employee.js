/**
 * Created by zxw on 17-12-19.
 */
'use strict';
let number = 0;
function getEmpNo() {
    var emp_no = document.getElementById("emp_no").value;
    var reg = /^[0-9]{6,20}/;
    if (!reg.test(emp_no)){
        document.getElementById("emp_err").innerText = '员工编号应为6～20位的数字';
        return false;
    }else {
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (xml.readyState == 4 && xml.status == 200){
                let json = JSON.parse(xml.responseText);
                if (!json.status){
                    document.getElementById("emp_err").innerText = '该员工编号已存在，请重试！';
                    return false;
                }else {
                    document.getElementById("emp_err").innerText = '';
                    return true;
                }
            }
        };
        xml.open('GET','/api/employee?emp_no='+emp_no);
        xml.send();
    }
}
function check1() {
    // var sss = document.getElementById('changeEmail');
    var ssss = document.getElementById('emp_email');
    var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if(! reg.test(ssss.value)) {
        document.getElementById('email_err').innerHTML = '邮箱格式不正确';
        return false;
    }else {
        return true;
    }
}

function check2(){
    var sss = document.getElementById('emp_tel_num');
    // var ssss = document.getElementById('changeTel');
    var reg= /^[0-9]{11}$/;
    if(! reg.test(sss.value)) {
        document.getElementById('phone_err').innerHTML = '手机号格式不正确';
        return false;
    }else {
        document.getElementById('phone_err').innerHTML = '';
        return true;
    }
}

function check3() {
    var sss = document.getElementById("emp_name");
    if (sss.value==''){
        document.getElementById("name_err").innerText = '用户名必须填写';
        return false;
    }else {
        document.getElementById("name_err").innerText = '';
        return true;
    }
}

function check4() {
    var ssss = document.getElementById("changeTel");
    var reg= /^[0-9]{11}$/;
    if ( !reg.test(ssss.value)){
        document.getElementById('change_tel_err').innerText = '修改的手机号格式不正确';
        return false;
    }else {
        document.getElementById('change_tel_err').innerText = '';
        return true;
    }
}

function check5() {
    var ssss = document.getElementById("changeEmail");
    var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if(! reg.test(ssss.value)) {
        document.getElementById('change_email_err').innerHTML = '邮箱格式不正确';
        return false;
    }else {
        return true;
    }

}



//添加用户
function addEmp() {
    //alert("34234");
    let emp = document.getElementById('employee');
    let emp_no = document.getElementById('emp_no').value;
    let emp_name = document.getElementById('emp_name').value;
    let emp_tel_num = document.getElementById('emp_tel_num').value;
    let emp_addr = document.getElementById('emp_addr').value;
    let emp_email = document.getElementById('emp_email').value;

    if(check1() && check2() && check3()){

    }else {
        alert("格式输入有误！");
        return false;
    }

    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200){
            let json = JSON.parse(xml.responseText);
            if(json.state){
                get_emp();
                getEmpCount();
            }else {
                alert("失败，请重试！");
            }
        }
    };

    let sss = window.location.search;
    let method = 'POST';
    let data = 'emp_no='+emp_no+'&emp_name='+emp_name+'&emp_tel_num='+emp_tel_num+'&emp_addr='+emp_addr+'&emp_email='+emp_email;
    xml.open(method,'/api/employee');
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send(data);

}


//鼠标点击事件
function studioRow(obj) {
    let table = document.getElementById('employee');
    let length = table.rows.length;

    for(let i = 0;i<length;i++){
        if(i == 0){
            let row = table.rows[i];
            row.setAttribute('class','warning');
        }
        else if(i%2 != 0 && i != 0){
            let row = table.rows[i];
            row.setAttribute('class','active');
        }else{
            let row = table.rows[i];
            row.setAttribute('class','default');
        }
    }

    if(event.srcElement.tagName == 'TD'){
        let num = 0;
        let curRow = event.srcElement.parentElement;
        //let rowContainer = curRow.innerHTML;

        if(curRow.rowIndex == 0){
            curRow.setAttribute('class','warning');
            return 0;
        }
        else{
            curRow.setAttribute('class','info');
            num = curRow.rowIndex ;
            //console.log(num);
            number = num;
        }
    }

}

//删除某一行
function deleteRow(row) {
    let deleteRow = document.getElementById('employee');
    deleteRow.deleteRow(row);

}

//删除用户
function removeEmployee() {
    let row = number;
    if(row == 0){
        console.log('aaa');
        let changeButton = document.getElementById('deleteStudio');
        changeButton.setAttribute('data-toggle', 'modal');
        changeButton.setAttribute('data-target', '#error');
        let text = document.getElementById('waring');
        text.innerHTML = '请选择需要删除的地方！'
    }
    else{
        let emp = []
        emp = changeRow(row);
        let id = emp[0];
        alert(id);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                if(JSON.parse(xhr.responseText).status){
                    get_emp();
                }else {
                    alert("删除失败！");
                }
            }
        };
        xhr.open('DELETE','/api/employee');
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send('id='+id);
    }
}


//获取选中行的信息
function changeRow(number) {
    let array = [];
    let table = document.getElementById('employee');
    let length = table.rows.item(0).cells.length;
    console.log(length);
    if(number != 0){
        for(let i = 0;i<length+1;i++){
            array[i] = table.rows[number].cells[i].innerText;
        }
        return array
    }
}

//将信息添加在修改信息的相应位置
function change() {
    if (number == 0){
        console.log('aaa');
        let changeButton = document.getElementById('changeEmp');
        changeButton.setAttribute('data-toggle', 'modal');
        changeButton.setAttribute('data-target', '#error');
        let text = document.getElementById('waring');
        text.innerHTML = '请选择需要删除的地方！'
    }else {

        let change = [];
        let aaa = [];

        let array = changeRow(number);
        change[0] = document.getElementById("changeno");
        change[1] = document.getElementById("changeName");
        change[2] = document.getElementById("changeTel");
        change[3] = document.getElementById("changeAddr");
        change[4] = document.getElementById("changeEmail");
        console.log(array[1]);
        let len = array.length;
        for(let i = 0 ;i<len-1;i++){
            change[i].value = array[i+1];
            aaa[i] = array[i+1];
        }
        console.log(change);
        return aaa;
    }

}


function putEmployee() {
    let aa = [];
    aa = changeRow(number);
    console.log(aa);
    let emp_id = aa[0];
    let emp_no = document.getElementById("changeno").value;
    let emp_name = document.getElementById("changeName").value;
    let emp_tel_nums = document.getElementById("changeTel").value;
    let emp_addr = document.getElementById("changeAddr").value;
    let emp_email = document.getElementById("changeEmail").value;
    if(check4() && check5()){

    }else {
        alert("格式输入有误！");
        return false;
    }

    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if(xml.readyState == 4 && xml.responseText){
            let json = JSON.parse(xml.responseText);
            if(json.state){
                get_emp();
            }else{
                alert("失败，请重试！");
            }
        }
    };
    let sss = window.location.search;
    let method = 'PUT';
    let data = 'emp_no='+emp_no+'&emp_name='+emp_name+'&emp_tel_num='+emp_tel_nums+'&emp_addr='+emp_addr+'&emp_email='+emp_email+'&emp_id='+emp_id;
    xml.open(method,'/api/employee');
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send(data);
}



