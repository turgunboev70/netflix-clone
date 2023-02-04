// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnRDQVGaKxz5gAsYE3BChNKJURzlENK3M",
  authDomain: "netflix-f3113.firebaseapp.com",
  projectId: "netflix-f3113",
  storageBucket: "netflix-f3113.appspot.com",
  messagingSenderId: "936210753989",
  appId: "1:936210753989:web:0e376781bdbe9b84b003ac",
  measurementId: "G-R2BL49KBT0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth();

export default app
export {auth, db}