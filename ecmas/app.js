var nombre = 'Sandra';
var apellido = 'Costosa';
let nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);
console.log(`${nombre}`.repeat(5));
console.log(nombreCompleto.includes('ost'));
console.log(nombreCompleto.startsWith('Se'))
console.log(nombreCompleto.endsWith('sa'));

// funciones flecha
const years = [2000,2005,2008,2012,2016,2019,2023];
let edad = years.map(e => 2023 - e);
console.log(edad);
// Destructuracion
// ES5
// var datos = ['Pablito',25]
// let nombre = datos[0];
// let ed = datos[1];
// ES6
let [nomb, ed] = ['Juanchito',34];

const persona = {
    nombres: 'Sandrita',
    edads : 20
};
const {nombres,edads} = persona;
console.log(`${nombres} ${edads}`); 

const {nombres:a,edads:b} = persona;
console.log(`${a} ${b}`)

const calcMayoriaEdad = (year) => {
    let edad = new Date().getFullYear() - year;
    let mayor = edad >= 18;
    return [edad, mayor];
}

const [edad2, mayor] = calcMayoriaEdad(2016);
console.log(`${edad2} ${mayor}`);


let [edad3, mayor3,mayorNext] = years.map((y) => calcMayoriaEdad(y));
console.log(edad3);
console.log(mayor3);
console.log(mayorNext);
