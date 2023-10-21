let gameSeq = [];
let userseq = [];

let started = false;
let lavel = 0;

document.addEventListener("keypress", () => {
    if (started == false) {
        console.log("game start");
        started = true;
    }
})