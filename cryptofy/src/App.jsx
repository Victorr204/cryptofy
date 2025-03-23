import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import BuySection from "./components/BuySection";
import SellSection from "./components/SellSection";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LandingPage from './components/LandingPage';
import MainPage from "./components/MainPage";

const App = () => {


  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 text-gray-900 dark:text-white min-h-screen flex flex-col">
        
        <main className="bg-gray-100 dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 text-gray-900 dark:text-white flex-grow">

          <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/main" element={<MainPage />} />


            <Route  path="/buy" element={<BuySection />} />
            <Route path="/sell" element={<SellSection />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            

          </Routes>
        </main>

        {/* Footer Component */}
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
