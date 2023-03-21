import {getData, upcommingEvents, showCards, showCheckbox, categoriesList, combinedFilter} from "./functions.js";

let checkboxSection = document.getElementById("checkboxSection");
let searchInput = document.getElementById("searchInput");

//Llamo a la data
let {events} = await getData();

//Muestra los eventos futuros
showCards(upcommingEvents(events));

//Checkbox
showCheckbox(categoriesList(events));

checkboxSection.addEventListener('change', () => {
    combinedFilter(upcommingEvents(events));
});

//Search
searchInput.addEventListener('input', () => {
    combinedFilter(upcommingEvents(events));
});