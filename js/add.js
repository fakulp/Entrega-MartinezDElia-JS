let form = document.getElementById("formulario");
let url = "https://api.themoviedb.org/3/movie/" + localStorage.getItem("movie");
const apikey= "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODZmMjU4ZTI1MzY4N2IzYmIyMmQ4MDM2NjgxNmU2MiIsIm5iZiI6MTQ3OTI0MTE1Ny45NzMsInN1YiI6IjU4MmI2ZGM1OTI1MTQxN2IxODA0NzYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JYLp9hEwsgV7m0WTMx43PA7lxudab_Nwzj1CN9A0jOM"
const options = {method: 'GET', headers: {accept: 'application/json', Authorization: apikey}};
const urlImage = "https://image.tmdb.org/t/p/w500"




fetch (url, options)
    .then(response => response.json())
    .then ( data => {

        let movieForm = form.querySelector("input[name=nombreDePelicula]");
        movieForm.readOnly= true;
        movieForm.value = data.title;

        let id = form.querySelector("input[name=codigoIMDB]");
        id.readOnly= true;
        id.value = data.id;
        
        let poster = form.querySelector("input[name=posterUrl]");
        poster.readOnly=true;
        poster.value = urlImage + data.poster_path;

        let moviePoster= form.querySelector("#moviePoster");
        moviePoster.src = urlImage + data.poster_path;
    }

)


function peliculaGuardar (evento) {
    evento.preventDefault();
    const data = new FormData(evento.target);
    
    let pelicula = {
        poster: data.get("posterUrl"),
        nombre: data.get("nombreDePelicula"),
        codigo: data.get("codigoIMDB"),
        rate: data.get("puntajes"),
        plataform: data.get("plataformas")
    };



    let jsonPeliculas = JSON.stringify(pelicula);
    console.log(jsonPeliculas)
    localStorage.setItem(pelicula.codigo, jsonPeliculas);
    alert("Se guardo la pelicula con exito");
    localStorage.removeItem("movie");
    form.reset();
    window.location.href = "favoritos.html";

}



form.addEventListener("submit", peliculaGuardar);


