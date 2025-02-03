let url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
let lista = document.getElementById("listaPeliculasIndex");
const apikey= "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODZmMjU4ZTI1MzY4N2IzYmIyMmQ4MDM2NjgxNmU2MiIsIm5iZiI6MTQ3OTI0MTE1Ny45NzMsInN1YiI6IjU4MmI2ZGM1OTI1MTQxN2IxODA0NzYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JYLp9hEwsgV7m0WTMx43PA7lxudab_Nwzj1CN9A0jOM"
const options = {method: 'GET', headers: {accept: 'application/json', Authorization: apikey}};
const urlImage = "https://image.tmdb.org/t/p/w500"



function crearCarta (movie){

    let card = document.createElement("div");
    card.className = "col ";

    let cardBody = document.createElement("div");
    cardBody.className = "card border bg-dark";
    cardBody.style = style="width: 18rem;"

    let cardImage = document.createElement("img");
    cardImage.className = "card-img-top ";
    cardImage.src =  urlImage + movie.poster_path;


    let title = document.createElement("h5");
    title.className = "card-title text-white";
    title.innerText = movie.original_title;

    let codeIMBD = document.createElement("h5");
    codeIMBD.className = "card-title text-white";
    codeIMBD.innerText= movie.id;



    let plot = document.createElement("p");
    plot.className ="text-white"
    plot.innerText= movie.overview;


    let add = document.createElement("button");
    add.className = "btn btn-warning border mb-2 addMovie";
    add.innerText= "Agregar a favoritos";
    add.dataset.id =  movie.id;



    
    cardBody.appendChild(cardImage);
    cardBody.appendChild(title);
    cardBody.appendChild(codeIMBD);
    cardBody.appendChild(plot);
    cardBody.appendChild(add)
    card.appendChild(cardBody);
    return card;
}





fetch(url,options)
    .then(response => response.json())
    .then ( data => {
        const movies = data.results;

        movies.forEach((movie) => {
            console.log(movie);
            let cardMovie = crearCarta(movie);
            lista.appendChild(cardMovie);
        })
    })//fetch (url)


lista.addEventListener("click", function(eventdata){
    let target = eventdata.target;
    console.log(target)
    if ((target.className.split(" ").indexOf("addMovie") >= 0)){
        let id = target.dataset.id;
        localStorage.setItem("movie", id);
        window.location.href = "pages/agregar.html"
        //console.log("esto tiene que add")
    }
})
