import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ThemeToggle from './ThemeToggle';
import './styles/Header.css'


const LandingHeader = () => {

   const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

return (
  <>
   <nav className=" dark:bg-slate-900 dark:text-white p-4 bg-slate-200 sticky top-0">
    <div className="container mx-auto flex justify-between items-center">
      {/*logo for small screen*/}
      <h1 className='head lg:hidden md:hidden'><a href="#"><img src="#" alt="cryptofy" /></a></h1>

      
      {/* Hamburger menu */}
      <div className="md:hidden flex justify-end w-screen duration-1000">
        <button
          onClick={toggleMenu}
          className="text-gray-900 dark:text-white focus:outline-none  "
        >
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>
      </div>



      {/* Links for larger screens */}
      <div className=" items-center justify-center max-w-screen-2xl h-12 pt-2 mt-10  mx-auto  bg-gray-100 dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 text-lg font-semibold text-gray-900 dark:text-white hidden lg:flex lg:w-full ">
      <h1 className='head'><a href="#"><img src="#" alt="Crypto Platform" /></a></h1>
      <nav className=' nav'>
          <ul className='list '>
          
  <header className="app-header flex items-center">
    <h1 className="logo">Cryptofy</h1>
    <nav className=" flex">
      <ul className="flex">
        <li>
          <Link to="/signup">sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  </header>
          </ul>
        <ThemeToggle />
        </nav>
      </div>
    </div>



    {/* Links for medium screens */}
    <div className=" dark:text-white hidden lg:hidden md:flex font-semibold text-gray-900 w-full dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 mt-3  bg-gray-100 ">
      <h1 className='head'><a href="#"><img src="#" alt="Cryptofy" /></a></h1>
      <nav className=' nav'>
          <ul className='list'>
          <li>
          <Link to="/signup">sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
          </ul>
          
        <ThemeToggle />
        </nav>
      </div>



    {/* Menu for small screens */}
    {isOpen && (
      <div className="md:hidden small ">
          <li>
          <Link to="/signup">sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <div className="px-4 py-2">
          <ThemeToggle />
        </div>
      </div>
    )}
  </nav>
  </>
);
};

export default LandingHeader
