// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS2GZum41PF8TXVwt7jjU4ZLlT41TzGow",
  authDomain: "pablocortes-blog.firebaseapp.com",
  projectId: "pablocortes-blog",
  storageBucket: "pablocortes-blog.appspot.com",
  messagingSenderId: "1018964193096",
  appId: "1:1018964193096:web:499abda1bea8826752cd7d",
  measurementId: "G-RJE1LXT94F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore(app);

//Get blog posts from the firestore database
export const getAllPosts = async () => {
  const postsCollection = collection(db, 'Blog-posts');
  const postsSnapshot = await getDocs(postsCollection, 'Posts');
  const postsList = postsSnapshot.docs.map( (doc) => ({...doc.data(), id: doc.id}));
  return postsList;
}

export const getAllPortfolioProjects = async () => {
  const projectsCollection = collection(db, 'Blog-posts');
  const projectsSnapshot = await getDocs(projectsCollection, 'Posts');
  const projectsList = projectsSnapshot.docs.map( (doc) => ({...doc.data(), id: doc.id}));
  return projectsList;
}

export default app;