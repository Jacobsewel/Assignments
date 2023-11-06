function combineFruit(fruit, sweets, vegetables){
    const obj = {
        sweets,
        fruit: fruit
    }

    const obj2 = {fruit, sweets, vegetables}

    return { fruit, sweets, vegetables }
}

const stuff = combineFruit(["apple", "pear", "orange"], ["cake", "pie"], [])
console.log(stuff)

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
/*=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }
     */


