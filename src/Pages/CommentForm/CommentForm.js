import moment from 'moment/moment';
import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hook/useTitle';


const CommentForm = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || `/services/${id}`;
    useTitle('CommentForm')
    const { _id, name, price, img } = useLoaderData();
    const showDate = new Date();
    const dt = moment(showDate).format('LLL');
    const { user } = useContext(AuthContext);

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const title = `${form.title.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const ratingPoint = form.ratingPoint.value;
        const serviceId = _id || "No ServiceId";
        const currentDate = dt || "No Date Show";
        const userimage = user?.photoURL || 'no photo';


        const review = {
            service: _id,
            serviceName: name,
            price,
            serviceId,
            currentDate,
            customer: title,
            email,
            message,
            ratingPoint,
            userimage
        }

        console.log("review", review)

        fetch('https://pick-food-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    navigate(from, { replace: true });
                    toast.success('Add review successfully', {
                        theme: 'colored'
                    })

                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div className='mx-20'>
            {
                user?.uid &&
                <form onSubmit={handleAddReview}>
                    <h1 className="text-3xl text-center font-bold mt-12">WRITE A COMMENT  <br />  For <span className='text-[#EF8E33]'> {name} </span>item</h1>
                    <h2 className="text-4xl font-bold text-center mt-5">
                    </h2>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-start'>
                        <div className='flex flex-col gap-3'>
                            <div className="form-control">
                                <label className="label mb-0">
                                    <span className="text-start">Give Your Rating</span>
                                </label>
                                <input name="ratingPoint" type="text" placeholder="Give Your Rating Like 4, 5, 4.4 ..." className="input input-ghost w-full input-bordered" required />
                            </div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="text-start">Write your Comment</span>
                                </label>
                                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Comment for this service"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label mb-0">
                                    <span className="text-start">Your Name</span>
                                </label>
                                <input name="title" type="text" placeholder="your Name" className="text-gray-400 input input-ghost w-full bg-base-200" defaultValue={user?.displayName} readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label mb-0">
                                    <span className="text-start">Your Email</span>
                                </label>
                                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="text-gray-400 input input-ghost w-full bg-base-200" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label mb-0">
                                    <span className="text-start">Your PhotoUrl</span>
                                </label>
                                <input name="photo" type="text" placeholder="Your photo" defaultValue={user?.photoURL} className="text-gray-400 input input-ghost w-full bg-base-200" readOnly />
                            </div>



                        </div>
                        <div>
                            <div className='border w-full h-[485px] mt-1'>
                                <img src={img} alt="" className='h-full w-full object-cover' />
                            </div>
                            <div className="form-control">
                                <label className="label mb-0">
                                    <span className="text-start">Service ID</span>
                                </label>
                                <input name="serviceId" type="text" defaultValue={_id} placeholder="your tittle" className="text-gray-400 input input-ghost w-full bg-base-200" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label mb-0">
                                    <span className="text-start">Current Date and Time</span>
                                </label>
                                <input name="currentDate" type="text" defaultValue={dt} placeholder="your currentDate" className="text-gray-400 input input-ghost w-full bg-base-200" readOnly />
                            </div>
                        </div>
                    </div>



                    <input className='an border !bg-[#EF8E33] !px-5 py-2 !text-white my-7' type="submit" value="Add Your Review" />
                </form>
            }
            <ToastContainer />
        </div>
    );
};

export default CommentForm;