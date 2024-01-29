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
        const updatedToy = {toyName, photoURL, cate, cateS, quantity, price};
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
        <input type='number' name='price' className=''  defaultValue={toy.price}/>
        <button type='submit' className=''>Update</button>
      </form>
        </div>
    );
};

export default Update;