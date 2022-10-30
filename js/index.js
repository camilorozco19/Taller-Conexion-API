//variable para identificar el boton
const but = document.querySelector('button');

//verificamos si esta enlazado
const parrafo = document.querySelector('h2');
but.addEventListener('click', getData)

//enlazamos la api
async function getData(){
    try{
        const data = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await data.json();

        //mostrar en consola
        console.log(json); 
        console.log(json.value);
        parrafo.textContent = json.value;
}
//mostrar si hay un error
    catch(e){
    console.error(e);
    }
}