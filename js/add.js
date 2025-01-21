let form = document.getElementById("formulario");

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
    window.location.href = "favoritos.html";
    form.reset();
}


form.addEventListener("submit", peliculaGuardar);


