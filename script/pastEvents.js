import data from "./amazing.js";
import {pastEvents} from "./functions.js";

let container = document.getElementById("cardSection");
pastEvents(data, container);