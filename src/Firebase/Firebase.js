import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBjFj-xXIk8-cecedyWf85OEMugk1Em1VU",
  authDomain: "nbkrattendance.firebaseapp.com",
  projectId: "nbkrattendance",
  storageBucket: "nbkrattendance.appspot.com",
  messagingSenderId: "998240617501",
  appId: "1:998240617501:web:2f2dd1ccb8c198123bb2f4"
};


const firebaseapp = initializeApp(firebaseConfig);
export default firebaseapp;