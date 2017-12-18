/**
 * Created by zxw on 17-12-18.
 */
'use strict';
//或许界面中的信息
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
    return mesInfo;
}

function changeInfo() {
    let mesInfo = butInfo();

}


//更改头像

