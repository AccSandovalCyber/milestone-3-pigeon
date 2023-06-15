import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app);
