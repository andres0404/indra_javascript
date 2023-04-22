const  ahora= new Date();
const fecha1 = new Date("December 17, 1995 14:50:00")
const fecha2 = new Date("2027-05-08 12:40:00");
console.log(ahora.getTime());
console.log(ahora);
console.log(fecha1);
console.log(`Año: ${ahora.getFullYear()}`);
console.log(`Mes: ${ahora.getMonth()}`);
console.log(`dia: ${ahora.getDate()}`);
console.log(`dia semana: ${ahora.getDay()}`);
console.log(`hora: ${ahora.getHours()}`)
console.log(`Minutos: ${ahora.getMinutes()}`)
console.log(`Seg: ${ahora.getSeconds()}`)
console.log(`MilSeg: ${ahora.getMilliseconds()}`);
console.log(fecha2);

if(ahora.getTime() > fecha1.getTime()){
    console.log("la fecha actual es mayor que la fecha1")
} else {
    console.log("fecha1 es mayor que la fecha actual");
}
if (ahora.getTime() > fecha2.getTime()){
    console.log("La fecha actual es mayor que la fecha2");
} else{
    console.log("La fecha actual es menor que fecha 2")
}
