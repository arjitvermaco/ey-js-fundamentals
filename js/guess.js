// console.log("File is working")

// console.log(document.title)

// const documentTitle = document.title
// console.log(documentTitle)

// //Selecting an element by class
// let primaryHeading= document.querySelector('.heading-primary')
// console.log(primaryHeading)

// primaryHeading.innerHTML = "Hello"

// primaryHeading.style.backgroundColor = "red";

// let guessBtn = document.querySelector('.btn-guess');

// console.log(guessBtn);

// guessBtn.addEventListener('click',function(){
//     console.log("The Button Was Clicked!!")
// })

// primaryHeading.addEventListener('click',function(){
//     alert("Heading was clicked!!!")
// })

// document.querySelector("body").style.background = "green"



let secretNumber = Math.trunc(Math.random() * 20 + 1)
console.log(secretNumber)
let score = 20;

let guessBtn = document.querySelector('.btn-guess');
let scoreSelector = document.querySelector('.score')

scoreSelector.textContent = score

guessBtn.addEventListener('click', function () {
    let userGuess = Number(document.querySelector('.user-input').value)

    if (!userGuess) {
        document.querySelector('.feedback-message').textContent = "Please Enter a valid number ❌"
    } else if (userGuess === secretNumber) {
        document.querySelector('.feedback-message').textContent = "You Guessed Correct Number 🎉"
    } else if (userGuess !== secretNumber) {
        if (secretNumber > userGuess) {
            //Update the message
            document.querySelector('.feedback-message').textContent = "You guessed too low 📈"
            document.querySelector('.user-input').value = ""
            score--
            scoreSelector.textContent = score
        } else {
            document.querySelector('.feedback-message').textContent = "You guessed too high 📈"
            document.querySelector('.user-input').value = ""
            score--
            scoreSelector.textContent = score
        }
    }

})

//1.Setup game over conditions . when score goes to 0
//change background to green when user wins
//change background to red when game over
// Optimize the code to use ? ternary operator insted of if else
// Try to add a function to display message and to update score