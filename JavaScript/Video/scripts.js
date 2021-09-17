const player = document.querySelector('.player');
const video =player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('.player__slider');
const skipButton = player.querySelectorAll('[data-skip]')

//funciones

function handVolumeRange() {
    video.volume = this
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
    debugger;
}

//eventos

video.addEventListener('click',() => {
    video.paused ? video.play(): video.pause();
});

video.addEventListener('play', ()=> {
    toggle.textContent = '' 
});

video.addEventListener('pause', () => {
    toggle.textContent = '►'
});

sliders.forEach()
volume.addEventListener('click', handVolumeRange);
volume.addEventListener('mousemove', handVolumeRange);

skipButton.forEach(button => button.addEventListener('click', skip));