
//MAP - Filter and Reduce

const numbers = [5, 10, 15, 20];

let doubleNumbers = numbers.map((num)=>{
    return num*2
})

console.log(doubleNumbers)
//Map : when you have to preform some similar operation
// on all array elements and return a new array 

//Filter : Returns a new array
const numbers2 = [1,2,3,4,5,6,7,8,9,10]

let evenNumbers = numbers2.filter((num)=>{
    return num % 2 === 0
})

let greaterThan5 = numbers2.filter((num)=>{
    return num > 5
})

console.log(evenNumbers)
console.log(greaterThan5)


//Reduce : To get a single element from array
let numbersSum = numbers2.reduce((acc, num)=>{
    return acc + num
},0)

console.log(numbersSum)