import data from "./amazing.js";
import  {allCards} from "./functions.js";

let container = document.getElementById("cardSection");

allCards(data.events, container);