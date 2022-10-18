import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();


export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, providerGoogle);
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])

    const authInfo = { createUser, signInGoogle, logInUser, user, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;