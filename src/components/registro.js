import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from '../firebase.js';
import { mensajesModales } from './modales.js';
import { agregarUsuario } from '../firestore.js';

export function registroForm() {
  const registroDiv = `<div id='registro' class='contenedor3'>
        
      <form id="registroForm">

      <div class="ingresarDatos">
      <input type="text" id="usuario" class="datos" placeholder="Nombre de usuario" required>
      <i class="ph-user"></i>
      </div>

      <div class="ingresarDatos">
      <input type="text" id="correoRegistro" class="datos" placeholder="Correo electrónico" required>
      <i class="ph-envelope"></i>
      </div>
      
      <div class="ingresarDatos">
      <input type="password" id="contraseñaRegistro" class="datos" placeholder="Contraseña" required>
      <i id="botonClave" class="ph-eye-closed"></i>
      </div>
        
      <button type="submit" class="ingresar">Registrate</button>
      
      <p class="text">¿Ya tienes una cuenta? <a class="link" id="inicia" href="#/inicio"> Inicia sesión</a></p> 
      </form>
      </div>`;
  return registroDiv;
}
export function signUp() {
  const registrarse = document.getElementById('registroForm');
  registrarse.addEventListener('submit', (e) => {
    e.preventDefault();// ----> Para que no se refresque la página.
    const usuario = document.getElementById('usuario').value;
    const correo = document.getElementById('correoRegistro').value;
    const contraseña = document.getElementById('contraseñaRegistro').value;
    const ubicacionModal = document.getElementById('mensajeModal');

    createUserWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user).then(() => {
          agregarUsuario(usuario, correo, user.uid, '', '00/00/0000', 'Amante de la comida', 'images/usuarioimg.png', 'images/portadaUsuario.jpg');
        });
        ubicacionModal.style.display = 'inline';
        ubicacionModal.innerHTML = mensajesModales.registroExitoso();
        setTimeout(() => {
          ubicacionModal.style.display = 'none';
          window.location.hash = '#/inicio';
        }, 5000);
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          ubicacionModal.style.display = 'inline';
          ubicacionModal.innerHTML = mensajesModales.correoYaRegistrado();
          setTimeout(() => {
            ubicacionModal.style.display = 'none';
          }, 4000);
        } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
          ubicacionModal.style.display = 'inline';
          ubicacionModal.innerHTML = mensajesModales.contraseñaDebil();
          setTimeout(() => {
            ubicacionModal.style.display = 'none';
          }, 4000);
        } else {
          ubicacionModal.style.display = 'inline';
          ubicacionModal.innerHTML = mensajesModales.otrosErrores(error.message);
          setTimeout(() => {
            ubicacionModal.style.display = 'none';
          }, 4000);
        }
      });
  });
}
