import React from 'react';
import heroImg from "../../../../public/assets/hero.png"
import { Link, useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
    console.log(data)

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='flex flex-col justify-center gap-10 max-w-[1200px] mx-auto'>
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='text-7xl font-bold text-[#001931]'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                    <p className='text-[#627382] text-xl'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='flex gap-5 justify-center'>

                        <Link to='https://play.google.com' className='btn bg-[#f5f5f5] shadow text-[#001931] font-bold border-[#d2d2d2] text-xl h-14 w-50'><i className="fa-brands fa-google-play text-4xl"></i>Google Play</Link>

                        <Link to='https://www.apple.com/app-store/' className='btn bg-[#f5f5f5] border-[#d2d2d2] shadow text-[#001931] font-bold text-xl h-14 w-50'><i className="fa-brands fa-app-store-ios text-4xl "></i>App Store</Link>

                    </div>
                </div>

                <img className='w-240 mx-auto' src={heroImg} alt="" />
            </div>

            <div className='text-center p-20 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white '>
                <div className='max-w-[1600px] mx-auto'>
                    <h1 className='mb-5 text-5xl font-bold'>Trusted by Millions, Built for You</h1>

                    <div className='flex justify-around'>
                        <div className='flex flex-col gap-3'>
                            <p>Total Downloads</p>
                            <h1 className='font-extrabold text-6xl'>29.6M</h1>
                            <p>21% more than last month</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>Total Reviews</p>
                            <h1 className='font-extrabold text-6xl'>906K</h1>
                            <p>46% more than last month</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>Active Apps</p>
                            <h1 className='font-extrabold text-6xl'>132+</h1>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* 8 Apps */}
            <div className='max-w-[1400px] mx-auto'>
                <h1 className='text-center text-[#001931] text-5xl font-bold mt-12 mb-8'>Trending Apps</h1>
                <p className='text-center text-[#627382] text-xl mb-8'>Explore All Trending Apps on the Market developed by us</p>

                <div className='grid grid-cols-4 place-items-center gap-5'>

                    {
                        data.map(app =>
                            <div key={app.id} className='flex flex-col rounded-xl w-[300px] gap-2 p-4 bg-white shadow'>
                                <img className='w-full rounded-2xl' src={app.image} alt="" />
                                <h3 className='text-center text-[#001931] font-medium text-xl'>{app.title}</h3>
                                <div className='flex justify-between font-medium'>
                                    <p className='text-[#00D390]'><i className="fa-solid fa-download mr-1"></i>{app.downloads}</p>
                                    <p className='text-[#FF8811]'><i className="fa-solid fa-star mr-1"></i>{app.ratingAvg}</p>
                                </div>
                            </div>
                        )
                    }

                </div>

            </div>

            <div className='text-center mt-8 pb-12'>
                <Link to='/apps' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0 w-35 h-11">Show All</Link>
            </div>

        </div>
    );
};

export default Home;