import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {

    const data = useLoaderData();
    console.log(data)

    const { id } = useParams()
    console.log(id)

    const singleApp = data.find(app => app.id === Number(id));
    console.log(singleApp)

    return (
        <div className='max-w-[1500px] mx-auto'>
            <div className='flex gap-10 p-15'>
                <img src={singleApp.image} alt="" />
                <div className='flex flex-col gap-5'>

                    <h3 className='font-bold text-3xl'>{singleApp.title}</h3>
                    <p className='text-xl text-[#627382]'>Developed by <span className='text-[#753de8] font-semibold'>{singleApp.companyName}</span></p>

                    <div className='flex gap-10'>

                        <div className='flex flex-col justify-center items-center gap-2'>
                            <i className="fa-solid fa-download text-[#00d390] text-3xl"></i>
                            <p className='text-[#001931]'>Downloads</p>
                            <h1 className='font-extrabold text-4xl'>{singleApp.downloads}</h1>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2'>
                            <i className="fa-solid fa-star text-[#ff8811] text-3xl"></i>
                            <p className='text-[#001931]'>Average Ratings</p>
                            <h1 className='font-extrabold text-4xl'>{singleApp.ratingAvg}</h1>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2'>
                            <i className="fa-solid fa-thumbs-up text-3xl text-[#753de8]"></i>
                            <p className='text-[#001931]'>Total Reviews</p>
                            <h1 className='font-extrabold text-4xl'>{singleApp.reviews}</h1>
                        </div>

                    </div>
                    <div>
                        <button className="btn bg-[#00d390] border-0 text-xl font-semiboldbold w-60 h-11">Install Now ({singleApp.size} MB)</button>
                    </div>
                </div>
            </div>

            <div className='p-15'>
                <h1 className='text-2xl font-semibold'>Ratings</h1>
                <BarChart width={1400} height={450} data={singleApp.ratings} layout='vertical' barCategoryGap={15}>

                    <XAxis dataKey={'count'} type='number' axisLine={false} tickLine={false}></XAxis>

                    <YAxis dataKey={'name'} type='category' axisLine={false} tickLine={false} tick={{ dx: -15 }}></YAxis>

                    <Tooltip></Tooltip>

                    <Bar dataKey={'count'} fill='#ff8811'></Bar>

                </BarChart>
                <hr className="border-[#c4c9ce] mt-10" />
            </div>



        </div>
    );
};

export default AppDetails;