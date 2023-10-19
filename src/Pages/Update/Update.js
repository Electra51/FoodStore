import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hook/useTitle';

const Update = () => {
    useTitle('Update')
    const storedReview = useLoaderData();
    // console.log(storedReview)


    const [recipes, setRecipes] = useState(storedReview);
    const handleUpdateReview = event => {
        event.preventDefault();
        // console.log(recipes);


        fetch(`https://pick-food-server.vercel.app/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recipes)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('review updated', {
                        theme: 'colored'
                    });
                    // console.log(data);
                    event.target.reset()
                }

            })
    }
    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newRecipes = { ...recipes }
        newRecipes[field] = value;
        setRecipes(newRecipes);

    }

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 my-8">
            <img src="https://media.istockphoto.com/id/153555214/photo/breakfast-with-eggs-bacon-sausage-biscuits-and-waffles.jpg?s=612x612&w=0&k=20&c=PRCf62gBy6zPUb5Ly1bVx2fnaeS54pbApJ7aILhBrxU=" alt="" />


            <div className="flex-shrink-0 w-full max-w-md py-10 mb-20" data-aos="fade-left" data-aos-duration="800">
                <h1 className="text-2xl text-center font-bold"><span className='text-[#EF8E33]'> Update</span> Review For
                    <br /> <span className='text-[#EF8E33]'>{storedReview.serviceName}</span> item</h1>
                <p className='text-center mt-1 mb-0'><span className='text-gray-400'>----</span> Update <span className='text-gray-400'>----</span></p>

                <form onSubmit={handleUpdateReview} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input onChange={handleInputChange} defaultValue={storedReview.customer} type="text" name='name' placeholder="your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <label className="label">
                            Email
                        </label>
                        <input onChange={handleInputChange} defaultValue={storedReview.email} name="email" type="email" placeholder="email" className="input input-bordered" required />


                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <input onChange={handleInputChange} defaultValue={storedReview.message
                        } type="text" name='message' placeholder="description" className="input input-bordered" required />


                    </div>

                    <div className="form-control mt-6">
                        <input className="an border !bg-[#EF8E33] !px-3 py-2 !text-white cursor-pointer" type="submit" value="Update Review" />
                    </div>
                </form>

            </div>

            <ToastContainer />
        </div>
    );
};

export default Update;