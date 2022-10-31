// try {


// function sum(1, 2){

//         throw " Hey I am an error "
//     }
//     return sum
//     }

// catch(sum){
//     console.log(sum)
// }

console.log(typeof 8)

// functions, how to use built-in methods (and how to read documentation on those built in methods)

function sum(x,y){

    try {
        if(typeof x !== "number") { 
        throw x + " is not a number"
        (typeof y +  "is not a number")
    }
     // if y is not a number 

    }
    catch(err) { 
        console.log(err)
    }
    return x+y
}

console.log(sum(5, 6))
console.log(sum(2, 11))
console.log(sum(2, "11"))
console.log(sum("3", 12))
