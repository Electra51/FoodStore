import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../hook/useTitle';
import DotLoader from "react-spinners/DotLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Login = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },500)
    }, [])
    useTitle('Login')
    const { login } = useContext(AuthContext);
    const { providerLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/services';

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        toast.success('login Successfully', {
            theme: "colored",
        });
        
        form.reset();

        login(email, password)
            .then(result => {
                const user = result.user;
                
                const currentUser = {
                    email:user.email
                }
                console.log(currentUser);
                //get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('pick-token', data.token);
                        navigate(from, { replace: true});
                })
                
            })
        .catch(error=>console.error(error))
    }


    return (
        <div className="hero w-full my-20" >
            {
               
                    loading ?
                    <DotLoader color={'#483bf6'} loading={loading}  size={100} 
                        />
                        :
                        <>
                  <div className="hero-content">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <button onClick={handleGoogleSignIn} variant="primary" type="submit" className='btn btn-outline'>
        <FaGoogle/>  <span className='ml-2'>Google Log In</span>
                        </button>
                    </form>
                    <p className='text-center'>As a new member? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
                        </>
                        
                }
            
            <ToastContainer />
        </div>
    );
};

export default Login;