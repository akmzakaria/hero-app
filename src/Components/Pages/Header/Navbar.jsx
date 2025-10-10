import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../../../../public/assets/logo.png';
import './Navbar.css'

const Navbar = () => {

    const links = <>
        <nav className='flex flex-col md:flex-row'>
            <NavLink to='/'><li className='nav m-2 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-clip-text hover:text-transparent hover:underline decoration-[#9F62F2] font-bold'>Home</li></NavLink>

            <NavLink to='/apps'><li className='m-2 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-clip-text hover:text-transparent hover:underline decoration-[#9F62F2] font-bold'>Apps</li></NavLink>

            <NavLink to='/installation'><li className='m-2 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-clip-text hover:text-transparent hover:underline decoration-[#9F62F2] font-bold'>My Installation</li></NavLink>
        </nav>

    </>

    return (
        <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden active:bg-gradient-to-r hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0 text-[#4e00c3]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <Link className='flex items-center gap-1' to={'/'}>
                    <img className='h-5 md:h-10' src={logoImg} alt="" />
                    <p className="font-bold md:text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</p>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <a href='https://github.com/AKMZakaria' className="btn h-9 w-30 md:h-10 md:w-33 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-0"><i className="fa-brands fa-github  md:text-lg"></i>Contribute</a>

            </div>
        </div>
    );
};

export default Navbar;