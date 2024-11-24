import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    databaseURL: "YOUR_DATABASE_URL"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);








import { remove, ref } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

function deletePost(postId) {
    const postRef = ref(db, `posts/${postId}`);
    remove(postRef).then(() => {
        loadPosts();
    });
}

