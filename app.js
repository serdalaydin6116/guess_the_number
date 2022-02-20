// VARIABLES

const firstNumber = document.querySelector(".first_num")  //down
// console.log(firstNumber);
const secondNumber = document.querySelector(".second_num")  //up

const enterNumber = document.getElementsByClassName("input");
const guess = document.getElementById("number");

const checkButton = document.getElementById("check_button");
const resetButton = document.getElementById("reset_button");
let message1 = document.getElementById("feedback");
// console.log(message1);
let message2 = document.getElementById("attempts");
// console.log(message2);
let attempt = document.getElementById("attempt");
// console.log(attempt);

// const loading =document.getElementsByClassName("loading");
// console.log(loading);

let isGameOver = false;
const prevGuesses = []



function randomInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomNum = randomInt(1,100);  //answer
console.log(randomNum);


let assesment = "You are a wizard"
let assesment1 = "Your guess is too high. Decrease it by 10."
let assesment2 = "Your guess is too low. Increase it by 10."
let assesment3 = "Your guess is  low. Increase it."
let assesment4 = "Your guess is  high. Decrease it."
let assesment5 = "Lucky me, poor you!Try again..."



 
checkButton.addEventListener("click", () => {
    if (isGameOver) return;

    if (prevGuesses.includes(guess.value)) {
        message1.innerText = `You already guessed ${guess.value}`;
    }
    else {
        if (guess.value > randomNum ) {
            message1.innerText = assesment4;
            secondNumber.innerText = guess.value

        } else if (guess.value < randomNum) {
            message1.innerText = assesment3;
            firstNumber.innerText = guess.value
        } else {
            message1.innerText = `You are a wizard! The answer was ${randomNum}.`
            // const loading = document.querySelector(".loading");
            // window.addEventListener("load", ()=>{
            // loading.style.display = "block";     
            // setTimeout(()=>{
            // loading.style.display = "none";  
            // }, 3000);
            isGameOver = true;            
            return;
        }

        prevGuesses.push(guess.value)
        attempt.innerText -= 1

        // console.log(attempt.innerText)
        if (attempt.innerText == "0"){
            message1.innerText = `You run out of gasoline! The answer was ${randomNum}.`
            isGameOver = true;
        }

    }
})

resetButton.addEventListener("click", () => {
    isGameOver = false;
    secondNumber.innerText = 100
    firstNumber.innerText = 1
    feedback.innerText = "Write a Number!"
    attempt.innerText = 10
})