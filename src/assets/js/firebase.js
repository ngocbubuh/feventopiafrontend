// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD14DtOPku-AOIaQExOG2TtZ6J4cExp3RY",
  authDomain: "feventdemo.firebaseapp.com",
  projectId: "feventdemo",
  storageBucket: "feventdemo.appspot.com",
  messagingSenderId: "113843219362",
  appId: "1:113843219362:web:83f01196656e7c371b20fb",
  measurementId: "G-N8PZLRLQ3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);