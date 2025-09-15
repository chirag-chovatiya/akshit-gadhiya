import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react"; // icons

const LoginForm = () => {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password123");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password, rememberMe });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-custom-blue/10 to-custom-green/10 px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-custom-blue">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-gray-600 text-sm">
          Please login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 border-gray-300 focus:ring-2 focus:ring-custom-blue focus:outline-none text-gray-800 shadow appearance-none border rounded-full"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
            type="password"
            id="password"
            className="w-full pl-10 pr-4 py-3 border-gray-300 focus:ring-2 focus:ring-custom-blue focus:outline-none text-gray-800 shadow appearance-none border rounded-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
          />
          </div>

          {/* Remember me + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-custom-blue"
              />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-custom-blue hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-custom-blue hover:bg-custom-green transition-colors duration-300 text-white font-semibold py-3 rounded-xl shadow-md"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Signup */}
          <p className="text-center text-gray-600 text-sm">
            Not a member yet?{" "}
            <Link to="/signup" className="text-custom-blue font-bold hover:underline">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
