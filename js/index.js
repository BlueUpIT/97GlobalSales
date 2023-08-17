// Animación flip
document.addEventListener("DOMContentLoaded", function() {
  const flipTrigger = document.querySelector(".flip-trigger");
  const serviceItem = flipTrigger.closest(".service-item");

  flipTrigger.addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el comportamiento de navegación predeterminado
    serviceItem.classList.add("flip-animation");
  });
});