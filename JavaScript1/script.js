  //Andreina Bolivar-Campbell 9/14/2025
  //Adapted from https://javascript30.com/
  //JavaScript Drum Kit
  //new elements: change to click instead of keydown, added
  //console logs & "use strict", changed span text, changed audio ids
  "use strict";
  console.log("JavaScript is connected");

  function removeTransition(Event) {
    if (Event.propertyName !== 'transform') return;
    Event.target.classList.remove('playing');
  }

  function playSound(Event) {
   
    const keyElement = Event.currentTarget; 
    const audio = keyElement.querySelector('audio');

    if (!audio) return;
    

    keyElement.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

//Change Event Listener to click instead of keydown
  const buttons = document.querySelectorAll('.key button');
  buttons.forEach(button => {
    button.addEventListener('click', playSound );
    button.addEventListener('transitionend', removeTransition);
  });
  