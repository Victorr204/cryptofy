import { Link } from "react-router-dom";
import "./styles/getstarted.css";
import Header from "./Header";

const GetStarted = () => {
  return (
    <>
    <Header/>
    <div className="get flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-2 text-white">ZYOTOX</h1>
      <h4 className="font-bold mt-0 mb-2 text-white text-3xl">Cryptocurrency Exchange</h4>
      <p className="text-white mb-6 text-xl">Choose an option to proceed:</p>

      <div className="flex gap-4 mt-10">
        <Link
          to="/buy"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Buy Crypto
        </Link>
        <Link
          to="/sell"
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
        >
          Sell Crypto
        </Link>
      </div>
    </div>
    </>
  );
};

export default GetStarted;
