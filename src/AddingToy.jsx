import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const AddingToy = () => {
    const { user, delLog, setDelLog } = useContext(AuthContext);
    function dbInput(event) {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const photoURL = form.photoURL.value;
        const cate = form.cate.value;
        
        const quantity = form.quantity.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const details = form.details.value;
        const toy = {name, email, toyName, photoURL, cate, quantity, price, ratings, details};
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
            setDelLog(!delLog);
          }
        })
        
      }
    return (
        <div>
                  <form onSubmit={dbInput}>
        <input type='text' name='name' className='' defaultValue={user.displayName} readOnly />
        <input type='email' name='email' className='' defaultValue={user.email} readOnly />
        <input type='text' name='toyName' className='' placeholder='toy name' />
        <input type='url' name='photoURL' className='' placeholder='photo url' />
        <select className="" name="cate">
          <option>Science Kits</option>
          <option>Math Learning Toys</option>
          <option>Engineering Kits</option>
        </select>
        <input type='number' name='quantity' className='' placeholder='quantity' />
        <input type='number' name='price' className='' placeholder='price' />
        <input type='number' name='ratings' className='' placeholder='ratings' step="0.5" />
        <textarea className="" rows="5" name="details" placeholder='details description'></textarea>
        <button type='submit' className=''>Submit</button>
      </form>
        </div>
    );
};

export default AddingToy;