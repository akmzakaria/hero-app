import React from 'react';
import { useNavigate } from 'react-router';

const ErrorAppPage = () => {

        const navigate = useNavigate();
    
    return (
        <div>
            <div className='flex flex-col h-[100vh] justify-center  items-center gap-5 text-gray-600'>
                <i className="fa-regular fa-face-sad-cry text-6xl md:text-8xl"></i>
                <h1 className='md:text-3xl'>Oops, App Not Found!!</h1>
                <button onClick={() => navigate(-1)} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0 w-23 h-8'>Go Back!</button>
            </div>
        </div>
    );
};

export default ErrorAppPage;