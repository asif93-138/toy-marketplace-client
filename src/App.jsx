import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AuthContext } from './AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(res => setCount(res))
  }, [])
  const navigate = useNavigate();
  function viewingDetail(id) {
    if (!user) {
      alert('Please, login first!');
    }
    navigate(`/details/${id}`);
  }


  return (
    <>
      {user  && <b><p>{user?.email}</p><p>{user?.displayName}</p></b>}
      {count.map(x => (<div key={x._id}>
          <p>{x.name}</p><p>{x.email}</p><p>{x.toyName}</p><p>{x.price}</p><button onClick={() => viewingDetail(x._id)} type='button' className=''>Details</button>
      </div>))}

    </>
  )
}

export default App
