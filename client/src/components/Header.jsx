import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, [lastScrollY]);

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       setUser(null);
  //       return;
  //     }

  //     api.setToken(token);

  //     const profileEndpoints = ["/resturent/profile", "/ngo/profile", "/individual/profile"];
  //     for (let endpoint of profileEndpoints) {
  //       try {
  //         const response = await api.get(endpoint, {
  //           headers: { Authorization: `Bearer ${token}` },
  //         });
  //         if (response && response.data.user) {
  //           setUser(response.data.user);
  //           return;
  //         }
  //       } catch (error) {
  //         console.warn(`Error fetching profile from ${endpoint}:`, error);
  //       }
  //     }
  //     setUser(null);
  //   };

  //   fetchUserProfile();
  // }, [cookies.token]); // Re-run when the token changes

  // const handleLogout = () => {
  //   removeCookie("token", { path: "/" });
  //   localStorage.removeItem("token");
  //   setUser(null);
  //   alert("Logged out successfully");
  // };

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
        </div>

        <div className="flex gap-4 hidden md:flex">
          {/* {!user ? (
            <> */}
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
            {/* </>
          ) : (
            <div className="flex items-center gap-4">
              <span className="font-semibold">{user.Organization_Name || user.name}</span>
              <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
                Logout
              </button>
            </div>
          )} */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
