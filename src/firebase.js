import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXDUIIKJOH5tsPeinaG7R8TIK2KjQiv4o",
  authDomain: "never-alone-e6913.firebaseapp.com",
  projectId: "never-alone-e6913",
  storageBucket: "never-alone-e6913.firebasestorage.app",
  messagingSenderId: "287368257036",
  appId: "1:287368257036:web:ab5912b7f3ae6f6716d829",
  measurementId: "G-HQ2YB5R0XY"
};

// Initialize Firebase safely
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider, signInWithPopup };
