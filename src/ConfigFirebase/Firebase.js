import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr08bAB2cDcfLxsyeWdmP_9QB5t5ZJGoA",
  authDomain: "fir-withatt.firebaseapp.com",
  projectId: "fir-withatt",
  storageBucket: "fir-withatt.appspot.com",
  messagingSenderId: "660910126304",
  appId: "1:660910126304:web:bb72f687ba111063170c85"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);