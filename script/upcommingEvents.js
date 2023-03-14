import data from "./amazing.js";
import  {upcommingEvents} from "./functions.js";

let container = document.getElementById("cardSection");

upcommingEvents(data, container);