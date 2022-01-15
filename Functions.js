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

