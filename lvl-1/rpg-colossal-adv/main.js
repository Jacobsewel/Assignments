//The year is 1985. Your job is to build a text-based (console) RPG game.

//The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.

//1. Console must greet player with a fun message
//2. Console must ask for the player's name and store it
//3. Walking:- The console will ask the user to enter a "w" to walk
//- Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
//- Use a while loop to control this flow

const readlineSync = require("readline-sync") /**
 * 
readline sync acts a third party to allow the programmer to write code and still interact as if they were the user in node.js.
 */

let userName = readlineSync.question("welcome, what is your name?") /**
 * 
readlineSync is a command that allows the programmer to write a question to the user.
 */


let greeting = readlineSync.keyInPause(` hey ${userName}!`) /**
 * 
readlineSync.KeyInPause- allows a person to write his/her name and then paste their name to the console.
 */

// PLAYER VARIABLE

let player = {
    name: userName,
    health: 100,
    inventory: [],
}/**
 * 
let player is an object describing the player properties for the game. Each property is ended with a comma except for the last prop.
 */

// ENEMIES VARIABLE
// make this variable an array ofobjects 
// make another array thats specifically for items or you can put items into the enemy array. 
let enemies = [
    {
        name: "zombie", 
        health:100,
        item:"potion",
        action:"zombie bites"
    },
    {
        name: "spider", 
        health:100,
        item:"sheild",
        action:"shoots web"
    },
    {
        name: "bird", 
        health:100,
        item:"bird eggs",
        action:"pecks at eyeball"
    }]/**
     * 
    let enemies- is an array of objects used to describe the enemies the player may encounter. Each enemy has 4 properties each.
     */




// GAME LOGIC
let inGame = true/**
 * 
let inGame is a boolean which describes the conditions as true when the player starts playing.
 */
let inBattle = false/**
Let inBattle allows the battle to end when player and enemy are done fighting */

while(inGame){
    let input = readlineSync.keyIn("press w to walk, \n press p to check inventory, \n l to leave game")
    if(input === "w"){
        rollEncounter()
    }
    else if(input === "p"){
        openInventory()
    }
    else if(input === "l"){
        console.log("gameOver")
        break
    }/**A while Loop is a loop that runs the game. Roll encounter allows the user to walk when the user presses the w key.
    Open Inventory allows the user to open inv when the user presses p. The number 1 input allows the user to declare game over. 
    the if statements in the while loop to perform as long as certain conditions are met.  */
}
// fight function run away function 
function rollEncounter(){
    let encounterEnemy = Math.floor(Math.random()*3) === 1
    if(!encounterEnemy){
        readlineSync.keyInPause("we have found no enemy keep moving forward")
    /**the funtion roll encounter randomly picks a number between 1 and 3 that allows the user to come in contact with an enemy */   
    }
    if(encounterEnemy){
        let enemy = enemies[Math.floor(Math.random()*3)]
        readlineSync.keyInPause(`you have encountered ${enemy.name}`)
        fightEnemy(enemy)
    }
} /**  let enemy Math.Floor allows has a random number circulate between 0-3. If bpth numbers are correct then an enemy would appear 
and fight the enemy*/
 


// CALCULATE DAMAGE FUNCTION
function calculateDamage(enemy){
    let playerAttack = Math.floor(Math.random()*10)+1 // google what does Math.Floor do
    let enemyAttack = Math.floor(Math.random()*10)+1 
    player.health -= enemyAttack
    enemy.health -= playerAttack
    console.log(`${player.health} player has been hurt ${enemyAttack} damage!`)
    console.log(`${enemy.health} enemy has been wounded${playerAttack}damage!`)

} /*Function calculates damage allows users to see how much health has been lost bewtween the numbers 1-10.
console.log alerts the user that both either enemy or themselves have recieved damage */

//CHECKING ENEMY AND PLAYER HEALTH

function checkHP(enemy){
    if(player.health <= 0){
        inBattle = false;
        console.log(`${player.name} has died. GAME OVER`)
        inGame = false;
        return "battle ends"
    }
    if(enemy.health <= 0){
        inBattle = false;
        console.log(`${enemy.name} is dead...`)
        enemy.item.push = player.inventory
        console.log(`${enemy.item}plaer receives enemy item`)
        
        
    }

} /**the function checkhp allows the player.health to know how much hp is available. less than or equals to health to zero alerts the user they are
dead and the game is over. game is over because the inGame is set to false when user is dead and vice versa for the enemy */

// FIGHTING ENEMY

function fightEnemy(enemy){
inBattle = true;

    while(inBattle){
        let battleStatus = checkHP(enemy)
        if(battleStatus === "battle end") break
        console.log(`${player.name}: ${player.health} / 100hp`)
        console.log(`${enemy.name}: ${enemy.health}/ 100hp`)
        let fightInput = readlineSync.keyIn(`press F to fight or R to run away!`)
        if(fightInput ===  "f" || "F"){
            calculateDamage(enemy)
        }
        if(fightInput === "r" || "R"){
                let runAway = Math.floor(Math.random()*2)
                if(runAway){
                    console.log(`${player.name} has succesfully run Away`)
                    inBattle = false
                    break
                } else {
                    console.log(`${player.name} has failed to run away `)
                    let disadvantage = Math.floor(Math.random()*10)+1
                    player.health -= disadvantage
                    console.log(`${enemy.name} attacked you while fleeing for ${disadvantage} damage!`)
                }
        }
    }

}/** function fightEnemy lets the enemy see its health. the if statemnt allows the player to fight if they want to fight or run if they want to run
to prevent from dying. The If statement in the third stanza allows to ramdoly select if the player gets to run away if numbers are wrong the 
player takes damage or if not he can run away safely without taking damage. console.log$ shows what the conditions of that turn */



// INVENTORY

function openInventory(){
    console.log(`${player.name}: ${player.health}/100hp inventory:`)
    for(let i = 0; i < player.inventory.length; i++){
        console.log(player.inventory[i])
    }
}/** funtion open inventory allows the player to open their inventory to use as a weapon, shield, or bird eggs.
the for loop allows the player to see his or her items picked up after battle */

