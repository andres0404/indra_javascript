var updateId = null;
const renderList = (lista) => {
    console.log(lista)
    let ul = document.querySelector('.collection');
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.setAttribute('data-id',lista.id)
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.appendChild(document.createTextNode(lista.data().titulo));
    div.appendChild(span);
    div.appendChild(botones('delete_forever'))
    div.appendChild(botones('edit','#modal1','modal-trigger'));
    li.appendChild(div);
    ul.appendChild(li);
}
const botones = (tipo, href = '#!',classe = '') => {
    const a = document.createElement('a');
    const i = document.createElement('i');
    a.href = href;
    a.className = `secondary-content ${classe}`;
    i.className = 'material-icons';
    i.appendChild(document.createTextNode(tipo));
    a.appendChild(i);
    return a;
}
db.collection('tareas').orderBy('titulo').onSnapshot(snapshot => {
    let cambios = snapshot.docChanges();
    cambios.forEach(cambio => {
        if(cambio.type == 'added'){ // estos cambios serán detectados en tiempo real
            renderList(cambio.doc);
        } else if(cambio.type == 'removed'){ 
            console.log("removido",cambio.doc.data());
        } else if(cambio.type == 'modified'){
            console.log("modificado", cambio.doc.data());
            let = li = document.querySelector(`[data-id=${cambio.doc.id}]`);
            li.children[0].children[0].textContent = cambio.doc.data().titulo

        }
    });
});
const form = document.querySelector('#add-tarea-form');
form.addEventListener('submit',e => {
    e.preventDefault();
    console.log(e.target.titulo.value)
    if(e.target.titulo.value){
        db.collection('tareas').add({
            titulo:e.target.titulo.value
        });
        e.target.titulo.value = '';
    }
});
document.querySelector('.collection').addEventListener('click',e => {
    const li = e.target.parentElement.parentElement.parentElement;
    if( e.target.innerText == 'delete_forever' ){
        console.log(e.target.parentElement.parentElement.parentElement.getAttribute('data-id'));
        db.collection('tareas').doc(li.getAttribute('data-id')).delete();
        // li.remove();
        // tambien se puede
        document.querySelector(`[data-id=${li.getAttribute('data-id')}]`).remove();
    }
    if( e.target.innerText == 'edit' ){
        updateId = li.getAttribute('data-id');
    }
});
document.querySelector("#update").addEventListener('click',e => {
    let nuevoValor = document.getElementById("editTask").value;
    db.collection('tareas').doc(updateId).update({titulo: nuevoValor});
});