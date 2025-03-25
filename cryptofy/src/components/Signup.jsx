import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import LandingHeader from "./LandingHeader";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      console.log("Signup successful, redirecting..."); // Debugging
      navigate("/main", { replace: true }); // Force redirect
    } catch (error) {
      console.error("Signup Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <>
    <LandingHeader/>
    <div className="get flex flex-col items-center justify-center min-h-screen dark:bg-gray-900  text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-2 text-white">Sign Up</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-4 w-80">
      <input className="p-2 border rounded text-white"
 type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input className="p-2 border rounded text-white"
 type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit"  className="p-2 bg-blue-500 rounded">Sign Up</button>
    </form>
    </div>
    </>
  );
};

export default Signup;
