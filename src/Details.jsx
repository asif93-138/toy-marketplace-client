import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const toy = useLoaderData();
    console.log(toy);
    return (
        
        <div>
            Product details!
            <p>{toy.name}</p><p>{toy.email}</p><p>{toy.toyName}</p><p>{toy.price}</p>
        </div>
    );
};

export default Details;