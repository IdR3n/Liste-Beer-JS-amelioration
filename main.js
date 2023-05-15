async function getBeers() {
    try {
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      const beerList = response.data
      const colElement = document.getElementById('beerList');

      for (let beer of beerList) {
        const divEl = document.createElement('div')
        divEl.innerHTML =`
        <div class="card" style="width: 18rem;">
        <div class="card-body" id="beerList">
        <img src="${beer.image_url}" class="tryingsmthng"></img>
          <h5 class="card-title">${beer.tagline}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${beer.first_brewed}</h6>
          <p class="card-text">${beer.description}</p>
          <a href="#" class="card-link">Card link</a>
        </div>
      </div>`
    
      divEl.classList.add('col')
      divEl.addEventListener('click', function(){
        alert(beer.date)
      })
      colElement.appendChild(divEl)
      }

    } catch (e) {
      console.error(e);
    }
  }
 
  

  getBeers();