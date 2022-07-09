console.log("This is from JS")
var name = "Jacob"

var age = 26

var freinds = true

var ishungry = false

var address = {
        streetName: "2005 Elmwood ave",
        city: "Lafayette",
        state: "IN",
        zip: 47904
      }





var mynumbers = [1, 2, 3, 4, 5]

var colors = ["yellow", "green", "blue", "red", "white"]

console.log (colors[2]) 
//Data Types - Create variable for each data type below using the example provided for a string 


//String - denoted/represented by " " ' ' - they are great for words,language
var firstName = "Andrew"
console.log(firstName)

////////


//Number - anything of numerical value - just a number


////////



//Boolean - true or false 
/////////


//Array - are denoted/represented by [] - are great for holding multple pieces of data
//use bracket notation [] here with the array you created use 

var arr = [ "string", 3, true ]

console.log(arr[0])
console.log(arr[1])


/////////




//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .

var obj = {
    str: "string",
    num: 6,
    bool: false
}

console.log(obj.num)
console.log(obj.bool)
console.log()

//////////


//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//////////
var person = {
    name: "jacob",
    age: 26
}
console.log(person.name)
console.log(person.age)
console.log(person.streetName)
var car = {
    type: "ford",
    make: "mustang",
    wheels: 4,
    // honk: function({
       
    // })
}    


//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement

//Using below example below to create your own conditional statement.
var color = "red"

if (color == "red") {
    console.log("I am blue!")
} else if (color === 'blue') {
    console.log("I am red!")
} else {
    console.log(" i am something else!")
}



var sport = 'football'

if (sport ==="football"){
    console.log("i am basketball!")
}else if (sport === 'basketball'){
    console.log("I am football")
    }
    



// /////////



//For Loops - At their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i

//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 

//i = i + 1 same i++


//Create 1 for loop

for (var i = 0; i < 13; i++) {
    console.log(i)
}
for (var i = 0; i < 10; i++){
    console.log(i)
}






function greeting() {
    alert("Welcome to my Page")
}
function sum(num1, num2){
    return num1 + num2
}




//////////////////
//level 0 curriculum last 5 videos cover this material "DOM"

//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method


// var newButton = document.getElementById("button-one")
// newButton.addEventListener( "click", greeting )

const foo = [1, 2, 3]
const [n] = foo
console.log(n)




var webpage = document.getElementById("webPage")
console.log(webpage)


var Button = document.getElementById("button")
Button.addEventListener("click", function() {
    alert("the button was clicked")
})
