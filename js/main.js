
var stop = false;
var id = 1;
var vectorAlumno = [0];/*Guarda alumnos*/


const Estudiante = function (){
    this.nombre = "";
    this.idEstudiante = 0;
    this.notas = [0];
    this.promedioEstudiante = 0;
}




function CrearAlumno (id) {
    let nombre = prompt("ingrese un Nombre ");
    let nombreUpper = nombre.toLocaleUpperCase();



    if (      (nombreUpper != null ) && (nombreUpper != "")      ){
        let estudiante = new Estudiante (id);
        estudiante.idEstudiante = id;
        estudiante.nombre = nombreUpper;
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
            estudiante.notas.push = nota;
        };
}

function calcularPromedios (estudiante) {
    suma = 0;
    estudiante.notas.array.forEach(element => {
        suma = suma +  element; 
    });
    estudiante.promedioEstudiante = suma / MAX_NOTAS;
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




