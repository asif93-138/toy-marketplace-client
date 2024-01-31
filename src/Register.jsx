import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import auth from '../firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

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
        <div>
            <h2>Sign Up!</h2>
            {
                user ? <p>Please, logout first!</p>
                    :
                    <form onSubmit={suwE}>
                        <input type='text' className='' name='name' required />
                        <input type='email' className='' name='email' required />
                        <input type='password' className='' name='password' required />
                        <input type='url' className='' name='photoURL' />
                        <button type='submit' className=''>Submit</button>
                        <p>{error}</p>
                        <p><b>Already have an account?<Link to='/login'>Log in!</Link></b></p>
                    </form>
            }

        </div>
    );
};

export default Register;