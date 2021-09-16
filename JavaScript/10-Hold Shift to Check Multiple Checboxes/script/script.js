const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

let ultimoCheck;
function controladorCheck(event){

    if(event.shiftKey){
    console.log(this);
    let estaEntre = false;
    checkboxes.forEach(check => {
        console.log(check);
        if(check === this || check === ultimoCheck){
            console.log('está entre' + estaEntre)
            estaEntre = !estaEntre;
        }

        if(estaEntre){
            check.checked = true;
        }
    })
    
    }
    ultimoCheck = this;
}

checkboxes.forEach(check => {
    check.addEventListener('click', controladorCheck)

    });