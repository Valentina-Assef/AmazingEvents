function allCards(data, container){
  if(data.length == 0){
    container.innerHTML = `<h2 class="text-white">No se encontraron coincidencias</h2>`;
    return;
  }
  let cardsFragment = document.createDocumentFragment();
    for (let evento of data){
    let card = document.createElement('div');
    card.classList.add('card', 'card-index');
    card.innerHTML = 
    `<img src=${evento.image} class="card-img-top" alt=${evento.name}/>
      <div class="card-body">
        <h5 class="card-title text-center">${evento.name}</h5>
        <h6 class="card-date text-center">${evento.date}</h6>
        <p class="card-text text-center">${evento.description}</p>
      </div>
      <div class="footer-card d-flex">
        <P>Precio $${evento.price}</P>
        <a href="./details.html?id=${evento._id}" class="btn btn-see-more">Ver mas...</a>
      </div>`;
    cardsFragment.appendChild(card);
  }
  container.appendChild(cardsFragment);
};

function showCards(data){
  if(data.length == 0){
      container.innerHTML = `<h2 class="text-white">No se encontraron coincidencias</h2>`;
      return;
    }
  let cards = ''
  data.events.forEach(evento => {
      cards += `<div class="card card-index">
      <img src=${evento.image} class="card-img-top" alt=${evento.name}/>
      <div class="card-body">
        <h5 class="card-title text-center">${evento.name}</h5>
        <h6 class="card-date text-center">${evento.date}</h6>
        <p class="card-text text-center">${evento.description}</p>
      </div>
      <div class="footer-card d-flex">
        <P>Precio $${evento.price}</P>
        <a href="./details.html?id=${evento._id}" class="btn btn-see-more">Ver mas...</a>
      </div>
      </div>`
  })
  container.innerHTML = cards;
}

function pastEvents(data, container) {
  let filteredEvents = data.events.filter(evento => Date.parse(evento.date) < Date.parse(data.currentDate));
  
  filteredEvents.forEach(evento => {
    allCards([evento], container);  
  });
  return filteredEvents;
};

function upcommingEvents(data, container){
  let filteredEvents = data.events.filter(evento => Date.parse(evento.date) > Date.parse(data.currentDate));
  
  filteredEvents.forEach(evento => {
    allCards([evento], container);
  });
};

function newCheckbox(data, containerCheckbox){
  let arrayCategories = data.events.map(evento => evento.category)
  let setCategories = new Set(arrayCategories)
  let arrayChecks = Array.from(setCategories)
  let checkboxes = ''
  arrayChecks.forEach(category => {
    checkboxes += 
    `<p><input type="checkbox" id="${category}" name="position1" value="${category}">
    <label for="${category}">${category}</label>
    </p>`
  })
  containerCheckbox.innerHTML = checkboxes
}

function filtrarPorSearch(data, texto){ //Necesito que devuelva un return para trabajar con esa info
  let arrayFiltrado = data.events.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()));
  return arrayFiltrado;
}

function filtrarPorCheckbox(data){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  let arrayChecks = Array.from(checkboxes);
  let arrayChequeados = arrayChecks.filter(check => check.checked)
  if (arrayChequeados.length === 0) {
      return data.events;
  }
  let arrayCategories = arrayChequeados.map(checkChecked => checkChecked.value)
  let arrayFiltradoChecks = data.events.filter(evento => arrayCategories.includes(evento.category))
  if(arrayFiltradoChecks){
      return arrayFiltradoChecks;
  }
  return data;
}

function combinedFilter(){
  let firstFilter = filtrarPorCheckbox(data)
  let secondFilter = filtrarPorSearch(firstFilter, input.value)
  showCards (secondFilter, container)
}

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
};

export {allCards, showCards, pastEvents, upcommingEvents, newCheckbox, filtrarPorSearch, filtrarPorCheckbox, combinedFilter, cardDetails};