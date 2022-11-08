import React from 'react';

const CommentForm = () => {
    // const { user } = useContext();
    return (
        <div>
            <form >
                <h2 className="text-4xl font-bold text-center mt-5">WRITE A COMMENT</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-6'>
                    <input name="Name" type="text" placeholder="Name" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn btn-warning my-7' type="submit" value="Add Your Review" />
            </form>
        </div>
    );
};

export default CommentForm;