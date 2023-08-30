const $carousel = document.getElementById('carousel-container');
const $flipCardContainer = document.querySelector(".grid-flip-cards");
const $blinkSpan = document.createElement('span');
$blinkSpan.classList.add('blink');
$blinkSpan.innerHTML = '_';
let currentTextIndex = 0;
let currentLetterIndex = 0;
let letterIndex = 0;

let isDeleting = false;

const info = [
  {
    title: "97GlobalSales",
    btnText:"Read More",
    btnHref: ""
  },
  {
    title: "CONNECT, CREATE",
    btnText:"WHATSAPP",
    btnHref: ""
  },
  {
    title: "MULTIPLY, PRESERVE",
    btnText:"Read More",
    btnHref: ""
  }
]

function displayText() {
    const currentText = info[currentTextIndex];
    const textToShow = isDeleting
    ? currentText.title.substring(0, currentLetterIndex - 1)
    : currentText.title.substring(0, currentLetterIndex + 1);
      
  
    $carousel.children[0].textContent = textToShow;
    $carousel.children[0].appendChild($blinkSpan.cloneNode(true));
    
    $carousel.children[1].textContent = currentText.btnText;
    $carousel.children[1].setAttribute('href',currentText.btnHref);
    
    if (!isDeleting) {
      currentLetterIndex++;
    } else {
      currentLetterIndex--;
    }

    if(currentLetterIndex === currentText.title.length +1){
      setTimeout(() => {
        isDeleting = true;
        currentLetterIndex = currentText.title.length;
      }, intervalDuration);
    }
   
    
    if (currentLetterIndex === 0 && isDeleting) {
      
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % info.length;
    }
    
    setTimeout(displayText, isDeleting ? 50 : 200);
}

displayText();


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
let touchStartX = null;
let intervalHandler;



window.addEventListener("resize", () => {
  setFlipCardHeight();
})






// intervalHandler = setInterval(moveCarouselRight, intervalDuration);
