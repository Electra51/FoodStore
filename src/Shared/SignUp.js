import React, { useContext, useEffect, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hook/useTitle';
import DotLoader from "react-spinners/DotLoader";


const SignUp = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },500)
    }, [])
    useTitle('SignUp')
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        form.reset();
        
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        })
            .catch(error => {
                console.error(error)
            setError(error.message)
            });
    }

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 ">
            <img className='cover' src="https://media.istockphoto.com/id/1348695978/photo/sweet-colorful-donuts-and-espresso-cup.jpg?s=612x612&w=0&k=20&c=xmyK2ZQ6ylt0qoT57vwy5orxLBDe7-8BtZvYwiB86YY=" alt="" data-aos="fade-right" data-aos-duration="800"/>
            {
                loading ?
                <DotLoader color={'#F6BE00'} loading={loading}  size={100} 
                    />
                    :
                    <>
               
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-10 mb-20" data-aos="fade-left" data-aos-duration="800">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Sign Up" />
                                </div>
                                <p className='text-red-500'>{error}</p>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link> </p>
                </div>
           
                    </>
            }
            
        </div>
    );
};

export default SignUp;