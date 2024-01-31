import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState([]);
  const [perPage, setPerPage] = useState([]);
  const [pageNoUI, setPageNoUI] = useState(1);
  const [searched, setSearched] = useState(['initial']);
  const totalPages = Math.ceil(count.length / 20);
  const pageNo = [...Array(totalPages).keys()];
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(res => {
      setCount(res);
      setPerPage(res.slice(0, 20));
    })
  }, [])
  const navigate = useNavigate();
  function viewingDetail(id) {
    if (!user) {
      alert('Please, login first!');
    }
    navigate(`/details/${id}`);
  }
  function pageHandler(id) {
    setPerPage(count.slice(20 * id, 20 * id + 20)); setPageNoUI(id + 1);
  }
  function toySearch() {
    fetch(`http://localhost:3000/search/${document.getElementById('search').value}`)
    .then(res => res.json())
    .then(data => {
      setSearched(data);
    })
    document.getElementById('search').value = '';
  }
  return (
    <>
      {user  && <b><p>{user?.email}</p><p>{user?.displayName}</p></b>}
      <h4>Page No : {pageNoUI}</h4>
      <input id='search' type='text' className='' placeholder='toy search' /><button onClick={toySearch} type='button' className=''>Search</button>
      { searched[0] == 'initial' ? <></> : <>
      {(!searched.length) ? <p><b>No results fond!</b></p> : <>{searched.map(x => <p key={x._id}><b>Toy Name : </b>{x.toyName}</p>)}</> }
      </>}
      {perPage.map(x => (<div key={x._id}>
          <img src={x.photoURL} /><p>{x.name}</p><p>{x.email}</p><p>{x.toyName}</p><p>{x.cate}</p><p>{x.cateS}</p><p>{x.price}</p><p>{x?.ratings}</p><button onClick={() => viewingDetail(x._id)} type='button' className=''>View Details</button>
      </div>))}
      {pageNo.map(x => <button onClick={() => pageHandler(x)} key={x} type='button' className=''>page - {x + 1}</button> )}
    </>
  )
}

export default App
