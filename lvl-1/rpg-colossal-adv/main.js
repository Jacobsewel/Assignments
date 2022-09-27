//The year is 1985. Your job is to build a text-based (console) RPG game.

//The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.

//1. Console must greet player with a fun message
//2. Console must ask for the player's name and store it
//3. Walking:- The console will ask the user to enter a "w" to walk
//- Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
//- Use a while loop to control this flow

readlineSync = require("readline-sync") 

let userName = readlineSync.question("welcome, what is your name?")


let greeting = readlineSync.keyInPause(` hey ${userName}!`)

// PLAYER VARIABLE

let player = {
    name: userName,
    health: 10,
    inventory: [],
}

// ENEMIES VARIABLE
// make this variable an array ofobjects 

let enemies = [{name: "zombie", health:10},{name: "spider", health:10},{name: "bird", health:10}]




// GAME LOGIC

// GAME FUNCTIONS

// rollEncounter
function randomNumber(){
    return Math.floor(Math.random() * 3);
} 
console.log(Math.random())

// fightEnemy

// calculateDamage