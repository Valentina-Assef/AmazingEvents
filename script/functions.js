async function getData(){
  let list = await fetch("./data/amazing.json")
            .then(response => response.json())
            .then(list => {
                return list;
            })

  return list
}

function showCards(list){
  if(list.length == 0){
    cardSection.innerHTML = `<h2 class="text-white">No results found</h2>`;
      return;
    }
  let cards = "";
  list.forEach((element) => {
      cards += `<div class="card card-index">
      <img src=${element.image} class="card-img-top" alt=${element.name}/>
      <div class="card-body">
        <h5 class="card-title text-center">${element.name}</h5>
        <h6 class="card-date text-center">${element.date}</h6>
        <p class="card-text text-center">${element.description}</p>
      </div>
      <div class="footer-card d-flex">
        <P>Precio $${element.price}</P>
        <a href="./details.html?id=${element._id}" class="btn btn-see-more">Ver mas...</a>
      </div>
      </div>`
  })
  cardSection.innerHTML = cards;
}

function pastEvents(list){ //Importante declarar currentDate
  let currentDate = new Date();
  let pastEvent = list.filter((element) => {
    let eventDate = new Date(element.date);
    return eventDate.getTime() < currentDate.getTime();
  });
  return pastEvent;
};
  
function upcommingEvents(list){
  let currentDate = new Date();
  let futureEvents = list.filter((element) => {
    let eventDate = new Date(element.date);
    return eventDate.getTime() > currentDate.getTime();
  });
  return futureEvents;
};

function showCheckbox(list){
  let checkboxes = "";
  list.forEach((category) => {
    checkboxes += 
    `<p><input type="checkbox" id="${category}" name="position1" value="${category}">
    <label for="${category}">${category}</label>
    </p>`
  });
  checkboxSection.innerHTML = checkboxes;
}

function categoriesList(list){
  let categories = [];
  list.forEach((element) => {
    categories.push(element.category);
  });
  categories = Array.from(new Set(categories));
  categories.sort();
  return categories;
}

function filterBySearch(list, texto){ //Necesito que devuelva un return para trabajar con esa info
  let filteredArray = list.filter((element) => element.name.toLowerCase().includes(texto.toLowerCase()));
  return filteredArray;
}

function filterByCheckbox(list){
  let checkbox = document.querySelectorAll("input[type='checkbox']");
  let checkboxlist = Array.from(checkbox);
  let checkSelected = checkboxlist.filter((check) => check.checked);
  if (checkSelected.length == 0) {
      return list;
  }
  let categories = checkSelected.map((check) => check.value.toLowerCase());
  let filteredList = list.filter((element) => categories.includes(element.category.toLowerCase()));
  return filteredList;
}

function combinedFilter(list){
  let firstFilter = filterBySearch(list, searchInput.value);
  let secondFilter = filterByCheckbox(firstFilter);
  showCards(secondFilter);
}

