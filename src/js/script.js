// puxando elementos do html para a variável
const plusButton = document.getElementById('plus');
const value = document.getElementById('init-count');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('btn-reset');

// setando valor inicial do contador = 0
// iniciando o invervalId (intervalo de tempo) vazio
let count = 0;
let intervalId = '';

// função para atualizar o valor no DOM do HTML 
function updateValue(){
    value.textContent = count;
    // console.log(count) para homologar se o contador está atualizando
    // console.log(count);
}

// um evento no plusButton com o método 'mousedown' 
plusButton.addEventListener('mousedown', ()=> {
    // intervalId vai receber o setInterval onde vai incrementar a cada intervalo
    intervalId = setInterval(() =>{
        count++;
        updateValue() // depois de incrementar, atualizar o valor no DOM
    }, 100);
})

// um evento no minusButton com o método 'mousedown' 
minusButton.addEventListener('mousedown', () => {
    // intervalId vai receber o setInterval para decrementar a cada intervalo
    intervalId = setInterval(() =>{
        count--;
        updateValue() // depois de incrementar, atualizar o valor no DOM
    
    }, 100);
})

// resetButton com método 'click' para resetar 
resetButton.addEventListener('click',() =>{
    count = 0; // toda vez que clicar, vai setar o contador para 0 (zero)
    updateValue()
})

//evento de mouseup e dessa vez vai interromper o intervalo de tempo na página toda para não incrementar e decrementar
document.addEventListener('mouseup', () => clearInterval(intervalId));