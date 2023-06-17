//Firebase SDK to initialize the Firebase app, access the Firestore database service, and manage user authentication with Google.
import { initializeApp } from 'firebase/app';
import { getFirestore  } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAAIDgfLMGijRneFKC6l9q6pClqm8b7M7o",
  authDomain: "milestone-p3-pigeon.firebaseapp.com",
  databaseURL: "https://milestone-p3-pigeon-default-rtdb.firebaseio.com",
  projectId: "milestone-p3-pigeon",
  storageBucket: "milestone-p3-pigeon.appspot.com",
  messagingSenderId: "2997406736",
  appId: "1:2997406736:web:8e793e724dfc9b96cf4e95",
  measurementId: "G-HRX5LPX9BN"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider, GoogleAuthProvider };