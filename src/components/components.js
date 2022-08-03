import { firstView } from './firstview.js';
import { logInForm, login } from './login.js';
import { registroForm, signUp } from './registro.js';
import {
  headerMuro,
  cerrarSesion,
  categorias,
  divCompartir,
} from './muro.js';

export const components = {
  firstview: firstView,
  loginForm: logInForm(),
  Login: login,
  registroForm: registroForm(),
  signup: signUp,
  muro: headerMuro,
  cerrarsesion: cerrarSesion,
  categoriasMuro: categorias,
  seccionCompartir: divCompartir,
};
