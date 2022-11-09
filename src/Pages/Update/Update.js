import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';



const Update = () => {
    const storedReview = useLoaderData();
    console.log(storedReview)
   
    
    // const review = {
        
    // }
    
    
    // const handleUpdateReview = event => {
    //     event.preventDefault();
    //     fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify(review)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //     })
    //     // const form = event.target;
    //     // const title = `${form.title.value}`;
    //     // const email = user?.email || 'unregistered';
    //     // const message = user?.message;

        
    //  }

    const [recipes, setRecipes] = useState(storedReview);
    const handleUpdateReview = event => {
        event.preventDefault();
        console.log(recipes);
        

        fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(recipes)
                })
                .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('review updated');
                    console.log(data);
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
        <div>
          
            {/* <form>
                <h2 className="text-3xl font-bold text-center mt-5">Please <span className='text-warning'> Update</span> Review For
                <br /> {serviceName} item</h2>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-6'>
                    <input name="title" type="text" placeholder="your tittle" defaultValue={storedReview?.
customer}  className="input input-ghost w-full  input-bordered"/>
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" defaultValue={storedReview?.message} required></textarea>

                <input onClick={handleUpdateReview} className='btn btn-warning my-7' type="submit" value="Update Review" />
            </form> */}
             <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                <p className='text-center text-2xl text-primary font-semibold'>Please <span className='text-warning'> Update</span> Review For
                <br /> {storedReview.serviceName} item</p>
                    <form onSubmit={handleUpdateReview} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input  onChange={handleInputChange} defaultValue={storedReview.customer} type="text" name='name' placeholder="your name" className="input input-bordered input-primary" required/>
                        </div>
                        <div className="form-control">
                        
            <label className="label">
          Email
            </label>
            <input  onChange={handleInputChange} defaultValue={storedReview.email} name="email" type="email" placeholder="email"  className="input input-bordered input-primary"  required/>
                
                            
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <input onChange={handleInputChange} defaultValue={storedReview.message
} type="text" name='message' placeholder="description" className="input input-bordered input-primary" required/>
                        
                            
                        </div>
                        
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Update Review" />
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Update;