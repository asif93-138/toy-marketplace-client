import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const toy = useLoaderData();
    console.log(toy);
    function updateToy(event) {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const updatedToy = {toyName, price};
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
        <input type='number' name='price' className=''  defaultValue={toy.price}/>
        <button type='submit' className=''>Update</button>
      </form>
        </div>
    );
};

export default Update;