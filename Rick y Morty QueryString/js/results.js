// Dentro del archivo results.js captura el elemento “search-results”.

let searchResultsElement = document.querySelector(".search-results") 

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

//primero creá un objeto literal. luego obtené la información del atributo “q” con el método .get(). No olvides de ir guardando la información en variables.

let info = queryStringObj.get('q')
    console.log(info);

// hacer un pedido fetch a la api de Rick And Morty al endpoint

fetch(`https://rickandmortyapi.com/api/character/?name=${info}`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);

        for (i=0; i<data.results.length; i++){
            let datos = data.results[i];
            searchResultsElement.innerHTML = ` <article>
                                      <img src="${datos.image}" alt="${datos.name}">
                                      <h2>Name: ${datos.name}</h2>
                                      <h2>Status: ${datos.status}</h2>
                                   </article> `
        }
    })
    .catch(function(err){
        console.log(err);
    });


