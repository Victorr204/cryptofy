import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.email}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </>
      )}
    </nav>
  );
}
