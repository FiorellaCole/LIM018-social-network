import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCLD95CfdnaE3Tx163UXgtsRLGK7aIPq_M",
  authDomain: "foodies-ec14f.firebaseapp.com",
  projectId: "foodies-ec14f",
  storageBucket: "foodies-ec14f.appspot.com",
  messagingSenderId: "817386222833",
  appId: "1:817386222833:web:aeee07ad75410b04736550",
  measurementId: "G-CRQ7GLXL43"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

