
    let mayores = [];
    let menores = [];

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
for (const datos of users){
    if (datos.years <18){
        mayores.push(datos.name)
    }
    else {
        menores.push(datos.name)
    }
}
console.log("Usuarios mayores de edad: " + mayores);
console.log("Usuarios menores de edad: " +menores);
