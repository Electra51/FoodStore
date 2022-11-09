import React, { useState } from 'react';


const AddServices = () => {
    const [recipes, setRecipes] = useState({});
    const handleAddRecipes = event => {
        event.preventDefault();
        console.log(recipes);
        

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recipes)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('added successfully')
                    event.target.reset();
                }

        })
}

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newRecipes = { ...recipes }
        newRecipes[field] = value;
        setRecipes(newRecipes);
    }

    return (
        <div>
            
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                <p className='text-center text-2xl text-primary font-semibold'>Please add a new service</p>
                    <form onClick={handleAddRecipes} onBlur={handleInputBlur}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered input-primary" required/>
                        </div>
                        <div className="form-control">
                        
            <label className="label">
            Image
            </label>
            <input  name="img" type="text" placeholder="img URL"  className="input input-bordered input-primary"  required/>
                
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input  type="text" name='price' placeholder="price" className="input input-bordered input-primary" required/>
                            
                        </div>
                        <div className="form-control">
                        <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input  type="text" name='description' placeholder="description" className="input input-bordered input-primary" required/>
                        
                            
                        </div>
                        
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Add Service" />
                        </div>
                    </form>
                    
                </div>
            </div>
  
        </div>
    );
};

export default AddServices;