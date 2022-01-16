// A function is a reusable block of code written to perform a single purpose

let arr = ["item1","item 2", "item 3"];

function logNum(len){

    for(let num = 0; num < len.length; num++){
        console.log(num);
    };

}

console.log(logNum(arr)); 

// Function Declaration 

function sayHello(name){
    console.log("Hello " + name + " !"); 
}

sayHello('Anthony'); 

// Function Expression 

let sayHello = function (name){
    console.log("Hello " + name + " !"); 
}; 

console.log(sayHello);


fnDeclaration();  // thank you function declarations :)
fnExpression();  // TypeError: fnExpression is not a function
function fnDeclaration() {
console.log("I'm coming from a function declaration");
}
const fnExpression = function() {
console.log("I'm coming from a function expression");
};

// Function Declaration
function addNums (a,b){
    return a + b
}; 

// Arrow Function
console.log(addNums(12,13)); 

const add = (a,b) => a + b ; 

console.log(add(23,25)); 

// Calling Functions 

const add = (a,b) => a + b ; 

console.log(add(100,25)); 

function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min); 
};

console.log(getRandomInt(10,20));

// The area of a rectangle with a width of ___ and a height of ___ is ___ square units

function computeArea(width,height){

    let area = width * height

    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units`

}

console.log(computeArea(5,25));

const planetHasWater = function (planet){

    if(planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars'){
        return true
    }
    else {
        return false
    };
}; 

console.log(planetHasWater('MaRs'));  

// Default Parameters 

function setColor(bicycle = "A really nice brand", color = "red"){
    return bicycle.color = color; 

};

console.log(setColor())


function multiplyNums(a= 5, b= 32){
    return a * b
}; 

console.log(multiplyNums(12,23)); 

console.log(multiplyNums()); 

let a = ['red','green','blue']; 

a.forEach(function (color){
    console.log(color); 
})

// Return Statement 

const addNums = function (num1 = 10,num2 = 123) {
    if(typeof num1 === 'string' || typeof num2 === 'string'){

        return "let's get serious people";
    }
    return num1 + num2;
};

console.log(addNums('fifteen',12)); 

console.log(addNums()); 

// Immediately Invoked Function Expressions (IIFE) 

/* revent our code from leaking into the global scope is by wrapping it with a construct known as an 
Immediately Invoked Function Expression, or “IIFE” (pronounced “iffy”). 
It looks like this: 
*/

(function () {

    'use strict';

})(); 

function nestedFunc(func){

    function consoleMe(func2){
        return func + func2;

    }
    return func2; 
}


// Nested functions

function setUpItem(){

    let myNumber = 5;

    function increment(){
        return console.log(myNumber++);
    }
    increment();
    increment();
    increment();
    increment();
    increment();
    increment();

}

setUpItem()