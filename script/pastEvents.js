import {getData, pastEvents, showCards, showCheckbox, categoriesList, combinedFilter} from "./functions.js";

let checkboxSection = document.getElementById("checkboxSection");
let searchInput = document.getElementById("searchInput");

//Llamo a la data
let {events} = await getData()

//Muestras los eventos pasados
showCards(pastEvents(events)); //Falla en pastEvents?

//Checkbox
showCheckbox(categoriesList(events));

checkboxSection.addEventListener('change', () => {
    combinedFilter(pastEvents(events));
});

//Search
searchInput.addEventListener('input', () => {
    combinedFilter(pastEvents(events));
});