import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const lData = useLoaderData();
    useEffect(() => {
        setToys(lData);
    }, [])
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
            fetch(`http://localhost:3000/mytoys/${user.displayName}`)
            .then(res => res.json())
            .then(res => setToys(res))
          }
        })
      }
      }
    return (
        <div>
            {toys.map(x => (<div key={x._id}>
          <p>{x.name}</p><p>{x.email}</p><p>{x.toyName}</p><p>{x.price}</p><Link to={`/update/${x._id}`}><button type='button' className=''>Update</button></Link><button onClick={() => deleteToy(x._id)} type='button' className=''>Delete</button>
      </div>))}
        </div>
    );
};

export default MyToys;