import React from "react";
import "./styles/body.css"


const Body = () => {
  return (
    <div className="body-section bg-gray-100 dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 text-lg font-semibold text-gray-900 dark:text-white ">
      <div className="overlay">
        <h1 className="heading">Welcome to Cryptofy</h1>
        <p className="subtitle">
          Your trusted destination for buying, selling, and trading cryptocurrencies.
        </p>
        <p className="tagline">
          Secure, fast, and easy to use. Join us today and start trading!
        </p>
        
        <button className="get hover:bg-amber-400 text-lime-500 text-2xl rounded-2xl p-1.5 mt-5 dark:hover:bg-amber-700 dark:text-white   transition duration-700 ease-in-out transform hover:scale-105 hover:text-white">Get started 😊</button>
      </div>
    </div>
  );
};

export default Body;
