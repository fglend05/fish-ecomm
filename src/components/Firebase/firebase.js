import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbm1wB8xv6ggTM-5EcthMQex-bfjUULhQ",
  authDomain: "capstone-project-555c5.firebaseapp.com",
  projectId: "capstone-project-555c5",
  storageBucket: "capstone-project-555c5.appspot.com",
  messagingSenderId: "519367118899",
  appId: "1:519367118899:web:096402830941870a7c1346",
  measurementId: "G-CV9B6BVH86",
  // apiKey: "AIzaSyBGBK9Isicw8JlFdDevBu-iSn5NrjThxKk",
  // authDomain: "ecommerce-app-9635b.firebaseapp.com",
  // projectId: "ecommerce-app-9635b",
  // storageBucket: "ecommerce-app-9635b.appspot.com",
  // messagingSenderId: "674882093814",
  // appId: "1:674882093814:web:89ac5a9820552af260a2d7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = getStorage(firebaseApp);
const auth = firebase.auth();
export { db, auth, storage };
