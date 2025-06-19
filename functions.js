
//check to see if sccript is paired and loaded with page
console.log("scripts.js loaded successfully");

//concatenations
let firstName = "Tim";
const lastName = "Sailer";

console.log(`My Full name is  ${firstName} ${lastName} `);

//function declaration
function sayHello(){
    console.log("Hello, World!");
}

//calling the function
sayHello();

//call function with parameters
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
//calling the function with a parameter
greetUser("Tim"); // Tim is the parameter called by the function

//with 2 parameters
function greetUserWithAge(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
//calling the function with 2 parameters
greetUserWithAge("Tim", 41);

//challenge 1
function doubleNumber(number) {
    let result = number * 2;

    console.log(`The double of ${number} is ${result}.`);
} 
doubleNumber(5); //IN Parethesis you call what number you want to double

//create function with a prompt
function welcome(){
    let name2 = prompt("What is your name?");
    let age2 = prompt("What is your age?");
    console.log(`Welcome, ${name2}! You are ${age2} years old.`);
}
//trigger the function
//
//
//YOU MUST CALL THE FUNCTION TO EXECUTE IT!!!!!

function add(num1=0,num2=0){
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);

}
add(7,8); //calling the function with 2 parameters
//challenge 2
function combineName(namex="unknown",namey="unknown") {
    let combinedName = namex + " " + namey;
    console.log(`The combined name is: ${combinedName}`);
}   
combineName("Alice","Johnson");
combineName("Alice",);
combineName();

//challenge 3
//convert minutes to seconds
function convertMinutesToSeconds(minutes) {
    let seconds= promt("Enter Minutes") * 60;
    console.log(`${minutes} minutes is equal to ${seconds} seconds.`);
    docum
}
function convertHoursToMinutes(hours) {
    let minutes = hours * 60;
    console.log(`${hours} hours is equal to ${minutes} minutes.`);
}
convertHoursToMinutes(2);