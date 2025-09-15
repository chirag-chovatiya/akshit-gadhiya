import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Phone, CreditCard, Lock } from "lucide-react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt with:", {
      name,
      email,
      mobileNumber,
      panNumber,
      password,
      confirmPassword,
    });
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-custom-blue/10 to-custom-green/10 px-4">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl w-full max-w-md p-8">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-center text-custom-blue">
            Create Account
          </h2>
          <p className="mt-2 text-center text-gray-600 text-sm">
            Join us and get started today
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 shadow-sm text-gray-800 focus:ring-2 focus:ring-custom-blue focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 shadow-sm text-gray-800 focus:ring-2 focus:ring-custom-blue focus:outline-none"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 shadow-sm text-gray-800 focus:ring-2 focus:ring-custom-blue focus:outline-none"
                required
              />
            </div>

            {/* PAN Number */}
            <div className="relative">
              <CreditCard className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="PAN Number"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 shadow-sm text-gray-800 focus:ring-2 focus:ring-custom-blue focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 shadow-sm text-gray-800 focus:ring-2 focus:ring-custom-blue focus:outline-none"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 shadow-sm text-gray-800 focus:ring-2 focus:ring-custom-blue focus:outline-none"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-custom-blue hover:bg-custom-green transition-colors duration-300 text-white font-semibold py-3 rounded-xl shadow-md"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Login link */}
          <p className="text-center text-gray-600 text-sm">
            Already a member?{" "}
            <Link
              to="/login"
              className="text-custom-blue font-bold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
  );
};

export default SignupForm;
