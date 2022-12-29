import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBb-Z12xZtC-ky4RccqEeTD5jl1N3tpBs8",
    authDomain: "gpt-articles-gen.firebaseapp.com",
    projectId: "gpt-articles-gen",
    storageBucket: "gpt-articles-gen.appspot.com",
    messagingSenderId: "564856714554",
    appId: "1:564856714554:web:e4ce155e664a3dfa378c03",
    measurementId: "G-MNRLD4EZGE"
  };
let app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db = getFirestore(app);
const articleDoc = (articleId) => doc(db, "articles", articleId)
const articleCollection = collection(db, "articles");

export {
  articleCollection,
  auth,
  articleDoc,
  db,
}
