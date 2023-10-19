import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANQCaRB69Kp98nOMej_Xs-hCr6AeaC6Ug",
  authDomain: "blog-992fc.firebaseapp.com",
  projectId: "blog-992fc",
  storageBucket: "blog-992fc.appspot.com",
  messagingSenderId: "783494864781",
  appId: "1:783494864781:web:0bd8e0447f2f0e72d5e7c4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
