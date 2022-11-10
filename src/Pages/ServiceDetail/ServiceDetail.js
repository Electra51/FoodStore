import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './ServiceDetail.css'
import DotLoader from "react-spinners/DotLoader";
import { BsFillChatFill } from 'react-icons/bs';
import logo2 from '../../../src/assets/logo/logo2.png'
import { Link } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewPart from './ReviewPart/ReviewPart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const notify = () => {
    toast.warning('Please login to add a review', {
        theme: "colored",

    })
};
const ServiceDetail = () => {


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    const { user } = useContext(AuthContext);
    useTitle('ServiceDetail')
    const seviceData = useLoaderData();
    console.log(seviceData);
    const { _id, name, img, description, price } = seviceData;

    return (

        <div>
            {
                loading ?
                    <DotLoader color={'#cbb59e'} loading={loading} size={100}
                    />
                    :
                    <>
                        <div className='details'>
                            <div className="card card-compact w-100 bg-base-100 shadow-xl my-10">
                                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
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
                                            {user?.email ? <> <Link to={`/services/${_id}/commentForm`} className="link link-accent font-bold pl-2">Add a Comment</Link>
                                            </>
                                                :
                                                <>
                                                    <Link onClick={notify} className="link link-accent font-bold pl-2">Add a Comment</Link></>}
                                        </div>
                                    </div>
                                    <hr />
                                    <ReviewPart></ReviewPart>
                                </div>
                            </div>
                        </div>
                    </>
            }
 <ToastContainer />
        </div>



    );
};

export default ServiceDetail;