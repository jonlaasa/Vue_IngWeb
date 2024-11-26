// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAuwqayCmyyCpzE2UXStVoM92o8bgpbEYQ",
    authDomain: "vueagenda-2621d.firebaseapp.com",
    projectId: "vueagenda-2621d",
    storageBucket: "vueagenda-2621d.appspot.com",
    messagingSenderId: "394088358181",
    appId: "1:394088358181:web:3b8e2831c7daf315f6facc"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar Firestore para usarlo en otros archivos
export { db, collection, addDoc, getDocs, deleteDoc, doc };
