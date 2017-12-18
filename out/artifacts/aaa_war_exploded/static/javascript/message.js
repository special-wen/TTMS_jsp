function message(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let json = JSON.parse(xmlhttp.responseText);
            let top = document.getElementById("img");
            if(json.login == true){
                let head = document.createElement('img');
                if(json.head_path === ''){
                    head.setAttribute("src","/static/image/user.jpg");
                }else{
                    head.setAttribute('src',json.head_path);
                }
                top.appendChild(head);
            }else{
                window.location.href = '/login.html?url='+url;
            }
        }
    };
    xmlhttp.open('GET','/MyInfo');
    xmlhttp.send();
}
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