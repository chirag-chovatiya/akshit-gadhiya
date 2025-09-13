import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginForm = () => {
  const [email, setEmail] = useState('test@example.com'); // Dummy data
  const [password, setPassword] = useState('password123'); // Dummy data
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password, rememberMe });
    // For now, just navigate to dashboard on any login attempt
    navigate('/dashboard');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Enter email address
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="test@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-gray-700 text-sm">
            <input
              type="checkbox"
              className="mr-2 leading-tight"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="text-sm">Remember me</span>
          </label>
          <Link to="/forgot-password" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
            Forgot password?
          </Link>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
          >
            Login
          </button>
        </div>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <p className="text-center text-gray-700 text-sm">
          Not a member yet?{' '}
          <Link to="/signup" className="text-blue-500 hover:text-blue-800 font-bold">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
