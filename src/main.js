import { changeView } from './router/ruta.js';

const init = () => {
  changeView(window.location.hash.toLowerCase());
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
