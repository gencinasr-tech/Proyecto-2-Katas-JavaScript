console.log("--- Ejercicio 4.1 ---");

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adult = ages.filter(age => age >18)
console.log(adult);

console.log("--- Ejercicio 4.2 ---");

const evenAges = ages.filter(age => age %2===0 );

console.log(evenAges);

console.log("--- Ejercicio 4.3 ---");

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const u = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(u);

console.log("--- Ejercicio 4.4 ---");

const tieneU = streamers.filter(streamer => streamer.name.includes("u"));
console.log(tieneU);

console.log("--- Ejercicio 4.5 ---");

const legend = streamers.filter(streamer => streamer.gameMorePlayed.includes("Legends"))
console.log(legend);

const mayuscula = streamers.map(streamer =>{
    if (streamer.age > 35){
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
    }
    return streamer
})
console.log(mayuscula);

