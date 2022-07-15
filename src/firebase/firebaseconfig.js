// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqWI867e-uBYl3kSeNn-0MvFjEh5efwfI",
  authDomain: "boylerplate.firebaseapp.com",
  databaseURL: "https://boylerplate-default-rtdb.firebaseio.com",
  projectId: "boylerplate",
  storageBucket: "boylerplate.appspot.com",
  messagingSenderId: "771722810336",
  appId: "1:771722810336:web:01343c91d2b14525bb1185",
  measurementId: "G-0RKL7LBKP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default app;