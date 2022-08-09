import {
  db,
  doc,
  setDoc,
  addDoc,
  // getDoc,
  // query,
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

// crear post
export const crearPost = (uid, post, datePost, state, likes) => {
  addDoc(collection(db, 'post'), {
    uid,
    post,
    datePost,
    state,
    likes,
  });
};

// obtener post
export const OngetTask = (callback) => onSnapshot(collection(db, 'post'), callback);

/* export const getPost = (querySnapshot) => {
  const queryPost = query(collection(db, 'post'), orderBy('datePost', 'desc'));
  onSnapshot(queryPost, querySnapshot);
};
*/
