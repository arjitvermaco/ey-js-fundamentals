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




let secretNumber = Math.trunc(Math.random() * 20 +1 )
console.log(secretNumber)
let score = 20;

let guessBtn = document.querySelector('.btn-guess');

guessBtn.addEventListener('click',function(){
    let userGuess = Number(document.querySelector('.user-input').value)

    if(!userGuess){
       document.querySelector('.feedback-message').textContent = "Please Enter a valid number ❌"
    }else if(userGuess === secretNumber){
        document.querySelector('.feedback-message').textContent = "You Guessed Correct Number 🎉"
    }
    
})
