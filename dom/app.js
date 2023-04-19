// // console.log(document.URL)
// document.title = 'Repailero'
// //console.log(document.all);

// var listGroup = document.getElementsByClassName('list-group-item');
// // console.log(listGroup[1]);
// var header = document.querySelector('#main-header');
// // console.log(header);
// header.style.borderBottom = '3px solid red';
// var inp = document.querySelector('input');
// inp.placeholder = 'Agregue un mensaje que le guste'
// var subm = document.querySelector('input[type="submit"]');
// subm.value = 'Enviar!'

// var lista = document.querySelectorAll(".list-group-item");
// // console.log(lista);
// lista[2].style.color = 'red';

// var listaImpar = document.querySelectorAll('.list-group-item:nth-child(odd)');
// // console.log(listaImpar);
// listaImpar.forEach(value => {value.style.backgroundColor = '#CCC'});
// var listaPar = document.querySelectorAll('.list-group-item:nth-child(even)');
// // console.log(listaPar);
// listaPar.forEach(value => value.style.fontWeight='bold')
// // parentNode. parentElement tiene un funcionamiento similar
// var itemList = document.querySelector("#items");
// // console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // se puede ir escalando hacia arriba con obteniendo el parentNode del parentNode anterior
// // console.log(itemList.parentNode.parentNode.parentNode);
// // childsNodes
// console.log(itemList.childNodes);
// //children
// console.log(itemList.children);
// // firstChild
// // console.log(itemList.firstChild)
// // console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Rapidou';
// // lastChild
// // console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Ultimo';
// // previosSibling hermanos
// // console.log(itemList.previousElementSibling);  
// // nextSibling
// // console.log(itemList.nextElementSibling);

// // agregar elementos
// var nuevoDiv = document.createElement("div");
// nuevoDiv.className = 'hola';
// nuevoDiv.id = "div-hola";
// nuevoDiv.setAttribute('title','elementoMemento');
// // console.log(nuevoDiv);
// // crear un nodo dentro de su elemento padre
// var nodoText = document.createTextNode("Esto es un nuevo texto")
// nuevoDiv.appendChild(nodoText);
// // console.log(nuevoDiv);
// // insertBefore es un appendChild que ingresa como hijo un nuevo elemento despues de su hermano
// // document.querySelector(".container").insertBefore(nuevoDiv,document.querySelector("h1"));
// // eventos
// document.getElementById("boton2").addEventListener('click',() => {
//     console.log("Haz hecho click rapidamente");
//     document.getElementById("header-title").textContent = 'Haz la rapidez un trabajo asi';
// })

// agregar elemento a la lista
var form = document.getElementById("formAgregar");
var list = document.getElementById("items");
var filtro = document.getElementById("filtro");
form.addEventListener('submit',e => { 
    e.preventDefault();
    var newItemText = document.getElementById("textil").value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItemText))
    var eliminarBoton = document.createElement('button')
    eliminarBoton.className='btn btn-danger btn-sm float-right';
    eliminarBoton.innerText = 'X';
    li.appendChild(eliminarBoton); 
    list.insertBefore(li,list.children[list.children.length]);
    document.getElementById("textil").value = ''; 
});
list.addEventListener('click',e => {
    console.log(e.target.classList);
    if(e.target.classList.contains("btn-danger") && confirm("quiere eliminar el elemento?")){
        // capturar al padre que lo contiene
        var liPadre = e.target.parentElement
        console.log(liPadre);
        list.removeChild(liPadre);
    }
})
filtro.addEventListener('keyup',e => {
    // console.log(e.target.value.toLowerCase());
    var items = document.querySelectorAll(".list-group-item");
    // console.log(items);
    items.forEach(item => {
        var itmNombre = item.firstChild.textContent;
        if(itmNombre.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
})