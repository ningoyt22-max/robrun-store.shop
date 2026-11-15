import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWeTcNCYYWJ_u6BbHHnxPqQmqRcEPmAPg",
  authDomain: "robrun-git.firebaseapp.com",
  projectId: "robrun-git",
  storageBucket: "robrun-git.firebasestorage.app",
  messagingSenderId: "736942180958",
  appId: "1:736942180958:web:de6c22d2c3d1d051b582cf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};