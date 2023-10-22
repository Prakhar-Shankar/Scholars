// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwFW7QWrBdbxXCJUNxb-xFw4o3XskUeYg",
  authDomain: "scholars-200f8.firebaseapp.com",
  projectId: "scholars-200f8",
  storageBucket: "scholars-200f8.appspot.com",
  messagingSenderId: "905030107871",
  appId: "1:905030107871:web:dbacb203d8ac0444999f6a",
  measurementId: "G-N936JJHE6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);