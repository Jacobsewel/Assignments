const add = document.add
add.addEventListener("submit", function(e){
    e.preventDefault()

const totalGoombas = parseInt(add.totalGoombas.value)
const totalBobs = parseInt(add.totalBobs.value)
const totalCheepCheeps = parseInt(add.totalCheepCheeps.value)

function sum(){
    return totalGoombas + totalBobs + totalCheepCheeps
}

const result = document.createElement("body")
    result.textContent= sum()

    add.append(result)

})
