import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const toy = location.state.dataObj
    return (
        
        <div className='container mt-4'>
                  <Helmet>
        <title>LT World | Toy Details</title>
      </Helmet>
            <h2 className='text-center'>Toy Details</h2>
            <article>
            <img src={toy.photoURL} className='img-fluid my-4' />
            <p><b>Toy Name : </b>{toy.toyName}</p>
            <p><b>Seller : </b>{toy.name}</p>
            <p><b>Seller Email : </b>{toy.email}</p>
            <p><b>Sub-Category : </b>{toy.cate}</p>
            <p><b>Price : </b>{toy.price}</p>
            <p><b>Rating : </b>{toy?.ratings}</p>
            <p><b>Available quantity : </b>{toy.quantity}</p>
            <p><b>Description : </b>{toy.details}</p>
            </article>
        </div>
    );
};

export default Details;