import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase.config';

const Login = () => {
    const { user, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const from = useLocation().state?.from.pathname || '/';
    function siwE(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode + ' ' + errorMessage);
            });
    }
    function siwG() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                setError('');
                navigate(from, { replace: true });
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                setError(errorCode + ' ' + errorMessage);
            });
    }
    function so() {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
    return (
        <div>
            <h2>Login</h2>
            {user ?
                <button onClick={so} type='button' className=''>Logout</button>
                :
                <>
                    <form onSubmit={siwE}>
                        <input type='email' className='' name='email' required />
                        <input type='password' className='' name='password' required />
                        <button type='submit' className=''>Submit</button>
                    </form>
                    <p>{error}</p>
                    <button onClick={siwG} type='button' className=''>Sign in with Google</button>
                    <p><b>New to this site? Please, <Link to='/signup'>Sign up</Link></b></p>
                </>
            }


        </div>
    );
};

export default Login;