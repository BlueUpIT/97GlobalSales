const $carousel = document.getElementById('carousel-container');


let currentTextIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const intervalDuration = 8000; // Intervalo de tiempo en milisegundos

const info = [
  {
    title: "Open your business in the United States",
    btnText:"WHATSAPP",
    btnHref: ""
  },
  {
    title: "Acquire wisdom",
    btnText:"WHATSAPP",
    btnHref: ""
  },
  {
    title: "Take action",
    btnText:"WHATSAPP",
    btnHref: ""
  },
  {
    title: "Start your digital business",
    btnText:"WHATSAPP",
    btnHref: ""
  }
]


export default function heroTypingData() {
  const currentText = info[currentTextIndex];
  const textToShow = isDeleting
  ? currentText.title.substring(0, currentLetterIndex - 1)
  : currentText.title.substring(0, currentLetterIndex + 1);
    

  $carousel.children[0].textContent = textToShow;
  
  $carousel.children[1].textContent = currentText.btnText;
  $carousel.children[1].setAttribute('href',currentText.btnHref);
  
  if (!isDeleting) {
    currentLetterIndex++;
  } else {
    currentLetterIndex--;
  }

  if(currentLetterIndex === currentText.title.length +1){
      isDeleting = true;
      currentLetterIndex = currentText.title.length;
  }
 
  
  if (currentLetterIndex === 0 && isDeleting) {
    
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % info.length;
  }
  
  setTimeout(heroTypingData, isDeleting ? 50 : 200);
}