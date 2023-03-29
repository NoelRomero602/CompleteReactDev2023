import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyBzTBn9w-FbQ-fzSN1QBzuCgmdTJWQDb3g",
    authDomain: "crwn-clothing-db-3af95.firebaseapp.com",
    projectId: "crwn-clothing-db-3af95",
    storageBucket: "crwn-clothing-db-3af95.appspot.com",
    messagingSenderId: "38626723659",
    appId: "1:38626723659:web:5c4cfdcb035f28b2510ace"
  };
  

  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth(); 
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 

  export const db = getFirestore(); 

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); 

    console.log(userDocRef); 

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot); 
    console.log(userSnapshot.exists()); 

    if(!userSnapshot.exists()) {
        const {displayName, email} =  userAuth; 
        const creatAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                creatAt,
            }); 
        } catch (error) {
            console.log('error creating the user', error.message);
        }

    }

    return userDocRef; 
  }

