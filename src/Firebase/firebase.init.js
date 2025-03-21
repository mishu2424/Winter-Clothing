// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDteqAafDWAq_CZdoxpXUl840SEgTT9aEA",
  authDomain: "clothing-store-auth-384cd.firebaseapp.com",
  projectId: "clothing-store-auth-384cd",
  storageBucket: "clothing-store-auth-384cd.firebasestorage.app",
  messagingSenderId: "698293507840",
  appId: "1:698293507840:web:515a92de944a5a156085e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;