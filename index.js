
const text = document.querySelector(".text-field");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const check = document.querySelector(".check");
const displayAnswer = document.querySelector(".display-answer");

check.addEventListener("click", () => {
    let answer = Math.floor(Math.random() * 10) + 1;
    let guess = text.value;
    if (answer == guess){
        lose.classList.add("none");
        win.classList.remove("none");
    } else {
        win.classList.add("none");
        lose.classList.remove("none");
        displayAnswer.textContent = `Answer was ${answer}`;
    }

})