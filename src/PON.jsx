import React from 'react';
import { Link } from 'react-router-dom';

const PON = () => {
    return (
        <div className='container text-center my-5'>
            <h2>Error : 404</h2>
            <h3>Page not found!!</h3>
            <Link to='/'><button type='button' className='btn btn-primary mt-4'>Back to Home</button></Link>
        </div>
    );
};

export default PON;