import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DotLoader from "react-spinners/DotLoader";
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hook/useTitle';
import "./login.css";

const SignUp = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState(''); // Add displayName state
    const [photoURL, setPhotoURL] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    useTitle('SignUp')
    const { createUser, updateUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        setError('');
        form.reset();


        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('User created successfully')
                const userInfo = {
                    displayName: displayName,
                    photoURL: photoURL,
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log(userInfo);

                    })
                    .catch(err => console.log(err))
                console.log(user);

                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            });



    }



    return (
        <div className="mt-5 flex flex-col lg:flex-row justify-center items-center w-full gap-10 ">
            <img className='cover' src="https://media.istockphoto.com/id/1348695978/photo/sweet-colorful-donuts-and-espresso-cup.jpg?s=612x612&w=0&k=20&c=xmyK2ZQ6ylt0qoT57vwy5orxLBDe7-8BtZvYwiB86YY=" alt="" data-aos="fade-right" data-aos-duration="800" />
            {
                loading ?
                    <DotLoader color={'#F88E1A'} loading={loading} size={100}
                    />
                    :
                    <>

                        <div className="flex-shrink-0 w-full max-w-md bg-base-100 py-4 mb-8" data-aos="fade-left" data-aos-duration="800">
                            <h1 className="text-2xl text-center text-[#EF8E33] font-bold">Create Your Account</h1>
                            <p className='text-center mt-1 mb-0'><span className='text-gray-400'>----</span> Signup <span className='text-gray-400'>----</span></p>

                            <form onSubmit={handleSignUp} className="card-body p-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='displayName' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                {/* <input
        type="text"
        placeholder="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      /> */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Profile Photo</span>
                                    </label>
                                    <input
                                        name='photoURL'
                                        type="text"
                                        placeholder="Photo URL" className="input input-bordered"
                                    />
                                    <span className='text-[12px] text-yellow-500'>You can ignore it if you want. It is not a required field. If you fill up this field, then please upload a short URL for the image.</span>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#EF8E33] border-none hover:bg-orange-500" type="submit" value="Sign Up" />
                                </div>
                                <p className='text-red-500'>{error}</p>
                            </form>

                            <p className='text-center text-[13px] text-gray-600 mt-0'>Already have an account? <Link className='text-blue-600 font-semibold hover:underline' to="/login">Login</Link> </p>
                        </div>

                    </>
            }

        </div>
    );
};

export default SignUp;