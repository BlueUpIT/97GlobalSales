import handleModal from "./dom/handleModal.js";
import heroTypingData from "./dom/heroTypingData_es.js";
import setCardHeight from "./dom/setCardHeight.js";
import setFlipCardHeight from "./dom/setFlipCardHeight.js";
import spyScroll from "./dom/spyScroll.js";

window.addEventListener("resize", () => {
  setFlipCardHeight();
  spyScroll();
  setCardHeight();
})

document.addEventListener('DOMContentLoaded', (e) => {
  setFlipCardHeight();
  heroTypingData();
  spyScroll();
  setCardHeight();
	handleModal();
})
