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

