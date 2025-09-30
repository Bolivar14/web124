 /*Andreina Bolivar-Campbell 9/26/2025 JavaScript30 project 3
 source: JavaScript30: https://courses.wesbos.com/account/access/68c4c553b4c43be5dacea090/view/194128157*/ 
 /*Major change, added music to the sticky nav, once it goes into sticky mode, music plays*/

 "use strict";//added strict mode
 console.log('JS is working');// check if JS is connected

document.addEventListener('DOMContentLoaded', () => { //placed to ensure everything loads before the script runs
  window.addEventListener('scroll', fixNav);
});

   const piano = document.querySelector('#piano');//select audio element
    const nav = document.querySelector('#main');
    let topOfNav = nav.offsetTop;

    let isFixed=false;

    function playAudio() {//function to play audio
      if (piano) {
       piano.currentTime = 0;
       piano.play();
}
}
    function fixNav() {
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');

        playAudio();//play audio when nav becomes fixed
        isFixed=true;

      } else if (window.scrollY < topOfNav && isFixed) {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
        isFixed=false;//reset isFixed to false when nav is not fixed
      }
     
      }
    

    window.addEventListener('scroll', fixNav);





    /*Sound source:"piano": https://pixabay.com/sound-effects/creepy-piano-for-scary-stories-158423/*/