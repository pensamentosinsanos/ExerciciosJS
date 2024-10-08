
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click",() => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let soma = parseInt(numero1) + parseInt(numero2);
    console.log(soma);
    document.getElementById("resultado").innerHTML = "Resultado = " +soma;
});

const btnSubtrair = document.getElementById("subtrair");
btnSubtrair.addEventListener("click",() => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let subtrair = parseInt(numero1) - parseInt(numero2);
    console.log(subtrair);
    document.getElementById("resultado").innerHTML = "Resultado = " +subtrair;
});

const btnMultiplicar = document.getElementById("multiplicar");
btnMultiplicar.addEventListener("click",() => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let multiplicar = parseInt(numero1) * parseInt(numero2);
    console.log(multiplicar);
    document.getElementById("resultado").innerHTML = "Resultado = " +multiplicar;
});

const btnDividir = document.getElementById("dividir");
btnDividir.addEventListener("click",() => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let dividir = parseInt(numero1) / parseInt(numero2);
    console.log(dividir);
    document.getElementById("resultado").innerHTML = "Resultado = " +dividir;
});

