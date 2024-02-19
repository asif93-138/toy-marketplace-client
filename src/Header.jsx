import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <Link className="navbar-brand logo-txt text-primary" to="/">Learning Toys World</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "active-link-c nav-link nav-a-cstm text-primary" : "nav-link nav-a-cstm text-primary"} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "active-link-c nav-link nav-a-cstm text-primary" : "nav-link nav-a-cstm text-primary"} to="/alltoys">All Toys</NavLink>
              </li>
                {(!loading) && <>
                    {user && <>
                    <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "active-link-c nav-link nav-a-cstm text-primary" : "nav-link nav-a-cstm text-primary"} to={'/mytoys'}>My Toys</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "active-link-c nav-link nav-a-cstm text-primary" : "nav-link nav-a-cstm text-primary"} to="/addtoy">Add a Toy</NavLink>
              </li>
                        </>
                }
                </>}
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "active-link-c nav-link nav-a-cstm text-primary" : "nav-link nav-a-cstm text-primary"} to="/blog">Blogs</NavLink>
              </li>
            </ul>
              {(!loading) && <>
                {(!user) &&  <NavLink className={({isActive}) => isActive ? "active-link-c" : ""} to='/login'><button className="btn btn-primary ms-2" type="button">Log in</button></NavLink>}
              {user && <Link title={user.displayName} to='/login'><img src={user.photoURL} className='user-img rounded-circle ms-2' /></Link>}
              </>}
          </div>
        </div>
      </nav>
    );
};

export default Header;