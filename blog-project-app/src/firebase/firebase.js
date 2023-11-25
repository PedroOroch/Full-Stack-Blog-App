// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABR_TS2X44Ge8NUdda1B4dkCs1TbEoW5k",
    authDomain: "fir-blog-9af28.firebaseapp.com",
    projectId: "fir-blog-9af28",
    storageBucket: "fir-blog-9af28.appspot.com",
    messagingSenderId: "560522364719",
    appId: "1:560522364719:web:1f263af951d0305b1943da",
    measurementId: "G-HY8377N0Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);