function singleElement(tipo){
    let name = document.createElement(tipo);
    return name;
  }
  
  function input(type, valorT, clase, valor, value, valorV){
    let name = document.createElement('input');
    name.setAttribute(type, valorT);
    name.setAttribute(clase, valor);
    name.setAttribute(value, valorV);
    return name;
  }

  
  function text(tipo, texto){
    let name = document.createElement(tipo);
    name.textContent = texto;
    return name;
  }
  
  function createDiv(valor){
    let name = document.createElement('div');
    name.setAttribute('class', valor);
    return name;
  }
  

let main = singleElement('main');
let section = singleElement('section');
let aside = singleElement('aside');
let countDown = text('p','5:00');
let containerButtons = createDiv('containerButtons');
let firstCountDown = input('type', 'button', 'class', 'buttons buttonType1', 'value', '1:00')
let secondCountDown = input('type', 'button', 'class', 'buttons buttonType2', 'value', '5:00');
let thirdCountDown = input('type', 'button', 'class', 'buttons buttonType1', 'value', '15:00');
let fourthCountDown = input('type', 'button', 'class', 'buttons buttonType2', 'value', '30:00');
let customCountDown = input('type', 'text', 'class', 'buttons buttonType1 custom', 'placeholder', 'Custom');
let startButton = input('type', 'button', 'class', 'startButton', 'value', 'GO!' )


document.body.append(main);
main.append(section, aside);
section.append(countDown, startButton);
aside.append(containerButtons);
containerButtons.append(firstCountDown, secondCountDown,thirdCountDown, fourthCountDown, customCountDown)


const buttons = document.querySelectorAll('.buttons');
let startingMinutes;
let time;
let countDownTimer;

for(let i=0; i<buttons.length-1; i++){
  buttons[i].addEventListener('click', ()=>{
    startingMinutes = buttons[i].value;
    countDown.innerHTML = startingMinutes;
    numero = parseInt(startingMinutes)*60;
    console.log(numero);   
  });
  
};

function timer(numero){
  clearInterval(countDownTimer);
  countDownTimer = setInterval(function(){

    const minutes = Math.floor(numero/60);
    let seconds = numero % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDown.innerHTML = `${minutes}: ${seconds}`;
    numero--;

  }, 1000);
    
}

startButton.addEventListener('click', ()=>{
  timer(numero);  
})