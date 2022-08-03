import {
  auth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from './configuracion';


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });




// eslint-disable-next-line max-len

// eslint-disable-next-line max-len
export const inicioSesionUsuario = (correo, contraseña) => signInWithEmailAndPassword(auth, correo, contraseña);
// salir
export const cierreActividadUsuario = () => signOut(auth);
