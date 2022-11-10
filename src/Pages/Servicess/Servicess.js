import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import AllServicess from './AllServicess';

const Servicess = () => {
    useTitle('Servicess')
    const allServiceData = useLoaderData();
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center my-20'>
            {
                allServiceData && allServiceData.sort((a,b)=> b.name > a.name ? 1 : -1).map(serviceData => <AllServicess
                    key={serviceData._id} serviceData={serviceData}>
                    
    
</AllServicess>)
            }
        </div>
    );
};

export default Servicess;