import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHW712mNVmNbzkKslvh3vMHOv74rKCeK0",
  authDomain: "clone2025-64c8f.firebaseapp.com",
  projectId: "clone2025-64c8f",
  storageBucket: "clone2025-64c8f.firebasestorage.app",
  messagingSenderId: "110628435446",
  appId: "1:110628435446:web:eba869c6712550c825c3d7",
};

// Initialize  Firebase

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
