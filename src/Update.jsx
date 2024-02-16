import React, { useContext } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Update = () => {
  const {delLog, setDelLog} = useContext(AuthContext);
    const location = useLocation();
    const toy = location.state.formData;
    function updateToy(event) {
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photoURL.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const details = form.details.value;
        const updatedToy = { photoURL, quantity, price, ratings, details};
        fetch(`http://localhost:3000/toys/${toy._id}`, {
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
            }
          })
      }
    return (
        <div>
      <form onSubmit={updateToy}>
        <input type='text' name='toyName' className='' defaultValue={toy.toyName} />
        <input type='url' name='photoURL' className='' placeholder={toy.photoURL} />
        <input type='text' name='cate' className='' defaultValue={toy.cate} />
        <input type='number' name='quantity' className='' placeholder={toy.quantity} />
        <input type='number' name='price' className='' placeholder={toy.price} />
        <input type='number' name='ratings' className='' step="0.5" placeholder={toy.ratings} />
        <textarea className="form-control" rows="5" name="details" placeholder={toy.details}></textarea>
        <button type='submit' className=''>Update</button>
      </form>
        </div>
    );
};

export default Update;