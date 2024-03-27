//Functions 
// console.log("hey")
// console.log("How are you?")

function greetUser() {
    //function body goes in curly brackets
    console.log("hey")
    console.log("How are you?")
}

//Envoke a function / calling a fn

greetUser()

function greetByName(name){
    console.log(`Hey! ${name} ! How are you??`)
}

greetByName("Ankit")
greetByName("Kirti")

function addTwoNumbers(num1,num2){
    // console.log("The sum of numbers is", num1+num2)
    return num1+num2
    //After return keyword code is not executed
    console.log("The function is done ✅")

}
let sum = addTwoNumbers(10,55)
console.log("the sum of two numbers is ", sum)

//Function expression vs function declarations
//Function dec

function calculateAge(birthYear){
    return 2024 - birthYear
}

let age1 = calculateAge(1996)
console.log(age1)

// function expression 
const calculateAge2 = function(birthYear){
    return 2024 - birthYear
}

let age2 = calculateAge2(1994)
console.log(age2)

//Arrow functions

// const calculateAge3 = (birthyear)=>{
//     return 2024-birthyear
// }

const calculateAge3 = birthYear => 2024-birthYear
//If only 1 argument , remvoe the ()
//in function body if you have only 1 line and that is returning something. Remove the return keyword and {}


let age3 = calculateAge3(2002)
console.log(age3)