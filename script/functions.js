function newCards(arrayData, container){
  let cardsFragment = document.createDocumentFragment();
  for (let i = 0; i < arrayData.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card', 'card-index');
    card.innerHTML = `
      <img src=${arrayData[i].image} class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title text-center">${arrayData[i].name}</h5>
        <h6 class="card-date text-center">${arrayData[i].date}</h6>
        <p class="card-text text-center">${arrayData[i].description}</p>
      </div>
      <div class="footer-card d-flex">
        <P>Precio $${arrayData[i].price}</P>
        <a href="./details.html" class="btn btn-see-more">Ver mas...</a>
      </div>
    `;
    cardsFragment.appendChild(card);
  }
  container.appendChild(cardsFragment);
};

function pastEvents(data, container) {
  let filteredEvents = data.events.filter(evento => Date.parse(evento.date) < Date.parse(data.currentDate));
  
  filteredEvents.forEach(evento => {
    newCards([evento], container);
  });
}

function upcommingEvents(data, container){
  let filteredEvents = data.events.filter(evento => Date.parse(evento.date) > Date.parse(data.currentDate));
  
  filteredEvents.forEach(evento => {
    newCards([evento], container);
  });
}

export {newCards, pastEvents, upcommingEvents};