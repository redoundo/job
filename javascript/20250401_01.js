const functions = {
    "dom" : dom_obj, "myform" : myform, "checkbox" : checkbox, "select" : selection,
    "style" : changeStyle, "add_node" : addNode, "table" : addTable, "image" : updateImage
}

function controller(name){
    if(Object.keys(functions).indexOf(name) > -1){ 
        functions[name]();
    }
    return;
}


function dom_obj(){
    document.writeln("<p class = 'elm'>p class = 'elm' 1</p>");
    document.writeln("<p class = 'elm'>p class = 'elm' 2</p>");
    document.writeln("<p id='ide'>p & No class 1</p>");
    const dots = document.querySelectorAll(".elm");
    for (let i = 0; i< dots.length; i++){
        document.writeln(`dots[${i}] = ${dots[i].innerHTML}`);
    } 
    document.writeln("<hr>");
    const hash = document.querySelectorAll("#ide");
    for (let i = 0; i < hash.length; i++)
        document.writeln(`hash[${i}] = ${hash[i].innerHTML}<br>`);
}

// ================================

function getInput(){
    let userId = document.myform.userId;
    let pw = document.myform.pwd;
    if (userId.value.length <= 4) {
        alert("아이디를 제대로 작성하세요.");  
        return false;
    }
    if (pw.value.length <=4) {
        alert(`${userId.value} 님 패스워드를 변경하세요`);
        return false;
    }
    else alert(`${userId.value} 님 환영합니다.`);
    return true;
}

function id_change(){
    let userId = document.getElementById("user_id").value;
    let passed = "hidden";
    if(userId.length <=4) 
        passed = "visible";
    document.getElementById("id_warn").style.visibility = passed;
}

function onChange(){
    let pwd = document.getElementById("password").value;
    let passed = "hidden";
    if (pwd.length <= 4){
        document.getElementById("submit").disabled = true;
        passed = "visible";
    } else{
        document.getElementById("submit").disabled = false; 
    }
    document.getElementById("pwd_warn").style.visibility = passed;
}

function myform(){
    document.writeln("<form name='myform'>");
    document.writeln("사용자 ID<input type='text' oninput='id_change()' id='user_id' name='userId' placeholder = '아이디' ><br>");
    document.writeln("<p id='id_warn' style='visibility : hidden;color:red;'>아이디가 올바르지 않습니다.</p>");
    document.writeln("패스워드<input id='password' type='password' placeholder = '비밀번호' oninput='onChange()' name='pwd'><br>");
    document.writeln("<p id='pwd_warn' style='visibility : hidden;color:red;'>비밀번호가 올바르지 않습니다.</p>");
    document.writeln("<input type='submit' id='submit' value='login' disabled>");
    document.writeln("</form>");
    document.getElementById("submit").addEventListener('click', (e) =>{
        let result = getInput();
        if (!result) e.preventDefault();
    })
}

// ================================

function getCheckBox(){
    let sum = 0;
    const adds = document.getElementsByName("myAdd");
    for (let i = 0; i < adds.length; i++){
        if (adds[i].checked) sum = sum + parseInt(adds[i].value);
    }
    document.getElementById("result").innerHTML = `추가 금액 ${sum} 원`;
}

function checkbox(){
    document.writeln("<input type='checkbox' name = 'myAdd' value ='1500'/> 추가 채소 1500원<br>");
    document.writeln("<input type='checkbox' name = 'myAdd' value ='1000'/> 추가 음료 1000원<br>");
    document.writeln("<input type='checkbox' name = 'myAdd' value ='500'/> 추가 피클 500원<br>");
    document.writeln("<input type='button' value= 'add' onclick='getCheckBox()'/><hr>");
    document.writeln("<p id='result'></p>");
}

// ================================

function selection(){
    document.writeln("<p>키우고 싶은 동물은 : </p>");
    document.writeln("<select id='myOption'>");
    document.writeln("<option value='dog'>개</option>");
    document.writeln("<option value='cat'>고양이</option>");
    document.writeln("<option value='duck'>오리</option>");
    document.writeln("<option value='koala'>코알라</option>");
    document.writeln("</select><br>"); 
    document.writeln("<input type='button' onclick='getSelect()' value ='클릭'/> <hr>");
    document.writeln("<h2 id='result'></h2>"); 
}


function getSelect(){
    let idx = document.getElementById("myOption");  
    console.dir(idx);
    idx = idx.selectedIndex;
    let st = document.getElementById("myOption");
    console.dir(st);
    st = st.options[idx].value;
    document.getElementById("result").innerHTML = st;
    return;
}

// ================================


function changeStyle(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    let count = 1;
    document.writeln("<div id='box' style='width: 300px;height: 300px;margin:auto'></div>")
    let intervalId = setInterval(changeColor, 250);
    function changeColor(){
        if(++count > 50) clearInterval(intervalId);
        for (let k = 0; k < 6; k++) color = color + letters[Math.floor(Math.random() * 16)];
        document.getElementById("box").style.backgroundColor = color;
        document.getElementById("box").style.borderRadius = `${count}%`;
        color = "#"
    }


}

// ================================

function addNode(){
    document.writeln("<h3 id='target'>사이트 추가하기</h3>");
    document.writeln("<input type='button' value='add' onclick = 'add_node(\"https://daum.net\")'>")
}

function add_node(t){
    let node = document.createElement("a");
    node.href = t;
    node.innerHTML = `<hr>${t}`;
    document.getElementById("target").appendChild(node);
}

// ================================

function insertTable(){
    let idx = document.getElementById("target");
    let idx_row = idx.rows;
    let index = idx_row.length;
    index = index > 1 ? index : 1;
    let td = idx.insertRow(index); 
    td.innerHTML = `<td>추가 셀${index}</td><td>추가 셀${index}</td>`;
    return;
}


function addTable(){
    document.writeln("<table id='target'>");
    document.writeln("<tr><td>원래 셀</td><td>원래 셀</td></tr>");
    document.writeln("</table><br>");
    document.writeln("<button onclick='insertTable()'>행 추가</button>");
    return;
}

// ================================

function updateImage(){
    document.writeln("<img id='followMouse' src='837606.png'>");
    let image = document.getElementById("followMouse");
    function update_image(event){
        const X = event.clientX;
        const Y = event.clientY;
        image.style.transform = `translate(${X}px,${Y}px)`;
    }
    document.onmousemove = update_image;
    return;
}

