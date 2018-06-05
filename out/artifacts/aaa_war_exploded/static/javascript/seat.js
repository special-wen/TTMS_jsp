'use strict';
//

//添加座位
// array[i][j] = 0 座位正常
// array[i][j] = 1 座位选中
// array[i][j] = -1 座位坏掉
// array[i][j] = 2 改为过道

function createState() {
    let studio_id = localStorage.getItem("studio_id");
    console.log(studio_id);
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if (xml.readyState == 4 && xml.status == 200){
            let res = JSON.parse(xml.responseText);
            // alert(res.object[2]);
            let row = res.object[2];
            let col = res.object[3];
            let array = new Array();
            for(let i = 0;i<row+1;i++){
                array[i] = new Array();
                for(let j = 0;j<col+1;j++){
                    array[i][j] = 0;
                }
            }
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
                    seatImage.src = '/static/image/seat.png';
                    oneSeat.appendChild(seatImage);
                    oneSeat.appendChild(num);
                    div1.appendChild(oneSeat);
                    document.getElementById('seat').appendChild(div1);

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
    }

    xml.open('GET','/api/studio?id='+studio_id);
    xml.send();
    alert(studio_id);
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
    //         sateImage.addEventListener('click', function getState() {
    //             row = i;
    //             col = j;
    //             array[i-1][j-1] = 1;
    //             let where = document.getElementById('title');
    //             where.innerHTML = '请选择第' + i + '行第' + j + '列状态：';
    //             //alert(sateImage.id);
    //             let select = sateImage.id;
    //             document.getElementById(select).src = '/static/image/select.png';
    //             console.log(row, col);
    //         });
    //         let change = document.getElementById('update');
    //         change.onclick = function changeState() {
    //             let imageId = "sate"+row+col;
    //             //alert(imageId);
    //             let newState = document.getElementById(imageId);
    //             let seatState = document.getElementById('seatState');
    //
    //             let index = seatState.selectedIndex;
    //             let value = seatState.options[index].value;
    //             if(value == 'active'){
    //                 array[row-1][col-1] = 0;
    //                 newState.src = '/static/image/seat.png';
    //                 console.log('active');
    //             }
    //             else if(value == 'broken'){
    //                 array[row-1][col-1] = -1;
    //                 newState.src = '/static/image/broken.png';
    //
    //                 console.log('broken');
    //
    //             }
    //             else if(value == 'aisle'){
    //                 array[row-1][col-1] = 2;
    //                 newState.src = '/static/image/aisle.png';
    //                 console.log('aisle');
    //             }
    //          }
    //         one.appendChild(sateImage);
    //         one.appendChild(num);
    //
    //     }
}



