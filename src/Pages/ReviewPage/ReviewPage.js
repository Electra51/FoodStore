import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewRow from './ReviewRow';

const ReviewPage = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id)
                       setReviews(remaining)
                        
                    }
                })
            }
    }
    



    return (
        <div>
            
            { reviews.length === 0 ?
              <p className='text-5xl font bold text-center text-warning my-20 bg-emerald-800 py-5'>No reviews were added</p>
              
                :
               <> <h2 className='text-2xl font bold text-center text-white my-10 bg-emerald-800'>You have {reviews.length} reviews here</h2>
               <div className="overflow-x-auto w-full">
                   <table className="table w-full">
                       {/* <!-- head --> */}
                       <thead>
                           <tr className='pl-8'>
                               <th>Service Name</th>
                               <th>Reviews</th>
                               <th>Edit</th>
                               <th>Delete</th>
                           </tr>
                       </thead>
                       <tbody>
   
                           {
                               
                                   reviews.map(review => <ReviewRow
                                       key={review._id}
                                       review={review}
                                       handleDelete={handleDelete}
                                       >
                                       
                                       
                                   </ReviewRow>)
                               }
   
                       </tbody>
   
   
   
                   </table>
               </div></>
    }
            
           
        </div>
    );
};

export default ReviewPage;

