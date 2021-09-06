const inputs = document.querySelectorAll('.controls input');

function updateValues(){
    let pixels = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+pixels);
}

inputs.forEach(input => {input.addEventListener('change', updateValues);});


// const inputSpacing = document.querySelector("#spacing");
// inputSpacing.addEventListener('change', function(){
//     document.documentElement.style.setProperty(`--${this.name}`,this.value+this.dataset.sizing)
// })

// const inputBlur = document.querySelector("#blur");
// inputBlur.addEventListener('change',function(){
//     document.documentElement.style.setProperty(`--${this.name}`,this.value+this.dataset.sizing)
// })