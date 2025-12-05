import { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import { motion } from 'framer-motion'

const Apps = () => {
  const data = useLoaderData()

  const [searchWord, setSearchWord] = useState('')
  const [filteredApps, setFilteredApps] = useState(data)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (searchWord.trim() === '') {
      setFilteredApps(data)
      setIsLoading(false)
      return
    }

    setIsLoading(true)

    const timer = setTimeout(() => {
      const filtered = data.filter((app) =>
        app.title.toLowerCase().includes(searchWord.toLowerCase())
      )
      setFilteredApps(filtered)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchWord, data])

  return (
    <div className="bg-[#f5f5f5] pb-1 pt-5 md:pt-8 min-h-screen">
      {/* 20 apps */}
      <div className="md:max-w-[1400px] mx-auto mb-8 md:pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#001931] md:text-5xl text-2xl font-bold mb-2 md:mb-4"
        >
          Our All Applications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#627382] mx-5 md:mx-0 text-sm md:text-xl mb-8 md:mb-12"
        >
          Explore All Apps on the Market developed by us. We code for Millions
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center mx-3 md:mx-5 mb-8 gap-4"
        >
          <p className="font-semibold md:text-2xl text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            ({filteredApps.length}) Apps Found
          </p>

          {/* search bar */}
          <div className="w-full md:w-auto">
            <label className="input bg-white border-2 border-[#d2d2d2] focus-within:border-[#632EE3] h-10 w-full md:w-80 flex items-center gap-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
              <svg
                className="h-5 w-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
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
                onChange={(e) => setSearchWord(e.target.value)}
                type="search"
                className="grow outline-none"
                placeholder="Search apps..."
              />
            </label>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="flex h-[40vh] bg-[#f5f5f5] justify-center items-center">
            <span className="loading loading-dots w-20 md:w-32 text-[#632EE3]"></span>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 md:mx-5 place-items-center gap-5 md:gap-8">
              {filteredApps.length > 0 &&
                filteredApps.map((app, index) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link to={`/appdetails/${app.id}`}>
                      <div className="flex flex-col shadow-md hover:shadow-2xl rounded-2xl w-[150px] md:w-[280px] gap-3 p-4 bg-white transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-[#632EE3]/20">
                        <div className="overflow-hidden rounded-xl">
                          <img
                            className="w-full rounded-xl transition-transform duration-300 hover:scale-110"
                            src={app.image}
                            alt={app.title}
                          />
                        </div>
                        <h3 className="text-center text-[#001931] font-semibold md:text-xl text-sm line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
                          {app.title}
                        </h3>
                        <div className="flex justify-between text-xs md:text-base font-medium">
                          <p className="text-[#00D390] flex items-center gap-1">
                            <i className="fa-solid fa-download"></i>
                            <span>{app.downloads}</span>
                          </p>
                          <p className="text-[#FF8811] flex items-center gap-1">
                            <i className="fa-solid fa-star"></i>
                            <span>{app.ratingAvg}</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
            {filteredApps.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center h-[40vh] items-center gap-5 text-gray-600"
              >
                <i className="fa-regular fa-face-sad-tear text-6xl md:text-8xl text-[#632EE3]/30"></i>
                <h1 className="text-xl md:text-3xl font-semibold">No Apps Found!</h1>
                <p className="text-sm md:text-base text-gray-500">
                  Try searching with different keywords
                </p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Apps
