import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hook/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CommentForm = () => {
    useTitle('CommentForm')
    const {_id, name,price } = useLoaderData();
  
    const { user } = useContext(AuthContext);

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const title = `${form.title.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: name,
            price,
            customer: title,
            email,
            message
        }


       


        fetch('https://pick-food-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
               
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Add review successfully', {
                        theme:'colored'
                    })
                    form.reset();
                    
                }})
            .catch(er => console.error(er));

    }
    return (
        <div>
            <form onSubmit={handleAddReview}>
                <h2 className="text-4xl font-bold text-center mt-5">WRITE A COMMENT
                <br />  For {name} item</h2>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-6'>
                    <input name="title" type="text" placeholder="your tittle" className="input input-ghost w-full  input-bordered"/>
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn btn-warning my-7' type="submit" value="Add Your Review" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default CommentForm;