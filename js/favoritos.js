
let lista = document.getElementById("listaPeliculas");



function crearCarta (pelicula){

        let card = document.createElement("div");
        card.className = "col ";

        let cardBody = document.createElement("div");
        cardBody.className = "card border bg-dark";
        cardBody.style = style="width: 18rem;"

        let cardImage = document.createElement("img");
        cardImage.className = "card-img-top ";
        cardImage.src = pelicula.poster;


        let title = document.createElement("h5");
        title.className = "card-title text-white";
        title.innerText = pelicula.nombre;

        let codeIMBD = document.createElement("h5");
        codeIMBD.className = "card-title text-white";
        codeIMBD.innerText= pelicula.codigo;

        let rate = document.createElement("p");
        rate.className ="text-white"
        rate.innerText= pelicula.rate;

        let plataform = document.createElement("p");
        plataform.className ="text-white"
        plataform.innerText= pelicula.plataform;


        let borrar = document.createElement("button");
        borrar.className = "btn btn-danger border deleteMovie";
        borrar.innerText= "Eliminar";
        borrar.setAttribute("data-id", pelicula.codigo)


        let edit = document.createElement("button");
        edit.className = "btn btn-warning border mb-2 editMovie"
        edit.innerText= "Modificar"


        cardBody.appendChild(cardImage);
        cardBody.appendChild(title);
        cardBody.appendChild(codeIMBD);
        cardBody.appendChild(rate);
        cardBody.appendChild(plataform);
        cardBody.appendChild(edit);
        cardBody.appendChild(borrar);
        card.appendChild(cardBody);
        return card;
}


Object.keys(localStorage).forEach(function (key) {
    let pelicula = JSON.parse(localStorage.getItem(key));
    let card = crearCarta(pelicula)
    lista.appendChild(card)
})


lista.addEventListener("click", function(eventdata){
    let target = eventdata.target.className;
    if ((target.split(" ").indexOf("deleteMovie") >= 0 )){
        // console.log(eventdata.target.getAttribute("data-id"));
        //guardar id del get attribute
        let id = eventdata.target.getAttribute("data-id");
        localStorage.removeItem(id);
        alert("Pelicula borrada exitosamente");
        eventdata.target.closest(".card").remove();
    };

})







