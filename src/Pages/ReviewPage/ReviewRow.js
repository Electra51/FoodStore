import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete }) => {
    const {serviceName, message, price, _id, service,img} = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://pick-food-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [
        service])






    return (
        <tr >
            <td>
                <div className="flex items-center space-x-3 "  data-aos="zoom-in-up" data-aos-duration="1500">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            
                            <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                            

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{price}</div>
                    </div>
                </div>
            </td>
            <td>
                {message}

            </td>
            <td>
                <Link to ={`/reviews/${_id}/update`}><button className="btn btn-sm btn-outline">Edit</button></Link>
                </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-warning">Delete</button>
            </th>
        </tr>

    );
};

export default ReviewRow;