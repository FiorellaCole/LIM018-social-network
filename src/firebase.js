// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLD95CfdnaE3Tx163UXgtsRLGK7aIPq_M",
  authDomain: "foodies-ec14f.firebaseapp.com",
  projectId: "foodies-ec14f",
  storageBucket: "foodies-ec14f.appspot.com",
  messagingSenderId: "817386222833",
  appId: "1:817386222833:web:aeee07ad75410b04736550",
  measurementId: "G-CRQ7GLXL43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);