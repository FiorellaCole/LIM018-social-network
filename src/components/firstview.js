export function firstView(form) {
  const fondo = `<section class="contenedor1">
        <div class= "contenedor2">
          <img id="logoFoodies" src="images/logo foodies2.png">
          <p id="slogan">¡Conéctate con miles de amantes de la comida!</p>
          </div>
          <div class= "contenedorNew3">
          ${form}
          <div id="mensajeModal" style="display:none"></div>
          <div>
        </section>`;

  const divFondo = document.createElement('div');
  divFondo.innerHTML = fondo;

  return divFondo;
}
