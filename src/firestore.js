import {
  db,
  doc,
  setDoc,
  addDoc,
  getDoc,
  collection,
  onSnapshot,
  deleteDoc,
  updateDoc,
  // orderBy,
} from './firebase.js';

export async function agregarUsuario(
  username, correo, id, ubicacion, dob, descripcion, fotoPerfil, fotoPortada) {
  await setDoc(doc(db, 'users', id), {
    username, correo, id, ubicacion, dob, descripcion, fotoPerfil, fotoPortada,
  });
}

export const getUserInfo = async (nameCollection, IdUsuario) => {
  const docRef = doc(db, nameCollection, IdUsuario);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const crearPost = (userphoto, user, description, categoria, likes) => addDoc(collection(db, 'post'), { 
  userphoto, user, description, categoria, likes,
});

export const showFirestorePosts = (posts) => onSnapshot(collection(db, 'post'), posts);

export function deletePost(postId) {
  deleteDoc(doc(db, 'post', postId));
}
export function getPost(postId) {
  return getDoc(doc(db, 'post', postId));
}

export function updatePost(postId, postData) {
  return updateDoc(doc(db, 'post', postId), postData);
}