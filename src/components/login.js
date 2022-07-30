import { auth, signInWithEmailAndPassword } from '../firebase.js';
import { mensajesModales } from './modales.js';

export function logInForm() {
  const logInDiv = `<div id="login" class="contenedor3">
            
            <form id="loginForm">

            <div class="ingresarDatos">
            <input type="text" id="correo" class="datos" placeholder="Correo electrónico" required>
            <i class="ph-envelope"></i>
            </div>

            <div class="ingresarDatos">
            <input type="password" id="contraseña" class="datos" placeholder="Contraseña" required>
            <i id="btn-Contraseña" class="ph-eye-closed"></i>
            </div>

            <button type="submit" id="btn-Ingresar" class="ingresar">Ingresar</button>

            <p class="text">o ingresa con:</p>

            <div class="iconosInicio">
            <img id="facebook" src="images/fb.png">
            <img id="google" src="images/google.png">
            </div>

            <p class="text">¿No tienes una cuenta? <a class="link" id="registrate" href="#/registro"> Regístrate</a></p> 
            </form>
            </div>`;
  return logInDiv;
}

export function login() {
  const ingresar = document.getElementById('loginForm');
  ingresar.addEventListener('submit', (e) => {
    e.preventDefault();// ----> Para que no se refresque la página.
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const ubicacionModal = document.getElementById('mensajeModal');

    signInWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified === true) {
          window.location.hash = '#/muro';
        } else {
          ubicacionModal.innerHTML = mensajesModales.errorConfirmar();
        }
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  });
}
