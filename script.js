let gameseq = [];
let userseq = [];

let btns = ["red", "green","blue","purple"];

let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(start == false){
        start = true;
        console.log("Game started");
        levelUp();
    }
});

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random btn flash logic
    let randidx = Math.floor(Math.random() * 3);
    let randcol = btns[randidx];
    let randbtn = document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    console.log(gameseq);

    btnflash(randbtn);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function btnpress(){
    // console.log(this);
    let btn = this;
    btnflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }

    }
    else{
        h2.innerHTML = `Game over! Your score is <b>${level}</b><br>Press any key to play again`;
        reset();
    }
}

function reset(){
    gameseq = [];
    userseq = [];
    start = false;
    level = 0;
}