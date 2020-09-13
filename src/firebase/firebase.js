import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSENGER_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
// Initialize Firestore
const initializeApp = firebase.initializeApp(firebaseConfig);
const firestore = initializeApp.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const database = firestore.collection("expenses");
export { firebase, googleAuthProvider };
