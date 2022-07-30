export function headerMuro() {
  const headerMuroDiv = `<header class="muroHeader">
  <img src="images/logo foodies.png" alt="Foodies">
  <div class="derechaHeader">
    <p id="nombreUsuario"></p>
    <a href="#/perfil"><img class="iconoUsuario" src=""></a>
    <i class="ph-sign-out"></i>
  </div>
</header>`;

  const divHeaderMuro = document.createElement('div');
  divHeaderMuro.innerHTML = headerMuroDiv;
  return divHeaderMuro;
}
export function categorias() {
  const navegadorCategorias = ` <nav class="categorias">
  <ul class="listaCategorias" >
    <li id="todo"><img src="images/todo.png">Todo</li>
    <li id="restaurantes"><img src="images/restaurantes.png">Restaurantes</li>
    <li id="recetas"><img src="images/recetas.png">Recetas</li>
    <li id="streetfood"><img src="images/streetfood.png">Streetfood</li>
  </ul>
  </nav>`;
  return navegadorCategorias;
}
// export function compartir() {
//   const seccionCompartir =
// }
