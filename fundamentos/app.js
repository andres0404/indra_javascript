var primerNombre = 'Pedrito';
console.log(typeof(primerNombre));
var edad = 34;
console.log(typeof(edad))
var salario = 19.901
console.log(typeof(salario))
trabajaYa = true;
console.log(typeof(trabajaYa))
var noHay;
console.log(typeof(noHay));
trabajaYa = null;
console.log(typeof(trabajaYa));

var acudiente, edad2, sexo
acudiente = "Juanito";
edad2 = 23;
sexo = 1;
console.log(acudiente + " " + edad2 + " " + sexo);
console.log("edad2: " + typeof(edad2) + " muta a ")
edad2 = "paila";
console.log(typeof(edad2))
// operadores matematicos
console.log(`${edad} - ${salario}: ` + (edad - salario) + " " + typeof(edad - salario));
// operadores unarios artmeticos
//  ++ incremento
//  -- decremento
var edadCarmen = 18;
var anosFaltantesLola = 69

edadCarmen++;
anosFaltantesLola--

console.log(`${edadCarmen} ${anosFaltantesLola}`)
console.log(edadCarmen++);// muestra y luego calcula
console.log(edadCarmen)
console.log(--edadCarmen);// calcula y luego muestra

var pesoLuis = 72;
var alturaLuis = 1.72
alturaLuis **= 2
var imcLuis = pesoLuis / alturaLuis;
var pesoCarlos = 89;
var alturaCarlos = 1.72
alturaCarlos **= 2;
var imcCarlos = pesoCarlos / alturaCarlos;
console.log(`imcLuis ${imcLuis} < imcCarlos ${imcCarlos} = ` + (imcLuis < imcCarlos));
// ejercicio sentencias
var pablo = [18,8,16];
var maria = [12,18,10];
var promPablo = 0;
var promMaria = 0;
for (var i = 0; i < pablo.length; i++) {
    promPablo += pablo[i];
}
promPablo /= pablo.length;
maria.forEach(num => promMaria += num)
promMaria/= maria.length
console.log(`${promPablo} ${promMaria}`);