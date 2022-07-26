import { components } from '../components/components.js';

export const changeView = (route) => {
  const container = document.getElementById('main');
  container.innerHTML = '';
  switch (route) {
    case '': case '#/inicio':
      container.appendChild(components.firstview(components.loginForm));
      components.Login();
      break;
    case '#/registro':
      container.appendChild(components.firstview(components.registro));
      components.registrarse();
      break;
    default:
      container.innerHTML = 'Página No Encontrada';
      break;
  }
};
