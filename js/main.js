const iva = 1.21;

function calculo (importe) {
    if (parseFloat(importe)){
        let resultado = importe*iva;
        alert("el imporet mas iva "+ resultado)
    }
}

function precioFinal (){
    let precio = parseFloat (prompt("ingrese valor del producto: "))
    calculo(precio)
}