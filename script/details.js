import data from "./amazing.js";
import {cardDetails} from "./functions.js";

let container = document.getElementById("cardDetails");

const queryString = location.search;
const params = new URLSearchParams(queryString);
const eventoId = params.get('id');

const evento = data.events.find(evento => evento._id == eventoId);

cardDetails(evento, container);