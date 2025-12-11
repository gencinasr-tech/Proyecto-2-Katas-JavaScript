const boton = document.createElement("button");
boton.id = "btnToClick";
document.body.appendChild(boton);
boton.textContent = "Click me!";
boton.addEventListener("click", function(event){
        console.log(event);
});
const focus = document.querySelector(".focus");
focus.addEventListener("focus", function(){
    console.log(focus.value);
});
const input =document.querySelector(".value");
input.addEventListener("input", function(){
    console.log(input.value);
    
})
