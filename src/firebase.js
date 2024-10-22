import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAWk_ttm49qPBJgbV1f4YNdDrMgiJvJxdA',
  authDomain: 'blog-3f944.firebaseapp.com',
  projectId: 'blog-3f944',
  storageBucket: 'blog-3f944.appspot.com',
  messagingSenderId: '544316683260',
  appId: '1:544316683260:web:edfad3d0c371d66907f879',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
