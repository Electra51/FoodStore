import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './ServiceDetail.css'

import { BsFillChatFill } from 'react-icons/bs';
import logo2 from '../../../src/assets/logo/logo2.png'
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const seviceData = useLoaderData();
    console.log(seviceData);
    const { _id, name, img, description,price } = seviceData;
    
    return (
       
        <div className='details'>
<div className="card card-compact w-100 bg-base-100 shadow-xl my-10">
  <figure><img className='w-full' src={img} alt="Shoes"  /></figure>
  <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-xl font-semibold text-orange-600'>Price: $ {price}</p>
                <div className='flex align-middle justify-items-center'>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                    <button>5</button></div>
                    <hr />
                <p>{description}</p>
                
    
            </div>
        
            </div>
            
            <div className="card-actions justify-center">
            <div>
            <div className='flex items-center mt-10'>
                <img src={logo2} alt="" width={60} />
                <p className='text-xl font-bold pl-2'>Recipe Review</p>
            </div>
            <hr />
            <div className='flex justify-between items-start gap-12 my-5'>
                <div>
                Average Rating: <div className='flex items-center'><FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                        <FaStar></FaStar>
                    <button>5</button></div>
                </div>
                <div className='flex items-center'>
                    <BsFillChatFill></BsFillChatFill>
                    <Link to={`/services/${_id}/commentForm`} className="link link-accent font-bold pl-2">Add a Comment</Link>
                    
                </div>
            </div>
            <hr />
            <div className='mt-5'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <img className='rounded-full' src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={70}/>
                        <div className='pl-2'>
                        <p>Name:safayet</p>
                        <p>Date:20/august</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla maiores exercitationem delectus facilis non et numquam quidem, maxime, culpa nesciunt tempora nihil autem explicabo quo doloremque nisi distinctio ea.
                </div>
          </div>
        </div>
    </div>
        </div>
            
       
       
    );
};

export default ServiceDetail;