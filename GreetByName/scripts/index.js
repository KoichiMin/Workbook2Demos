"use strict"

window.onload = init;

function init(){
    document.getElementById("greetBtn").onclick = onGreetUserBtnClicked; 

}

function onGreetUserBtnClicked(){
    let nameField = document.getElementById("nameField").value;
    console.log(nameField)
    alert(`Hello ${nameField}`)    

}