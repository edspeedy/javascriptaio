const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;
let position2 = 0;

function handleKeyPress(e) {
  if (e.code === 'ArrowLeft') {
    position = position - 10;
  }
  if (e.code === 'ArrowRight') {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();

  if (e.code === 'ArrowUp') {
    position2 = position2 - 20;
  }
  if (e.code === 'ArrowDown') {
    position2 = position2 + 20;
  }
  if (position2 < 0) {
    position2 = 0;
  }
  refresh2();
}
function refresh() {
  ball.style.left = position + 'px';
}

function refresh2() {
  ball.style.top = position2 + 'px';
}
