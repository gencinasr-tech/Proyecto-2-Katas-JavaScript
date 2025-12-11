const div = document.createElement("div");
document.body.appendChild(div);
const parrafo = document.createElement("p");
div.appendChild(parrafo);
const contenedor_blucle_p = document.createElement("div");
for (let i=0; i<6; i++){
    const p = document.createElement("p");
    contenedor_blucle_p.appendChild(p);
};
document.body.appendChild(contenedor_blucle_p);
const p_conTexto = document.createElement("p");
p_conTexto.textContent = "Soy Dinámico!";
document.body.appendChild(p_conTexto);
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul")
 for (let i=0; i < apps.length; i++){
    const li = document.createElement("li")
    li.textContent=apps[i]
    ul.appendChild(li)
 };
 document.body.append(ul);
 const eliminar = document.querySelectorAll(".fn-remove-me");
for ( let i=0; i<eliminar.length; i++){
   eliminar[i].remove()
};
const pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio!";
const todosLosDivs = document.querySelectorAll("div");
document.body.insertBefore(pMedio, todosLosDivs[1]);
const cajas = document.querySelectorAll(".fn-insert-here");
for (let i = 0; i < cajas.length; i++) {
    const pDentro = document.createElement("p");
    pDentro.textContent = "Voy dentro!";
    cajas[i].appendChild(pDentro);
}

 