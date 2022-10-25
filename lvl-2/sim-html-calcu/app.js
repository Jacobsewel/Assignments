
//You are going to create a simple calculator that can Add, Subtract, and Multiply


//- You will have one section (`<div>`) for each math operation (so 3 sections) total
//- Each section has two inputs to take the first and second numbers
//- Each section will have a button to perform the operation
//- You will inject the result into the HTML (not an alert)
//- Your website will have 3 colors
//- Your website will have proper padding/spacing to lay things out nicely
const add = document.add
add.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstNumber = parseInt(add.firstNumber.value)
    //const firstNumber = (add.firstNumber.value)
    const secondNumber = parseInt(add.secondNumber.value)
    
    
    

    function sum(){
        return firstNumber + secondNumber
    
    }
    
    const result = document.createElement("p")
    result.textContent= sum()
    
    add.append(result)
})

const sub = document.sub
sub.addEventListener("submit", function(event){
    event.preventDefault()

    const oneNumber = parseInt(sub.oneNumber.value)
    const twoNumber = parseInt(sub.twoNumber.value)
    
    function diffrence(){
        return oneNumber - twoNumber
        
    }

    const result = document.createElement("body")
    result.textContent= diffrence()
    sub.append(result)

})

const multiply = document.multiply
multiply.addEventListener("submit", function(event){
    event.preventDefault()

    const lion = parseInt(multiply.lion.value)
    const tiger = parseInt(multiply.tiger.value)

    function product(){
        return lion * tiger 

    }

    const result = document.createElement("body")
    result.textContent= product()
    multiply.append(result)

})


