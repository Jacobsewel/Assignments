
axios.get("https://api.vschool.io/pokemon")
    .then(res => {
        console.log(res.data)
        let response = res.data.objects[0].pokemon
       
        for(let i = 0; i < response.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response[i].name
            document.body.appendChild(h1)
        }
    })
        
       
        
    
    



    function pokemonArray (response){
        console.log(response)
        for(let i = 0; i < response.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response[i].name
            document.body.appendChild(h1)
        }
    }

// axios.get("https://api.vschool.io/pokemon")
// .then(response => pokemonArray(response.data.objects[0].pokemon))
// .catch(error => {
//     console.log(error)
// });

function myMap(arr){
    for(let i = 0; i< arr.length; i++){
        console.log(arr[i])
    }
}

const fruitArr = ['apple', 'orange', ]

 function filterApple(item){
    if(item === "apple"){
        return true
    }
 }

const newFruit = []

 fruitArr.map((item)=>{
    const isOrange = fruitArr.includes("apple")
    const example = item.split('')
console.log(example)
    console.log(isOrange, item)
   const isApple = filterApple(item)
    if(isApple){
       newFruit.push(item)
    }

 })
 
 




