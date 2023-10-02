import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC-odxZvolh6KWcCjZPadkePIVsHSinMpA",
    authDomain: "testa-car-dillership.firebaseapp.com",
    projectId: "testa-car-dillership",
    storageBucket: "testa-car-dillership.appspot.com",
    messagingSenderId: "715520940683",
    appId: "1:715520940683:web:4c396ec4dd49cb02efd28e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);

export { auth };