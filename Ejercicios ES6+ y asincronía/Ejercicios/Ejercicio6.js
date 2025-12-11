console.log("--- Ejercicio 6.1 ---");

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const notatotal = exams.reduce((acc, exam) =>{
    return acc + exam.score
}, 0);
console.log(notatotal);

console.log("--- Ejercicio 6.2 ---");

const notasaprobadas = exams.reduce((acc, exam) =>{
    if (exam.score > 5){
        return acc + exam.score
    }
    else {
        return acc + exam.score*0
    }
}, 0);
console.log(notasaprobadas);

const notas = exams.reduce((acc, exam) =>{
    return (acc + exam.score) 
}, 0);
const notamedia = notas/ (exams.length)
console.log(notamedia);

