import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,  
    signInWithRedirect,   
    sendPasswordResetEmail,
   
} from "firebase/auth";
import { auth } from "../firebase";
 

export const UseAuthContext = createContext();

export const GlobalAuth = ({ children }) => {

    const [user, setUser] = useState({});


    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }

    function signInWithGoogle() {
        const googleAuthProvider = new GoogleAuthProvider(); 
        return signInWithPopup(auth, googleAuthProvider);
    }

    function signInWithGoogleRedirect() {
        const provider = new GoogleAuthProvider();
        return signInWithRedirect(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UseAuthContext.Provider
            value={{ signUp,resetPassword, signIn, signInWithGoogle, logOut, auth, user }}>
            {children}
        </UseAuthContext.Provider>
    )
};

