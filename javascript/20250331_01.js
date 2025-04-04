const functions= {
    "var" : var_method, "arr" : arr_method, "arr_obj" : arr_object_method,
    "str_obj" : string_obj_method, "rotate" : rotate_method, "color" : coloring,
    "date" : date_object, "calculate" : calculateDays, "for_in" : for_in
}

function function_controller(name){  
    if(Object.keys(functions).indexOf(name) > -1){ 
        functions[name]();
    }
    return;
}

function var_method(){
    const jud = window.confirm("confirm()에서 window.가 생략된 것을 이해했나요?");
    document.writeln("전역 객체 속성 이해했음 : " + jud + "<hr>");
    document.writeln("isNaN(1) = " + isNaN(1) + "<hr>");
    document.writeln("isNaN(0.5) = " + isNaN('0.5') + "<hr>");
    document.writeln("isNaN(str) = " + isNaN('str') + "<hr>");
    document.writeln("eval(3 * 4) = " + eval(3 * 4));
    return
}

function arr_method(){
    let arr = new Array(23, 12, 34);
    let sum = 0; 
    for (let i =0; i <arr.length; i++){
        document.writeln(`arr[${i}] = ${arr[i]}<hr>`);
        sum = sum + arr[i];
    }
    document.writeln(`배열을 더한 값은 ${sum}`);
    return;
}

function arr_object_method(){
    let a1 = [0,1,2,3,4];
    let a2 = new Array(9,8,7,6,5);
    document.writeln(`a1 = [${a1}]<br>`);
    document.writeln(`a2 = [${a2}]<hr>`);
    document.writeln(`a1.concat(a2) = ${a1.concat(a2)}<hr>`);
    document.writeln(`a2.indexOf(6) = ${a2.indexOf(6)}<hr>`);
    a2.push(4);
    document.writeln(`a2.push(4) : ${a2}<hr>`);
    a2.pop();
    document.writeln(`a2.pop() : ${a2}<hr>`);
    document.writeln(`a1.reverse() : ${a1.reverse()}<hr>`);
    a2.shift();
    document.writeln(`a2.shift() : ${a2}<hr>`);
    a2.unshift(9);
    document.writeln(`a2.unshift(9) : ${a2}<hr>`);
    document.writeln(`a2.slice(1,4) : ${a2.slice(1,4)}<hr>`);
    document.writeln(`a2.sort() : ${a2.sort()}<hr>`);
    document.writeln(`a2.join("+") : ${a2.join("+")}<hr>`);
    return;
}

function string_obj_method(){
    let s1 = new String("Web ");
    let s2 = "Programming";
    document.writeln(`s1 : [${s1}]<br>`);
    document.writeln(`s2 : [${s2}]<hr>`);
    document.writeln(`s1.charAt(0) : ${s1.charAt(0)}<hr>`);
    document.writeln(`s1.concat(s2) : ${s1.concat(s2)}<hr>`);
    document.writeln(`s2.indexOf("i") = ${s2.indexOf("i")}<hr>`);
    document.writeln(`s2.replace("m", "M") : ${s2.replace("m", "M")}<hr>`);
    document.writeln(`s2.search("m") : ${s2.search("i")}<hr>`); 
    document.writeln(`s2.split("a") : ${s2.split("a")}<hr>`);
    document.writeln(`s2.substr(0,4) : ${s2.substr(0,4)}<hr>`); 
    document.writeln(`s2.substring(3,7) : ${s2.substring(3,7)}<hr>`); 
    document.writeln(`s2.slice(3,-1) : ${s2.slice(3,-1)}<hr>`);
    document.writeln(`s2.toLowerCase() : ${s2.toLowerCase()}<hr>`);
    document.writeln(`s2.toUpperCase() : ${s2.toUpperCase()}<hr>`);
    document.writeln(`s1.trim() : +${s1.trim()}+`);
    return;
}

function rotate_method(){
    let text = new String("Programming");
    let firstChar;
    for (let i = 0; i <= text.length; i++){
        document.writeln(text + "<hr>");
        firstChar = text[0]
        text = text.slice(1) + firstChar;
    }
    return
}

// ----- 04/01 이후 코드

function coloring(){
    const colorArray = ["red", "aqua", "gray", "purple", "orange"];
    for (let c of colorArray){
        document.writeln("<h1 style='color:"+ c + "'>"+ c +"</h1>");
    }
    document.writeln(new Date() + "<hr>");
    return;
}
function date_object(){
    let today = new Date();
    const day = "일월화수목금토";
    document.writeln(today + "<hr>");
    document.writeln(today.toLocaleString() + "<hr>");
    document.writeln(today.getFullYear() + "년<hr>");
    document.writeln(today.getMonth() + "월<hr>");
    document.writeln(today.getDay() + "일<hr>");
    document.writeln(today.getHours() + "시<hr>");
    document.writeln(today.getMinutes() + "분<hr>");
    document.writeln(today.getSeconds() + "초<hr>");
    return;
}

function calc() {
    const year = parseInt(document.getElementById("year").value);
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const today = new Date();
    const inputDate = new Date(year, month - 1, day);
    const timeDiff = today - inputDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    


    document.getElementById("today").innerHTML = `${today.toLocaleString()}`;
    if (daysDiff >=0) 
        document.getElementById("result").innerHTML = `${daysDiff}일 전`;
    else
        document.getElementById("result").innerHTML = `${-(daysDiff)}일 남았음`;
    return;
}

function calculateDays(){
    document.writeln("<input type='number' id = 'year' placeholder='년'/>");
    document.writeln("<input type='number' id = 'month' placeholder='월'/>");
    document.writeln("<input type='number' id = 'day' placeholder='일'/>");
    document.writeln("<button type='button' onclick='calc()'>계산</button>");
    document.writeln("<p id='today'></p>");
    document.writeln("<p id='result'></p>");
    return;
}


function for_in(){
    let person = new Object();
    person.name = "cho";
    person.age = 23;
    person.weight = 70;
    for (let prop in person) {
        document.writeln(prop +  " : " + person[prop] + "<hr>");
    }
}