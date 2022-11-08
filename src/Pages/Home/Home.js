import React from 'react';
import Header from './Header';
import Offer from './Offer';
import Services from './Services';
import Stat from './Stat';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Offer></Offer>
            <Services></Services>
           <Stat></Stat>
        </div>
    );
};

export default Home;