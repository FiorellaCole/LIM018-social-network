import { components } from '../components/components.js';
import { logInForm } from '../components/login.js';
import { registroForm } from '../components/registro.js';

export const changeView = (route) => {
  const container = document.getElementById('main');
  container.innerHTML = '';
  switch (route) {
    case '': case '#/inicio':
      container.appendChild(components.firstview(logInForm()));
      break;
    case '#/registro':
      container.appendChild(components.firstview(registroForm()));
      break;
    default:
      container.innerHTML = 'Página No Encontrada';
      break;
  }
};
