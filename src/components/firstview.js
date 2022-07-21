export function firstView(form) {
  const fondo = `<section class="contenedor1">
        <div class= "contenedor2">
          <img id="logoFoodies" src="images/logo foodies2.png">
          </div>
          ${form}
        </section>`;

  const divElemento = document.createElement('div');
  divElemento.innerHTML = fondo;

  return divElemento;
}
