import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

function App() {
  const { user, count } = useContext(AuthContext);
  const sArr = []; const mArr = []; const eArr = [];

  const navigate = useNavigate();
  function viewingDetail(id, data) {
    if (!user) {
      alert('Please, login first!');
    }
    navigate(`/details/${id}`, {state: { dataObj: data }});
  }


  count.forEach(x => {
    if (x.cate == 'Science Kits') {sArr.push(x)}
    else if (x.cate == 'Math Learning Toys') {mArr.push(x)}
    else {eArr.push(x)}
  })
  // console.log(sArr, mArr, eArr);
  return (
    <div className='container text-center'>
<div id="demo" className="carousel slide container" data-bs-ride="carousel">

  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg" alt="toy one" className="img-slider" />
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1322274556/photo/collection-of-different-toys-on-wooden-table.jpg?s=612x612&w=0&k=20&c=DrcAYB7zglqgD3GuICJFLuxE9cBOvSJIlFAdOwrYZEE=" alt="toy two" className="img-slider" />
    </div>
    <div className="carousel-item">
      <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/14568/production/_131640338_toyspic2.jpg" alt="toy three" className="img-slider" />
    </div>
  </div>
  
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
<section className='text-center container'>
  <h3>Our Toys</h3>
  <div>
    <img src='https://specials-images.forbesimg.com/imageserve/64c727e53e9ca5472f03e864/Japace-100--Experiments-Science-Kit-for-Kids-Age-4-12-Year-Old/960x0.jpg?cropX1=0&cropX2=500&cropY1=0&cropY2=500' className='img-cat' />
    <img src='https://storage.googleapis.com/ibw-blog/media/29/eb74edb10a6165f83d0303dfe8d8f5.jpeg' className='img-cat' />
    <img src='https://m.media-amazon.com/images/I/911Px-FCMeL._AC_SL1500_.jpg' className='img-cat' />

  </div>
</section>
      

      <ul className="nav nav-pills" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Science Kits</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu1">Math learning toys</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu2">Engineering Kit</a>
    </li>
  </ul>

  <div className="tab-content">
    <div id="home" className="container tab-pane active">
      <h4>Science</h4>
      <div className=''>
      {sArr.map(x => <div key={x._id}>
        <img src={x.photoURL} className='img-fluid' />
        <p>Name : {x.toyName}</p>
        <p>Price : {x.price}</p>
        <p>Rating : {x.ratings}</p>
        <button onClick={() => viewingDetail(x._id, x)} type='button' className=''>View Details</button>
      </div>)}
      </div>
    </div>
    <div id="menu1" className="container tab-pane fade">
    <h4>Math</h4>
    <div className=''>
    {mArr.map(x => <div key={x._id}>
        <img src={x.photoURL} className='img-fluid' />
        <p>Name : {x.toyName}</p>
        <p>Price : {x.price}</p>
        <p>Rating : {x.ratings}</p>
        <button onClick={() => viewingDetail(x._id, x)} type='button' className=''>View Details</button>
    </div>)}
    </div>
    </div>
    <div id="menu2" className="container tab-pane fade">
    <h4>Engineering</h4>
    <div className=''>
    {eArr.map(x => <div key={x._id}>
        <img src={x.photoURL} className='img-fluid' />
        <p>Name : {x.toyName}</p>
        <p>Price : {x.price}</p>
        <p>Rating : {x.ratings}</p>
        <button onClick={() => viewingDetail(x._id, x)} type='button' className=''>View Details</button>
    </div>)}
    </div>
    </div>
  </div>
    </div>
  )
}

export default App
