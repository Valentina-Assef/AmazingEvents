import {getData, pastEvents, showCards, showCheckbox, categoriesList, combinedFilter} from "./functions.js";

//Llamo a la data
let {events} = await getData()

//Muestra los eventos pasados
showCards(pastEvents(events));

//Checkbox
showCheckbox(categoriesList(events));

let checkboxSection = document.getElementById("checkboxSection");
checkboxSection.addEventListener('change', () => {
    combinedFilter(pastEvents(events));
});

//Search
let searchInput = document.getElementById("searchInput");
searchInput.addEventListener('input', () => {
    combinedFilter(pastEvents(events));
});