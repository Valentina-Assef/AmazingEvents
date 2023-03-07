import data from "./amazing.js"

function pastEvents(array, date){
    for(const evento of data.events) {
        if (evento.date < data.currentDate) {
          const card = `<div class="card card-index">
            <img src=${evento.image} class="card-img-top" alt=""/>
              <div class="card-body">
                <h5 class="card-title text-center">${evento.name}</h5>
                <h6 class="card-date text-center">${evento.date}</h6>
                <p class="card-text text-center">${evento.description}</p>
              </div>
              <div class="footer-card d-flex">
                <P>Precio $${evento.price}</P>
                <a href="./details.html" class="btn btn-see-more">Ver mas...</a>
              </div>
            </div>`
          const cardSection = document.getElementById("cardSection");
          cardSection.innerHTML += card;
        }
    }
}

pastEvents(data.events, data.currentDate);
    