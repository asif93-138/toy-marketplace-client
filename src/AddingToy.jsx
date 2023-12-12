import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const AddingToy = () => {
    const { user } = useContext(AuthContext);
    function dbInput(event) {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const toy = {name, email, toyName, price};
        console.log(toy);
        fetch('http://localhost:3000/toys', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.acknowledged) {
            alert('Data added successfully!');    
            form.reset();   
          }
        })
        
      }
    return (
        <div>
                  <form onSubmit={dbInput}>
        <input type='text' name='name' className='' defaultValue={user.displayName} readOnly />
        <input type='email' name='email' className='' defaultValue={user.email} readOnly />
        <input type='text' name='toyName' className='' placeholder='toy name' />
        <input type='number' name='price' className='' placeholder='price' />
        <button type='submit' className=''>Submit</button>
      </form>
        </div>
    );
};

export default AddingToy;