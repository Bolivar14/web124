/*Andreina Bolivar-Campbell 9/28/25, JavaScript30 Project4, Canvas*/ 
/*Source Code: Javascript30.com*/
/*Major Changes: Separated html, js, css to different pages
added a reset button, changed the lineJoin, the globalComposition operation,
size of line*/ 
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'gradient';//changed color from #BADASS
ctx.lineJoin = 'square'; //changed from round
ctx.lineCap = 'square';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'xor'; //changed from source-over
//daughter said to keep it this way she's 3, she liked the texture

let isDrawing = false;//default is false because the user is not drawing
let lastX = 0; //start
let lastY = 0;//stop
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 40%)`;//changed saturation from 50% to 100%
  ctx.beginPath();
  // start from 
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 200 || ctx.lineWidth <= 1) { //changed line width
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}
//added clear button to reset canvas
let button =true;
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function() {
  if(button){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);