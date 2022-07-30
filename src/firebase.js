// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

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

export { auth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword };
