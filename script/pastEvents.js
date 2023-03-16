import data from "./amazing.js";
import {pastEvents, showCards, showCheckbox, categoriesList, combinedFilter} from "./functions.js";

let checkboxSection = document.getElementById("checkboxSection");
let searchInput = document.getElementById("searchInput");

//Muestras los eventos futuros
showCards(pastEvents(data));

//Checkbox
showCheckbox(categoriesList(data));

checkboxSection.addEventListener('change', () => {
    combinedFilter(pastEvents(data));
});

//Search
searchInput.addEventListener('input', () => {
    combinedFilter(pastEvents(data));
});