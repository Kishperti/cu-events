
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIG5pta_bM2b7Yd36ichHe6f8eJYvq-VI",
  authDomain: "cac-competitions.firebaseapp.com",
  projectId: "cac-competitions",
  storageBucket: "cac-competitions.appspot.com",
  messagingSenderId: "418066331142",
  appId: "1:418066331142:web:b025ea3152b7136a8e3587",
  measurementId: "G-24GB2B6VML"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getStorage(firebaseApp);
firebase.initializeApp(firebaseConfig);
// const db = firebase.storage();
const projectFirestore = firebase.firestore();
export {db, projectFirestore};
