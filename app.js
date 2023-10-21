let gameSeq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let lavel = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if (started == false) {
        console.log("game start");
        started = true;

        lavelup();
    }
});

function lavelup() {
    lavel++;
    h2.innerText = `lavel ${lavel}`;

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
    console.log(userColor);
}

let allbtn = document.querySelectorAll(".btn");

allbtn.forEach( (btns) => {
    btns.addEventListener("click", btnPass);
})