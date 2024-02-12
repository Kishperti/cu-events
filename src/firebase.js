
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAj5a2GGtkpMV1fDk1dDVP1mzKDSxB9mbk",
  authDomain: "cac-competitions-b7dcc.firebaseapp.com",
  projectId: "cac-competitions-b7dcc",
  storageBucket: "cac-competitions-b7dcc.appspot.com",
  messagingSenderId: "684936810582",
  appId: "1:684936810582:web:d02d433f0e90b4df29ebf7",
  measurementId: "G-ZN1BV2QTH8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getStorage(firebaseApp);
firebase.initializeApp(firebaseConfig);
// const db = firebase.storage();
const projectFirestore = firebase.firestore();
export {db, projectFirestore};
