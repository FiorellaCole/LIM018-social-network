import { 
  db,
  doc,
  setDoc,
  addDoc,
  getDoc,
  query,
  collection,
  onSnapshot,
  updateDoc,
  orderBy,
} from './firebase.js';

export async function agregarUsuario(usuario, correo, id) {
  await setDoc(doc(db, 'users', id), {
    user: usuario,
    mail: correo,
  });
}

export const createPost = (uid, post, datePost, state, likes) => {
  addDoc(collection(db, 'post'), {
    uid,
    post,
    datePost,
    state,
    likes,
  });
};

export const getPost = (querySnapshot) => {
  const queryPost = query(collection(db, 'post'), orderBy('datePost', 'desc'));
  onSnapshot(queryPost, querySnapshot);
};
