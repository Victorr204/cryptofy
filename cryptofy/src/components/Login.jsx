import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      console.log("Login successful, redirecting..."); // Debugging
      navigate("/main", { replace: true }); // Force redirect
    } catch (error) {
      console.error("Login Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100 dark:bg-gray-900  text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">
      <input  className="p-2 border rounded " type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input  className="p-2 border rounded " type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className="p-2 bg-blue-500 rounded">Login</button>
    </form>
    </div>
  );
};

export default Login;
