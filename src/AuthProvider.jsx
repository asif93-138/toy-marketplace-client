import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState([]);
    const [delLog, setDelLog] = useState(true);
    useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser); setLoading(false);
		});
		return () => {
			unsubscribe();
		}
	}, [])
    useEffect(() => {
        fetch('http://localhost:3000/toys')
        .then(res => res.json())
        .then(data => setCount(data))
	}, [delLog])
    const authInfo = { user, setUser, loading, count, delLog, setDelLog }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;