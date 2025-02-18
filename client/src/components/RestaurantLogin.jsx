import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers";
import { useCookies } from "react-cookie";

const RestaurantLogin = () => {
  const [Organization_Email, setOrganizationEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = { Organization_Email, password };
    const response = await makeUnauthenticatedPOSTRequest("/resturent/login", data);
    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });

      // Show success alert
      alert("Login Successful!");

      navigate("/");
    } else {
      alert("Failure");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Restaurant Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={Organization_Email}
              onChange={(e) => setOrganizationEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
          <Link
            to="/signup"
            className="block text-center text-blue-500 mt-4 hover:underline"
          >
            Register</Link>
        </form>
      </div>
    </div>
  );
};

export default RestaurantLogin;
