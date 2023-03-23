import {getData, showCards, showCheckbox, categoriesList, combinedFilter} from "./functions.js";

//Llamo a la data
let {events} = await getData()

//Muestras todos los eventos
showCards(events);

//Checkbox
showCheckbox(categoriesList(events));

let checkboxSection = document.getElementById("checkboxSection");
checkboxSection.addEventListener('change', () => {
    combinedFilter(events);
});

//Search
let searchInput = document.getElementById("searchInput");
searchInput.addEventListener('input', () => {
    combinedFilter(events);
});