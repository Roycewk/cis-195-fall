Menu.style.display = "none";
function ShowHide(x) {
  x.classList.toggle("change");
  var Menu = document.getElementById("Menu");
  if (Menu.style.display === "none") {
    Menu.style.display = "block";
  } else {
    Menu.style.display = "none";
  }
}
const box = document.getElementById('myBox');
let position = 0;
let animationInterval;

function startMoving() {
  animationInterval = setInterval(() => {
    position += 1;
    box.style.left = position + 'px';

    if (position >= 200) {
      clearInterval(animationInterval);
    }
  }, 10);
}
function stopMoving() {
  clearInterval(animationInterval);
}

box.addEventListener('click', () => {
  startMoving();
  setTimeout(stopMoving, 2000);
});