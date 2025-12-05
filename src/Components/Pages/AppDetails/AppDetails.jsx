import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { addToStoredApp, getStoredApp } from '../../../Utility/addToInstallation'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'

const AppDetails = () => {
  const [installed, setInstalled] = useState(false)

  const data = useLoaderData()
  // console.log(data)

  const { id } = useParams()
  // console.log(id)

  const singleApp = data.find((app) => app.id === Number(id))
  // console.log(singleApp)

  useEffect(() => {
    const storedApps = getStoredApp()
    if (storedApps.includes(singleApp.id)) {
      setInstalled(true)
    }
  }, [singleApp.id])

  const handleInstall = (id, title) => {
    addToStoredApp(id)
    setInstalled(true)
    toast.success(`${title} installed successfully!`, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
      duration: 3000,
    })
  }

  return (
    <div className="max-w-[1500px] mx-auto bg-[#f5f5f5] min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex md:flex-row flex-col items-center md:items-start md:gap-10 gap-5 p-5 md:p-15 bg-white rounded-2xl shadow-lg m-5 md:m-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <img
            className="rounded-2xl h-32 w-32 md:h-72 md:w-72 shadow-xl border-4 border-[#632EE3]/10"
            src={singleApp.image}
            alt={singleApp.title}
          />
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-center md:text-start text-2xl md:text-4xl text-[#001931] mb-2">
              {singleApp.title}
            </h3>
            <p className="md:text-xl text-sm text-center md:text-start text-[#627382]">
              Developed by{' '}
              <span className="text-[#632EE3] font-semibold">{singleApp.companyName}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-8 bg-gradient-to-r from-[#632EE3]/5 to-[#9F62F2]/5 p-4 md:p-6 rounded-xl"
          >
            <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
              <div className="bg-[#00d390]/10 p-3 md:p-4 rounded-full">
                <i className="fa-solid fa-download text-[#00d390] text-xl md:text-3xl"></i>
              </div>
              <p className="text-[#627382] text-xs md:text-sm font-medium">Downloads</p>
              <h1 className="font-extrabold text-lg md:text-3xl text-[#001931]">
                {singleApp.downloads}
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
              <div className="bg-[#ff8811]/10 p-3 md:p-4 rounded-full">
                <i className="fa-solid fa-star text-[#ff8811] text-xl md:text-3xl"></i>
              </div>
              <p className="text-[#627382] text-xs md:text-sm font-medium">Avg Rating</p>
              <h1 className="font-extrabold text-lg md:text-3xl text-[#001931]">
                {singleApp.ratingAvg}
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
              <div className="bg-[#632EE3]/10 p-3 md:p-4 rounded-full">
                <i className="fa-solid fa-thumbs-up text-xl md:text-3xl text-[#632EE3]"></i>
              </div>
              <p className="text-[#627382] text-xs md:text-sm font-medium">Reviews</p>
              <h1 className="font-extrabold text-lg md:text-3xl text-[#001931]">
                {singleApp.reviews}
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center md:text-start"
          >
            <button
              disabled={installed}
              onClick={() => handleInstall(singleApp.id, singleApp.title)}
              className={`border-0 md:text-xl font-semibold w-full md:w-72 h-12 md:h-14 rounded-xl transition-all duration-300 ${
                installed
                  ? 'bg-[#00d390] text-white cursor-not-allowed shadow-md'
                  : 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:shadow-2xl hover:scale-105 btn'
              }`}
            >
              {installed ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="fa-solid fa-check"></i>
                  Installed
                </span>
              ) : (
                `Install Now (${singleApp.size} MB)`
              )}
            </button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:p-15 p-5 md:m-10 m-5 bg-white rounded-2xl shadow-lg"
      >
        <h1 className="md:text-3xl text-xl font-bold mb-6 text-[#001931] flex items-center gap-3">
          <i className="fa-solid fa-chart-bar text-[#632EE3]"></i>
          Ratings Distribution
        </h1>

        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={singleApp.ratings} layout="vertical" barCategoryGap={15}>
              <XAxis dataKey={'count'} type="number" axisLine={false} tickLine={false} />
              <YAxis
                dataKey={'name'}
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ dx: -15 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '2px solid #632EE3',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey={'count'} fill="#632EE3" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-5 md:p-15 md:m-10 m-5 bg-white rounded-2xl shadow-lg text-center md:text-start"
      >
        <h1 className="text-xl md:text-3xl font-bold mb-5 text-[#001931] flex items-center gap-3 justify-center md:justify-start">
          <i className="fa-solid fa-info-circle text-[#632EE3]"></i>
          Description
        </h1>
        <p className="text-[#627382] text-sm md:text-lg leading-relaxed">{singleApp.description}</p>
      </motion.div>
    </div>
  )
}

export default AppDetails
