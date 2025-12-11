
const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
let resultado = [];
for (const lugares of placesToTravel){
    if (lugares.id !==11 && lugares.id !==44){
        resultado.push(lugares);
    }
}
console.log(resultado);
