// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjCavVhBJF1chX1FHnJMT_SI9KUql643w",
    authDomain: "webtechproject-1b2fa.firebaseapp.com",
    databaseURL: "https://webtechproject-1b2fa-default-rtdb.firebaseio.com",
    projectId: "webtechproject-1b2fa",
    storageBucket: "webtechproject-1b2fa.appspot.com",
    messagingSenderId: "487797158689",
    appId: "1:487797158689:web:7adb5f0f937c5971f68460",
    measurementId: "G-CXKMNJF36C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

kayit.addEventListener('click', (e) => {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;



    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            set(ref(database, 'users/' + user.uid), {
                email: email
            })

            alert("Kullanıcı oluşturuldu");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            alert(errorMessage);
        });
})