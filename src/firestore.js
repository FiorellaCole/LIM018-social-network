import {
  db,
  doc,
  setDoc,
  addDoc,
  getDocs,
  collection,
  onSnapshot,
  // updateDoc,
  // orderBy,
} from './firebase.js';

export async function agregarUsuario(usuario, correo, id) {
  await setDoc(doc(db, 'users', id), {
    user: usuario,
    mail: correo,
  });
}

export const crearPost = (description, categoria) => addDoc(collection(db, 'post'), { description, categoria });

export const getPost = () => getDocs(collection(db, 'post'));

export const showFirestorePosts = (posts) => onSnapshot(collection(db, 'post'), posts);
