
function  f1(event) {
  // console.log(event);
  document.querySelector('.tracker').style.left = event.offsetX + 5 + 'px';
  document.querySelector('.tracker').style.top = event.offsetY + 5 + 'px';
}

var x = 1;
var y = 1;
function f2(event) {
  // console.log(event);
  if (event.key=='ArrowRight' && x<=77) {
    x=x+1;
  }
  else if (event.key=='ArrowLeft' && x>=1) {
    x=x-1;
  }
  else if (event.key=='ArrowUp' && y>=1 ) {
    y=y-1;
  }
  else if (event.key=='ArrowDown' && y<=77) {
    y=y+1;
  }

  // console.log(x+" "+ y);
  document.querySelector('.hero').style.left = x + 'vw';
  document.querySelector('.hero').style.top = y + 'vh';
}

document.addEventListener('keydown', f2)
document.querySelector('.test').addEventListener('mousemove',f1);
