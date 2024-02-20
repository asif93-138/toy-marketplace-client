import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PON = () => {
    return (
        <div className='container text-center my-5'>
                  <Helmet>
        <title>LT World | Error</title>
      </Helmet>
            <h2>Error : 404</h2>
            <h3>Page not found!!</h3>
            <Link to='/'><button type='button' className='btn btn-primary mt-4'>Back to Home</button></Link>
        </div>
    );
};

export default PON;