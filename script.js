// (21) ----------- calcular 5% de desconto --------------------//

function calculaDesconto (valor ) {
    const aplicarDesconto = valor * 0.05;
    const valorfinal = valor - aplicarDesconto;

    console.log(valorfinal);
    
}



// (19) ----------- par ou impar -----------------//

// function parOuImpar (numero){
//     if (numero % 2 === 0){
//         return 'par';
//     } else {
//         return 'impar';
//     }
// }


// (16) --------- funçao que recebe 2 parametros e soma -------- //


    // function soma (num1 , num2) {  
    //     if (num1 === '' || num2 === '') {
    //         return 0;
        
    //     }
    //     return num1 + num2;
    // }


// (15) --------- criar um botao para aparecer o elemento ----- //

// const divvazia = document.getElementById('resultado');
// const botao = document.getElementById('btnresult');
// const botaoLimpa = document.getElementById('btnlimpa');

// botao.addEventListener('click', () => {
//     const novoElemento = document.createElement('h1');
//     novoElemento.classList.add('lista');
//     novoElemento.textContent = 'eu fui criado pelo java script';

//     divvazia.appendChild(novoElemento);
// })

// botaoLimpa.addEventListener('click', () => {
//     document.getElementById('resultado').firstChild.remove(1)
// })



// lição 14 ----------------- criar um elemento com js ---------//

// const itemSelecionado = document.getElementById('resultado')

// const paragrafo = document.createElement('h1');
// paragrafo.textContent ='esse item foi criado pelo javaScript';

// itemSelecionado.appendChild(paragrafo);




// lição 12a ----------------- alterar background-color --------//

// const colorBlack = document.getElementById('backBlack');
// const colorBlue = document.getElementById('backBlue');

// const bodyOfPage = document.getElementById('corpo');

// colorBlack.addEventListener('click', () => {
//     bodyOfPage.style.backgroundColor = 'black'
// })

// colorBlue.addEventListener('click', () => {
//     bodyOfPage.style.backgroundColor = 'red';
// })


//lição 8/ 9 ----------------- pontuar cpf --------------------//

// const cpf = document.getElementById('cpf');
// const arrayCpf = cpf.value.split('');

// const pontuacao = '.';
// const traco = '-';

// arrayCpf.splice(3, 1)
// arrayCpf.splice(6, 1)
// arrayCpf.splice(9, 1)

// let result = arrayCpf.join('');

// alert(result)

// lição 7 ------------------ saudação ---------------------//
// const firstName = document.querySelector('#texto');
// const lastName = document.querySelector('#texto2');
// const buttonResult = document.querySelector('#limpar');

// buttonResult.addEventListener('click', () => {


//     alert('Olá '+ firstName.value + " " + lastName.value);

// })

// ------------------- lampada -----------------------//

// const lampada = document.querySelector('#objLampada');
// const acende = document.querySelector('#acenderLampada')
// const apaga = document.querySelector('#apagarLampada')

// acende.addEventListener('mouseover', () => {
//     lampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
// })

// apaga.addEventListener('mouseover', () => {
//     lampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true "

// })


// ---------------- CONTADOR DE LETRAS -------------//


// const checar = document.querySelector('#limpar');

// checar.addEventListener('click', () => {
//     const nome = document.querySelector('#texto').value;
//     const resultado = document.querySelector('#result');
//     resultado.value = nome.length;
// })


// --------------- CALCULADORA ---------------------//

// const num1 = document.querySelector('#num1');
// const num2 = document.querySelector('#num2');
// const resultado = document.querySelector('#result');
// const clear = document.querySelector('#limpar');

// const mais = document.querySelector('#mais');

// mais.addEventListener('click', somar)
// menos.addEventListener('click', subtrair)
// vezes.addEventListener('click', multiplicar)
// dividir.addEventListener('click', divisao)

// function somar() {
//     const valor = parseInt(num1.value);
//     const segundoValor = parseInt(num2.value);
//     resultado.value = valor + segundoValor;
// }

// function subtrair() {
//     const valor = parseInt(num1.value);
//     const segundoValor = parseInt(num2.value);
//     resultado.value = valor - segundoValor;
// }

// function multiplicar() {
//     const valor = parseInt(num1.value);
//     const segundoValor = parseInt(num2.value);
//     resultado.value = valor * segundoValor;
// }

// function divisao() {
//     const valor = parseInt(num1.value);
//     const segundoValor = parseInt(num2.value);
//     resultado.value = valor / segundoValor;
// }

// clear.addEventListener('click', limpar)

// function limpar() {
//     num1.value = "";
//     num2.value = "";
//     resultado.value = "";

// }