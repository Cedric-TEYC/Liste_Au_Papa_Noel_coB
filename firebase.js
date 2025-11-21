// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD8Lgk1P2FzIjyVMw268C_YXvSJ76aiRqU",
    authDomain: "listecadeauxcob.firebaseapp.com",
    databaseURL: "https://listecadeauxcob-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "listecadeauxcob",
    storageBucket: "listecadeauxcob.firebasestorage.app",
    messagingSenderId: "494154955318",
    appId: "1:494154955318:web:deed82556327838ca4b697"
};

// Initialisation Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
