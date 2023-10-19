import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ReviewPage.css";

const ReviewRow = ({ review, handleDelete }) => {
    const { serviceName, message, price, _id, service, userimage, customer, email } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://pick-food-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [
        service])

    return (



        <div className='flex flex-col lg:flex-row items-start gap-2 mt-4'>
            <div>
                <div className="avatar">
                    <div className="w-75 lg:w-32 rounded">
                        <img src={reviewService.img} />
                    </div>
                </div>
                <div className="">{serviceName}</div>
                <div className="text-sm text-[#ef8e33] mb-2">Price: ${price}</div>
                <div className='flex items-center gap-2'>
                    <Link to={`/reviews/${_id}/update`}><button className="px-5 bg-transparent text-[#EF8E33] hover:bg-[#EF8E33] border border-orange-500 hover:text-white rounded-none hover:border-none !py-0">Edit</button></Link>
                    <button onClick={() => handleDelete(_id)} className="px-4 bg-[#EF8E33] border border-orange-500 text-white rounded-none hover:border-none hover:bg-orange-500">Delete</button>
                </div>
            </div>
            <div>
                <p className='break-all text-justify'>Review: {message}</p>

            </div>
        </div>


    );
};

export default ReviewRow;