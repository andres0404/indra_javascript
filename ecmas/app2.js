/// MAPAS

// La instancia de la clase Map almacena datos clave => valor

const datos = new Map();

datos.set("nombre","andres");
datos.set("apellido","silva");
datos.set("edad",40);
datos.set("email", "elandrew2000@hotmail.com");
datos.set("movil", 3109990900);
datos.set(1,"dddd@amail.com");
console.log(datos.get("edad"));
datos.delete(1)

// datos.forEach((key, value) => {
//     console.log(`${key} ${value}`)
// });

// operador ... (spread)
var operar = (a,b,c,d) => a+b+c+d;
console.log(operar(10,20,30,40));
const valores = [20,30,40,50];
console.log(operar(...valores));

const rrhh = ["Juana","melissa","fabiola"];
const ingenieros = ["Felipe","Andres","Mario Puzzo"];

const empresa = [rrhh,ingenieros];
const empresa2 = [...rrhh,ingenieros]
const empresa3 = [...rrhh,...ingenieros]
console.log(empresa3)