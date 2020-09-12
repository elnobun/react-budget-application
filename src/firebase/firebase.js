import firebase from "firebase/app";
import "firebase/firestore";
import merge from "validator/es/lib/util/merge";

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
const db = firebase.initializeApp(firebaseConfig).firestore();

const database = db.collection("expenses");

export default database;
