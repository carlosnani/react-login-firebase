import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
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

    function signInWithGoogle() {
        return signInWithPopup(auth, GoogleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log("Auth", currentUser);
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UseAuthContext.Provider
            value={{ signUp, signIn, signInWithGoogle, logOut, auth, user }}>
            {children}
        </UseAuthContext.Provider>
    )
};

