// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // <-- ADD THIS 🔥

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdc_SdyFRbNFIw3KqJcQQ19ALfW3pLIts",
  authDomain: "neuinternshipdb.firebaseapp.com",
  projectId: "neuinternshipdb",
  storageBucket: "neuinternshipdb.appspot.com", // <-- Medyo typo ka kanina sa "storageBucket"
  messagingSenderId: "918910739132",
  appId: "1:918910739132:web:bacbcd219ee7228542a6b9",
  measurementId: "G-XHKWT9GEVX",
  databaseURL: "https://neuinternshipdb-default-rtdb.asia-southeast1.firebasedatabase.app/" // <-- Important sa Realtime Database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app); 
