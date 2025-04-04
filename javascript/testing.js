
function run(){
    let horses = document.getElementsByClassName("horses"); 
    let locations = [0,0,0,0,0,0,0];
    let winner = null;
    function running( ){
        for (let h = 0;h < horses.length; h ++){  
            let position = 470;
            let random = getRandomInt(50)
            if (locations[h] < 470 && locations[h] + random < 470){
                position = locations[h] + random;
            }  
            locations[h] = position; 
            let style = horses[h].getAttribute("style");
            if (position == 470 && winner == null) {
                horses[h].style.background_color = "blue";
                style += "background-color: blue;color: white";
                winner = h;
            } 
            console.dir( horses[h].style)
            horses[h].style.left = `${position}px`;
        }
    }
    setInterval(running, 500)
    return
}

function draw_horse(){
    
    let horse = document.getElementById("horse") ;
    let horse_chars = ""
    for (let i =0 ; i < 7 ; i++){
        horse_chars += `<div class='cover'><div class='horses'>${i}</div></div>`
    } 
    horse.innerHTML = horse_chars
}


function random_color(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `color : rgb(${red},${green},${blue})`;
}
 
function create(){
    
    let text = document.getElementById("input").value;
    let chars = `<div>\n`

    for (let i = 0; i < text.length; i++){
        chars += `<p class='chars'>${text[i]}</p>\n`;
    }
    chars += "</div>";
    let div = document.getElementById("div")
    div.innerHTML = chars;    
}


function rainbow(){
    function changeColor(){
        let args = document.getElementsByClassName("chars");
        for (let a of args){
            a.setAttribute("style", random_color())
        }
        return 

    }
    setInterval(changeColor, 250);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const symbols = ["🍀", "⭐", "⛄", "💘", "🐬"];

function update(){
    let slots = document.getElementsByClassName("slots");
    let letters = [];
    for (let s of slots){
        const letter = symbols[getRandomInt(4)];
        s.innerHTML = letter;
        letters.push(letter);  
    }
    let content = ""
    const reduced = new Set(letters);
    alert(reduced.size)
    if (reduced.size == 3){
        content = "꽝!";    
    } else if (reduced.size == 2) {
        content = "2 개 맞았음."
    } else {
        content = "잭팟!"
    } 
    document.getElementById("div").innerHTML = content;
    return
}


function slotmachine(){
    
    let slot = `<div>\n`;
    for (let i = 0; i < 3; i ++ ){
        slot += `<span class='slots'>${symbols[getRandomInt(4)]}</span>\n`;
    }
    slot += "</div>";
    document.getElementById("slot").innerHTML = slot;
    return
}