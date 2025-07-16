// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXXi1m16vFQ53S4ogmA_sIevkhBKbUKQI",
  authDomain: "api-rest-node-js-fd9ed.firebaseapp.com",
  projectId: "api-rest-node-js-fd9ed",
  storageBucket: "api-rest-node-js-fd9ed.firebasestorage.app",
  messagingSenderId: "121145288554",
  appId: "1:121145288554:web:2fcb7c5216f01eace26713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
export {db};