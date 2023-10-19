import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hook/useTitle';
import ReviewRow from './ReviewRow';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from './Pagination';
import imgg from "../../assets/logo/download.png"
const ReviewPage = () => {
    useTitle('ReviewPage')
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const [reviews, setReviews] = useState([])
    const [page, setPage] = useState(0);
    useEffect(() => {

        fetch(`https://pick-food-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('pick-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this?')
        if (proceed) {
            fetch(`https://pick-food-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('pick-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully', {
                            theme: 'colored'
                        });
                        const remaining = reviews.filter(review => review._id !== id)
                        setReviews(remaining)
                    }
                })
        }
    }

    console.log('reviews', reviews)

    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500" className='mx-4 lg:mx-16'>

            {reviews.length === 0 ?
                <p className='text-5xl font bold text-center text-[#EF9135] mt-48 py-5'>No reviews were added Yet</p>
                :
                <> <h2 className='text-2xl font bold text-center text-[#EF9135] font-medium my-10 '>You have {reviews.length} reviews here</h2>


                    <div className="flex flex-col lg:flex-row justify-between items-start">
                        <div className='w-full lg:w-[15%] p-4'>
                            <p className='mb-8 border-b-2 border-[#ef8e33] w-40 text-center mx-auto text-xl'>My Information</p>
                            {
                                user?.photoURL ? <div className="avatar flex justify-center items-center my-5">
                                    <div className="w-24 rounded-full border-2 border-[#EF8E33]">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div> : <div className="avatar flex justify-center items-center my-5">
                                    <div className="w-24 rounded-full border-2 border-[#EF8E33]">
                                        <img src={imgg} />
                                    </div>
                                </div>
                            }

                            {user?.displayName ? <p className='font-medium text-center'>Name: <span className='font-normal'>{user?.displayName}</span></p> : <p className='font-medium text-center'>Name: <span className='font-normal'>User Name is Null</span></p>}

                            <p className='font-medium text-center'>Email: <span className='font-normal'>{user?.email}</span></p>
                        </div>
                        <div className="w-full lg:w-[85%] p-4">
                            <p className='mb-8 border-b-2 border-[#ef8e33] w-40 mx-auto lg:mx-0 text-xl text-center lg:text-left mt-5 lg:mt-0'>My All Review</p>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                {
                                    reviews.slice(4 * page, 4 * (page + 1)).map((review, idx) => <ReviewRow
                                        key={idx}
                                        review={review}
                                        handleDelete={handleDelete}
                                    >
                                    </ReviewRow>)
                                }

                            </div>
                            <Pagination length={reviews.length} page={page} setPage={setPage} />
                        </div>

                    </div>

                </>
            }

            <ToastContainer />
        </div>
    );
};

export default ReviewPage;

