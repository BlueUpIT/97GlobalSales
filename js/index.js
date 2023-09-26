import heroTypingData from "./dom/heroTypingData.js";
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
})
