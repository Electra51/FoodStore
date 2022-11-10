import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url("https://i.ibb.co/gVJ4rQ2/istockphoto-1190205395-612x612.jpg")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Stay Home & get your Daily Needs</h1>
          <p className="mb-5">Start Your Daily Fresh food Shopping with PickFood. It is a quick service where anyone get their needs easily and customers also give their review.</p>
          <Link to='/services'><button className="btn btn-warning">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;