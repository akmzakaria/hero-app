import React, { useEffect, useState } from 'react';
import Navbar from '../Pages/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';


const Root = () => {

    const navigation = useNavigation();
    const isNavigating = navigation.state === 'loading';
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        let timer;

        if (isNavigating) {
            setShowLoader(true);
        } else {
            timer = setTimeout(() => {
                setShowLoader(false);
            }, 800);
        }

        return () => clearTimeout(timer);
    }, [isNavigating]);

    return (
        <div>
            <Navbar></Navbar>

            {showLoader ? 
                <div className='flex h-[55vh] bg-[#f5f5f5] justify-center'>
                    <span className="loading loading-dots w-15 md:w-25"></span>
                </div>
             :

            <Outlet></Outlet>
            
            }

            <Footer></Footer>
            <ToastContainer />
        </div>

    );
};

export default Root;