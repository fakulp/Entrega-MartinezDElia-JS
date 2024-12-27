const MAX_NOTAS = 5;
var stop = false;
var id = 1;
var vectorAlumno = [];/*Guarda alumnos*/


const Estudiante = function (){
    this.nombre = "";
    this.idEstudiante = 0;
    this.notas = [];
    this.promedioEstudiante = 0;
}




function CrearAlumno (id) {
    let nombre = prompt("ingrese un Nombre ");

    if (      (nombre != null ) && (nombre != "")      ){
        let estudiante = new Estudiante (id);
        estudiante.idEstudiante = id;
        estudiante.nombre = nombre.toLocaleUpperCase();;
        vectorAlumno.push(estudiante)
        return estudiante;
    }
    return null;
}

function cargarNotas (estudiante){
    for (let i=1; i <= MAX_NOTAS; i++){
        let nota = parseFloat(prompt("Nota "));
            if ((isNaN(nota)) || (nota <= 1)){
            nota = 1;
            };
            estudiante.notas.push(nota);
        };
}

function calcularPromedios (estudiante) {
    suma = 0;
    estudiante.notas.forEach(element => {
        suma = suma +  element; 
    });
    estudiante.promedioEstudiante = suma / MAX_NOTAS;
}

function listar() {
    console.log("Alumnos cargados")
    vectorAlumno.forEach((alumno) => console.log(alumno));
}

function eliminar(id) {
    // implementar ...
    delete(vectorAlumno[id]);
    console.log(vectorAlumno);

    /*Alternativa sin undefined 
    
    corrimiento= id - 1;
    meses.splicer (id, corrimiento);
    console.log(vectorAlumno);
    
    */

}

function leer(id) {
    // implementar
    console.log(vectorAlumno.includes(id));
    console.log( vectorAlumno[id].id + "Llamado " + vectorAlumno[id].nombre + " y su promedio es de " + vectorAlumno[id].promedioEstudiante);

}


while (!stop){
let estudiante = CrearAlumno (id);

if (estudiante != null){
    cargarNotas(estudiante);
    calcularPromedios(estudiante);
    id = id + 1; 
} else { 
    stop = true}

}

listar()




