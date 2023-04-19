// destrucutaracion de objetos

const response = {
    codigo: 200,
    id_panorama:990999,
    data: {
        persona: {
            nombre: "Juan Pablo",
            direccion: {
                ciudad: "bogota",
                pais:"colombia"
            }
        }
    }
};
let {codigo:statuss,id_panorama,data:{persona:{nombre}},data:{persona:{direccion:{pais:country}}}} = response;
console.log(`${statuss} ${id_panorama} ${nombre} ${country}`);

const respuesta = [
    {
        codigo: 200,
        id_panorama:990999,
        data: {
            persona: {
                nombre: "Juan Pablo",
                direccion: {
                    ciudad: "bogota",
                    pais:"colombia"
                }
            }
        }
    },
    {
        codigo: 200,
        id_panorama:44565334,
        data: {
            persona: {
                nombre: "Ana Maria",
                direccion: {
                    ciudad: "Santiago",
                    pais:"chile"
                }
            }
        }
    },
    {
        codigo: 400,
        id_panorama:990999,
        data: {
            persona: {
                nombre: "Cindy Marquez",
                direccion: {
                    ciudad: "Quito",
                    pais:"Ecuador"
                }
            }
        }
    }
];
for({codigo:statuss,id_panorama,data:{persona:{nombre}},data:{persona:{direccion:{pais:country}}}} of respuesta){
    console.log(`${statuss} ${id_panorama} ${nombre} ${country}`);
}