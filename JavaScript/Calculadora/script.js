function singleElement(tipo){
    let name = document.createElement(tipo);
    return name;
  }
  
  function anyElement(tipo, atributo, valor){
    let name = document.createElement(tipo);
    name.setAttribute(atributo, valor);
    return name;
  }
  
  function text(tipo, texto){
    let name = document.createElement(tipo);
    name.textContent = texto;
    return name;
  }
  
  function createDiv(valor){
    let name = document.createElement('div');
    name.setAttribute('id', valor);
    return name;
  }
  
  function input(atributo1, valor1, atributo2, valor2, atributo3, valor3, atributo4, valor4){
    let name = document.createElement('input');
    name.setAttribute(atributo1, valor1);
    name.setAttribute(atributo2, valor2);
    name.setAttribute(atributo3, valor3);
    name.setAttribute(atributo4, valor4);
    return name;
  }
  
  function textHtml(texto, id){
    let name = document.createElement('p');
    name.innerHTML = texto;
    name.setAttribute('id', id);
    return name;
  }
  
  
  let main = singleElement('main');
  let section = singleElement('section');
  let aside = singleElement('aside');
  let billInput = input('class','inputMain','id', 'inputBill', 'type', 'number', 'placeholder', '0');
  let divTip = createDiv('divTip');
  let divTopP = createDiv('divTopP');
  let divButtomP = createDiv('divButtomP');
  let divNumberP = input('class','inputMain', 'type', 'number', 'id', 'inputNumberP', 'placeholder', '0');
  let buton5P = input('type', 'button', 'id', 'btn5P', 'value', '5%', 'class', 'inputs'); 
  let buton10P = input('type', 'button', 'id', 'btn10P', 'value', '10%', 'class', 'inputs'); 
  let buton15P = input('type', 'button', 'id', 'btn15P', 'value', '15%', 'class', 'inputs'); 
  let buton25P = input('type', 'button', 'id', 'btn25P', 'value', '25%', 'class', 'inputs'); 
  let buton50P = input('type', 'button', 'id', 'btn50P', 'value', '50%', 'class', 'inputs'); 
  let butonCustomP = input('type', 'number', 'id', 'custom', 'placeholder', 'Custom', 'class', 'inputs'); 
  let divTopAside = createDiv('divTopAside');
  let divBottomAside = createDiv('divBottomAside');
  let btnCalcular = anyElement('input', 'id', 'btnCalcular');
  btnCalcular.setAttribute('value', 'RESET');
  btnCalcular.setAttribute('type', 'button');
  let tipAmount = textHtml('<p style = "color: gray;"><strong style = "color: #fff;">Tip Amount</strong><br> / person</p>', 'tipMainText');
  let total = textHtml('<p style = "color: gray;"><strong style = "color: #fff;">Total</strong><br> / person</p>', 'plpMainText');
  let finalTip = text('p', '$0.00');
  finalTip.setAttribute('class', 'Tip');
  let finalPerson = text('p','$0.00');
  finalPerson.setAttribute('class', 'Tip');
  
  document.body.append(main);
  main.append(section, aside);
  section.append(billInput, divTip);
  divTip.append(divTopP, divButtomP);
  divTopP.append(buton5P, buton10P, buton15P );
  divButtomP.append(buton25P, buton50P, butonCustomP);
  section.append(divNumberP);
  aside.append(divTopAside, divBottomAside, btnCalcular);
  divTopAside.append(tipAmount,finalTip);
  divBottomAside.append(total, finalPerson);
  
  
  const buttons = document.querySelectorAll('input[type="button"].inputs');
  const numberPeople = document.getElementById('inputNumberP');
  
  let tipValue;
  let amount;
  let totalPeople;
  let roundNumber;
  
  for(let i=0; i<buttons.length; i++){  
      buttons[i].addEventListener('click', ()=>{        
        let percentage = buttons[i].value.replace('%', '');
        CalcularTip(percentage);
    })
    
  }
  
  function CalcularTip(tipPercentage){  
    
    let billValue = billInput.value.trim();
    let peopleValue = numberPeople.value.trim();
  
    if(billValue === '' && peopleValue === ''){
      //messagge Error
    }else{
      tipValue = billValue*tipPercentage/100;
      finalTip.innerHTML = "$" + tipValue;
      amount = parseInt(tipValue)+parseInt(billValue);
      totalPeople = amount/peopleValue;  
      finalPerson.innerHTML = "$" + totalPeople;
    }
  
  }