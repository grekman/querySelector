
function  f1(event) {
  console.log(event);
  // this.innerHTML = event.offsetX + ' ' +event.offsetY;
  // this.innerHTML = event.offsetY;

  document.querySelector('.tracker').style.left = event.offsetX + 5 + 'px';
  document.querySelector('.tracker').style.top = event.offsetY + 5 + 'px';
}

function f2() {
  alert('222222');
}


document.querySelector('.test').addEventListener('mousemove',f1);
