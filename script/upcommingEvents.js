import data from "./amazing.js";
import {upcommingEvents, showCards, showCheckbox, categoriesList, combinedFilter} from "./functions.js";

let checkboxSection = document.getElementById("checkboxSection");
let searchInput = document.getElementById("searchInput");

//Muestras los eventos futuros
showCards(upcommingEvents(data));

//Checkbox
showCheckbox(categoriesList(data));

checkboxSection.addEventListener('change', () => {
    combinedFilter(upcommingEvents(data));
});

//Search
searchInput.addEventListener('input', () => {
    combinedFilter(upcommingEvents(data));
});