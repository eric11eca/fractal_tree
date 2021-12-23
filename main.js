// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx0MHsN1Jczh-yQ9CRtKkU3xDr9_ZDyEs",
  authDomain: "fractal-tree.firebaseapp.com",
  projectId: "fractal-tree",
  storageBucket: "fractal-tree.appspot.com",
  messagingSenderId: "220738869442",
  appId: "1:220738869442:web:5a6ef7fe5c8e3b966dc35b",
  measurementId: "G-CKKTDW4YDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);