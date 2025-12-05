import heroImg from '../../../../public/assets/hero.png'
import { Link, useLoaderData } from 'react-router'
import playStoreImg from '../../../../public/assets/play.png'
import appleStoreImg from '../../../../public/assets/apple.png'
import { motion } from 'framer-motion'

const Home = () => {
  const data = useLoaderData()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div>
      <div className="bg-[#f5f5f5] pt-5 md:pt-8">
        <div className="flex flex-col justify-center gap-10 max-w-[1200px] mx-auto">
          <motion.div
            className="text-center flex flex-col gap-5 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-7xl font-bold text-[#001931]"
            >
              We Build <br />{' '}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{' '}
              Apps...
            </motion.h1>
            <motion.p variants={itemVariants} className="text-[#627382] md:text-xl mx-5 md:mx-0">
              At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter,
              and more exciting. Our goal is to turn your ideas into digital experiences that truly
              make an impact.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-5 justify-center">
              <Link
                to="https://play.google.com"
                className="btn bg-[#f5f5f5] shadow text-[#001931] font-bold border-[#d2d2d2] h-11 w-40 md:text-xl md:h-14 md:w-50 btn-gradient hover:scale-105"
              >
                <img src={playStoreImg} alt="" />
                Google Play
              </Link>

              <Link
                to="https://www.apple.com/app-store/"
                className="btn bg-[#f5f5f5] border-[#d2d2d2] shadow text-[#001931] font-bold md:text-xl md:h-14 md:w-50 h-11 w-40 btn-gradient hover:scale-105"
              >
                <img src={appleStoreImg} alt="" />
                App Store
              </Link>
            </motion.div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-240 mx-auto"
            src={heroImg}
            alt=""
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-10 md:p-20 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white "
        >
          <div className="md:max-w-[1600px] mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-xl md:text-5xl font-bold"
            >
              Trusted by Millions, Built for You
            </motion.h1>

            <div className="flex flex-col md:flex-row md:justify-around gap-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col text-xs md:text-[1rem] md:gap-3"
              >
                <p>Total Downloads</p>
                <h1 className="font-extrabold text-2xl md:text-6xl">29.6M</h1>
                <p>21% more than last month</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col text-xs md:text-[1rem] md:gap-3"
              >
                <p>Total Reviews</p>
                <h1 className="font-extrabold text-2xl md:text-6xl">906K</h1>
                <p>46% more than last month</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col text-xs md:text-[1rem] md:gap-3"
              >
                <p>Active Apps</p>
                <h1 className="font-extrabold text-2xl md:text-6xl">132+</h1>
                <p>31 more will Launch</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 8 Apps */}
        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[#001931] text-xl md:text-5xl font-bold mt-10 md:mt-12 md:mb-8 mb-3"
          >
            Trending Apps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-[#627382] text-sm md:text-xl mb-8"
          >
            Explore All Trending Apps on the Market developed by us
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 md:mx-5 place-items-center gap-5 md:gap-8 mb-8">
            {data.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pb-12"
        >
          <Link
            to="/apps"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0 w-30 h-10 md:w-40 md:h-12 btn-gradient text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Show All Apps
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
