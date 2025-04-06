import { initializeApp , getApps } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { 
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
 } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAXCrWpd4MKGrJv-j9trG0g8_pQJaG_qFw",
    authDomain: "laser-hacks-2025.firebaseapp.com",
    projectId: "laser-hacks-2025",
    storageBucket: "laser-hacks-2025.firebasestorage.app",
    messagingSenderId: "857835937886",
    appId: "1:857835937886:web:ade3ad495085378d3494cf",
    measurementId: "G-SFJLMS9X0B"
});

// Initialize Firebase
const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseConfig);

// DOM Components
const signInBtn = document.getElementById('googleSignIn');
const signOutBtn = document.getElementById('googleSignOut');
const authStatus = document.getElementById('authStatus');

// Login
signInBtn.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then(result => {
            window.location.href = "main-page.html";
            console.log("✅ Signed in as:", result.user.displayName);
            authStatus.innerText = `Signed in as ${result.user.displayName}`;
        })
        .catch(error => {
            console.error("❌ Sign in error:", error.message);
            authStatus.innerText = `Error: ${error.message}`;
        });
});

// Logout
signOutBtn.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            window.location.href = "index.html";
            console.log("✅ Signed out");
            authStatus.innerText = "Signed out";
        })
        .catch(error => {
            console.error("❌ Sign out error:", error.message);
            authStatus.innerText = `Error: ${error.message}`;
        });
});

// Monitoring login state
onAuthStateChanged(auth, user => {

    if(user != null) {
        console.log("Logged in");
        
    }
    else {
        console.log("Logged Out");
        //location.href = "index.html";
    }
});

console.log("Welcome jittle");

