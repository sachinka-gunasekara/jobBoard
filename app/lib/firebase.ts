import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj8F7h0mgxORVmkZX-ZV1D_06HqOBL83Q",
  authDomain: "job-board-87ec2.firebaseapp.com",
  projectId: "job-board-87ec2",
  storageBucket: "job-board-87ec2.firebasestorage.app",
  messagingSenderId: "939008922243",
  appId: "1:939008922243:web:854dda3dd13b3fe0b5c1b6",
  measurementId: "G-ZMCQX7YC18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth=getAuth();

export default app