idActual = prompt("ingrese un ID ");
var stop = false;


const estudiante = function (idEstudiante, promedioEstudiante){
    this.idEstudiante = idEstudiante;
    this.promedioEstudiante = promedioEstudiante;
}


let vectorAlumno = [0]


function agregarAlumno () {
    let idEstudiante = idEstudiante;
    let promedio = promedio;

    let estudiante = new estudiante (idEstudiante, promedioEstudiante);
    vectorAlumno.push(estudiante)
}





function sumaDeNotas () {
    for (let i=1; i <= 5; i++){
        let nota = parseFloat(prompt("Nota "));
        if ((isNaN(nota)) || (nota <= 1)) {
            nota = 1;
        };
        total= total + nota;
    }
}



while (!stop){
    nota=0;
    total=0;
    promedioActual=0;

    sumaDeNotas (nota, total);

    promedioActual =  parseFloat(total / 5);
    alert(promedio);


    agregarAlumno(idActual, promedio);





    let idActual = prompt("Nuevo un ID ");
    if ((idActual == null) || (idActual =="")) {
    stop = true
    };


}




