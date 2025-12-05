import { useEffect, useState } from 'react'
import { useLoaderData, Link } from 'react-router'
import { getStoredApp } from '../../../Utility/addToInstallation'
import { removeFromStoredApp } from '../../../Utility/removeFromInstallation'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'

const Installation = () => {
  const [sort, setSort] = useState('')

  const [appList, setAppList] = useState([])

  const data = useLoaderData()

  useEffect(() => {
    const storedAppData = getStoredApp()
    const convertedStoredApp = storedAppData.map((id) => Number(id))

    const myAppList = data.filter((app) => convertedStoredApp.includes(app.id))
    setAppList(myAppList)
  }, [data])

  const confirmUninstall = (id, title) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-triangle-exclamation text-2xl text-yellow-500"></i>
            <span className="font-semibold text-lg">Confirm Uninstall</span>
          </div>
          <p className="text-sm text-gray-600">
            Are you sure you want to uninstall <strong>{title}</strong>?
          </p>
          <div className="flex gap-2 justify-end mt-2">
            <button
              onClick={() => {
                toast.dismiss(t.id)
              }}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleUninstall(id)
                toast.dismiss(t.id)
              }}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg font-medium transition-all"
            >
              Uninstall
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
        style: {
          minWidth: '300px',
          padding: '16px',
        },
      }
    )
  }

  const handleUninstall = (id) => {
    removeFromStoredApp(id)
    setAppList((prevList) => prevList.filter((app) => app.id !== id))
  }

  const handleSort = (type) => {
    setSort(type)

    if (type === 'High-Low') {
      const sortedByHigh_Low = [...appList].sort((b, a) => a.downloads1 - b.downloads1)
      setAppList(sortedByHigh_Low)
    } else if (type === 'Low-High') {
      const sortedByLow_High = [...appList].sort((a, b) => a.downloads1 - b.downloads1)
      setAppList(sortedByLow_High)
    }
  }

  return (
    <div className="bg-[#f5f5f5] pb-8 pt-8 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#001931] text-2xl md:text-5xl font-bold mb-3 md:mb-4"
        >
          Your Installed Apps
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#627382] md:text-xl mx-5 md:mx-0 mb-8 md:mb-10"
        >
          Manage all your installed applications in one place
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4 bg-white p-4 rounded-xl shadow-md"
        >
          <p className="font-semibold md:text-2xl text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            ({appList.length}) Apps Installed
          </p>

          {appList.length > 0 && (
            <details className="dropdown dropdown-end">
              <summary className="btn btn-sm md:btn-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-0 cursor-pointer hover:shadow-lg transition-all duration-300">
                <i className="fa-solid fa-sort mr-2"></i>
                Sort: {sort || 'Default'}
              </summary>
              <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow-xl mt-2 border-2 border-[#632EE3]/20">
                <li>
                  <a
                    onClick={() => handleSort('High-Low')}
                    className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white"
                  >
                    <i className="fa-solid fa-arrow-down-wide-short"></i>
                    High to Low
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleSort('Low-High')}
                    className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white"
                  >
                    <i className="fa-solid fa-arrow-up-wide-short"></i>
                    Low to High
                  </a>
                </li>
              </ul>
            </details>
          )}
        </motion.div>

        <AnimatePresence mode="popLayout">
          {appList.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center gap-6 text-gray-600 bg-white rounded-2xl shadow-lg p-10 md:p-20 my-10"
            >
              <div className="bg-gradient-to-r from-[#632EE3]/10 to-[#9F62F2]/10 p-8 rounded-full">
                <i className="fa-regular fa-face-frown text-6xl md:text-8xl text-[#632EE3]"></i>
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-[#001931]">
                No Apps Installed Yet!
              </h1>
              <p className="text-sm md:text-lg text-[#627382] text-center">
                Browse our collection and install your favorite apps
              </p>
              <Link
                to="/apps"
                className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <i className="fa-solid fa-store mr-2"></i>
                Browse Apps
              </Link>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-4">
              {appList.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                  className="flex flex-col md:flex-row justify-between bg-white items-center rounded-2xl py-4 px-4 md:px-6 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#632EE3]/20"
                >
                  <div className="flex gap-4 md:gap-6 items-center w-full md:w-auto mb-4 md:mb-0">
                    <Link to={`/appdetails/${app.id}`}>
                      <img
                        className="w-16 h-16 md:w-24 md:h-24 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border-2 border-[#632EE3]/10"
                        src={app.image}
                        alt={app.title}
                      />
                    </Link>
                    <div className="flex-1">
                      <Link to={`/appdetails/${app.id}`}>
                        <h1 className="font-semibold md:text-xl text-[#001931] mb-2 hover:text-[#632EE3] transition-colors">
                          {app.title}
                        </h1>
                      </Link>
                      <div className="flex flex-wrap text-xs md:text-sm gap-3 md:gap-5">
                        <p className="font-medium text-[#00D390] flex items-center gap-1">
                          <i className="fa-solid fa-download"></i>
                          {app.downloads}
                        </p>
                        <p className="font-medium text-[#FF8811] flex items-center gap-1">
                          <i className="fa-solid fa-star"></i>
                          {app.ratingAvg}
                        </p>
                        <p className="text-[#627382] flex items-center gap-1">
                          <i className="fa-solid fa-hard-drive"></i>
                          {app.size} MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => confirmUninstall(app.id, app.title)}
                    className="btn bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 md:text-lg font-semibold h-10 w-full md:w-36 md:h-12 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <i className="fa-solid fa-trash mr-2"></i>
                    Uninstall
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Installation
