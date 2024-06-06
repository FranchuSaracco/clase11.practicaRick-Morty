

fetch("https://rickandmortyapi.com/api/character")

   .then (function(res){
   return res.json()
   })
   .then(function(data){
    console.log(data);

    let characterList = document.querySelector(".characterList") 
    let personajesRecorridos = ''

    for (let i=0; i<data.results.length; i++){
        personajesRecorridos = personajesRecorridos + `<article class="characters">
                                                       <a href="./detalle.html?id=${data.results[i].id}">
                                                       <img src=${data.results[i].image} >
                                                       </a>
                                                       <h2>Name: ${data.results[i].name}</h2>
                                                       <h2>Status: ${data.results[i].status}</h2>
                                                       </article>`
    }
    characterList.innerHTML = personajesRecorridos
   
   })

   .catch(function(err){
       console.log(err);
   })

 
 