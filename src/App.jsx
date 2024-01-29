import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState([]);
  const [perPage, setPerPage] = useState([]);
  const [pageNoUI, setPageNoUI] = useState(1);
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
  return (
    <>
      {user  && <b><p>{user?.email}</p><p>{user?.displayName}</p></b>}
      <h4>Page No : {pageNoUI}</h4>
      {perPage.map(x => (<div key={x._id}>
          <img src={x.photoURL} /><p>{x.name}</p><p>{x.email}</p><p>{x.toyName}</p><p>{x.cate}</p><p>{x.cateS}</p><p>{x.price}</p><button onClick={() => viewingDetail(x._id)} type='button' className=''>Details</button>
      </div>))}
      {pageNo.map(x => <button onClick={() => pageHandler(x)} key={x} type='button' className=''>page - {x + 1}</button> )}
    </>
  )
}

export default App
