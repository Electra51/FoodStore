import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo/logo.png'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  
  return (
    <footer className='px-2 divide-y  text-gray-600  bg-slate-400' >
      <div className='container flex flex-col items-center content-center py-5 mx-auto space-y-8 lg:flex-row lg:space-y-0'>
        <div className='lg:w-1/4'>
          <Link
            to={'/home'}
            aria-label='QuiZone'
            title='QuiZone'
            className='inline-flex items-center'
          >
            <img src={logo} alt="" height={50} width={80} />
            <p className='pl-3 text-xl font-bold text-black'>PickFood</p>
          </Link>
        </div>
        <div className='grid grid-cols-2 items-center text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4'>
          <div className='space-y-3'>
            <h3 className='tracking-wide uppercase text-black font-semibold'>PRODUCT</h3>
            <ul className='space-y-1'>
              <li>
                <Link >Branding</Link>
              </li>
              <li>
                <Link>Design</Link>
              </li>
              <li>
                <Link>Pricing</Link>
              </li>

            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='tracking-wide uppercase  text-black font-semibold'>SERVICES</h3>
            <ul className='space-y-1'>
              <li>
                <Link >Privacy</Link>
              </li>
              <li>
                <Link>Terms of Service</Link>
              </li>
              <li>
                <Link >FAQ</Link>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='uppercase  text-black font-semibold'>ABOUT ME</h3>
            <ul className='space-y-1'>
              <li>
                <Link >Services</Link>
              </li>
              <li>
                <Link >Documentation</Link>
              </li>
              <li>
                <Link >Contact</Link>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <div className='flex justify-center content-center items-center space-x-2'>
             <a href='https://www.facebook.com/mimsa.mubassera.7'><FaFacebook></FaFacebook></a>
              <a href='https://www.linkedin.com/in/safayet-nur/'><FaLinkedin></FaLinkedin></a>
              <FaInstagram></FaInstagram>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;