
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyByZmdqI1YADbnxpKiTb8wqlj1xr_ggHp0",
  authDomain: "react-portfolio-shivam.firebaseapp.com",
  projectId: "react-portfolio-shivam",
  storageBucket: "react-portfolio-shivam.appspot.com",
  messagingSenderId: "705262837991",
  appId: "1:705262837991:web:d7bbb12ac304f60845c242"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore()