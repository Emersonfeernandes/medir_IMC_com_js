function start () {
    var buttonCalculaIMC = document.querySelector('#button-calcular-imc');

    buttonCalculaIMC.addEventListener('click', handleButtonClick);

    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');

    inputPeso.addEventListener('input', handleButtonClick)
    inputAltura.addEventListener('input', handleButtonClick)

    handleButtonClick()
}

function calcularIMC (peso, altura) {
    return peso / (altura * altura);
}


function handleButtonClick () {
    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');
    var imcResult = document.querySelector('#imc-result');

    var peso = Number(inputPeso.value);
    var altura = Number(inputAltura.value);

    var imc = calcularIMC(peso, altura);
    var imcFormatado = imc.toFixed(2).replace('.', ',')

    imcResult.textContent = imcFormatado;
}

start();