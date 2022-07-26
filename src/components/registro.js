import { auth, createUserWithEmailAndPassword } from '../firebase.js';

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
      
      <p class="texto">¿Ya tienes una cuenta? <a class="link" id="inicia" href="#/inicio"> Inicia sesión</a></p> 
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
    console.log(usuario, correo, contraseña);

    createUserWithEmailAndPassword(auth, correo, contraseña)

      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  });
}
