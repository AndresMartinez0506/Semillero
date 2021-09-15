const keys = Array.from(document.querySelectorAll('.key'));
console.log(this);
console.log(keys);
window.addEventListener('keydown', playSound);

function playSound(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);

    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(key);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
    e.target.classList.remove('playing')
}