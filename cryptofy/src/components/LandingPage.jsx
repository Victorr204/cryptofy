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
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900  text-gray-900 dark:text-white">

      <h1 className="text-4xl font-bold mb-6">Welcome to cryptofy</h1>
      <p className="text-lg mb-6 text-center">
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