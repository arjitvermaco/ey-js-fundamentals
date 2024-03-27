// // alert("Hello World!");

// console.log(" My Name is Arjit");

// console.log(2+2)
// console.log(10*2)

// //Values and variables
// console.log("Arjit")
// console.log(1991)


// let myName = "Arjit Verma"

// console.log(myName)

// let myBirthYear = 1991;

// console.log(myBirthYear+10)

// //Variable Naming conventions

// let arjit_verma = "AV"
// let $av = "AV"

// let person = "arjit"
// let PI = 3.14;

// //CamelCase
// let arjitVerma = "AV"

// let job1 = "Developer"
// let job2 = "Trainer"

// let myFirstJob = "Developer"
// let myCurrentJob = "Trainer"

// //Data Types in js
// let codingIsFun = false;

// console.log(typeof arjitVerma)
// console.log(typeof PI)
// console.log(typeof codingIsFun)

// let year;

// console.log(typeof year)

// year = 1991;
// console.log(typeof year)

// arjitVerma = 10
// console.log(typeof arjitVerma)

// //3 different ways to create variables
// // 1.using let 
// let age = 31
// age = 53;
// console.log(age)




// const canDrive =  true;
// // canDrive = false

// var lastname = "verma"
// lastname = "singh"
// var lastname = "sharma"
// console.log(lastname)


//Basic Operators
//Math Operations

// const currentYear = 2024;
// let myBirthYear = 1991;

// let myAge = currentYear - myBirthYear;

// let yourAge = currentYear - 2000;

// console.log(myAge)

// console.log(yourAge)

// console.log(myAge * 2,myAge/10)

// console.log(2**3)
// // 2**3 means 2 to the power of 3 = 2 *2 *2 

// let firstName = "arjit"
// let lastName = "verma"

// let fullName = firstName + ' ' +lastName
// console.log(fullName)

// //Assignment Operator

// let x = 10+15
// x += 10; //x = x+10
// x -=10; //x = x-10;
// x *= 10 // x = x *10;

// x++ ; //x = x+1;
// x-- ; //x = x -1;

// //Comparision Operators
// // > , < , >= , <=
// console.log(100 > 50)

// console.log(currentYear - myBirthYear > currentYear - 2000)


// //Operator Precesence 
// // BODMAS 
// let z = (10*2)+30 - 10;
// console.log(z)

// //String and Template Literals ES6-2015 EcmaScript

// console.log("Hey! My name is " + firstName + " my last name is " + lastName)

// console.log(`Hey! My name is ${firstName} and my last name is ${lastName}`)

// console.log(`my age is ${2024-1991}`)

// // console.log("hey! this is line
// // one and this is new line ")

// console.log("Hey!! this is line one \n\
// this is another line \n\
// this is              third line")

// console.log(`Hey! this is line 1
// this is line 2
// this is line 3`)

// //Decision Making : if/else statements
// let userAge = 16;

// if(userAge >= 18){
//     console.log("You are eligible to drive 🚗")
// }else{
//     console.log("You are not eligible to drive ❌")
//     console.log(`You need to wait ${18-userAge} years to drive 👴🏻`)
// }


// //Type conversion and type coercion

// const userInput = "1991";
// console.log("user input is", userInput)
// console.log("user input converted to number is:",Number(userInput))

// console.log(Number("Arjit"))

// console.log(String(23))

// //Type coercion

// console.log("Hey! i am " + 33 + " years old");

// console.log("23"-"20"+4)

// console.log("24"/2)

// let num = '1'+1;
// console.log(num)

// num = num -1;
// console.log(num)


//Truthy and Falsy values


console.log(Boolean("ankit"))
console.log(Boolean(10))
console.log(Boolean(0))

// 5 falsy values in js 
// 0 , "", undefined , null , NaN 
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(""))
console.log(Boolean({}))


let moneyInMyBank = 0;

if (moneyInMyBank) {
    console.log("You got some ＄")
} else {
    console.log("You need to make some 💰")
}

//Equality operator  == vs ===

// == matches only values
// === matches values with data type

// const age = '18';

// if(age == 18) console.log("You are now an adult!")

// if(age === 18) console.log("YOU ARE NOW AN ADULT!!")

// let userNumber = Number(prompt("What is your fav number?"))
// console.log(userNumber)

// if(userNumber === 30){
//     console.log("Cool! 30 is a great no")
// }else if(userNumber === 10){
//     console.log("10 is also a good number")
// }else if(userNumber === 15){
//     console.log("15 is cool number")
// }else{
//     console.log("Yeah ! its okay")
// }

// if(userNumber !== 30){
//     console.log("Why dont you like 30")
// }

//Logical Operators

let hasGoodEyeSight = true;
let isAdult = true;

console.log(hasGoodEyeSight && isAdult)
console.log(hasGoodEyeSight || isAdult)
console.log(!hasGoodEyeSight)

let isTired = false

if (hasGoodEyeSight && isAdult && !isTired) {
    console.log("Yeah! you can drive")
} else {
    console.log("Let someone else drive!!!")
}

//Switch case

let day = "thursday";

if (day === "monday") {
    console.log("Code on the side project")
} else if (day === "tuesday") {
    console.log("Conduct Training")
} else if (day === "wednesday") {
    console.log("Code today")
} else if (day === 'thursday') {
    console.log("Record Videos")
} else if (day === 'friday') {
    console.log("Take assessment test")
} else if (day === 'saturday' || day === 'sunday') {
    console.log("take a break!!")
} else {
    console.log("Not a valid day!")
}


switch (day) {
    case 'monday':
        console.log("Code on the side project");
        break;
    case 'tuesday':
        console.log("Conduct Training")
        break
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');

}

//Ternary operator
let client = "Amazon";
// if(client === "Amazon"){
//     console.log("They are into e-commerce and cloud business")
// }else{
//     console.log("I dont know what they do 🤦🏻‍♂️")
// }

client === "Amazon"? console.log("They are into Ecoomcer"): console.log("I dont know what they do!!")

let userAge = 15;


let userCanVote = userAge >=18 ? 'Can Vote': "Cannot Vote"

console.log(userCanVote)