import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServicess from './AllServicess';

const Servicess = () => {
    const allServiceData = useLoaderData();
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center my-20'>
            {
                allServiceData.map(serviceData => <AllServicess
                    key={serviceData._id} serviceData={serviceData}>
                    
    
</AllServicess>)
            }
        </div>
    );
};

export default Servicess;