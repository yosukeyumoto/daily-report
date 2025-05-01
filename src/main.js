// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { fetchHistoryData } from "./my-modules/fetchHistoryData";
import { submitData } from "./my-modules/submit-data";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID
  // apiKey: "AIzaSyD_N0cZpUA9-x2DuAVEkpZMf8vyLXOvXEM",
  // authDomain: "daily-report-3b311.firebaseapp.com",
  // projectId: "daily-report-3b311",
  // storageBucket: "daily-report-3b311.firebasestorage.app",
  // messagingSenderId: "481226551044",
  // appId: "1:481226551044:web:ca0494ebca5d9a719caa51"
};

// Initialize Firebase(Firebase自体の初期化)
const app = initializeApp(firebaseConfig);

// Cloud Firestoreの初期化・オブジェクト取得(DBを使う場合は上記を合わせて記述)
const db = getFirestore(app);

// Cloud Firestoreから取得したデータを表示する
if(document.getElementById("js-history")) {
  fetchHistoryData(getDocs, collection, db);
}

// Cloud Firestoreにデータを送信する
if (document.getElementById("js-form")) {
  document.getElementById("js-form").addEventListener("submit", (e) => submitData(e, addDoc, collection, db));
};