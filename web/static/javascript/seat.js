'use strict';
//

//添加座位
// array[i][j] = 0 座位正常
// array[i][j] = 1 座位选中
// array[i][j] = -1 座位坏掉
// array[i][j] = 2 改为过道

var row;
var col;
var array = new Array();
var flag_aa = 0;
var flag_bb = 0;



//获取座位行列信息：
function aa() {
    let studio_id = localStorage.getItem("studio_id");
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if (xml.readyState == 4 && xml.status == 200){
            let res = JSON.parse(xml.responseText);

            // alert(res.object[2]);
            row = res.object[2];
            col = res.object[3];
            flag_aa = 1;

            if (flag_bb == 1){
                createState()
            }
        }

    }
    xml.open('GET','/api/studio?id='+studio_id);
    xml.send();
}


//获取座位状态
function bb() {
    let studio_id = localStorage.getItem("studio_id");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200){
            let res = JSON.parse(xhr.responseText);
            let json = res.object;
            flag_bb = 1;
            for(let i = 0;i<row;i++){
                array[i] = new Array();
                for(let j = 0;j<col;j++){
                    array[i][j] = 1;
                }
            }
            for(let i of json){
                array[i[2]-1][i[3]-1] = i[4];
            }
            if (flag_aa == 1){
                createState();
            }
        }
    }
    xhr.open('GET','/api/seat?id='+studio_id);
    xhr.send();
}

function createState(){

    for (let i = 1;i<=col;i++){
        var div1 = document.createElement('div');
        div1.setAttribute("id","div"+i);
        for (let j = 1;j<= row;j++){
            // var div = document.getElementById("div");

            var oneSeat = document.createElement('div');
            oneSeat.setAttribute('class','oneSeat');
            oneSeat.style.paddingLeft = '60px';
            oneSeat.style.paddingTop = '28px';
            // oneSeat.style.cssFloat = left;
            let seatImage = document.createElement('img');
            let num = document.createElement('span');
            num.setAttribute('class','number');
            num.innerText = j + ',' + i;
            seatImage.setAttribute('class','seatImg');
            if (col < 5 || row < 5){
                oneSeat.style.paddingLeft = '80px';
                seatImage.style.height = "42px";
                seatImage.style.width = "42px";
            }
            // console.log(array[i-1]+[j-1]);

            if (array[i-1][j-1] == 0){
                seatImage.src = '/static/image/seat.png';
            }else if (array[i-1][j-1] == 1){
                seatImage.src = '/static/image/select.png';
            }else if (array[i-1][j-1] == -1){
                seatImage.src = '/static/image/broken.png';
            }else {
                seatImage.src = '/static/image/aisle.png';
            }
            oneSeat.appendChild(seatImage);
            oneSeat.appendChild(num);
            div1.appendChild(oneSeat);
            document.getElementById('seat').appendChild(div1);
            // seatImage.setAttribute('data-toggle', 'modal');
            // seatImage.setAttribute('data-target', '#myModal');
            seatImage.setAttribute('onclick','change(this)');


        }

        var br = document.createElement('br');
        div1.appendChild(br);
        div1.style.cssFloat = "left";
    }
    var seatWidth = document.getElementById('seat');
    if (col < 5 || row < 5){
        seatWidth.style.width = (80+42) * col +80;
    }else {
        seatWidth.style.width = (32+60)* col +60;
    }
}

function change() {
    // alert("aaaa");
    alert(this);
    //获取到行列
    //发送请求
    //返回
    //重新绘制

}






// seatImage.addEventListener('click', function getState() {
//     row = i;
//     col = j;
//     array[i-1][j-1] = 1;
//     let where = document.getElementById('title');
//     where.innerHTML = '请选择第' + i + '行第' + j + '列状态：';
//     seatImage.src = '/static/image/select.png';
//     seatImage.setAttribute("id", "sate"+i+j);
//
//     console.log(row, col);
// });
// let change = document.getElementById('update');
// change.onclick = function changeState() {
//     let imageId = "sate"+row+col;
//     let newState = document.getElementById(imageId);
//     let seatState = document.getElementById('seatState');
//     let index = seatState.selectedIndex;
//     let value = seatState.options[index].value;
//     if(value == 'active'){
//         array[row-1][col-1] = 0;
//         newState.src = '/static/image/seat.png';
//         console.log('active');
//     } else if(value == 'broken'){
//         array[row-1][col-1] = -1;
//         newState.src = '/static/image/broken.png';
//         console.log('broken');
//     }
//     else if(value == 'aisle'){
//         array[row-1][col-1] = 2;
//         newState.src = '/static/image/aisle.png';
//         console.log('aisle');
//     }
// }
//




    // for(let i = 1;i<=8;i++){
    //     for(let j = 1;j<=8;j++) {
    //         let one = document.createElement('div');
    //         document.getElementById('seat').appendChild(one);
    //         one.setAttribute('class', 'oneDiv');
    //         let sateImage = document.createElement('img');
    //         let num = document.createElement('span');
    //         num.innerText = i + ',' + j;
    //         sateImage.setAttribute("class", "sate");
    //         sateImage.setAttribute("id", "sate"+i+j);
    //         sateImage.setAttribute('data-toggle', 'modal');
    //         sateImage.setAttribute('data-target', '#myModal');
    //         sateImage.src = '/static/image/seat.png';

    //         one.appendChild(sateImage);
    //         one.ap





    // for(let i = 1;i<=8;i++){
    //     for(let j = 1;j<=8;j++) {
    //         let one = document.createElement('div');
    //         document.getElementById('seat').appendChild(one);
    //         one.setAttribute('class', 'oneDiv');
    //         let sateImage = document.createElement('img');
    //         let num = document.createElement('span');
    //         num.innerText = i + ',' + j;
    //         sateImage.setAttribute("class", "sate");
    //         sateImapendChild(num);
    //
    //     }




