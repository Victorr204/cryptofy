import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CryptoSection from "./components/CryptoSection";
import BuySection from "./components/BuySection";
import SellSection from "./components/SellSection";
import Body from "./components/Body";
import Header from "./components/Header"


const App = () => {

  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 text-gray-900 dark:text-white min-h-screen flex flex-col">
        <Header/>
        <main className="bg-gray-100 dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 text-gray-900 dark:text-white flex-grow">
          
          <Routes>
            <Route path="/" element={ <>
              <Body/>
            <CryptoSection />
            
            </>} />
            <Route  path="/buy" element={<BuySection />} />
            <Route path="/sell" element={<SellSection />} />
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
