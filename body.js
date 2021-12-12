let blueBtn= document.querySelector("#blue-btn")
let redBtn= document.querySelector("#red-btn")
let greenBtn= document.querySelector("#green-btn")
let showOutput= document.querySelector("#output")
let userInput= document.querySelector("#user-input")

blueBtn.addEventListener("click", pressBlueBtn)
redBtn.addEventListener("click", pressRedBtn)
greenBtn.addEventListener("click", pressGreenBtn)


console.log(blueBtn.style.color)

function pressBlueBtn(){
    userInput.style.color= "blue";
   
}

function pressGreenBtn(){
    userInput.style.color= "green";
   
}

function pressRedBtn(){
    userInput.style.color= "red";
   
}