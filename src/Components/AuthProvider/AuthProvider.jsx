import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Auth/firebase.config';

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // Create New User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Auth Change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            
        } )
    }, [])

    const authInfo = { user, createUser, signInUser }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;