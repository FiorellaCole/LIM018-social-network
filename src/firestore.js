import {
  db,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  // updateDoc,
  // orderBy,
} from './firebase.js';

export async function agregarUsuario(
  username, correo, id, ubicacion, dob, descripcion, fotoPerfil, fotoPortada) {
  await setDoc(doc(db, 'users', id), {
    username, correo, id, ubicacion, dob, descripcion, fotoPerfil, fotoPortada,
  });
}

export const crearPost = (description, categoria) => addDoc(collection(db, 'post'), { description, categoria });

export const getPost = () => getDocs(collection(db, 'post'));

export const showFirestorePosts = (posts) => onSnapshot(collection(db, 'post'), posts);

export const getUserInfo = async (nameCollection, IdUsuario) => {
  const docRef = doc(db, nameCollection, IdUsuario);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
