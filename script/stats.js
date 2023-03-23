import { getData, showEventsStatistics, showUpcomingStatistics, showPastStatistics } from "./functions.js";

//Llamo a la data
let {events} = await getData();

showEventsStatistics(events);

showUpcomingStatistics(events);

showPastStatistics(events);

