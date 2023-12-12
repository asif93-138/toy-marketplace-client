import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Link to='/'>Logo</Link>
            <Link to='/'>Name</Link>
            <Link to='/'>Home</Link>
            <Link to='/alltoys'>All Toys</Link>
            {user && <>    
            <Link to={`/mytoys/${user.displayName}`}>My toys</Link>        
            <Link to='/addtoy'>Add a Toy</Link>
            </>}
            {(!user) &&  <Link to='/login'>Log in</Link>}
        
            <Link to='/blog'>Blog</Link>
            {user && <Link title={user.displayName} to='/login'>User's pic</Link>}
        </div>
    );
};

export default Header;