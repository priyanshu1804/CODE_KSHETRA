import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeAuthenticatedGETRequest } from "../utils/ServerHelpers";
import { useCookies } from "react-cookie";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await makeAuthenticatedGETRequest("/auth/profile");
        console.log("User data received:", response);
        setUser(response?.data || response);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getData();
  }, []);

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    localStorage.removeItem("token");
    setUser(null);
    alert("Logged out successfully");
  };

  return (
    <header className="fixed top-0 left-0 w-screen bg-green-600 text-white shadow-md">
      <nav className="w-full flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">
          <Link to="/">Food Donation</Link>
        </div>

        <div className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <button className="text-white">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        <div className="hidden md:flex gap-9 text-xl">
          <Link to="/" className="hover:text-white mb-1">Home</Link>
          <Link to="/aboutus" className="hover:text-white mb-1">About Us</Link>
          <Link to="/contactus" className="hover:text-white mb-1">Contact Us</Link>
          <Link to="/features" className="hover:text-white mb-1">Features</Link>
          {user?.role === "NGO" && (
            <Link to="/ngo-portal" className="hover:text-gray-300">NGO Portal</Link>
          )}
        </div>

        <div className="flex gap-4 hidden md:flex">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="font-semibold">{user?.Name ?? user?.name ?? "User"}</span>
              <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-2 bg-white text-green-600 rounded hover:bg-green-200">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 bg-white text-green-600 rounded hover:bg-green-200">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
