import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const toy = useLoaderData();
    console.log(toy);
    function updateToy(event) {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const photoURL = form.photoURL.value;
        const cate = form.cate.value;
        const cateS = form.cateS.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const details = form.details.value;
        const updatedToy = {toyName, photoURL, cate, cateS, quantity, price, ratings, details};
        console.log(updatedToy);
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
              document.getElementsByTagName('form')[0].style.display = 'none';
            }
          })
      }
    return (
        <div>
                  <form onSubmit={updateToy}>
        <input type='text' name='toyName' className='' defaultValue={toy.toyName} />
        <input type='url' name='photoURL' className='' placeholder={toy.photoURL} />
        <input type='text' name='cate' className='' placeholder={toy.cate} />
        <input type='text' name='cateS' className='' placeholder={toy.cateS} />
        <input type='number' name='quantity' className='' placeholder={toy.quantity} />
        <input type='number' name='price' className='' defaultValue={toy.price} />
        <input type='number' name='ratings' className='' placeholder='ratings' step="0.5" defaultValue={toy.ratings} />
        <textarea className="form-control" rows="5" name="details" placeholder='details description' defaultValue={toy.details}></textarea>
        <button type='submit' className=''>Update</button>
      </form>
        </div>
    );
};

export default Update;