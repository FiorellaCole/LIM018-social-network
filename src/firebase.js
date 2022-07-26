// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

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
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
