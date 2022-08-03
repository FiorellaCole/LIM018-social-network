// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCLD95CfdnaE3Tx163UXgtsRLGK7aIPq_M',
  authDomain: 'foodies-ec14f.firebaseapp.com',
  projectId: 'foodies-ec14f',
  storageBucket: 'foodies-ec14f.appspot.com',
  messagingSenderId: '817386222833',
  appId: '1:817386222833:web:006a879411b3847f736550',
  measurementId: 'G-Q9SETLRLLF',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// authentification
export const auth = getAuth(app);
// firestore
export const db = getFirestore(app);

export {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
