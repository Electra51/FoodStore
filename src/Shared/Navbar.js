import React, { useContext } from 'react';
import { CgLogOff } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/logo/logo.png';
import { AuthContext } from '../contexts/AuthProvider';
import "./navbar.css";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }

  const menuItem = <>
    {
      user?.email ? <>

        <li><NavLink to='/home' className='an p-2 ml-3 bg-transparent rounded-none'>Home </NavLink></li>
        <li><NavLink to="/services" className='an p-2 ml-3 bg-transparent rounded-none'>Services </NavLink></li>
        <li><NavLink to='/blogs' className='an p-2 ml-3 bg-transparent rounded-none'>Blog</NavLink></li>
        <li><NavLink to='/reviews' className='an p-2 ml-3 bg-transparent rounded-none'>My Reviews</NavLink></li>
        <li><NavLink to='/addServices' className='an p-2 ml-3 bg-transparent rounded-none'>Add Services</NavLink></li>
        <button onClick={handleLogOut} className='an border border-orange-500 hover:bg-[#EF8E33]hover:text-white px-2 ml-3 text-orange-500'><Link className='flex items-center gap-2' to='/home'><CgLogOff className='text-xl' /> Log Out</Link></button>
      </>
        :
        <>
          <li><NavLink to='/home' className='an p-2 ml-3 bg-transparent rounded-none'> Home</NavLink></li>
          <li><NavLink to="/services" className='an p-2 ml-3 bg-transparent rounded-none'>Services </NavLink></li>
          <li><NavLink to='/blogs' className='an p-2 ml-3 bg-transparent rounded-none'>Blog</NavLink></li>
          <li><button className='an border !bg-[#EF8E33] !px-3 py-0 ml-3 !text-white'><Link to='/login'>Log In</Link></button> </li></>
    }
  </>


  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItem}
            </ul>
          </div>
          <Link to='/' className="flex align-middle items-center normal-case text-xl">
            <img src={logo} alt="" height={35} width={55} />
            <p className='ml-3 font-semibold'>Foo<span className='text-[#EF8E33]'>dS</span>tore</p></Link>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal p-0">
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;