import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const MyToys = () => {
    const toys = [];
    const { user, count, delLog, setDelLog } = useContext(AuthContext);
    count.forEach(element => {
      if (element.email == user.email) {toys.push(element)}
    });
   
    function deleteToy(id) {
      if (confirm('Delete this toy?')) {
        
        fetch(`http://localhost:3000/toys/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.deletedCount) {
            alert('Deleted!');
            setDelLog(!delLog);
          }
        })
      }
      }
    return (
        <div className='container my-5'>
            <h2 className='text-center'>Toys added by you</h2>
            <div className='cate-grid mt-5'>
    {toys.map(x => <div key={x._id} className='card border-primary'>
        <img src={x.photoURL} className='card-img-top w-100' />
        <div className='card-body'>
        <h4 className='card-title mb-3'>Name : {x.toyName}</h4>
        <p className='card-text'>Seller : {x.name}</p>
        <p className='card-text'>Seller Email : {x.email}</p>
        <p className='card-text'>Sub-Category : {x.cate}</p>
        <p className='card-text'>Price : {x.price}</p>
        <p className='card-text'>Rating : {x.ratings}</p>
        <p className='card-text'>Available quantity : {x.quantity}</p>
        <p className='card-text'>Description : {x.details}</p>
        <p className='text-center'>
        <Link to='/update' state={{formData: x}}><button type='button' className='btn btn-primary mx-2'>Update</button></Link>
        <button onClick={() => deleteToy(x._id)} type='button' className='btn btn-primary mx-2'>Delete</button>
        </p>
        </div>
    </div>)}
    </div>
        </div>
    );
};

export default MyToys;