$(document).ready(function () {
  const boton = $("#navbarCollapseButton");

  const actualizarNavbar = () => {
    const anchoPagina = $(window).width();

    const ariaExpanded = boton.attr("aria-expanded");
		if(anchoPagina > 991) {
			$("#navbarCollapse").removeClass("navbar-desplegada");
			return
		}

		if (ariaExpanded === "true" && anchoPagina < 992) {
      $("#navbarCollapse").addClass("navbar-desplegada")
			$(".nav-link-selector").addClass("nav-links-dark").removeClass("navbar-item-link")
    } else {
			setTimeout(()=>{
				$("#navbarCollapse").removeClass("navbar-desplegada");
				$(".nav-link-selector").addClass("navbar-item-link").removeClass("nav-links-dark")
			},300)
    }
  };

	
  $(window).resize(() => {
    actualizarNavbar();
  });
  boton.on("click", function () {
    actualizarNavbar();
  });
});
