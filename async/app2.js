// llamada ajax 

const request = new XMLHttpRequest();
request.addEventListener('readystatechange',e => {
    console.log(e.target.readyState);
    if(e.target.readyState === 4){
        const datos = JSON.parse(e.target.responseText);
        console.log(datos);
    }
})
request.open("GET","https://jsonplaceholder.typicode.com/users"); 
request.send();