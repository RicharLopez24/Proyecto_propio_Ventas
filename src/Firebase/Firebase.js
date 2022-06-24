// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {getStorage } from "firebase/storage"
import { getFirestore}from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj_KqAXO1DS0Tm8YBnexCuESA5S4gwTIE",
  authDomain: "reatc-native-contactos.firebaseapp.com",
  projectId: "reatc-native-contactos",
  storageBucket: "reatc-native-contactos.appspot.com",
  messagingSenderId: "755269902796",
  appId: "1:755269902796:web:9f92af13209b1df48afd69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);
const storage = getStorage(app);
//const referencia = ref(storage, 'imagenes')
const db = getFirestore(app)


export {app, provider,auth,database ,storage,db}