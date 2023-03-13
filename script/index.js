import data from "./amazing.js";
import  {newCards} from "./functions.js";

let container = document.getElementById("cardSection");

newCards(data.events, container);
