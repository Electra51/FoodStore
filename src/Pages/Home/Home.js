import React, { useEffect, useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
import useTitle from '../../hook/useTitle';
import Gallery from './Gallery';
import Header from './Header';
import Offer from './Offer';
import Services from './Services';





const Home = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    useTitle('Home')
    return (
        <div>
            {
                loading ?
                    <DotLoader color={'#cbb59e'} loading={loading} size={100}
                    />
                    :
                    <>
                        <Header></Header>
                        <Offer></Offer>
                        <Services></Services>
                        <Gallery></Gallery>
                    </>

            }

        </div>
    );
};

export default Home;