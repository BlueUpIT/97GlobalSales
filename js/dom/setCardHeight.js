export default function setCardHeight () {
  const $cards = document.querySelectorAll('.height-240');
  const img = document.querySelector('.height-240 .img-container');
  $cards.forEach( $card => {
    $card.style.height = `${img.clientWidth}px`;
  });
}