let humburger = document.getElementById("humburger");

let buttonsDiv = document.querySelector(".buttons")
buttonsDiv.classList.add("menuShow")

console.log(buttonsDiv)
humburger.addEventListener("click",()=>{
    buttonsDiv.classList.toggle("menuShow")
})