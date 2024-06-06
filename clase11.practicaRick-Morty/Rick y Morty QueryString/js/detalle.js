console.log(location.search);

let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let id = queryStringObj.get("id")

console.log(id);

fetch(`https://rickandmortyapi.com/api/character/${id}`)

    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        
        let seccion = document.querySelector("section")

        seccion.innerHTML = `<h2>${data.name}</h2>
                             <img src="${data.image}">
                             <p>Species: ${data.species}</p>`
    })
    .catch(function(err){
        console.log(err);
    })