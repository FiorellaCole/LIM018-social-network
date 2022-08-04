import { db, doc, setDoc } from './firebase.js';

export async function agregarUsuario(usuario, correo, id) {
  await setDoc(doc(db, 'users', id), {
    user: usuario,
    mail: correo,
  });
}
