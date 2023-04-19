var frutas = ["Pera", "manzana", "uva","sandia"];
console.log(frutas);
frutas.push ("naranaja")
console.log(frutas);
frutas.unshift("fresa")
console.log(frutas)
frutas.pop(); // eliminar ultimo elemento
console.log(frutas);
frutas.shift()// elimina primer elemento
console.log(frutas)
var idx = frutas.indexOf("uva")
frutas.splice(idx);
console.log(frutas) ;

/** Objetos con la sintaxis Object */
var persona = new Object();
persona.nombre = 'Andres';
persona.apellido = 'Silvin'
persona['trabajo'] = 'Software developer';
console.log(persona);
//  Metodos en objetos
personab = {
    nombre: "andrecho",
    apellido: "delveccio",
    gustos: ["trabajar","estudiar","leer","culiar"],
    esCasado:false,
    nace:1983,
    //metodos
    calcularEdad: function () {
        this.edad = 2023 - this.nace
    }
}
console.log(personab);
personab.calcularEdad()
console.log(personab);