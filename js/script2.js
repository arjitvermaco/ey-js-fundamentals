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

function greetByName(name) {
    console.log(`Hey! ${name} ! How are you??`)
}

greetByName("Ankit")
greetByName("Kirti")

function addTwoNumbers(num1, num2) {
    // console.log("The sum of numbers is", num1+num2)
    return num1 + num2
    //After return keyword code is not executed
    console.log("The function is done ✅")

}
let sum = addTwoNumbers(10, 55)
console.log("the sum of two numbers is ", sum)

//Function expression vs function declarations
//Function dec

function calculateAge(birthYear) {
    return 2024 - birthYear
}

let age1 = calculateAge(1996)
console.log(age1)

// function expression 
const calculateAge2 = function (birthYear) {
    return 2024 - birthYear
}

let age2 = calculateAge2(1994)
console.log(age2)

//Arrow functions

// const calculateAge3 = (birthyear)=>{
//     return 2024-birthyear
// }

const calculateAge3 = birthYear => 2024 - birthYear
//If only 1 argument , remvoe the ()
//in function body if you have only 1 line and that is returning something. Remove the return keyword and {}


let age3 = calculateAge3(2002)
console.log(age3)

//Functions calling another function

function createSquare(num) {
    return num * num;
    // return num**2;
}

function sumOfSquares(num1, num2) {
    return createSquare(num1) + createSquare(num2)
}

let totalSum = sumOfSquares(15, 5)
console.log(totalSum)


//Array
let person1 = "John Doe"
let person2 = "mark"
let person3 = "Ketan"


let students = ["John Doe", "mark", "Ketan", "Rishabh", "Abhi"]
console.log(students[1])
console.log(students[4])
console.log(students.length)
console.log(students[students.length - 1])

students[1] = "Mark"
console.log(students)

const firstName = "arjit";
const aboutMe = [firstName, "Verma", 2024 - 1991, 'Trainer', students]
console.log(aboutMe)
console.log(aboutMe.length)
console.log(aboutMe[aboutMe.length - 1][2])

//Array Operations
//Array.push

const friends = ["Ankit", "Akash", "jatin", "Justin"]

let newLength = friends.push("Ravi");
console.log("New length of friends array is", newLength)
console.log(friends)

//Array.pop
let elRemoved = friends.pop()
console.log(friends)
console.log("The friend that you removed is", elRemoved)

//Array.unshift
// adds element to the begining of the array 
let updatedLen = friends.unshift("Roop")
console.log(friends)
console.log("Updated length of array is ", updatedLen)


// Array.shift 
//To remove the first element from the array

let itemRemoved = friends.shift()
console.log(friends)
console.log("The item that was removed is ", itemRemoved)

//Array.indexOf

console.log(friends.indexOf("Akash"))
console.log(friends.indexOf("Satyam"))


//Array.included => returns boolean
console.log(friends.includes("jatin"))
console.log(friends.includes("Jitendra"))

if (friends.includes("Ankit")) {
    console.log("You have a friend called Ankit")
}

console.log(typeof friends)

//Objects 

console.log(aboutMe)

const aboutMeObj = {
    firstName: "Arjit",
    lastName: "Verma",
    birthYear: 1991,
    friends: friends,
    calcAge: function () {
        return 2024 - this.birthYear
    },
    getSummary: function () {
        return (`Hey! I am ${this.firstName} ${this.lastName}. A am ${this.calcAge()} years old trainer.`)
    }
}

console.log(aboutMeObj)

const userAge = aboutMeObj.calcAge()
console.log(userAge)

console.log(aboutMeObj.getSummary())

//To access value in object
// 1. Using dot notation 
// console.log(aboutMeObj.firstName)
// console.log(aboutMeObj.friends)


// let nameKey = "Name"

// //Bracket notation
// console.log(aboutMeObj['age'])
// console.log(aboutMeObj['lastName'])

// console.log(aboutMeObj['first'+nameKey])
// console.log(aboutMeObj.first+nameKey)


// aboutMeObj.canDrive = true;

// aboutMeObj.job = "Developer"
// aboutMeObj['job'] = "Trainer"


// console.log(aboutMeObj)

const mark = {
    fullName: "mark Smith",
    mass: 78,
    height: 1.66,
    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}





console.log(mark.calcBmi())

//Loops
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');


//For Loop
for (let rep = 1; rep <= 15; rep++) {
    console.log(`Lifting weights rep ${rep} 🏋️‍♀️`)
}
//

// let students = ["John Doe", "mark", "Ketan", "Rishabh", "Abhi"]

for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1} students: ${students[i]}`)
}


const years = [1991, 2007, 1969, 2020];
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i])
}

for (let i = years.length - 1; i >= 0; i--) {
    console.log(years[i])
}

console.log(ages)

console.log("Loop has ended")

let numbers = [1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])

    if(numbers[i] === 5) break;
}

console.log(11/2)
console.log(10%2)


for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2){
        continue
    }
    console.log(numbers[i])
}

// while loop 
let rep =1;
while(rep<=10){
    console.log(`Lifting weights rep ${rep} 🏋️‍♀️`)
    rep++
}