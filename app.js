let gameSeq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highScore = level;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if (started == false) {
        console.log("game start");
        started = true;

        levelup();
    }
});

function levelup() {
    userseq = [];
    level++;
    if (level >= highScore) {
        document.querySelector(".high-score").innerHTML = `Your High Score Was ${highScore}`;
        highScore++;
    }
    h2.innerText = `level ${level}`;

    // random btn function
    let random = Math.floor(Math.random() * 3);
    let randomColor = btns[random];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randomBtn);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function btnPass() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkBtn(userseq.length -1);
}

let allbtn = document.querySelectorAll(".btn");

allbtn.forEach((btns) => {
    btns.addEventListener("click", btnPass);
})

function checkBtn(idx) {
    if (userseq[idx] === gameSeq[idx]) {
        if (userseq.length == gameSeq.length) {
            setTimeout(() => {
                levelup();

            }, 1000);
        }
        console.log("same value");
    } else {
        h2.innerHTML = `Game over!  Your Score Was ${level} <br> Press Any Key To Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector("body").style.color = "white";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("body").style.color = "black";
        }, 150);
        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}
