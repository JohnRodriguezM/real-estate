

import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_FIREBASE,
  projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE,
  appId: import.meta.env.VITE_APP_ID_FIREBASE,
};

console.log(firebaseConfig)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//! Firestore functions

export const addElementDb = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "users"), data);

    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}