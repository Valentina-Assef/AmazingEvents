import {getData, showCards, showCheckbox, categoriesList, combinedFilter} from "./functions.js";

let checkboxSection = document.getElementById("checkboxSection");
let searchInput = document.getElementById("searchInput");

//Llamo a la data
let {events} = await getData()

//Muestras todos los eventos
showCards(events);

//Checkbox
showCheckbox(categoriesList(events));

checkboxSection.addEventListener('change', () => {
    combinedFilter(events);
});

//Search
searchInput.addEventListener('input', () => {
    combinedFilter(events);
});