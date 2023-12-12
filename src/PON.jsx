import React from 'react';
import { Link } from 'react-router-dom';

const PON = () => {
    return (
        <div>
            <p>Wrong address bro!!</p>
            <Link to='/'><button type='button' className=''>Back to Home</button></Link>
        </div>
    );
};

export default PON;