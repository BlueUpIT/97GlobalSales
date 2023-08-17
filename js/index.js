const carousel = document.getElementById('static-carousel-item-container');
const intervalDuration = 3000; // Intervalo de tiempo en milisegundos
let anchoCard  = carousel.children[0].clientWidth;
let contador = 1;
window.addEventListener("resize", () => {
  setWidth();
})

function setWidth() {
  let width = carousel.children.length * 100;
  carousel.style.width = `${width}%`;
}

function cloneFirstChild() {
  const firstChild = carousel.children[0];
  const newItem = firstChild.cloneNode(true);
  carousel.appendChild(newItem);
  setWidth();
}

function startSlideAnimation() {
  const translateX = -contador * anchoCard;
  carousel.style.transform = `translate(${translateX}px)`;
  carousel.style.transition = 'transform 1s ease-in-out';
  contador++;

  if (contador >= carousel.children.length) {
    setTimeout(() => {
      carousel.style.transform = `translate(0px)`;
      carousel.style.transition = "none";
      contador = 1;
      setTimeout(startSlideAnimation, intervalDuration);
    }, 1000); // Tiempo de espera en milisegundos
  } else {
    setTimeout(startSlideAnimation, intervalDuration);
  }
}

setWidth();
cloneFirstChild();
setTimeout(startSlideAnimation, intervalDuration);
