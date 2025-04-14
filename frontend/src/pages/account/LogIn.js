import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authentication logic would go here
    console.log('Login attempt:', { email, password, rememberMe });
    // Redirect would happen after successful login
    navigate('/Dashboard');
  };

  return (
    <div className="min-h-screen bg-[#f8faf3] flex flex-col">
      <NavBar />

      <div className="flex-grow flex items-center justify-center p-4 pt-24"> {/* Added pt-24 for top padding */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex items-center justify-center mb-2">
            <div className="text-3xl font-bold">Welcome back to</div>
            <Logo className="h-20 w-20 mr-5" />
          </div>
          
          <h1 className="text-xl text-center text-gray-800 mb-6">Please enter your login information</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-gray-700">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800">Forgot Password</Link>
            </div>
            
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium"
            >
              Sign in
            </button>
          </form>
          
          <div className="text-center mt-4 text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/create-account" className="text-blue-600 hover:text-blue-800 font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Plant Image (hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-[#f0f4e3] items-center justify-center p-12">
        <div className="max-w-lg">
          <img 
            src={`${process.env.PUBLIC_URL}/components/plant_main.png`}
            alt="Growing plant representing financial growth"
            className="w-full h-auto object-contain"
          />
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-[#274A21]">Watch Your Savings Grow</h2>
            <p className="mt-2 text-gray-600">
              Nurture your financial goals like plants in a garden
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}