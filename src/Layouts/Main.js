import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    const location = useLocation();
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {
                location.pathname !== "/login" && location.pathname !== "/signup" && <Footer></Footer>
            }

        </>
    );
};

export default Main;