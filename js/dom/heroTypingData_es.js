const $carousel = document.getElementById('carousel-container');


let currentTextIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const intervalDuration = 8000; // Intervalo de tiempo en milisegundos

const info = [
  {
    title: "CONSERVE HOY EL 75% DE SU CAPITAL",
  },
  {
    title: "TRABAJE 100% 1 A 1 CONMIGO",
  },
  {
    title: "ABRÍ TU EMPRESA EN LOS ESTADOS UNIDOS EN 15 DÍAS",
  },
  {
    title: "CONSEGUÍ TU PRIMERA VENTA DIGITAL EN AMAZON EN 90 DÍAS",
  }
]


export default function heroTypingData() {
  const currentText = info[currentTextIndex];
  const textToShow = isDeleting
  ? currentText.title.substring(0, currentLetterIndex - 1)
  : currentText.title.substring(0, currentLetterIndex + 1);
    

  $carousel.children[0].textContent = textToShow;
  
  
  if (!isDeleting) {
    currentLetterIndex++;
  } else {
    currentLetterIndex--;
  }

  if(currentLetterIndex === currentText.title.length +1){
      setTimeout(() => {
        isDeleting = true;
        currentLetterIndex = currentText.title.length;
      },1700)
  }
 
  
  if (currentLetterIndex === 0 && isDeleting) {
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % info.length;
  }
  
  setTimeout(heroTypingData, 50 );
}