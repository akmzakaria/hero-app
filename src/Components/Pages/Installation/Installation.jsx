import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../../Utility/addToInstallation';
import { removeFromStoredApp } from '../../../Utility/removeFromInstallation';

const Installation = () => {

    const [sort, setSort] = useState('')

    const [appList, setAppList] = useState([]);

    const data = useLoaderData();

    useEffect(() => {
        const storedAppData = getStoredApp()
        const convertedStoredApp = storedAppData.map(id => Number(id))

        const myAppList = data.filter(app => convertedStoredApp.includes(app.id))
        setAppList(myAppList)
    }, [data]);

    const handleUninstall = (id) => {
        removeFromStoredApp(id);
        setAppList(prevList => prevList.filter(app => app.id !== id));
    };

    const handleSort = (type) => {
        setSort(type)

        if (type === 'High-Low') {
            const sortedByHigh_Low = [...appList].sort((b, a) => a.downloads1 - b.downloads1);
            setAppList(sortedByHigh_Low);
        }
        else if (type === 'Low-High') {
            const sortedByLow_High = [...appList].sort((a, b) => (a.downloads1) - (b.downloads1));
            setAppList(sortedByLow_High)
        }
        // console.log(appList)

    }


    return (
        <div className='bg-[#f5f5f5] pt-8'>
            <div className='max-w-[1400px] mx-auto'>
                <h1 className='text-center text-[#001931] text-xl md:text-5xl font-bold mb-3 md:mb-8'>Your Installed Apps</h1>
                <p className='text-center text-[#627382] md:text-xl mx-5 md:mx-0 mb-10 md:mb-8'>Explore All Trending Apps on the Market developed by us</p>

                <div className='flex justify-between mb-2 md:mb-5'>
                    <p className='font-semibold text-sm md:text-2xl'>({appList.length}) Apps Found</p>


                    {/* sort */}

                    <details className="dropdown">
                        <summary className="cursor-pointer text-sm md:text-[1rem] text-[#484e53]">sort by downloads: {sort ? sort : ''}</summary>
                        <ul className="menu dropdown-content bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort('High-Low')}>High-Low</a></li>
                            <li><a onClick={() => handleSort('Low-High')}>Low-High</a></li>
                        </ul>
                    </details>

                </div>

                <div className='flex flex-col gap-4'>

                    {
                        appList.length === 0 ?

                            <div className='flex flex-col justify-center h-50 items-center gap-5 text-gray-600'>
                                <i className="fa-regular fa-face-frown text-6xl md:text-8xl"></i>
                                <h1 className='md:text-3xl'>You haven't installed any apps yet!</h1>
                            </div> :

                            appList.map(app =>
                                <div key={app.id} className='flex justify-between bg-white items-center rounded-lg py-3 px-3 shadow'>

                                    <div className='flex gap-5 items-center '>
                                        <img className='w-12 md:w-20 rounded-lg' src={app.image} alt="" />
                                        <div>
                                            <h1 className='font-medium md:text-xl mb-2'>{app.title}</h1>
                                            <div className='flex text-xs md:text-[1rem] gap-5'>
                                                <p className='font-medium text-[#00D390]'><i className="fa-solid fa-download text-[#00d390] md:text-3xl"></i>{app.downloads}</p>
                                                <p className='font-medium text-[#FF8811]'><i className="fa-solid fa-star text-[#ff8811] md:text-3xl"></i>{app.ratingAvg}</p>
                                                <p className='text-[#627382]'>{app.size} MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={() => handleUninstall(app.id)} className='btn bg-[#00d390] border-0 md:text-xl font-semiboldbold h-8 w-20 md:w-30 md:h-11 font-semibold'>Uninstall</button>

                                </div>
                            )

                    }

                </div>

            </div>
        </div>
    );
};

export default Installation;