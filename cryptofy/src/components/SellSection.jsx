import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/buyandsell.css"
import Header from "./Header";

const SellSection = () => {
  const [cryptos, setCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [amountOption, setAmountOption] = useState("dollars"); // Default: Dollars
  const [amount, setAmount] = useState("");

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

  const handleSell = () => {
    if (!selectedCrypto) {
      alert("Please select a cryptocurrency to sell.");
      return;
    }
    if (!amount || parseFloat(amount) < 10) {
      alert("The minimum amount is $10 or the equivalent in cryptocurrency.");
      return;
    }
    alert(
      `Sell request confirmed! You selected ${selectedCrypto.name}, ${amountOption === "dollars" ? `$${amount}` : `${amount} ${selectedCrypto.symbol.toUpperCase()}`}.\nSend your ${selectedCrypto.name} to our wallet address: 0x123...abc`
    );
  };

  return (
    <>
    <Header/>
    <div className="sog content-center">
    <div className="sell-section  bg-gray-100 dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-yellow-50  text-gray-900 dark:text-white">
      <h2>Sell Cryptocurrency</h2>
      <p>Select the cryptocurrency you want to sell:</p>

      {/* Dropdown for Crypto Selection */}
      <select
      className=" text-gray-900 dark:text-white dark:bg-slate-900"
        onChange={(e) => {
          const selectedId = e.target.value;
          const crypto = cryptos.find((c) => c.id === selectedId);
          setSelectedCrypto(crypto);
        }}
        defaultValue=""
      >
        <option value="" disabled>
          Choose a Cryptocurrency
        </option>
        {cryptos.map((crypto) => (
          <option key={crypto.id} value={crypto.id}>
            {crypto.name} (${crypto.current_price})
          </option>
        ))}
      </select>

      {selectedCrypto && (
        <div className="selected-crypto">
          <h3>
            Selected: {selectedCrypto.name} (${selectedCrypto.current_price})
          </h3>
          <p>Choose how you want to specify the amount:</p>

          {/* Radio Buttons for Amount Selection */}
          <div>
            <label>
              <input
                type="radio"
                name="amountOption"
                value="dollars"
                checked={amountOption === "dollars"}
                onChange={() => setAmountOption("dollars")}
              />
              Sell in Dollars (minimum $10)
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="amountOption"
                value="crypto"
                checked={amountOption === "crypto"}
                onChange={() => setAmountOption("crypto")}
              />
              Sell in Cryptocurrency (minimum $10 equivalent)
            </label>
          </div>

          {/* Amount Input */}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={`Enter ${
              amountOption === "dollars" ? "dollar amount" : "crypto amount"
            }`}
          />
          <p>
            {amountOption === "crypto"
              ? `Minimum: ${(10 / selectedCrypto.current_price).toFixed(6)} ${
                  selectedCrypto.symbol.toUpperCase()
                }`
              : "Minimum: $10"}
          </p>

          {/* Wallet Address */}
          <p>Send Your {selectedCrypto.name} to Our Wallet Address:</p>
          <strong>0x123...abc</strong>
          <button onClick={handleSell}>Confirm Sell</button>
        </div>
      )}
    </div>
    </div>
   
    </>
  );
};

export default SellSection;
