import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function App() {
  const { user, count } = useContext(AuthContext);
  const sArr = []; const mArr = []; const eArr = [];

  const navigate = useNavigate();
  function viewingDetail(id, data) {
    if (!user) {
      alert('Please, login first!');
    }
    navigate('/details', {state: { dataObj: data }});
  }


  count.forEach(x => {
    if (x.cate == 'Science Kits') {sArr.push(x)}
    else if (x.cate == 'Math Learning Toys') {mArr.push(x)}
    else {eArr.push(x)}
  })
  // console.log(sArr, mArr, eArr);
  return (
    <div className='container mt-4 text-center'>
      <Helmet>
        <title>LT World | Home</title>
      </Helmet>
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://makinglifeblissful.com/wp-content/uploads/2023/04/best-home-scince-kit-scaled.jpg" alt="toy one" className="img-slider" />
    </div>
    <div className="carousel-item">
      <img src="https://cdn0.woolworths.media/content/wowproductimages/large/1074496338.jpg" alt="toy two" className="img-slider" />
    </div>
    <div className="carousel-item">
      <img src="https://stemgeek.com/wp-content/uploads/2019/11/STE-Best-Engineering-Kits-for-Adults-featured.jpg" alt="toy three" className="img-slider" />
    </div>
  </div>
  
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
<section className='text-center my-5'>
  <h3>Our Toys</h3>
  <div className='d-md-flex justify-content-between my-5'>
   <article className='ot-sec border border border-primary rounded-3 py-4'>
      <i className="fs-3 fa-solid fa-microscope"></i>
      <h4 className='my-3'>Science Kits</h4>
      <h3>{sArr.length}</h3>
   </article>
   <article className='ot-sec border border border-primary rounded-3 py-4'>
      <i className="fs-3 fa-solid fa-calculator"></i>
      <h4 className='my-3'>Math Toys</h4>
      <h3>{mArr.length}</h3>
   </article>
  <article className='ot-sec border border border-primary rounded-3 py-4'>
    <i className="fs-3 fa-brands fa-galactic-republic"></i>
    <h4 className='my-3'>Engineering Kits</h4>
    <h3>{eArr.length}</h3>
  </article>
  </div>
</section>
      
      <section className='my-5'>
      <h3>Categories</h3>
      <ul className="nav nav-pills justify-content-center my-4" role="tablist">
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
    <div id="home" className="tab-pane active">
      
      <div className='cate-grid'>
      {sArr.map(x => <div key={x._id} className='card border-primary'>
        <img src={x.photoURL} className='card-img-top w-100' />
        <div className='card-body'>
        <h4 className='card-title mb-3'>Name : {x.toyName}</h4>
        <p className='card-text'>Price : {x.price}</p>
        <p className='card-text'>Rating : {x.ratings}</p>
        <button onClick={() => viewingDetail(x._id, x)} type='button' className='btn btn-primary'>View Details</button>
        </div>
      </div>)}
      </div>
    </div>
    <div id="menu1" className="tab-pane fade">
    
    <div className='cate-grid'>
    {mArr.map(x => <div key={x._id} className='card border-primary'>
        <img src={x.photoURL} className='card-img-top w-100' />
        <div className='card-body'>
        <h4 className='card-title mb-3'>Name : {x.toyName}</h4>
        <p className='card-text'>Price : {x.price}</p>
        <p className='card-text'>Rating : {x.ratings}</p>
        <button onClick={() => viewingDetail(x._id, x)} type='button' className='btn btn-primary'>View Details</button>
        </div>
    </div>)}
    </div>
    </div>
    <div id="menu2" className="tab-pane fade">
    
    <div className='cate-grid'>
    {eArr.map(x => <div key={x._id} className='card border-primary'>
        <img src={x.photoURL} className='card-img-top w-100' />
        <div className='card-body'>
        <h4 className='card-title mb-3'>Name : {x.toyName}</h4>
        <p className='card-text'>Price : {x.price}</p>
        <p className='card-text'>Rating : {x.ratings}</p>
        <button onClick={() => viewingDetail(x._id, x)} type='button' className='btn btn-primary'>View Details</button>
        </div>
    </div>)}
    </div>
    </div>
  </div>
      </section>
    </div>
  )
}

export default App
