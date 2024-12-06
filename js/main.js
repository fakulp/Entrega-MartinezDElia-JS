let idActual = prompt("ingrese un ID ");
var stop = false;


while (!stop){
    nota=0;
    total=0;
    promedio=0;

        for (let i=1; i <= 5; i++){
            let nota = parseFloat(prompt("Nota "));
            if ((isNaN(nota)) || (nota <= 1)) {
                nota = 1;
            };
            total= total + nota;
        }

    promedio =  parseFloat(total / 5);
    alert(promedio);

    let idActual = prompt("Nuevo un ID ");
    if ((idActual == null) ) {
    stop = true
    };

}
