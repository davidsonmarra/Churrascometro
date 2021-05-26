// Carne - 400g por pessoa + de 6 horas - 650g
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 goras - 1500ml
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

calcular = () => {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let horas = inputDuracao.value;

    let qtdTotalCarne;
    let qtdTotalCerveja;
    let qtdTotalBebida; 

    if (horas < 6) {
        qtdTotalCarne = 400 * adultos + (400/2 * criancas);
        qtdTotalCerveja = 1200 * adultos;
        qtdTotalBebida = 1000 * adultos + (1000/2 * criancas);
    }
    else { 
        qtdTotalCarne = 650 * adultos + (650/2 * criancas);
        qtdTotalCerveja = 2000 * adultos;
        qtdTotalBebida = 1500 * adultos + (1500/2 * criancas);
    }

    resultado.innerHTML = `<p><img src="./assets/carne.svg">${qtdTotalCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p><img src="./assets/cerveja.svg">${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja de Cerveja</p>`
    resultado.innerHTML += `<p><img src="./assets/refri.svg">${Math.ceil(qtdTotalBebida/2000)} Pet's de 2L de Bebidas</p>`
    // precismos do + antes do igual para que o novo conteúdo seja concatenado, e não apagado
}