import { logInForm, login } from './login.js';
import { registroForm, signUp } from './registro.js';
import { firstView } from './firstview.js';

export const components = {
  firstview: firstView,
  loginForm: logInForm(),
  Login: login,
  registro: registroForm(),
  registrarse: signUp,

};
