function allCards(arrayData, container){
  let cardsFragment = document.createDocumentFragment();
    for (let evento of arrayData){
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

export {allCards, pastEvents, upcommingEvents, cardDetails};