import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import AllServicess from './AllServicess';
import DotLoader from "react-spinners/DotLoader";

const Servicess = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])


    useTitle('Servicess')
    const allServiceData = useLoaderData();

    return (
        <div>
            {
                loading ?
                    <DotLoader color={'#6e8b3d'} loading={loading} size={100}
                    />
                    :
                    <><div className='grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center my-20'>
                        {
                            allServiceData && allServiceData.sort((a, b) => b.name > a.name ? 1 : -1).map(serviceData => <AllServicess
                                key={serviceData._id}
                                serviceData={serviceData}>
                            </AllServicess>)
                        }
                    </div>
                    </>
            }

        </div>
    );
};

export default Servicess;