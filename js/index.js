const $carousel = document.getElementById('static-carousel-item-container');
const $btnCarouselLeft = document.getElementById('btn-static-carousel-left');
const $btnCarouselRight = document.getElementById('btn-static-carousel-right');
let $carouselSection = document.querySelectorAll(".static-carousel-item");
let $carouselSectionLast = $carouselSection[$carouselSection.length-1];

const $flipCardContainer = document.querySelector(".grid-flip-cards");
const setFlipCardHeight = () => {
  let width = window.innerWidth;
  let cardWidth = $flipCardContainer.children[0].offsetWidth;
  let rows = 0;
  let height = 0;
  if(width >= 992) {
    rows = parseInt($flipCardContainer.children.length / 3);
    if($flipCardContainer.children.length > rows*3) rows+=1;
  } else if( width < 992 && width > 767 ) {
    rows = parseInt($flipCardContainer.children.length / 2);
    if($flipCardContainer.children.length > rows*2) rows+=1;
  } else {
    rows = $flipCardContainer.children.length
  }
    height = rows * cardWidth;
  $flipCardContainer.style.height = `${height}px`;
}

setFlipCardHeight();

const intervalDuration = 8000; // Intervalo de tiempo en milisegundos
let anchoCard  = $carousel.children[0].clientWidth;
let touchStartX = null;
let intervalHandler;

$carousel.insertAdjacentElement("afterbegin", $carouselSectionLast);


window.addEventListener("resize", () => {
  setCarouselWidth();
  setFlipCardHeight();
})

const moveCarouselRight = () => {
  let $carouselSectionFirst = document.querySelectorAll(".static-carousel-item")[0];
  $carousel.style.marginLeft = "-200%";
  $carousel.style.transition = "all 1.5s";
  setTimeout(() => {
    $carousel.style.transition = "none";
    $carousel.insertAdjacentElement("beforeend", $carouselSectionFirst);
    $carousel.style.marginLeft = "-100%";
  }, 1500);
  clearInterval(intervalHandler);
  intervalHandler = setInterval(moveCarouselRight, intervalDuration);
} 

const moveCarouselLeft = () => {
  $carouselSection = document.querySelectorAll(".static-carousel-item");
  $carouselSectionLast = $carouselSection[$carouselSection.length-1];
  $carousel.style.marginLeft = "0%";
  $carousel.style.transition = "all 1.5s";
  setTimeout(() => {
    $carousel.style.transition = "none";
    $carousel.insertAdjacentElement("afterbegin", $carouselSectionLast);
    $carousel.style.marginLeft = "-100%";
  }, 1500);
  clearInterval(intervalHandler);
  intervalHandler = setInterval(moveCarouselRight, intervalDuration);
} 
$btnCarouselRight.addEventListener('click', moveCarouselRight);
$btnCarouselLeft.addEventListener('click', moveCarouselLeft);
$carousel.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
})

$carousel.addEventListener('touchend', (e) => {
  if(touchStartX !== null) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDifference = touchEndX - touchStartX;
    touchDifference > 50 ? moveCarouselLeft() : moveCarouselRight();
    touchStartX = null;
  }
})

const setCarouselWidth = () => {
  let width = $carousel.children.length * 100;
  $carousel.style.width = `${width}%`;
}

setCarouselWidth();
intervalHandler = setInterval(moveCarouselRight, intervalDuration);
