import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyCWeTcNCYYWJ_u6BbHHnxPqQmqRcEPmAPg",

authDomain: "robrun-git.firebaseapp.com",

projectId: "robrun-git",

storageBucket: "robrun-git.firebasestorage.app",

messagingSenderId: "736942180958",

appId: "1:736942180958:web:de6c22d2c3d1d051b582cf"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
};