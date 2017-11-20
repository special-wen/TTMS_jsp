/**
 * Created by zxw on 17-11-19.
 */
'use strict';
function get_user_message(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let json = JSON.parse(xmlhttp.responseText);
            let top = document.getElementById("user");
            if(json.login == true){
                let head = document.createElement('img');
                if(json.head_path == null){
                    head.setAttribute("src","/static/image/user.jpg");
                }else{
                    head.setAttribute('src',json.head_path);
                }
                top.appendChild(head);
            }else{
                //alert("dsd");
                window.location.href = '/login.html?url='+url;
            }
            let name = document.getElementById("name");
            let nameA = document.createElement("a");
            nameA.setAttribute("href","/me.html");
            nameA.innerText = json.emp_name;
            name.appendChild(nameA);
        }
    };
    xmlhttp.open('GET','/MyInfo');
    xmlhttp.send();
}


function get_back_entry() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function () {
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            let json = JSON.parse(xmlhttp.responseText);
            let top = document.getElementById("back_entry");
            if(json.state==true){
                let ad;
                json = json.entry;
                for(let i in json){
                    ad = document.createElement('a');
                    ad.setAttribute('href',json[i]);
                    ad.innerHTML = i;
                    top.appendChild(ad);
                    top.appendChild(document.createElement('br'))

                }

            }else{
                window.location.href = '/';
            }
        }
    };
    xmlhttp.open('GET','/BackEntry');
    xmlhttp.send();
}