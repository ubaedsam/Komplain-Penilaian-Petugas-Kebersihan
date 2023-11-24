import { createApp } from 'vue'
import App from './App.vue'

// Library Firebase / Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Library Sweet Alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// Library Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
    apiKey: "AIzaSyCHsuv_lGc-5wPeLF-NHR1euZZpXn8MxFM",
    authDomain: "testing-ac82a.firebaseapp.com",
    projectId: "testing-ac82a",
    storageBucket: "testing-ac82a.appspot.com",
    messagingSenderId: "840275921246",
    appId: "1:840275921246:web:af22c77f0b4d388feba7cf",
    measurementId: "G-NKQT259BJH"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp);
export { storage }

createApp(App).use(VueSweetalert2).mount('#app')