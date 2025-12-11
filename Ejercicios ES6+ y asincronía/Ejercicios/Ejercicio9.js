
const numerorandom = Math.floor(Math.random() * 151) + 1;

console.log("Número aleatorio generado:", numerorandom);

const url = `https://pokeapi.co/api/v2/pokemon/${numerorandom}`;

fetch(url)
    .then(res => res.json())
    .then(data =>{
        const imagen = document.querySelector(".random-image")
        imagen.src = data.sprites.other['official-artwork'].front_default
    });
    
    