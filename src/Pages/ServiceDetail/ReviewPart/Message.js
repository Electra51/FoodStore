import React from 'react';
import { FaStar } from 'react-icons/fa';

const Message = ({ data }) => {
    console.log(data)
    const {customer, email, message } = data;
    return (
        <div>
            <hr />
             <div className='mt-5'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        
                        <div >
                        <p className='text-ml font-semibold'>Name: {customer}</p>
                            <p className='text-ml font-semibold'>{email}</p>
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
                <div className='text-error text-ml font-semibold'>
                  Reviews: {message}
                </div>
          </div>
        </div>
    );
};

export default Message;