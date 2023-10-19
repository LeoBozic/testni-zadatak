import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRgIhlhTn62KE6P2L9fZUjU9Jb33HCTiY",
  authDomain: "testni-zadatak-3eda9.firebaseapp.com",
  projectId: "testni-zadatak-3eda9",
  storageBucket: "testni-zadatak-3eda9.appspot.com",
  messagingSenderId: "834001833665",
  appId: "1:834001833665:web:8694d4f0c1a4381bf6ce40",
  measurementId: "G-BM6QBNQSGV",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
