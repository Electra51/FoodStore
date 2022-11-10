import React, { useEffect, useState } from 'react';

import Message from './Message';



const ReviewPart = () => {

    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
        .then(data=>setReviewData(data))
    }, []);


    return (
        <div>
            {
                reviewData && reviewData.sort((a, b) => b.message > a.message ? 1 : -1).map(data => <Message
                    key={data._id}
                data={data}></Message>)
            }
           
        </div>
    );
};

export default ReviewPart;