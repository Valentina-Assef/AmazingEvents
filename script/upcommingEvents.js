import {getData, upcommingEvents, showCards, showCheckbox, categoriesList, combinedFilter} from "./functions.js";

//Llamo a la data
let {events} = await getData();

//Muestra los eventos futuros
showCards(upcommingEvents(events));

//Checkbox
showCheckbox(categoriesList(events));

let checkboxSection = document.getElementById("checkboxSection");
checkboxSection.addEventListener('change', () => {
    combinedFilter(upcommingEvents(events));
});

//Search
let searchInput = document.getElementById("searchInput");
searchInput.addEventListener('input', () => {
    combinedFilter(upcommingEvents(events));
});