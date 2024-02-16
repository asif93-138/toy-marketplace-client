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
        console.log(id);
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
        <div>
            {toys.map(x => (<div key={x._id}>
              <img src={x.photoURL} className='img-fluid' /><p>{x.name}</p><p>{x.email}</p><p>{x.toyName}</p><p>{x.cate}</p><p>{x.cateS}</p><p>{x.quantity}</p><p>{x.price}</p><Link to='/update' state={{formData: x}}><button type='button' className=''>Update</button></Link><button onClick={() => deleteToy(x._id)} type='button' className=''>Delete</button>
      </div>))}
        </div>
    );
};

export default MyToys;