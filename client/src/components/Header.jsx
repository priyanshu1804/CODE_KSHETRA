import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu visibility
  const [user, setUser] = useState(null); // State to track logged-in user, initially null (not logged in)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogin = () => {
    // Simulating a successful login by setting the user state with profile picture
    setUser({
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg" // Replace with actual profile pic URL
    });
  };

  const handleLogout = () => {
    // Simulating logout by clearing the user state
    setUser(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-screen bg-green-600 text-white shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Navbar Container */}
      <nav className="w-full flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Food Donation</Link>
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <button className="text-white">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Navigation Links (desktop) */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          <Link to="/features" className="hover:text-gray-300">Features</Link>
        </div>

        {/* Auth Buttons or Profile Picture (only visible on mobile or if logged in) */}
        <div className="flex gap-4 hidden md:flex">
          {!user ? (
            <>
              <Link to="/login">
                <button onClick={handleLogin} className="px-4 py-2 bg-white text-green-600 rounded hover:bg-green-200">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button onClick={handleLogin} className="px-4 py-2 bg-white text-green-600 rounded hover:bg-green-200">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <button onClick={handleLogout} className="text-white hover:text-gray-300">
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu (visible on mobile) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-600 text-white px-8 py-4 flex flex-col gap-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          <Link to="/features" className="hover:text-gray-300">Features</Link>
          <div className="flex gap-4">
            {!user ? (
              <>
                <Link to="/login">
                  <button onClick={handleLogin} className="px-4 py-2 bg-white text-green-600 rounded hover:bg-green-200">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button onClick={handleLogin} className="px-4 py-2 bg-white text-green-600 rounded hover:bg-green-200">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <button onClick={handleLogout} className="text-white hover:text-gray-300">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
