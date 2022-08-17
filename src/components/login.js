import {
  auth,
  signInWithEmailAndPassword,
  provider,
  signInWithPopup,
} from '../firebase.js';
import { getUserInfo } from '../firestore.js';
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
          sessionStorage.clear();
          getUserInfo('users', user.uid).then((data) => {
            sessionStorage.setItem('user', JSON.stringify(data));
          });
          window.location.hash = '#/muro';
        } else {
          ubicacionModal.style.display = 'inline';
          ubicacionModal.innerHTML = mensajesModales.errorConfirmar();
          setTimeout(() => {
            ubicacionModal.style.display = 'none';
          }, 4000);
        }
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          ubicacionModal.style.display = 'inline';
          ubicacionModal.innerHTML = mensajesModales.errorNoRegistrado();
          setTimeout(() => {
            ubicacionModal.style.display = 'none';
          }, 3500);
        } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
          ubicacionModal.style.display = 'inline';
          ubicacionModal.innerHTML = mensajesModales.errorContraseña();
          setTimeout(() => {
            ubicacionModal.style.display = 'none';
          }, 3500);
        } else {
          ubicacionModal.style.display = 'inline';
          ubicacionModal.innerHTML = mensajesModales.otrosErrores(error.message);
          setTimeout(() => {
            ubicacionModal.style.display = 'none';
          }, 3500);
        }
      });
  });

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        sessionStorage.getItem(user);
        window.location.hash = '#/muro';
      }).catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  };
  document.getElementById('google').addEventListener('click', (e) => {
    e.preventDefault();
    googleSignIn();
  });
}
