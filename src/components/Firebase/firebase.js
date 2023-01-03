import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_firebaseAPIKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // databaseURL: process.env.REACT_APP_databaseURL,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // firebase ni rowell
  apiKey: "AIzaSyDbm1wB8xv6ggTM-5EcthMQex-bfjUULhQ",
  authDomain: "capstone-project-555c5.firebaseapp.com",
  projectId: "capstone-project-555c5",
  storageBucket: "capstone-project-555c5.appspot.com",
  messagingSenderId: "519367118899",
  appId: "1:519367118899:web:096402830941870a7c1346",
  measurementId: "G-CV9B6BVH86",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = getStorage(firebaseApp);
const auth = firebase.auth();
export { db, auth, storage };
