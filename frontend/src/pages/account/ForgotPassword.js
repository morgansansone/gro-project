import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [securityQ1, setSQ1] = useState('');
  const [securityA1, setSA1] = useState('');
  const [securityQ2, setSQ2] = useState('');
  const [securityA2, setSA2] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (email === 'test@example.com') {
      setSQ1("What was the name of your first pet?");
      setSQ2("What is your mother's maiden name?");
    } else {
      setSQ1('');
      setSQ2('');
    }
  }, [email]); // Effect runs when email changes

  const handleSubmit = (e) => {
    e.preventDefault();
    // Password reset logic here
    console.log('Password reset requested for:', {
      email,
      securityA1,
      securityA2,
      newPassword: password,
    });
    navigate('/Login');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex items-center justify-center mb-2">
          <div className="text-3xl font-bold">Welcome back to</div>
          <Logo className="h-20 w-20 mr-5" />
        </div>
        
        <h1 className="text-xl text-center text-gray-800 mb-6">Reset your password</h1>
        
        
        <form onSubmit={handleSubmit} className="space-y-4"> 
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Security Question 1 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Security Question 1</label>
              <input
                type="text"
                value={securityQ1}
                readOnly
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
              />
              <input
                type="text"
                placeholder="Your answer"
                value={securityA1}
                onChange={(e) => setSA1(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>


            {/* Security Question 1 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Security Question 2</label>
            <input
              type="text"
              value={securityQ2}
              readOnly
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
            />
            <input
              type="text"
              placeholder="Your answer"
              value={securityA1}
              onChange={(e) => setSA1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
            
          {/* New Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* New Password Again */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password Again</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
          >
            Reset
          </button>
        </form>
        
        <div className="text-center mt-4 text-sm text-gray-600">
          Remember your password?{' '}
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}