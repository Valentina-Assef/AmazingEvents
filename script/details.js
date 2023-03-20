import {getData, cardDetails} from "./functions.js";

const queryString = location.search;
const params = new URLSearchParams(queryString);
const eventoId = params.get('id');
let {events} = await getData();

const evento = events.find(evento => evento._id == eventoId);

cardDetails(evento);