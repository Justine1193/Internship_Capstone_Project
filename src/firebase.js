// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // <-- Import Authentication functions
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdc_SdyFRbNFIw3KqJcQQ19ALfW3pLIts",
  authDomain: "neuinternshipdb.firebaseapp.com",
  projectId: "neuinternshipdb",
  storageBucket: "neuinternshipdb.appspot.com",
  messagingSenderId: "918910739132",
  appId: "1:918910739132:web:bacbcd219ee7228542a6b9",
  measurementId: "G-XHKWT9GEVX",
  databaseURL: "https://neuinternshipdb-default-rtdb.asia-southeast1.firebasedatabase.app/" // <-- Important for Realtime Database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // <-- Initialize Firebase Authentication
const db = getDatabase(app); // <-- Export Realtime Database

export { auth, createUserWithEmailAndPassword }; // <-- Export auth and createUserWithEmailAndPassword
export { db, ref, set };
