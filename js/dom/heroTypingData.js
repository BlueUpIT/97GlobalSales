const $carousel = document.getElementById('carousel-container');


let currentTextIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const intervalDuration = 8000; // Intervalo de tiempo en milisegundos

const info = [
  {
    title: "PRESERVE 75% OFF CAPITAL TODAY",
  },
  {
    title: "WORK 100% 1 ON 1 WITH ME",
  },
  {
    title: "OPEN YOUR UNITED STATES CORPORATION IN 15 DAYS",
  },
  {
    title: "MAKE YOUR FIRST DIGITAL SALE ON AMAZON IN 90 DAYS",
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