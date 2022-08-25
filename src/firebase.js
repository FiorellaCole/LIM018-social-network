// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
// eslint-disable-next-line import/no-unresolved, object-curly-newline
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
  onSnapshot,
  orderBy,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  query,
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCLD95CfdnaE3Tx163UXgtsRLGK7aIPq_M',
  authDomain: 'foodies-ec14f.firebaseapp.com',
  projectId: 'foodies-ec14f',
  storageBucket: 'foodies-ec14f.appspot.com',
  messagingSenderId: '817386222833',
  appId: '1:817386222833:web:aeee07ad75410b04736550',
  measurementId: 'G-CRQ7GLXL43',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  provider,
  signInWithPopup,
  db,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
  onSnapshot,
  orderBy,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  query,
};
