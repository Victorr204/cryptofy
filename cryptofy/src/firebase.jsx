import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRsXxJ0ovA0iHL5FRsE_seEj2zlzKoYC8",
    authDomain: "cryptofy-ba8c9.firebaseapp.com",
    projectId: "cryptofy-ba8c9",
    storageBucket: "cryptofy-ba8c9.firebasestorage.app",
    messagingSenderId: "774499744403",
    appId: "1:774499744403:web:336af5ad2fed66cb4b6b66",
    measurementId: "G-QB61E4H20S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
