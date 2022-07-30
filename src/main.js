import { changeView } from './router/ruta.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);

// import { categorias } from './components/muro.js';

// const pruebas = document.getElementById('main');

// function showpruebas() {
//   pruebas.innerHTML = categorias();
// }

// showpruebas();
