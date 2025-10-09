import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const Apps = () => {

    const data = useLoaderData();
    console.log(data);

    const [searchWord, setSearchWord] = useState('');

    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(searchWord.toLowerCase())
    );


    return (
        <div className='bg-[#f5f5f5] pt-8'>
            {/* 20 apps */}
            <div className='max-w-[1400px] mx-auto pb-12'>
                <h1 className='text-center text-[#001931] text-5xl font-bold  mb-8'>Our All Applications</h1>
                <p className='text-center text-[#627382] text-xl mb-8'>Explore All Apps on the Market developed by us. We code for Millions</p>

                <div className='flex justify-between mb-5'>
                    <p className='font-semibold text-2xl'>({data.length}) Apps Found</p>

                    {/* search bar */}
                    <div className=''>
                        <label className="input bg-white border border-[#d2d2d2]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                value={searchWord}
                                onChange={(e) => setSearchWord(e.target.value)} type="search"
                                required
                                placeholder="Search" />
                        </label>
                    </div>

                </div>

                <div className='grid grid-cols-4 place-items-center gap-5'>

                    {
                        filteredApps.length > 0 &&

                        filteredApps.map(app =>

                            <Link key={app.id} to={`/appdetails/${app.id}`}>

                                <div className='flex flex-col shadow rounded-xl w-[300px] gap-2 p-4 bg-white'>
                                    <img className='w-full rounded-2xl' src={app.image} alt="" />
                                    <h3 className='text-center text-[#001931] font-medium text-xl'>{app.title}</h3>
                                    <div className='flex justify-between font-medium'>
                                        <p className='text-[#00D390]'><i className="fa-solid fa-download mr-1"></i>{app.downloads}</p>
                                        <p className='text-[#FF8811]'><i className="fa-solid fa-star mr-1"></i>{app.ratingAvg}</p>
                                    </div>
                                </div>

                            </Link>

                        )

                    }

                </div>

                {

                    filteredApps.length === 0 &&

                    <div className='flex flex-col justify-center h-50 items-center gap-5 text-gray-600'>
                        <i className="fa-regular fa-face-sad-tear text-8xl"></i>
                        <h1 className='text-3xl'>No Apps Found!</h1>
                    </div>

                }

            </div>
        </div>
    );
};

export default Apps;