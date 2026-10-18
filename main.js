const button = document.querySelector(".clicker");
const area = document.querySelector(".main");
function moveButton() {
  const maxX = area.clientWidth - button.offsetWidth;
  const maxY = area.clientHeight - button.offsetHeight;

  const randomX = Math.floor(Math.random() * Math.max(0, maxX));
  const randomY = Math.floor(Math.random() * Math.max(0, maxY));
  button.style.position = "absolute";
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}
button.addEventListener("click", moveButton);
