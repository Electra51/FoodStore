import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './ServiceDetail.css'
import Review from './Review';

const ServiceDetail = () => {
    const { name, img, description,price } = useLoaderData();
    
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
     <Review></Review>
    </div>
        </div>
            
       
       
    );
};

export default ServiceDetail;