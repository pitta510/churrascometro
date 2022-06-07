// carne - 400g p/pessoa +de 6h 650g
// cerveja - 1200ml p/pessoa + de 6h  2000ml 
// refrigerante/agua 1000ml p/pessoa + de 6 horas 1500ml 
// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");



function calcular(){
    if (inputDuracao.value < 6){



    var cerveja = inputAdultos.value * 1200 + 600 * inputCriancas.value

    var carne = inputAdultos.value * 400 + 200 * inputCriancas.value

    var refri = inputAdultos.value * 1000 + 500 * inputCriancas.value

    resultado.innerHTML = [cerveja,"ml de cerveja </br>"]
    resultado.innerHTML += [carne,"g de carne </br>"]
    resultado.innerHTML += [refri,"ml de agua/refri"]
        }
           
 else {
 

    var cerveja = inputAdultos.value *  2000 + 1000 * inputCriancas.value

    var carne = inputAdultos.value * 650 + 325 * inputCriancas.value
    
    var refri = inputAdultos.value * 1500 + 750 * inputCriancas.value
    
    resultado.innerHTML = [cerveja,"ml de cerveja </br>"]
    resultado.innerHTML += [carne,"g de carne </br>"]
    resultado.innerHTML += [refri,"ml de agua/refri"]
} 
} 






