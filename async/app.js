// setTimeout(() => console.log("Aparece despues de 3 segundos"),3000);

// const segundo = () => {
//     setTimeout(() => { // setTimeout es una funcion asincrona 
//         console.log("llamada a segundo");
//     },2000)
// }

// const primero = () => {
//     console.log("inicio de primero");
//     segundo();
//     console.log("Fin de primero");
// }
// primero();

// Ejemplo 1
// let promesa = new Promise((resolve, reject) => {
//     false ? resolve("Operacion exitosa") : reject("Algo falló");
// });

// promesa.then(response => {
//     console.log(`Respuesta: ${response}`)
// }).catch(error => {
//     console.log(`Error: ${error}`);
// });


/***  Ejemplo 2 ****/
// let miPromesa = new Promise().resolve("Comidita");
// miPromesa.then(response => console.log(`Respu ${response}`)) 

// Ejemplo 3

var miPromesa2 = new Promise((resolve,reject) => {
    setTimeout(() => resolve(4),2000)
});
miPromesa2.then(resp => {
    resp += 5;
    console.log(resp)
})

 /****** De callback a promesa *******/

const getUsuariosIDs = new Promise((response, reject) => {
    setTimeout(() => {
        response([101,102,103,104,105]);
    },1500)
});

const getUsuario = userID => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const usuario = {
                email: 'mail@mail.com',
                nombre: "Andres Man"
            }
            resolve(`${id}: ${usuario.email} ${usuario.nombre}`);
        },1500, userID);// userID es el argumento que setTimeout recibe con id

    });
}

const getPermisos = permisos => {
    return new Promise((resolve, reject) => {
        setTimeout(permiso => {
            const permisos = ['admin','creador'];
            resolve(permisos);
        },1500, permisos)
    })
}

getUsuariosIDs.then(IDs => {
    console.log(IDs);
    return getUsuario(IDs[2]);
}).then(str => {
    console.log(str);
    return getPermisos(str)
}).then(permisos => {
    console.log(permisos)
}); // recibe los parametros entregados del then anterior


/*** async / await ***/
async function getUsuariosAW() {
    const IDs = await getUsuariosIDs; // solo se puede usar wait si la funcion es async
    console.log(IDs);
    const usuario = await getUsuario(IDs[3]);
    console.log(usuario);
    const permisos = await getPermisos(usuario)
    console.log(permisos);
    return usuario;
}

// getUsuariosAW().then(id => console.log(id));

const usu = getUsuariosAW();
console.log(usu);
usu.then(id => console.log(id));