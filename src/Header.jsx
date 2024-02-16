import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user, loading } = useContext(AuthContext);
    return (
        // <div>
        //     <Link to='/'>Logo</Link>
        //     <Link to='/'>Name</Link>
        //     <Link to='/'>Home</Link>
        //     <Link to='/alltoys'>All Toys</Link>
        //     {user && <>    
        //     <Link to={`/mytoys/${user.displayName}`}>My toys</Link>        
        //     <Link to='/addtoy'>Add a Toy</Link>
        //     </>}
        //     {(!user) &&  <Link to='/login'>Log in</Link>}
        
        //     <Link to='/blog'>Blogs</Link>
        //     {user && <Link title={user.displayName} to='/login'><img src={user.photoURL} className='' /></Link>}
        // </div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alltoys">All Toys</Link>
              </li>
                {(!loading) && <>
                    {user && <>
                    <li className="nav-item">
                <Link className="nav-link" to={'/mytoys'}>My toys</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addtoy">Add a Toy</Link>
              </li>
                        </>
                }
                </>}
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blogs</Link>
              </li>
            </ul>
              {(!loading) && <>
                {(!user) &&  <Link to='/login'><button className="btn btn-primary" type="button">Log in</button></Link>}
              {user && <Link title={user.displayName} to='/login'><img src={user.photoURL} className='user-img rounded-circle ms-2' /></Link>}
              </>}
          </div>
        </div>
      </nav>
    );
};

export default Header;