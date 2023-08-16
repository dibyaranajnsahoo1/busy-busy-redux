import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { browserSessionPersistence, getAuth, setPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBlQ9tVFIEFWl9eru3A5utSE9FIHrpuMvw",
  authDomain: "busy-busy-redux.firebaseapp.com",
  projectId: "busy-busy-redux",
  storageBucket: "busy-busy-redux.appspot.com",
  messagingSenderId: "203217140290",
  appId: "1:203217140290:web:42c780185b41654c1e4bdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Enable session persistence
setPersistence(auth, browserSessionPersistence);