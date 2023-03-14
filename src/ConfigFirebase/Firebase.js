import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6qGtK1-TDKCO7gPG4iGNPFyITwBAqkpc",
  authDomain: "testnbkrist.firebaseapp.com",
  projectId: "testnbkrist",
  storageBucket: "testnbkrist.appspot.com",
  messagingSenderId: "388618250111",
  appId: "1:388618250111:web:a7c7a32419a21835849c4a",
  measurementId: "G-YEZVRN42E5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
