import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase.config';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { user, setUser } = useContext(AuthContext); 
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
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
                navigate(from, { replace: true, state: {dataObj: location.state?.from.state.dataObj} });
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
                navigate(from, { replace: true, state: {dataObj: location.state?.from.state.dataObj} });
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
        <div className='container my-5 text-center'>
                  <Helmet>
        <title>LT World | Login</title>
      </Helmet>
            <h2>Login</h2>
            {user ?
                <>
                    <p className='my-4'>Please logout first!</p><button onClick={so} type='button' className='btn btn-primary'>Logout</button>
                </>
                :
                <>
                    <form onSubmit={siwE} className='w-50 log-i text-start mx-auto'>
                        <label htmlFor="email">Email:</label>
                        <input type='email' className='form-control mb-3 border-primary' name='email' required />
                        <label htmlFor="password">Password:</label>
                        <input type='password' className='form-control mb-3 border-primary' name='password' required />
                        <button type='submit' className='btn btn-primary'>Submit</button>
                        <p>{error}</p>
                    </form>
                    <h3>Or</h3>
                    <button onClick={siwG} type='button' className='btn btn-primary mt-4'><i className="bi bi-google me-2"></i> Log in with Google</button>
                    <p className='mt-4'><b>New to this site? Please, <Link to='/signup'>Sign up</Link></b></p>
                </>
            }


        </div>
    );
};

export default Login;