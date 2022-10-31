
/*const fiveAndGreaterOnly = [3, 6, 8, 2]

const result = fiveAndGreaterOnly.filter(function (num){
        if(num > 5 ){
            return true
        }
})

console.log(result)*/

/*const evensOnly = [3, 6, 8, 2]

const result = evensOnly.filter(function (num){
    if(num % 2 === 0 )
    return true
})
console.log(result)*/

const fiveCharactersOrFewerOnly = ["dog", "wolf", "by", "family", "eaten", "camping"]

const result = fiveCharactersOrFewerOnly.filter(function (word){
    if(word.length <= 5){
        return true
    }
})

console.log(result)

/*const peopleWhoBelongToTheIlluminati = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }

]
const result = peopleWhoBelongToTheIlluminati.filter(function (person){
    if(person.member === true){
        return true
    }
})
console.log(result)*/

const ofAge = [
    
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 }
]

const result2 = ofAge.filter(function (person){
    if(person.age >= 18){
        return true
    }
})
console.log(result2)
