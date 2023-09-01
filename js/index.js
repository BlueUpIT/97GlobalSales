import heroTypingData from "./dom/heroTypingData.js";
import setFlipCardHeight from "./dom/setFlipCardHeight.js";
import spyScroll from "./dom/spyScroll.js";






window.addEventListener("resize", () => {
  setFlipCardHeight();
})

document.addEventListener('DOMContentLoaded', (e) => {
  setFlipCardHeight();
  heroTypingData();
  spyScroll();
})
