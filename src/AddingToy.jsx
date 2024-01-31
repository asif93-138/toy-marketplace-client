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
        const photoURL = form.photoURL.value;
        const cate = form.cate.value;
        const cateS = form.cateS.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const details = form.details.value;
        const toy = {name, email, toyName, photoURL, cate, cateS, quantity, price, ratings, details};
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
        <input type='url' name='photoURL' className='' placeholder='photo url' />
        <input type='text' name='cate' className='' placeholder='category' />
        <input type='text' name='cateS' className='' placeholder='sub category' />
        <input type='number' name='quantity' className='' placeholder='quantity' />
        <input type='number' name='price' className='' placeholder='price' />
        <input type='number' name='ratings' className='' placeholder='ratings' step="0.5" />
        <textarea className="form-control" rows="5" name="details" placeholder='details description'></textarea>
        <button type='submit' className=''>Submit</button>
      </form>
        </div>
    );
};

export default AddingToy;