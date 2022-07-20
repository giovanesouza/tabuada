
function tabuada() {

    let numero = parseInt(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");
    let tabuada = "";

    for (let i = 1; i <= 10; i++) {

        tabuada += numero + " x " + i + " = " + numero * i + "<br>";

        resultado.innerHTML = tabuada;

    }

}




