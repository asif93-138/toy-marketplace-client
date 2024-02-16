import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const AllToys = () => {
    const navigate = useNavigate();
    const {user, count} = useContext(AuthContext);
    const [searched, setSearched] = useState(['initial']);
    const [perPage, setPerPage] = useState([]);
    const [pageNoUI, setPageNoUI] = useState(1);
    const totalPages = Math.ceil(count.length / 20);
    const pageNo = [...Array(totalPages).keys()];
    useEffect(() => {
        setPerPage(count.slice(0, 20));
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
        navigate(`/details/${id}`, {state: { dataObj: data }});
      }
    return (
        <div>
            <input id='search' type='text' className='' placeholder='toy search' /><button onClick={toySearch} type='button' className=''>Search</button>
            {searched[0] == 'initial' ? <></> : <>
                {(!searched.length) ? <p><b>No results fond!</b></p> : <>{searched.map(x => <p key={x._id}><b>Toy Name : </b>{x.toyName}</p>)}</>}
            </>}
            <h4>Page No : {pageNoUI}</h4>
                  {perPage.map(x => (<div key={x._id}>
          <img src={x.photoURL} className='img-fluid' /><p>{x.name}</p><p>{x.email}</p><p>{x.toyName}</p><p>{x.cate}</p><p>{x.cateS}</p><p>{x.price}</p><p>{x?.ratings}</p><button onClick={() => viewingDetail(x._id, x)} type='button' className=''>View Details</button>
      </div>))}
      {pageNo.map(x => <button onClick={() => pageHandler(x)} key={x} type='button' className=''>page - {x + 1}</button> )}
        </div>
    );
};

export default AllToys;