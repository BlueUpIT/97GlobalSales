const $flipCardContainer = document.querySelector(".grid-flip-cards");

export default function setFlipCardHeight() {
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