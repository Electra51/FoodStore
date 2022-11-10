import React, { useContext } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';

const Message = ({ data }) => {
    const {user}=useContext(AuthContext)
    console.log(data)
    const { customer, email, message } = data;
    return (
        <div>
            
            <hr />
            <div className='mt-5'>
                <div className='flex justify-between'>
                    <div className='flex'>

                        <div className='flex' >
                            
                                <div className="w-12 rounded-full">
                                    {user?.photoURL ?
                                <img title={user.displayName} 
                                    roundedCircle
                                    src={user?.photoURL}>
                                </img>
                                : <FaUser></FaUser>}
                                </div>
                            
                            <div>
                                <p className='text-ml font-semibold pl-2'>Name: {customer}</p>
                                <p className='text-ml font-semibold pl-2'>{email}</p>
                            </div>
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