function cardDetails(evento){
  let container = document.getElementById("cardDetails");
  let card = "";
  card = `<div class="card card-details">
            <div class="row g-0">
              <div class="col-md-6 img-details">
                <img src=${evento.image} class="img-fluid img-card-details" alt=${evento.name}>
              </div>
              <div class="col-md-6">
                <div class="card-body card-body-details">
                  <h5 class="card-title text-center">${evento.name}</h5>
                  <div class="card-body-text">
                    <p class="card-text">Date: ${evento.date}</p>
                    <p class="card-text">Description: ${evento.description}</p>
                    <p class="card-text">Category: ${evento.category}</p>
                    <p class="card-text">Place: ${evento.place}</p>
                    <p class="card-text">Capacity: ${evento.capacity}</p>`;             
  if(evento.assistance != undefined){
    card = card + `<p class="card-text">Assistance: ${evento.assistance}</p`;
  } else {
    card = card + `<p class="card-text">Estimate: ${evento.estimate}</p`;
  }
  card = card + `
                <p class="card-text">Price: $${evento.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  container.innerHTML = card;
};

//Stats

//Table1 Events
function showEventsStatistics(list) {
    let table = document.getElementById("tableEvents")
    let tbody = table.querySelector("tbody");
    let row = "";
    row = `<tr>
            <td>${highestAttendace(list)}</td>
            <td>${lowestAttendace(list)}</td>
            <td>${largerCapacity(list)}</td>
        </tr>`;
    tbody.innerHTML = row;
}

//Event with the highest percentage of attendance
function highestAttendace(list){
  let maxAttendace = Math.max(...(pastEvents(list)).map(evento => (evento.assistance / evento.capacity) * 100));
  let evento = (pastEvents(list)).find(evento => (evento.assistance / evento.capacity) * 100 == maxAttendace);
  return evento.name
}

//Event with the lowest percentage of attendance
function lowestAttendace(list){
  let minAttendace = Math.min(...(pastEvents(list)).map(evento => (evento.assistance / evento.capacity) * 100));
  let evento = (pastEvents(list)).find(evento => (evento.assistance / evento.capacity) * 100 == minAttendace);
  return evento.name
}

//Largest Capacity Event
function largerCapacity(list){
  let maxCapacity = Math.max(...list.map(evento => evento.capacity))
  let evento = list.find(evento => evento.capacity == maxCapacity)
  return evento.name
}

//Table2 Upcoming Events Statistics
function showUpcomingStatistics(list) {
  let table = document.getElementById("tableUpcoming")
  let tbody = table.querySelector("tbody");
  let categories = categoriesList(upcommingEvents(list));
  let row = "";
  categories.forEach((category) => {
    row += `<tr>
          <td>${category}</td>
          <td>$${revenuesByCategories(list, category, "upcoming")}</td>
          <td>${percentageOfAttendance(list, category, "upcoming")}%</td>
      </tr>`;
  })
  tbody.innerHTML = row;
}

//Table3 Past Events Statistics
function showPastStatistics(list) {
  let table = document.getElementById("tablePast")
  let tbody = table.querySelector("tbody");
  let categories = categoriesList(pastEvents(list));
  let row = "";
  categories.forEach((category) => {
    row += `<tr>
          <td>${category}</td>
          <td>$${revenuesByCategories(list, category, "past")}</td>
          <td>${percentageOfAttendance(list, category, "past")}%</td>
      </tr>`;
  })
  tbody.innerHTML = row;
}

//Revenues by categories
function revenuesByCategories(list, category, date){
  if(date === "past"){
    date = pastEvents(list);
  } else if((date === "upcoming")){
    date = upcommingEvents(list);
  } else {
    return "Error: Invalid date"
  }

let filteredEvents = date.filter(event => event.category === category);
    
let revenues = filteredEvents.reduce((total, event) => {
  return total + ((event.assistance ? event.assistance : event.estimate) * event.price)
}, 0);

  return revenues; 
}

//Percentage of attendance by category
function percentageOfAttendance(list, category, date){
  if(date === "past"){
    date = pastEvents(list);
  } else if((date === "upcoming")){
    date = upcommingEvents(list);
  } else {
    return "Error: Invalid date"
  }

let filteredEvents = date.filter(event => event.category === category);
let totalAssistance = filteredEvents.reduce((acc, event) => acc + (event.assistance || event.estimate), 0);
let totalCapacity = filteredEvents.reduce((acc, event) => acc + event.capacity, 0);
let percentage = (totalAssistance / totalCapacity) * 100;

return percentage.toFixed(2);
}


export {getData, showCards, upcommingEvents, pastEvents, showCheckbox, categoriesList, filterBySearch, filterByCheckbox, combinedFilter, cardDetails, showEventsStatistics, largerCapacity, highestAttendace, lowestAttendace, showUpcomingStatistics, showPastStatistics, revenuesByCategories, percentageOfAttendance };