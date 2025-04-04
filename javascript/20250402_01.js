const functions = {
    "multiple_listener" : addMultipleListener, "bubble" : bubble, "chicken" : chicken
}

function controller(name){ 
    if(Object.keys(functions).indexOf(name) > -1){
        functions[name]();
    }
    return;
}
 
function addMultipleListener(){

    document.writeln("<style>\nbody{text-align: center;}\n\n#rotateImage {transition: transform 1s;}\n</style>");
    document.writeln("<h4>마우스 커서를 이미지 위에 올렸다가 치워보세요.</h4><hr>");
    document.writeln("<img id='rotateImage' src='837606.png'/>");
    let image = document.getElementById("rotateImage");
    console.log(image);
    image.onmouseover = () => image.style.transform = "scale(0,0)";
    image.onmouseout = () => image.style.transform = "scale(1,1)"; 
    return;
}


function bubble(){
    let body  = document.getElementsByTagName("body")[0];
    let elem = "\t<div id='parent'>div 부모 태그 \n\t<div id = 'child'> div 자식 태그\n </div>\n </div>"
    body.innerHTML = elem;
    document.getElementById("parent").addEventListener("click", function () {
        alert("부모 요소에 클릭 이벤트 발생(버블링 단계)");
    })
    document.getElementById("child").addEventListener("click", function (){
        alert("자식 요소에 클릭 이벤트 발생(버블링 단계)");
    }); 
    document.getElementById("parent").addEventListener("click", function () {
        alert("부모 요소에 클릭 이벤트 발생(캡쳐링 단계)");
    }, true)
    document.getElementById("child").addEventListener("click", function (){
        alert("자식 요소에 클릭 이벤트 발생(캡쳐링 단계)");
    }, true); 
}


function chicken(){
    let head = document.getElementsByTagName("head")[0];
    let style = "<style>\n#id1 {color: red;} \n #id2 {color : green;}\n</style>";
    head.innerHTML += style;
    let body = document.getElementsByTagName("body")[0];
    let chicken_ = "<h2>치킨</h2>\n<p><img src='837606.png' width='120'/></p>\n<p id='id1'>맛있음.</p>\n<p>하지만 살찜</p>\n<p id='id2'>그래도 맛있으니 용서가 됨</p>\n"
    body.innerHTML += chicken_;
    return;
}


