import { useAuth } from "../AuthContext"; // Adjust path if needed
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); // For redirection

  const handleLogout = async () => {
    try {
      await logout();
      console.log("User logged out successfully");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
      Logout
    </button>
  );
};

export default LogoutButton;
