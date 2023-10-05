import handleModal from "./dom/handleModal.js";
import heroTypingData from "./dom/heroTypingData_es.js";
import setFlipCardHeight from "./dom/setFlipCardHeight.js";
import spyScroll from "./dom/spyScroll.js";

window.addEventListener("resize", () => {
  setFlipCardHeight();
  spyScroll();
})

document.addEventListener('DOMContentLoaded', (e) => {
  setFlipCardHeight();
  heroTypingData();
  spyScroll();
  handleModal();
})
