const boton = document.createElement("button");
boton.id = "btnToClick";
document.body.appendChild(boton);
boton.textContent = "Click me!";

const click = document.querySelector(".click");
boton.addEventListener("click", function(){
        console.log(click.value);
});




const focus = document.querySelector(".focus");
focus.addEventListener("focus", function(){
    console.log(focus.value);
});

const input =document.querySelector(".value");
input.addEventListener("input", function(){
    console.log(input.value);
    
})
