import React from 'react'
import {useState} from "react";
import {useCookies} from "react-cookie";
import {Icon} from "@iconify/react";
import {Link, useNavigate} from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/ServerHelpers";
function Signup() {
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [Contact, setContact] = useState("");
    const [Email, setEmail] = useState("");
    const [ConfirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [AadharNumber, setAadharNumber] = useState("");
    const [role, setRole] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();
    const signUp = async () => {
        if (Email !== ConfirmEmail) {
            alert(
                "Email and confirm email fields must match. Please check again"
            );
            return;
        }
        const data = {Name, Address, Contact, Email, password, AadharNumber, role};
        
        
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/register",
            data
        );
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});
            alert("Success");
            navigate("/");
        } else {
            alert("Failure");
        }
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
            <div className="p-5 border-b border-gray-700 w-full flex justify-center">
                <Icon icon="logos:food-donation" width="150" />
            </div>
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Sign up for Food Donation</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={Contact}
                    onChange={(e) => setContact(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="email"
                    name="confirmEmail"
                    placeholder="Confirm Email Address"
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={ConfirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    name="aadharNumber"
                    placeholder="Aadhar Number"
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={AadharNumber}
                    onChange={(e) => setAadharNumber(e.target.value)}
                />
                <select
                    name="role"
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="">Select Role</option>
                    <option value="Resturent">Restaurant</option>
                    <option value="NGO">NGO</option>
                    <option value="Individual">Individual</option>
                </select>
                <button
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
                    onClick={(e) => {
                        e.preventDefault();
                        signUp();
                    }}
                >
                    SIGN UP
                </button>
                <div className="w-full border-t border-gray-700 my-6"></div>
                <p className="text-center">Already have an account?</p>
                <Link
                    to="/login"
                    className="block text-center border border-gray-500 text-gray-300 hover:bg-gray-700 py-3 rounded-lg mt-4 font-bold transition"
                >
                    LOG IN INSTEAD
                </Link>
            </div>
        </div>
  )
}

export default Signup