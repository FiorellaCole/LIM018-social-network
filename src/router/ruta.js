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
      container.appendChild(components.firstview(components.registroForm));
      components.signup();
      break;
    case '#/muro':
      container.appendChild(components.muro());
      components.cerrarsesion();
      container.appendChild(components.categoriasMuro());
      container.appendChild(components.seccionCompartir());
      components.addPost();
      components.showPosts();
      break;
    case '#/perfil':
      container.appendChild(components.muro());
      container.appendChild(components.profile());
      components.likes();
      break;
    default:
      container.innerHTML = 'Página No Encontrada';
      break;
  }
};
