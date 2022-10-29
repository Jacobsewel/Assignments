/*Make a site that tracks how many times the user has clicked anywhere on the page 
(or a specific button if you prefer) and displays that click count to the user. 
Then, using localStorage or sessionStorage, 
make it so the number of clicks will remain on the screen even after the site is refreshed.*/

// function userClick(){
//     console.log('I clicked');
// }
// function stopClicking(){
//     clearInterval(intervalID)
// }
// localStorage.setItem("user", "click");


//grab click button from index.html
const clickBtn = document.getElementById("clickBtn")
let getCount = document.getElementById("getCount")

//add eventlistener
clickBtn.addEventListener("click", myBtn)

let count = 0

function myBtn(){
    //counting inside of the function
    count ++
    getCount.textContent = count
    //save count in localStorage
}
