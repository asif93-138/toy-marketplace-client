import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Helmet } from 'react-helmet-async';

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
        
        fetch('https://toy-marketplace-server-q36p.onrender.com/toys', {
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
        <div className='container my-5'>
                <Helmet>
        <title>LT World | Toy Adding</title>
      </Helmet>
          <h2 className='text-center mb-5'>Enter your toy details below</h2>
        <form onSubmit={dbInput} className='w-50 log-i mx-auto'>
        <label htmlFor="name" className=''><b>Seller Name (Default) :</b></label>
        <input type='text' name='name' className='form-control mb-3 border-primary' defaultValue={user.displayName} readOnly />
        <label htmlFor="email" className=''><b>Seller Email (Default) :</b></label>
        <input type='email' name='email' className='form-control mb-3 border-primary' defaultValue={user.email} readOnly />
        <label htmlFor="toyName" className=''><b>Name of your Toy :</b></label>
        <input type='text' name='toyName' className='form-control mb-3 border-primary' placeholder='toy name' />
        <label htmlFor="photoURL" className=''><b>Photo URL of your Toy :</b></label>
        <input type='url' name='photoURL' className='form-control mb-3 border-primary' placeholder='photo url' />
        <label htmlFor="cate" className=''><b>Select your Toy Sub-Category:</b></label>
        <select className="form-control mb-3 border-primary" name="cate">
          <option>Science Kits</option>
          <option>Math Learning Toys</option>
          <option>Engineering Kits</option>
        </select>
        <label htmlFor="quantity" className=''><b>Quantity of your Toy :</b></label>
        <input type='number' name='quantity' className='form-control mb-3 border-primary' placeholder='available quantity' />
        <label htmlFor="price" className=''><b>Price of your Toy :</b></label>
        <input type='number' name='price' className='form-control mb-3 border-primary' placeholder='price' />
        <label htmlFor="ratings" className=''><b>Ratings of your Toy :</b></label>
        <input type='number' name='ratings' className='form-control mb-3 border-primary' placeholder='ratings' step="0.5" />
        <label htmlFor="details" className=''><b>Description of your Toy :</b></label>
        <textarea className="form-control mb-3 border-primary" rows="5" name="details" placeholder='details description'></textarea>
        <button type='submit' className='btn btn-primary w-100'>Submit</button>
      </form>
        </div>
    );
};

export default AddingToy;