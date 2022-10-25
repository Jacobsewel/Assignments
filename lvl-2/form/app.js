
const form = document["my-form"]
form.addEventListener("submit", function(event){
    event.preventDefault()
    const firstName = form.firstName.value  
    const lastName = form.lastName.value  
    form.firstName.value = ""
    form.lastName.value = ""
    
    console.log(firstName + " " + lastName)

})