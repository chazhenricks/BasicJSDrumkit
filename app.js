console.log("HEYMAN");


window.addEventListener('keydown', playSound); //listens for key presses



function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //if keycode matches our data-key save it
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //same for audio but stores the div
    if(!audio) return; //stop function altogether

    audio.currentTime = 0; //resets current time so you can play multiple samples at once
    audio.play();

    key.classList.add('playing');//adds class to key pressed to give visual feedback
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip it if its not a transform
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));//removes the transformed class after the transition has ended. 

