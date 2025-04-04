
const function_sets = {
    "coding" : coding, "calcuate" : calculate, "prompt": prompt_example,
    "drink": drink_if_else, "cupon": cupon, "switch": switch_cupon, "park" : amusement_park,
    "chicken" : print_chicken, "table": times_table, "arrow": arrow, "food" : make_food,
    "change" : change, "random_food" : random_food, "drink_" : drink_
}

function controller(name){
    
    if(Object.keys(function_sets).indexOf(name) > 0){
        function_sets[name]();
    }
    return;
}

function amusement_park(){
    let coupon = parseInt(prompt("패키지 번호를 입력하세요."));
    document.writeln("패키지 : " + coupon + " 번 <hr>");
    switch (coupon) {
        case 1:
            document.writeln("돌고래 쇼");
            break;
        case 2:
            document.writeln("놀이기구 10 종");
            break;
        default:
            document.writeln("입장권");
            break;
    }
    return;
}

function switch_cupon(){
    let coupon = parseInt(prompt("쿠폰 개수를 입력하시오"))
    document.writeln("쿠폰 : " + coupon + " 장 <hr>");
    coupon = Math.floor(coupon / 10);
    switch (coupon) {
        case 2:
            document.writeln("여행용 가방");
            break;
    
        case 1:
            document.writeln("다이어리");
            break;
        default:
            document.writeln("커피 한 잔");
            break;
    }
    return 
}

function drink_(){
    let drink__ = prompt("한잔 따른다.\n \"이거 마시면 사귀는거다!\"");
    if (drink__ == "yes") document.writeln(`답 : ${drink__} 오늘 부터 1 일!`);
    else document.writeln(`답 : ${drink__} 헤어진다...`);
    return;
}


function make_food(){
    const food = parseInt(prompt("치킨 : 1, 피자 : 2, 감자튀김 : 3"))
    let make = (num) => {
        if (num >= 1 && num <=3) {
            if (num == 1) document.writeln("<img src='837606.png'>")
            else if (num == 2) document.writeln("<img src='pizza-slice.png'>")
            else document.writeln("<img src='french-fries.png'>")
            return true;
        } else return false;
    }
    const result = make(food);
    if (result) {
        document.writeln("<hr> 식사 맛있게 하세요. ");
    } else document.writeln("없는 음식을 주문하셨습니다. ");
    return
}

function change_(color){
    const alter = document.getElementById('alter');
    alter.style.color = color
    return
}

function change(){
    document.writeln("<h1 id='alter'>Change Color</h1>")
    document.writeln("<button type='button' onclick=\"change_('orange')\">orange</button>");
    document.writeln("<button type='button' onclick=\"change_('red')\">red</button>");
    document.writeln("<button type='button' onclick=\"change_('blue')\">blue</button>");
    document.writeln("<button type='button' onclick=\"change_('green')\">green</button>");
    document.writeln("<button type='button' onclick=\"change_('yellow')\">yellow</button>");
    return
}

function randn(){
        
    const money = parseInt(document.getElementById('input').value);
    const fnum = Math.floor(money/1200);
    const change = money - (fnum * 1200);
    if (money >=1200) {
        for (let i = 1; i <= fnum; i++){
            food = Math.floor(Math.random() * 3) + 1;
            document.writeln(i + "<img src='837606.png'>");
        }
        document.writeln("<h3> 합:" + fnum * 1200 + ", 반환 : " + change + "</h3>");
    } else document.writeln("금액이 모자랍니다");
}

function random_food(){
    document.writeln("<input id='input' type='text'/>");
    document.writeln("<button type='button' onclick='randn()'>enter</button>");
    return
}

function cupon(){
    let coupon = parseInt(prompt("쿠폰 개수를 입력하시오"))
    document.writeln("쿠폰 : " + coupon + " 장 <hr>");
    if (coupon >=20) document.writeln("여행용 가방");
    else if (coupon >= 10 ) document.writeln("다이어리");
    else document.writeln("커피 한 잔");
    return 
}

function arrow(){
    let a = 3, b = 4;
    let sum = (num1, num2) => num1 + num2;
    document.writeln(a + " + " + b + " = " + sum(a, b));
    return
}

function times_table(){
    let dan, num;
    for (dan=2; dan < 10; dan++){
        document.writeln(dan + "단 : ");
        for (num =1; num < 10; num++){
            document.writeln(dan + "x" + num + "=" + dan * num + " ");
        }
        document.writeln("<hr>");
    }
    return;
}

function print_chicken(){
    let i = 1;
    document.writeln("<h2>while...</h2>")
    while (i < 5) {
        document.writeln(i + "<img style='width:30px;height:30px;' src='837606.png'/>");
        i++;
    }
    document.writeln("<h2>for...</h2>")
    for (let c =1; c < 5; c++){
        document.writeln(c + "<img style='width:30px;height:30px;' src='837606.png'/>");
    }
    return;
}

function drink_if_else(){
    let drink = prompt("이거 마시면 사귀는 거다!");
    document.writeln("술마신다 : " + drink + "<hr>")
    if (drink == "yes") {
        document.writeln("오늘부터 1일");
    } else document.writeln("헤어진다");
}

function prompt_example(){
    let num, add;
    num = prompt("숫자를 입력하세요");
    document.writeln("num : " + num + " <hr>");
    add = num + 22;
    document.writeln("num + 22 : " + add + " <hr>");
    num = parseInt(num);
    add = num + 22;
    document.writeln("parseInt + 22 : " + add );
    return
}

function coding(){
    var var_1 = 1;
    var_1 += 10;
    document.writeln("varNum = " + var_1 + "<hr>");
    let let_num = "hello";
    let_num += var_1;
    document.writeln("letNum= " + let_num + "<hr>");
    const pi = 3.14;
    document.writeln("pi = " + pi);
    return;
}


function calculate(){
    document.writeln("true && true : " + (true && true) + "<hr>");
    document.writeln("false && true : " + (false && true) + "<hr>");
    document.writeln("false || true : " + (false || true) + "<hr>");
    document.writeln("false || false : " + (false || false) + "<hr>");
    document.writeln("!true : " + !true + "<hr>");
    document.writeln("!false : " + !false + "<hr>");
    return 
}