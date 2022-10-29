
// 1 - reduce the array of numbers into a sum of all the numbers
/*const arrayOfNumbers = [1, 2, 3]

const result = arrayOfNumbers.reduce(function (final, sum){
    final += sum
    return final
})

console.log(result)*/

//2-Turn an array of numbers into a long string of all those numbers.

/*stringConcat = [1, 2, 3]

const result = stringConcat.reduce(function (final, string){
    string.concat.s
    return final
    
})
console.log(result)*/

/*const totalVotes = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const result = totalVotes.reduce(function (final, voted){
    if(voted.voted){
    final ++
}
    return final
}, 0 )
console.log(result)*/

//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

shoppingSpree = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
const result = shoppingSpree.reduce(function (final, sum){
    final += sum
    
    return final
    
})

console.log(result)
