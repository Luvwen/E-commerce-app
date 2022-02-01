import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAGF0Z4Q4KAGLhrHJXegrjOW3vUL_Z2ywg',
  authDomain: 'ecommerce-app-46564.firebaseapp.com',
  projectId: 'ecommerce-app-46564',
  storageBucket: 'ecommerce-app-46564.appspot.com',
  messagingSenderId: '1078445115938',
  appId: '1:1078445115938:web:3efffc11625d6e7a18187b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
export { db, app, provider };
