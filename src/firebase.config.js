// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfZIVxnBYNJfkGyTg07O0_4FOSLXde4gA",
  authDomain: "e-commerce-1153.firebaseapp.com",
  databaseURL: "https://e-commerce-1153-default-rtdb.firebaseio.com",
  projectId: "e-commerce-1153",
  storageBucket: "e-commerce-1153.appspot.com",
  messagingSenderId: "896152889494",
  appId: "1:896152889494:web:ecb0d4e61d9644cc62bab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}