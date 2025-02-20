import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeAuthenticatedGETRequest } from "../utils/ServerHelpers";
import { useCookies } from "react-cookie";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState(null); // ✅ Set default state to null

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await makeAuthenticatedGETRequest("/auth/profile");
        console.log("User data received:", response);
        setUser(response?.data || response); // ✅ Ensure correct data is set
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
    <header
      className={`fixed top-0 left-0 w-screen bg-green-600 text-white shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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

        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          <Link to="/features" className="hover:text-gray-300">Features</Link>

          {/* Show NGO Portal only for NGOs */}
          {user?.role === "NGO" && (
            <Link to="/ngo-portal" className="hover:text-gray-300">
              NGO Portal
            </Link>
          )}

          {/* Show Request Portal for Restaurants & Individuals */}
          {(user?.role === "Resturent"||user?.role === "Individual") && (
            <Link to="/request-portal" className="hover:text-gray-300">
              Request Portal
            </Link>
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
