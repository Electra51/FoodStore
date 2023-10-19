import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DotLoader from "react-spinners/DotLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hook/useTitle';
import "./login.css";

const Login = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    useTitle('Login')
    const { login } = useContext(AuthContext);
    const { providerLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const from = location?.state?.from?.pathname || '/services';
    // console.log(first)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user?.photoURL);
                navigate(from, { replace: true });
                toast.success('Login Successfully by Google', {
                    theme: "colored",
                });
            })
            .catch(error => console.error(error))
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        form.reset();
        setError('');

        login(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                //get jwt token
                fetch('https://pick-food-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('pick-token', data.token);
                        navigate(from, { replace: true });
                        toast.success('login Successfully', {
                            theme: "colored",
                        });
                    })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 mt-5" >
            <img className='cover' src="https://media.istockphoto.com/id/519691230/photo/breakfast-on-the-cutting-board-isolated-on-white.jpg?s=612x612&w=0&k=20&c=_PU6zdkwL3Q9FPTdjdzIRvTtw2x140kLyh-zoAql47A=" alt="" data-aos="fade-right" data-aos-duration="1000" />
            {
                loading ?
                    <DotLoader color={'#F88E1A'} loading={loading} size={100}
                    />
                    :
                    <>
                        <div className="flex-shrink-0 w-full max-w-md bg-base-100 py-4 my-8" data-aos="fade-left" data-aos-duration="800">

                            <h1 className="text-2xl text-center text-[#EF8E33] font-bold">Log In Your Account</h1>
                            <p className='text-center mt-1 mb-0'><span className='text-gray-400'>----</span> Login <span className='text-gray-400'>----</span></p>
                            <form onSubmit={handleLogin} className="card-body p-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#EF8E33] border-none hover:bg-orange-500" type="submit" value="Login" />
                                </div>
                                <p className='text-red-500'>{error}</p>
                                <button onClick={handleGoogleSignIn} variant="primary" type="submit" className='btn bg-transparent text-[#EF8E33] hover:bg-[#EF8E33] border border-orange-500 hover:text-white rounded-none hover:border-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /><path d="M1 1h22v22H1z" fill="none" /></svg>  <span className='ml-2'>Google Log In</span>
                                </button>
                            </form>
                            <p className='text-center text-[13px] text-gray-600'>As a new member? <Link className='text-blue-600 font-semibold hover:underline' to="/signup">Sign Up</Link> </p>
                        </div>
                    </>
            }
            <ToastContainer />
        </div>
    );
};

export default Login;