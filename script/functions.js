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

function pastEvents(list){
  let pastEvent = list.events.filter((element) => Date.parse(element.date) < Date.parse(list.currentDate));
  return pastEvent;
};

function upcommingEvents(list){
  let futureEvents = list.events.filter((element) => Date.parse(element.date) > Date.parse(list.currentDate));
  return futureEvents;
};

function showCheckbox(list){
  let checkboxes = "";
  list.forEach((category) => { //reemplazar data por list
    checkboxes += 
    `<p><input type="checkbox" id="${category}" name="position1" value="${category}">
    <label for="${category}">${category}</label>
    </p>`
  });
  checkboxSection.innerHTML = checkboxes;
}

function categoriesList(list){
  let categories = [];
  list.events.forEach((element) => {
    categories.push(element.category.toLowerCase());
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

/*
function cardDetails(evento, container){
  let card = document.createElement('div')
  card.classList = 'card card-details'
  card.innerHTML = 
      `<div class="row g-0">
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
              <p class="card-text">Capacity: ${evento.capacity}</p>
              <p class="card-text">Assistance: ${evento.assistance}</p>
              <p class="card-text">Price: $${evento.price}</p>
            </div>
          </div>
        </div>
      </div>`
  container.appendChild(card);
};*/

export {showCards, upcommingEvents, pastEvents, showCheckbox, categoriesList, filterBySearch, filterByCheckbox, combinedFilter};