import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiia39StQ8AdUWEFR1Ix5jU6GrM_q1Yyg",
    authDomain: "netflix-bd782.firebaseapp.com",
    projectId: "netflix-bd782",
    storageBucket: "netflix-bd782.appspot.com",
    messagingSenderId: "727263130019",
    appId: "1:727263130019:web:6f84a87503963d8c216a16"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

