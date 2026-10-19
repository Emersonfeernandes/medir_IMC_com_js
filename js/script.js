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

function loadIMG (imc){
    const imcResult = document.querySelector('#imc-img');

    // Carrega o primeiro frame da spritesheet
    imcResult.style.backgroundImage = 'url("asserts/IMC.png")';
    imcResult.style.backgroundRepeat = 'no-repeat';

    if (imc < 18.5){
        imcResult.style.backgroundPosition = '0 0';
        imcResult.style.width = '362px';
        imcResult.style.height = '724px';
    } else if (imc >= 18.5 && imc <= 24.9){
        imcResult.style.backgroundPosition = '-362px 0';
        imcResult.style.width = '362px';
        imcResult.style.height = '724px';
    } else if (imc >= 25.0 && imc <= 29.9){
        imcResult.style.backgroundPosition = '-724px 0';
        imcResult.style.width = '362px';
        imcResult.style.height = '724px';
    } else if (imc >= 30.0 && imc <= 34.9){
        imcResult.style.backgroundPosition = '-1086px 0';
        imcResult.style.width = '362px';
        imcResult.style.height = '724px';
    } else if (imc >= 35.0 && imc <= 39.9){
        imcResult.style.backgroundPosition = '-1448px 0';
        imcResult.style.width = '362px';
        imcResult.style.height = '724px';
    } else if (imc >= 40.0){
        imcResult.style.backgroundPosition = '-1810px 0';
        imcResult.style.width = '362px';
        imcResult.style.height = '724px';
    }
}



function loadText(imc) {
    const imcFormatado = imc.toFixed(2).replace('.', ',');

    let classificacao;
    let classe;

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classe = 'abaixo';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
        classe = 'normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
        classe = 'sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade Grau I';
        classe = 'obesidade';
    } else if (imc < 40) {
        classificacao = 'Obesidade Grau II';
        classe = 'obesidade';
    } else {
        classificacao = 'Obesidade Grau III';
        classe = 'obesidade';
    }

    var imcResult = document.querySelector('#imc-result');
    imcResult.textContent = imcFormatado;

    const status = document.getElementById('result-status');
    status.textContent = classificacao;
    status.className = `result-status ${classe}`;
}



function handleButtonClick () {
    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');
    
    var peso = Number(inputPeso.value);
    var altura = Number(inputAltura.value);

    var imc = calcularIMC(peso, altura);
    loadIMG(imc);
    loadText(imc);

}

start();