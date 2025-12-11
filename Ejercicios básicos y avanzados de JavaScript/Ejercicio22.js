
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let indicefrutas = 0;
let healthyfoodSchedule = []
for (const resolucion of foodSchedule){
    if (resolucion.isVegan === false){
        resolucion.name = fruits[indicefrutas];
        indicefrutas++;
        healthyfoodSchedule.push(resolucion.name)
    }
    else {
        healthyfoodSchedule.push(resolucion.name)
    }
}
console.log(healthyfoodSchedule);