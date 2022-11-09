import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo/logo.png'
import { AuthContext } from '../contexts/AuthProvider';






const Navbar = () => {
  const { user } = useContext(AuthContext);

  const menuItem = <>
    <Link to='/home' className='pl-4'> Home</Link>
    <Link to='/blogs' className='pl-4'>Blog</Link>
    { 
              user?.email ? <>
        <div><Link to='/reviews' className='pl-4'>My Reviews</Link>
        <Link to='/addServices' className='pl-4'>Add Services</Link></div>
              </>
                :
              <Link to='/login' className="btn">Log In</Link>
    }
       
    </>




    return (
        <div>
            <div className="navbar bg-base-100 my-3">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItem}
          </ul>
    </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="" height={40} width={60} />

              <p className='ml-3'>PickFood</p></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal p-0">
          {menuItem}
        </ul>
  </div>
  <div className="navbar-end">
            
  { 
              user?.email ? <>
        
        <button className='btn btn-outline'><Link to='/logout'>Log Out</Link></button>
              </>
                :
                <button className='btn btn-outline'> <Link to='/login' className="btn">Log In</Link></button>
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;