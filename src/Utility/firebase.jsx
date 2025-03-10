
import firebase from "firebase/compat/app";
import{getAuth} from "firebase/auth"
import  "firebase/compat/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC4pBaZT0uutsV_0r7RUzuO5CfHmekHyc",
  authDomain: "clone-ff0b9.firebaseapp.com",
  projectId: "clone-ff0b9",
  storageBucket: "clone-ff0b9.firebasestorage.app",
  messagingSenderId: "55849422827",
  appId: "1:55849422827:web:041e24c995870a6f5ed3ae",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
