const eliminar = document.querySelectorAll(".fn-remove-me");
for (let i = 0; i < eliminar.length; i++) {
    eliminar[i].remove();
}
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement("ul");
for (let i = 0; i < countries.length; i++) {
    const li = document.createElement("li");
    li.textContent = countries[i];
    ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries); 
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divDestino = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement("ul"); // 
for (let i = 0; i < cars.length; i++) {
    const li = document.createElement("li");
    li.textContent = cars[i];
    ulCars.appendChild(li);
}
divDestino.appendChild(ulCars);
const countrie = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (let i = 0; i < countrie.length; i++) {
    const contenedor = document.createElement("div");
    contenedor.className = "pais";
    const titulo = document.createElement("h4");
    titulo.textContent = countrie[i].title;
    const imagen = document.createElement("img");
    imagen.src = countrie[i].imgUrl;
    const botonIndividual = document.createElement("button");
    botonIndividual.textContent = "Eliminar este elemento";
    botonIndividual.addEventListener("click", function() {
        contenedor.remove();
    });
    contenedor.appendChild(titulo);
    contenedor.appendChild(imagen);
    contenedor.appendChild(botonIndividual);
    document.body.appendChild(contenedor);
}
const botonBorrarUltimo = document.createElement("button");
botonBorrarUltimo.textContent = "Borrar último país de la lista";
document.body.appendChild(botonBorrarUltimo);
botonBorrarUltimo.addEventListener("click", function() {
    const todosLosPaises = document.querySelectorAll(".pais");
    if (todosLosPaises.length > 0) {
        const elUltimo = todosLosPaises[todosLosPaises.length - 1];
        elUltimo.remove();
    }
});