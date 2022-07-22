import { logInForm } from './login.js';
import { registroForm } from './registro.js';
import { firstView } from './firstview.js';

export const components = {
  firstview: firstView,
  login: logInForm(),
  registro: registroForm(),
};
