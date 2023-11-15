
const text = document.querySelector(".text-field");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const check = document.querySelector(".check");
const displayAnswer = document.querySelector(".display-answer");

let answer;
let round = 0;

check.addEventListener("click", () => {
    if (round === 0){
        answer = Math.floor(Math.random() * 10) + 1;
    }
    let guess = text.value;
    if (answer == guess){
        lose.classList.add("none");
        win.classList.remove("none");
        displayAnswer.textContent = "";
        round = 0;
    } else {
        win.classList.add("none");
        if (+guess > answer){
            displayAnswer.textContent = `Too High. ${round + 1}/3 attempts`;
        } else {
            displayAnswer.textContent = `Too low. ${round + 1}/3 attempts`;
        }

        
        if (round === 2){
            lose.classList.remove("none");
            displayAnswer.textContent = `Answer was ${answer}`;
            round = -1;
        } 
        

        round++;
    }

})