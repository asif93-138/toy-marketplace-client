import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import auth from '../firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState('');
    function suwE(event) {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log({ name, email, password, photoURL });
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
      }).then(() => {
        // Profile updated!
        setError('');
        form.reset();
      }).catch((error) => {
        // An error occurred
        setError(error);
      });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + ' ' + errorMessage);
  });
        
    }
    return (
        <div className='container my-5 text-center'>
                <Helmet>
        <title>LT World | Register</title>
      </Helmet>
            <h2>Sign Up!</h2>
            {
                user ? <p className='mt-5'>Please, logout first!</p>
                    :
                    <form onSubmit={suwE} className='w-50 text-start mx-auto'>
                        <label htmlFor="name">Name:</label>
                        <input type='text' className='form-control mb-3 border-primary' name='name' required />
                        <label htmlFor="email">Email:</label>
                        <input type='email' className='form-control mb-3 border-primary' name='email' required />
                        <label htmlFor="password">Password:</label>
                        <input type='password' className='form-control mb-3 border-primary' name='password' required />
                        <label htmlFor="photoURL">Photo URL:</label>
                        <input type='url' className='form-control mb-3 border-primary' name='photoURL' />
                        <p>{error}</p>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                        
                        <p className='mt-4 text-center'><b>Already have an account? &nbsp;<Link to='/login'>Log in!</Link></b></p>
                    </form>
            }

        </div>
    );
};

export default Register;