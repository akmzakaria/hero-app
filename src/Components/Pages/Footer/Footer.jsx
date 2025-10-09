import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#001931] text-[#A1A1AA]'>
            <div className='flex md:flex-row flex-col md:justify-around text-center md:items-center max-w-[1400px] mx-auto gap-8 py-10'>

                <div className='flex-2 flex-col'>
                    <h2 className='font-bold mb-3 text-white'>HERO.IO</h2>
                    <p className='px-10 md:px-0'>Hero.IO is an all-in-one app discovery platform where users can explore, download, and manage a wide variety of apps in one place. Designed for speed and simplicity, Hero.IO offers a smooth, secure, and intuitive experience that makes finding the right apps easier than ever.</p>
                </div>

                <div className='flex-1 flex-col'>
                    <h2 className='font-bold mb-3 text-white'>Company</h2>
                    <p className='mb-2'>About Us</p>
                    <p className='mb-2'>Our Mission</p>
                    <p>Contact Saled</p>
                </div>

                <div className='flex-1 flex-col'>
                    <h2 className='font-bold mb-3 text-white'>Services</h2>
                    <p className='mb-2'>Products & Services</p>
                    <p className='mb-2'>Customer Stories</p>
                    <p>Download Apps</p>
                </div>

                <div className='flex-1 flex-col'>
                    <h2 className='font-bold mb-3 text-white'>Information</h2>
                    <p className='mb-2'>Privacy Policy</p>
                    <p className='mb-2'>Terms & Conditions</p>
                    <p>Join Us</p>
                </div>

                <div className='flex-1 flex-col'>
                    <h2 className='font-bold mb-3 text-white'>Social Links</h2>
                    <p className='mb-2'><i className="fa-brands fa-x-twitter"></i>  x-twitter</p>
                    <p className='mb-2'><i className="fa-brands fa-linkedin-in"></i>  LinkedIn</p>
                    <p className='mb-2'><i className="fa-brands fa-facebook-f"></i>  FaceBook</p>
                    <p><i className="fa-regular fa-envelope"></i>  app.support@gmail.com</p>
                </div>

            </div>
            <hr className="border-gray-600 max-w-[1400px] mx-auto" />

            <footer className='p-5 text-sm text-center'>© 2025 HERO.IO. All rights reserved.</footer>

        </div>
    );
};

export default Footer;