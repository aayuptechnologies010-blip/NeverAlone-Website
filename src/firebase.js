import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot, collection, getDocs, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXDUIIKJOH5tsPeinaG7R8TIK2KjQiv4o",
  authDomain: "neuravia-e6913.firebaseapp.com",
  projectId: "neuravia-e6913",
  storageBucket: "neuravia-e6913.firebasestorage.app",
  messagingSenderId: "287368257036",
  appId: "1:287368257036:web:ab5912b7f3ae6f6716d829",
  measurementId: "G-HQ2YB5R0XY"
};

// Initialize Firebase safely
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { 
  app, 
  auth, 
  db, 
  googleProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  collection,
  getDocs,
  serverTimestamp
};
