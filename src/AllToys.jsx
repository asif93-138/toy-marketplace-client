import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AllToys = () => {
    const navigate = useNavigate();
    const {user, count} = useContext(AuthContext);
    const [searched, setSearched] = useState(['initial']);
    const [perPage, setPerPage] = useState([]);
    const [pageNoUI, setPageNoUI] = useState(1);
    const totalPages = Math.ceil(count.length / 20);
    const pageNo = [...Array(totalPages).keys()];
    useEffect(() => {
      if (count != 'loading!') {setPerPage(count.slice(0, 20));}
    }, [count])
    function toySearch() {
        if (!Boolean(document.getElementById('search').value.trim())) {setSearched([]); document.getElementById('search').value = '';}
        else {
          const arr = [];
          count.forEach(x => {
            if (x.toyName.trim().toLowerCase() == document.getElementById('search').value.trim().toLowerCase()) {
              arr.push(x);
            }
          })
          setSearched(arr);
          document.getElementById('search').value = '';
        }
      }
      function pageHandler(id) {
        setPerPage(count.slice(20 * id, 20 * id + 20)); setPageNoUI(id + 1);
      }
      function viewingDetail(id, data) {
        if (!user) {
          alert('Please, login first!');
        }
        navigate('/details', {state: { dataObj: data }});
      }
    return (
        <div className='container my-5'>
                <Helmet>
        <title>LT World | All Toys</title>
      </Helmet>
          <h2 className='text-center mb-5'>All Toys</h2>
            <div className='d-flex mx-auto my-3 w-75'><input id='search' type='text' className='form-control border-primary rounded' placeholder='search by toy name' /><button onClick={toySearch} type='button' className='btn btn-primary ms-3'>Search</button></div>
            {searched[0] == 'initial' ? <></> : <>
                {(!searched.length) ? <p className='text-center'><b>No results fond!</b></p> : <>{searched.map(x => <p key={x._id} className='text-center'><b>Toy Name : </b>{x.toyName} <br /><button onClick={() => viewingDetail(x._id, x)} type='button' className='btn btn-primary mt-3'>View Details</button></p>)}</>}
            </>}
            {count == 'loading!' ? <h2>Loading!!</h2> :  <div className='table-responsive'><table className="table my-5 text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Seller</th>
      <th scope="col">Toy Name</th>
      <th scope="col">Sub-Category</th>
      <th scope="col">Price</th>
      <th scope="col">Available Quantity</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {perPage.map(x => (<tr key={x._id}>
      <th scope='row'>{perPage.indexOf(x) + 1}.</th><td>{x?.name}</td><td>{x.toyName}</td><td>{x.cate}</td><td>{x.price}</td><td>{x.quantity}</td><td><button onClick={() => viewingDetail(x._id, x)} type='button' className='btn btn-primary'>View Details</button></td>
      </tr>))}
  </tbody>
</table></div>}

      <h4 className='text-center'>Page No : {pageNoUI}</h4>
      <div className='text-center'>{pageNo.map(x => <button onClick={() => pageHandler(x)} key={x} type='button' className='btn text-primary mx-2'><b>{x + 1}</b></button> )}</div>  
        </div>
    );
};

export default AllToys;
