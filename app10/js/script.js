class Libro {
    constructor(titulo,autor,isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
}
class UI {
    static mostrarLibros(){
        const libros = Datos.traerLibros();
        libros.forEach((element,index) => {
            UI.agregarLibrosTabla(element,index);
        });
    }
    static agregarLibrosTabla( libro,index){
        var list = document.querySelector("#libro-list");
        var tr = document.createElement('tr');
        UI._addTd(index,tr);
        UI._addTd(libro.titulo,tr);
        UI._addTd(libro.autor,tr);
        UI._addTd(libro.isbn,tr); 
        UI._addTd(UI._addButtonDelete(libro.isbn),tr);
        list.appendChild(tr);
    }
    static _addTd(str,tr){
        const td = document.createElement('td');
        td.appendChild(typeof str == 'object' ? str : document.createTextNode(str));
        tr.appendChild(td);
    }
    static _addButtonDelete(id){
        const input = document.createElement('a');
        input.href = '#';
        input.id = id;
        input.className = 'btn btn-danger btn-sm delete';
        input.appendChild(document.createTextNode("X"));
        return input;
    }
    static eliminarLibro(element){
        element.parentElement.parentElement.remove();
    }
    static mostrarAlerta(str, className){
        const divAlert = document.createElement('div');
        divAlert.className = `alert alert-${className}`;
        divAlert.appendChild(document.createTextNode(str));

        const container = document.querySelector(".container");
        const form = document.querySelector("#libro_form");
        container.insertBefore(divAlert, form);

        setTimeout(() => divAlert.remove(),3000);
    }
    static limpiarCampos(){
        const form = document.querySelectorAll(".form-control");
        form.forEach(valor => valor.value = '');
    }
}

class Datos{
    static traerLibros(){
        return localStorage.getItem("libros") === null ? [] : JSON.parse(localStorage.getItem("libros"));
    }
    static agregarLibro(libro){
        var libros = Datos.traerLibros();
        libros.push(libro);
        localStorage.setItem("libros",JSON.stringify(libros));
    }
    static removerLibro(isbn){
        const libros = Datos.traerLibros();
        var idxlib = libros.findIndex(el => el.isbn == isbn)
        libros.splice(idxlib,1);
        localStorage.setItem("libros",JSON.stringify(libros));
    }
}

document.querySelector("#libro_form").addEventListener('submit',e => {
    e.preventDefault();
    // obtener valores de los campos
    const titulo = document.querySelector("#titulo").value;
    const autor = document.querySelector("#autor").value;
    const isbn = document.querySelector("#isbn").value;
    console.log(`${titulo} ${autor} ${isbn}`);
    if(!titulo || !autor || !isbn){
        UI.mostrarAlerta("Ningun campo debe estar vacio","danger");
        return;
    }
    const objLibro = new Libro(titulo,autor,isbn); 
    Datos.agregarLibro(objLibro);
    UI.limpiarCampos();
    UI.mostrarAlerta("Libro agregado correctamente","success");
    UI.agregarLibrosTabla(objLibro,0);
});
document.addEventListener('DOMContentLoaded',   e => {
    UI.mostrarLibros();
    var del = document.querySelectorAll(".delete");
    // del.forEach(ele => {
    //     ele.addEventListener("click",e => {
    //         // Datos.removerLibro(ele.id); o también se obtiene el texto del hermano td anterior
    //         Datos.removerLibro(ele.parentElement.previousElementSibling.textContent)
    //         UI.eliminarLibro(ele);
    //     })
    // })
});
const lista = document.querySelector("#libro-list");
lista.addEventListener('click',e => {
    if(e.target.classList.contains("delete")){
        Datos.removerLibro(e.target.id)
        UI.eliminarLibro(e.target);
        UI.mostrarAlerta("Libro eliminado correctamente","secondary")
    }
});

