export default function handleModal(){
  const $modal = document.getElementById("my-modal"),
    $imgActive = document.getElementById("img-modal-active"),
    $spanClose = document.querySelector("#my-modal span"),
    $imgContainer = document.querySelector("#my-modal .modal-img-container");
    console.log();
  let modalIsActive = false;

  $imgActive.addEventListener('click', (e) => {
    document.querySelector('body').classList.add('scroll-y-none');
    $modal.classList.add('visible');
  })
  
  $spanClose.addEventListener('click', (e) => {
    document.querySelector('body').classList.remove('scroll-y-none');
    $modal.classList.remove('visible');
  })

  $modal.addEventListener('click', (e) => {
    if($modal.classList.contains("visible")){
      if(e.target != $modal.querySelector("img")){
        document.querySelector('body').classList.remove('scroll-y-none');
        $modal.classList.remove('visible');
      }
    }
  })

}