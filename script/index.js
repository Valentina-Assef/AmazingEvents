import data from "./amazing.js";
import {showCards, showCheckbox, categoriesList, combinedFilter} from "./functions.js";

let checkboxSection = document.getElementById("checkboxSection");
let searchInput = document.getElementById("searchInput");

//Muestras todos los eventos
showCards(data.events);

//Checkbox
showCheckbox(categoriesList(data));

checkboxSection.addEventListener('change', () => {
    combinedFilter(data.events);
});

//Search
searchInput.addEventListener('input', () => {
    combinedFilter(data.events);
});

