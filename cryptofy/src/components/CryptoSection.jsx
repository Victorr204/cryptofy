import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/cryptosection.css"

const CryptoSection = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    // Fetch real-time crypto prices
    const fetchCryptos = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 20,
              page: 1,
            },
          }
        );
        setCryptos(response.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchCryptos();
  }, []);

  return (
    <div className="crypto-section  bg-gray-100 dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 text-lg font-semibold text-gray-900 dark:text-white">
      <h1>Top Cryptocurrencies</h1>
      <div className="crypto-grid  bg-gray-100 dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50 text-lg font-semibold text-gray-900 dark:text-white">
        {cryptos.map((crypto) => (
          <div key={crypto.id} className="crypto-card">
            <img src={crypto.image} alt={crypto.name} className="crypto-logo" />
            <h3>{crypto.name}</h3>
            <p>Price: ${crypto.current_price.toLocaleString()}</p>
            <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoSection;
