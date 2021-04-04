//constants

let face = document.getElementsByClassName('face');

let counter = -1;

const letters = document.getElementsByClassName('letters');

//detect keystrokes

window.addEventListener('keydown', function(event){
    let a = 0;
    if (counter >= 24 && counter < 49){
        a = 1;
    } else if (counter >= 49 && counter < 74){
        a = 2;
    } else if (counter >= 74 && counter < 99){
        a = 3;
    } else if (counter >= 99 && counter < 124){
        a = 4;
    } else if (counter >= 124 && counter < 149){
        a = 5;
    }
    if (event.key === 'Backspace'){
        letters[counter].remove();
        counter--;
    } else if (event.key === 'CapsLock' 
    || event.key === 'Enter'
    || event.key === 'Shift' 
    || event.key === 'Control' 
    || event.key === 'Alt'
    || event.key === 'Tab' 
    || event.key === 'Delete' 
    || event.key === 'End' 
    || event.key === 'PageDown' 
    || event.key === 'Insert' 
    || event.key === 'Home' 
    || event.key === 'PageUp' 
    || event.key === 'Meta' 
    || event.key === 'ArrowUp' 
    || event.key === 'ArrowDown' 
    || event.key === 'ArrowLeft' 
    || event.key === 'ArrowRight' 
    || event.key === 'ContextMenu' 
    || event.key === 'Escape'
    || event.key === 'ScrollLock'
    || event.key === 'Pause'
    || event.key === 'F1'
    || event.key === 'F2'
    || event.key === 'F3'
    || event.key === 'F4'
    || event.key === 'F5'
    || event.key === 'F6'
    || event.key === 'F7'
    || event.key === 'F8'
    || event.key === 'F9'
    || event.key === 'F10'
    || event.key === 'F11'
    || event.key === 'F12'){
    } else {
        face[a].innerHTML +=
        `<p class='letters drop'> ${event.key}
        </p>`
        counter++;
        letters[counter - 1].classList.remove('drop');
    }
});

// controls

//wheel
const wheel = document.getElementById('wheel-button');

wheel.addEventListener('click', (event)=>{
    for (i = 0; i < face.length; i++){
        face[i].classList.add('wheel' + i);
        face[i].classList.remove('cube' + i);
    }
});

//cube
const cube = document.getElementById('cube-button');

cube.addEventListener('click', (event)=>{
    for (i = 0; i < face.length; i++){
        face[i].classList.add('cube' + i);
        face[i].classList.remove('wheel' + i);
    }
});