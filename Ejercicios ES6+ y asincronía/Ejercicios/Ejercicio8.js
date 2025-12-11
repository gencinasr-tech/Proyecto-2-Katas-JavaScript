console.log("--- Ejercicio 8: Game of Thrones ---");

const url = "https://thronesapi.com/api/v2/Characters";

const select = document.querySelector("#character-list");
const image = document.querySelector(".character-image");


fetch(url)
  .then((response) => response.json())
  .then((personajes) => {
    
    console.log("¡Datos recibidos!", personajes);
    
    select.innerHTML = '<option value="">Selecciona un personaje...</option>';

    for (const character of personajes) {
        const option = document.createElement("option");
        option.textContent = character.fullName;
        option.value = character.imageUrl;
        select.appendChild(option);
    }
  });
  
  select.addEventListener('change', (evento) => {
  
    const urlImagen = select.value;
    image.src = urlImagen
});