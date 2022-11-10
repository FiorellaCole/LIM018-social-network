import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  getDoc,
  collection,
  updateDoc,
  onSnapshot,
  orderBy,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  query,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';

import {
  app,
} from './firebase.js';

const db = getFirestore(app);

// eslint-disable-next-line max-len
export async function agregarUsuario(username, correo, id, ubicacion, dob, descripcion, fotoPerfil, fotoPortada) {
  await setDoc(doc(db, 'users', id), {
    username, correo, id, ubicacion, dob, descripcion, fotoPerfil, fotoPortada,
  });
}

export const getUserInfo = async (nameCollection, IdUsuario) => {
  const docRef = doc(db, nameCollection, IdUsuario);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const crearPost = (userphoto, user, description, categoria, likes, imageUrl) => addDoc(collection(db, 'post'), {
  userphoto, user, description, categoria, likes, timestamp: serverTimestamp(), imageUrl,
});

export const showFirestorePosts = (posts) => {
  const coleccion = collection(db, 'post');
  const q = query(coleccion, orderBy('timestamp', 'desc'));
  onSnapshot(q, posts);
};

// export const showPostsByCategories = (posts) => {
//   const coleccion = collection(db, 'post');
//   const q = query(coleccion, orderBy('timestamp', 'desc'));
//   onSnapshot(q, posts);
// };

export function deletePost(postId) {
  deleteDoc(doc(db, 'post', postId));
}
export function getPost(postId) {
  return getDoc(doc(db, 'post', postId));
}

export function updatePost(postId, postData) {
  return updateDoc(doc(db, 'post', postId), postData);
}

export { arrayUnion, arrayRemove };
