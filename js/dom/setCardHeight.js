export default function setCardHeight () {
  const $cards = document.querySelectorAll('.height-240');
  const img = document.querySelector('.height-240 .img-container img');
  console.log(img.clientHeight);
  $cards.forEach( $card => {
    console.log($card);
    $card.style.height = `${img.clientHeight}px`;
  });
}