import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDv2Pr4JFmXMSFrrqxAAterG-f2rm27NKg",
  authDomain: "react-netflix-clone-a56dd.firebaseapp.com",
  projectId: "react-netflix-clone-a56dd",
  storageBucket: "react-netflix-clone-a56dd.appspot.com",
  messagingSenderId: "187632720041",
  appId: "1:187632720041:web:7b87f61f24c26c2e1031b8",
  measurementId: "G-QQC7YRBMGJ",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
