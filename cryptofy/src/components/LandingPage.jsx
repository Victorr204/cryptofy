import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingHeader from './LandingHeader';


const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Signup'); // Navigates to the sign-up page
  };

  return (
    <>
    <LandingHeader/>
    <div className="get bg-amber-400 h-screen flex flex-col justify-center items-center  dark:bg-gray-900  text-white">

      <h1 className="text-4xl font-bold mb-2 ">WELCOME TO ZYPTOX</h1>
      <h3 className='text-3xl mb-6'>cryptocurrency exchange</h3>
      <br />
      <p className="text-xl mb-6 text-center">
        Join us today and explore the amazing features we have to offer.
      </p>
      <button
        onClick={handleGetStarted}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Get Started
      </button>
    </div>
    </>
  );
};

export default LandingPage;