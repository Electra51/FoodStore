import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center mt-20'>
                <p className="text-2xl font-bold">Services</p>
                <p className='mb-10'>here show our services you can select one easily</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    services.slice(0, 3).map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='flex justify-end mr-12 my-10'>
                <Link to='/services'><button className="btn btn-outline btn-error ">See All</button></Link>
            </div>
        </div>
    );
};

export default Services;