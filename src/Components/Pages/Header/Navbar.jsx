import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import logoImg from '../../../../public/assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="m-2 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-clip-text hover:text-transparent font-bold transition-all duration-300"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/apps"
          className="m-2 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-clip-text hover:text-transparent font-bold transition-all duration-300"
        >
          Apps
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/installation"
          className="m-2 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-clip-text hover:text-transparent font-bold transition-all duration-300"
        >
          My Installation
        </NavLink>
      </li>
    </>
  )

  return (
    <div className={`navbar ${scrolled ? 'navbar-scrolled' : 'shadow-sm'}`}>
      <div className="max-w-[1350px] mx-auto w-full flex justify-between items-center px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden active:bg-gradient-to-r hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0 text-[#4e00c3] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1000] mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>

          <Link className="flex items-center gap-1 logo-container" to={'/'}>
            <img className="h-5 md:h-10 transition-transform duration-300" src={logoImg} alt="" />
            <p className="font-bold md:text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/akmzakaria"
            className="btn h-9 w-30 md:h-10 md:w-33 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0 btn-gradient text-white hover:shadow-lg"
          >
            <i className="fa-brands fa-github md:text-lg"></i>Contribute
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
