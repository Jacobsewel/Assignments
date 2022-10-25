/*You should collect the following information from the user:

- First name (text input)
- Last name (text input)
- Age (number input)
- Gender (radio buttons with 2 or more options)
- Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
- Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

Each element of the form should be given a `name` attribute so you can access the data in JavaScript and do stuff with it.

There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:
*/

const form = document.passenger
form.addEventListener("submit", function(e){
    e.preventDefault()
    
const firstName = passenger.firstName.value
const lastName = passenger.lastName.value
const ageNumber = passenger.ageNumber.value
const gender = passenger.gender.value
let checkedDestinations = ["cuba", "bahammas", "anguilla"];
for(var i = 0; i < passenger.destination.length; i++){
    if(passenger[i].checked){
        checkedDestinations.push(passenger[i].value)
    }

}

let checkedRestrictions = ["vegetarian", "pescatarian", "kosher"]
for(var i = 0; i < passenger.restrictions.length. i++;){
    if(passenger[i].checked){
        checkedRestrictions.push(passenger[i].value)
    }
}


form.firstName.value = ""
form.lastName.value = ""



const h1 = document.createElement("h1")
h1.textContent = firstName + " " + lastName + " " + ageNumber + " " + gender + " " +  checkedDestinations + " " + checkedRestrictions
document.getElementsByTagName("body")[0].append(h1)

})



