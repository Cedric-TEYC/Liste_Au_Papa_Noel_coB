import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8Lgk1P2FzIjyVMw268C_YXvSJ76aiRqU",
  authDomain: "listecadeauxcob.firebaseapp.com",
  databaseURL: "https://listecadeauxcob-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "listecadeauxcob",
  storageBucket: "listecadeauxcob.firebasestorage.app",
  messagingSenderId: "494154955318",
  appId: "1:494154955318:web:bd84a246370a6b87a4b697"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
#
