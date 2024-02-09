


const root = document.getElementById("root")

const form = document.newToDo
const title = form.title
const price = document.getElementById("price")
const description = document.getElementById("description")
const image = document.getElementById("img")
const newToDo = {
    title:"", 
    price:"",
    description: "",
    img:"",
    isComplete: false
}

let refArr;

let bigContainer

// This is where you will store all of your generated items
// container.append(place variable names in here separated by a comma)
// subContainer.append(h1,h3,body, img)
// container.appendChild(subContainer)


// use reusable code as much as you can
// 
function getRequest(data){
    if(data){
    refArr = data
}
else data = refArr
    // may need to create container here instead of in the html
    const container = document.createElement('div')
    bigContainer = container
    for(let i = 0; i < data.length; i++){

        const h1 = document.createElement('h1')
        const h2 = document.createElement("h2")
        const displayedPrice = document.createElement("h2")
        const buttonContainer = document.createElement("div")
        const deleteButton = document.createElement("button")
        const editButton = document.createElement("button")
        const label = document.createElement('p')
        label.textContent = "completed"
        displayedPrice.textContent = data[i].price
        deleteButton.textContent = "X"
        editButton.textContent = "edit"
        h1.textContent = data[i].title
        const checkBox = document.createElement("input")
        checkBox.setAttribute("type", "checkBox")
        checkBox.addEventListener('click', ()=> changeStatus())



        
        // I need to create a container with a p tag in my checkboxes for complete/incomplete then attach to my edit button w/(addeventlistner)
        //  I need an announomous funtion to prevent the delete request from instantly being called everytime.
        

        deleteButton.addEventListener('click', ()=> deleteRequest(data[i]._id))
        buttonContainer.append(deleteButton, editButton)
        container.append(h1, buttonContainer, label, checkBox)
        root.append(container)
    }
    
} 
function changeStatus(){
    console.log('this works')
}


function submit(event){
    event.preventDefault()
    newToDo.title = title.value
    newToDo.price = price.value
    newToDo.description = description.value
    newToDo.img = img.value
    axios.post('https://api.vschool.io/<jacobsewell>/todo', newToDo)
    .then(response => {
        const twoArr = [response.data]
            getRequest(twoArr)
    })
    .catch(error => console.log(error))

}

//  on the edit function, I will have to do put the response.data back into an array --> to fix this i can make an array outide my get request function 
// declare let to refrence an array. Inside of the getrequest function I am going to refrence whatever array that
//  I created outside of the function again and set the array = to data: this will preserve the data get lost in


// so every (axios) .post, .delete, .put needs to be inside a function with exception .get
    
    
    



function editTodo(){
    
}

function deleteRequest(id){

    axios.delete(`https://api.vschool.io/<jacobsewell>/todo/${id}` )
    .then(response => getRequest(), bigContainer.remove())
    .catch(error => console.log(error))
    console.log(id)
}
// you can get the page to update via calling window.refresh(). 


//     axios.put('https://api.vschool.io/<jacobsewell>/todo',)
//         .then(res => console.log(res))
//         .catch(err => console.log(err))

//         const update = {
    //             title: ""
    //             price:""
    //             description:""
    //         }
    
    // i need to add a complete object and a true/false 
    // creat a function to checkbox update

form.addEventListener("submit", submit )

axios.get('https://api.vschool.io/<jacobsewell>/todo')
.then(response => {
    getRequest(response.data),
    console.log(response.data)
})
.catch(error => console.log(error))




