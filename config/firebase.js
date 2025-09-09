import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAWNqiYDJeoZZzI-s6n2HJ4y3n2hWBCe4w",
  authDomain: "aula-d4ea2.firebaseapp.com",
  databaseURL: "https://aula-d4ea2-default-rtdb.firebaseio.com",
  projectId: "aula-d4ea2",
  storageBucket: "aula-d4ea2.firebasestorage.app",
  messagingSenderId: "1076405513386",
  appId: "1:1076405513386:web:c9e367e8ae83cbdf9c74d3"
};

// Evita reinicialização em hot-reload (nodemon)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);
