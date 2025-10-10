import React from 'react';
import { useNavigate } from 'react-router';
import errorImg from '../../../../public/assets/404-Error.jpg'

const ErrorPage = () => {
    
    const navigate = useNavigate();
    
    return (
        <div>
            <div className='flex flex-col border h-[100vh] justify-center  items-center gap-5 text-gray-600'>
                <img className='w-80 md:w-120' src={errorImg} alt="" />
                <h1 className='md:text-3xl'>Oops, Page Not Found!!</h1>
                <button onClick={()=>navigate(-1)} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0 w-25 h-8 md:w-25 md:h-10'>Go Back!</button>
            </div>
        </div>
    );
};

export default ErrorPage;