
const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
    let año = 2025
    let edadactual= 0
    let actores2 = []
  for (const actores of actors){
     let edadactual= 0
     edadactual = año - actores.born
     actores2.push(actores.name + " " + edadactual)

  }
  return actores2
}
console.log(calculateActorsAges(actors));
