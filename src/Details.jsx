import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const toy = useLoaderData();
    console.log(toy);
    return (
        
        <div>
            Product details!<br />
            <img src={toy.photoURL} /><p>{toy.name}</p><p>{toy.email}</p><p>{toy.toyName}</p><p>{toy.cate}</p><p>{toy.cateS}</p><p>{toy.quantity}</p><p>{toy.price}</p><p>{toy?.ratings}</p><p>{toy?.details}</p>
        </div>
    );
};

export default Details;