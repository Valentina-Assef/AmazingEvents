import data from "./amazing.js";
import  {upcommingEvents, newCheckbox, filtrarPorSearch, filtrarPorCheckbox} from "./functions.js";

//Este container lo utilizo en varias funciones
let container = document.getElementById("cardSection");

//Muestras los eventos futuros
upcommingEvents(data, container);

//Muestra cuando se utilizan los checkbox
let containerCheckbox = document.getElementById('checkboxSection');

newCheckbox(data, containerCheckbox);

containerCheckbox.addEventListener('change', () => {
    let arrayFiltrado = filtrarPorCheckbox(data)
    container.innerHTML = '';
     //definir una funcion drawCards como hizo Edu?
})

filtrarPorCheckbox(data)

//Muestra cuando se utiliza el search
let input = document.getElementById("searchInput");

input.addEventListener('input', () => {
    let arrayFiltrado = filtrarPorSearch(data, input.value);
    container.innerHTML = '';
    //definir una funcion drawCards como hizo Edu?
})