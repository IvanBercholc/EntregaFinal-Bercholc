import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB85Gk62kXfkJFCUCImpl3NAJ-TizII6vw",
  authDomain: "rica-16d3e.firebaseapp.com",
  projectId: "rica-16d3e",
  storageBucket: "rica-16d3e.appspot.com",
  messagingSenderId: "980219380716",
  appId: "1:980219380716:web:04324ff5e8300743b6f6c9"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);