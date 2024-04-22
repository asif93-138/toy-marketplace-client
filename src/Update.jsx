import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { Helmet } from 'react-helmet-async';

const Update = () => {
  const {delLog, setDelLog} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const toy = location.state.formData;
    function updateToy(event) {
        event.preventDefault();
        const form = event.target;
       
        const quantity = form.quantity.value;
        const price = form.price.value;
       
        const details = form.details.value;
        const updatedToy = { quantity, price, details };
        fetch(`https://toy-marketplace-server-q36p.onrender.com/toys/${toy._id}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
          })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            if (res.modifiedCount) {
              alert('Data updated successfully!')
              form.reset();
              setDelLog(!delLog);
              document.getElementsByTagName('form')[0].style.display = 'none';
              navigate('/mytoys');
            }
          })
      }
    return (
        <div className='container my-5'>
                <Helmet>
        <title>LT World | Update</title>
      </Helmet>
          <h2 className='text-center mb-3'>Update your toy</h2>
          <h5 className='text-center mb-3'>Name : {toy.toyName}</h5><h5 className='text-center mb-5'>Sub Category : {toy.cate}</h5>
      <form onSubmit={updateToy} className='w-50 log-i mx-auto'>
        <label htmlFor="quantity" className=''><b>Quantity of your Toy :</b></label>
        <input type='number' name='quantity' className='form-control mb-3 border-primary' placeholder={toy.quantity} />
        <label htmlFor="price" className=''><b>Price of your Toy :</b></label>
        <input type='number' name='price' className='form-control mb-3 border-primary' placeholder={toy.price} />
        <label htmlFor="details" className=''><b>Description of your Toy :</b></label>
        <textarea className="form-control mb-3 border-primary" rows="5" name="details" placeholder={toy.details}></textarea>
        <button type='submit' className='btn btn-primary'>Update</button>
      </form>
        </div>
    );
};

export default Update;