import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKgIATxqwd3TEFHVDjiz4tu5mSYHTM6W4",
    authDomain: "eshop-c087d.firebaseapp.com",
    projectId: "eshop-c087d",
    storageBucket: "eshop-c087d.appspot.com",
    messagingSenderId: "683943418884",
    appId: "1:683943418884:web:71301d1765d535f29fa951",
    measurementId: "G-NGTMR04RCN",
};

const app = initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app)

// const auth = firebase.auth();

const auth = getAuth(app);

export { db, auth };
