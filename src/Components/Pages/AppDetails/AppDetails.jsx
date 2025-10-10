import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addToStoredApp, getStoredApp } from '../../../Utility/addToInstallation';

const AppDetails = () => {

    const [installed, setInstalled] = useState(false);

    const data = useLoaderData();
    // console.log(data)

    const { id } = useParams()
    // console.log(id)

    const singleApp = data.find(app => app.id === Number(id));
    // console.log(singleApp)

    useEffect(() => {
        const storedApps = getStoredApp();
        if (storedApps.includes(singleApp.id)) {
            setInstalled(true);
        }
    }, [singleApp.id]);

    const handleInstall = (id) => {

        addToStoredApp(id)
        setInstalled(true);

    }

    return (
        <div className='max-w-[1500px] mx-auto'>
            <div className='flex md:flex-row flex-col items-center md:gap-10 gap-5 p-5 md:p-15'>
                <img className='rounded-lg h-30 w-30 md:h-67 md:w-64' src={singleApp.image} alt="" />
                <div className='flex flex-col gap-3 md:gap-5'>

                    <h3 className='font-bold text-center md:text-start text-2xl md:text-3xl'>{singleApp.title}</h3>
                    <p className='md:text-xl text-xs text-center md:text-start text-[#627382]'>Developed by <span className='text-[#753de8] font-semibold'>{singleApp.companyName}</span></p>

                    <div className='flex gap-7 md:gap-10'>

                        <div className='flex flex-col justify-center items-center md:gap-2'>
                            <i className="fa-solid fa-download text-[#00d390] md:text-3xl"></i>
                            <p className='text-[#001931] text-sm'>Downloads</p>
                            <h1 className='font-extrabold md:text-4xl'>{singleApp.downloads}</h1>
                        </div>

                        <div className='flex flex-col justify-center items-center md:gap-2'>
                            <i className="fa-solid fa-star text-[#ff8811] md:text-3xl"></i>
                            <p className='text-[#001931] text-sm'>Average Ratings</p>
                            <h1 className='font-extrabold md:text-4xl'>{singleApp.ratingAvg}</h1>
                        </div>

                        <div className='flex flex-col justify-center items-center md:gap-2'>
                            <i className="fa-solid fa-thumbs-up md:text-3xl text-[#753de8]"></i>
                            <p className='text-[#001931] text-sm'>Total Reviews</p>
                            <h1 className='font-extrabold md:text-4xl'>{singleApp.reviews}</h1>
                        </div>

                    </div>
                    <div className='text-center'>

                        <button disabled={installed} onClick={() => handleInstall(singleApp.id)} className={`  border-0 md:text-xl font-semibold w-42 h-10 md:w-60 md:h-11 ${installed ? 'bg-[#67ceae] shadow-none rounded-xs w-42 h-10 text-white' : 'bg-[#00d390] btn'}`}>{installed ? "Installed" : `Install Now (${singleApp.size} MB)`}</button>

                    </div>
                </div>
            </div>


            <div className='md:p-15 p-4'>
                <h1 className='md:text-2xl font-semibold mb-4'>Ratings</h1>

                <div style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={singleApp.ratings}
                            layout='vertical'
                            barCategoryGap={15}
                        >
                            <XAxis
                                dataKey={'count'}
                                type='number'
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                dataKey={'name'}
                                type='category'
                                axisLine={false}
                                tickLine={false}
                                tick={{ dx: -15 }}
                            />
                            <Tooltip />
                            <Bar dataKey={'count'} fill='#ff8811' />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <hr className="border-[#c4c9ce] mt-10" />
            </div>


            <div className='p-3 md:p-15 text-center md:text-start'>
                <h1 className='text-xl md:text-2xl font-semibold mb-5'>Description</h1>
                <p className='text-[#627382] text-sm md:text-xl'>{singleApp.description}</p>
            </div>

        </div>
    );
};

export default AppDetails;