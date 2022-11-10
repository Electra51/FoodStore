import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';



const Update = () => {
    useTitle('Update')
    const storedReview = useLoaderData();
    console.log(storedReview)


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