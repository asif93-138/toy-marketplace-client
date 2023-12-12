import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		}
	}, [])
    console.log(user);
    const authInfo = { user, setUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;