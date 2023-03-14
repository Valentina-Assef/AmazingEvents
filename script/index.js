import data from "./amazing.js";
import  {newCards} from "./functions.js";

let container = document.getElementById("cardSection");

newCards(data.events, container);

/* let searchForm = document.querySelector('.search');
searchForm.addEventListener('submit', searchValue);

//?? No puedo definirla por fuera del index.js ??
function searchValue(event) {
    event.preventDefault(); // evita que recargue la página
    let searchInput = document.querySelector('.form-control');
    let searchText = searchInput.value.trim().toLowerCase(); 
    let filteredData = filterData(searchText, data.events);
    container.innerHTML = ''; //primero borro el cuerpo para que luego se cargue el nuevo filtro
    newCards(filteredData, container); 
  }

filterData(searchText, data); */

// Falta cartel cuando no coincida con nada
//Falta en las otras paginas