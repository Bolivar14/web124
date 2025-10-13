/*Andreina Bolivar-Campbell 10/12/25 javascript5 project*/
/*source code: javascript30.com, source codes for images & audio @ end of code*/
/*Major changes: halloween theme, moles changed to pumpkins, holes changed to graves, separated the js file*/
/*struggled with getting the scoreboard to function, then I strugged getting the game to start*/ 
"use strict";
document.addEventListener('DOMContentLoaded', () => {//added to ensure DOM loaded
    document.getElementById('start').addEventListener('click',startGame);//added due to game not starting
console.log('Happy Halloween!');//debugging line

 const graves = document.querySelectorAll('.grave');
  const scoreBoard = document.querySelector('.score');
  const pumpkins = document.querySelectorAll('.pumpkin');
  console.log(pumpkins);//debugging line
  let lastGrave;
  let timeUp = false;


  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomGrave(graves) {
    const idx = Math.floor(Math.random() * graves.length);
    const grave = graves[idx];
    if (grave === lastGrave) {
      console.log('thats the same grave');//debugging line
      return randomGrave(graves);
    }
    lastGrave = grave;
    return grave;
  }

  function trampoline() {
    const time = randomTime(500, 2000);//changed min & max time
    const grave = randomGrave(graves);
    grave.classList.add('up');
    setTimeout(() => {
      grave.classList.remove('up');
      if (!timeUp) trampoline();
    }, time);
  }

  function startGame() {
    const audio = document.getElementById('halloween-audio');//added audio
    audio.currentTime = 0;//rewind to start
    audio.play();//play the music

    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    trampoline();

    setTimeout(() => {
        timeUp = true;
        if (audio) {
            audio.pause();
            audio.currentTime = 0;//rewind to start
         }
          },  30000);//changed how long game plays 30secs
}

  let score = 0;

  function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');//corrected line to start tracking score
    scoreBoard.textContent = score;
   
  }
  console.log('game over, music stopped');//debugging line
 console.log('score is now', score);//debugging line
  pumpkins.forEach(pumpkin => pumpkin.addEventListener('click', bonk));
});
/*image sources: pumpkin: https://pixabay.com/vectors/halloween-pumpkin-scary-spooky-23439/
gravestone: https://pixabay.com/vectors/gravestone-halloween-horror-retro-2026737/
background halloween image: https://pixabay.com/illustrations/halloween-halloween-poster-6738713/
audio source: https://pixabay.com/music/scary-childrens-tunes-halloween-music-400868/*/