// src/pages/account/CreateAccount.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:  '',
    email:     '',
    password:  '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    // 1) Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // 2) Build the payload
    const payload = {
      displayname: `${formData.firstName} ${formData.lastName}`,
      email:       formData.email,
      password:    formData.password
    };

    console.log('🔐 Register payload:', payload);

    try {
      // 3) Send to backend
      const response = await fetch('http://localhost:5000/api/register', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload)
      });

      const data = await response.json();
      console.log('👤 Register response:', response.status, data);

      if (!response.ok) {
        // 4a) If 409 (email taken) or other error
        setError(data.message || 'Registration failed');
      } else {
        // 4b) Success!
        navigate('/login');
      }
    } catch (err) {
      console.error('❌ Network error:', err);
      setError('Network error – please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf3] flex flex-col">
      <NavBar />

      <div className="flex-grow flex items-center justify-center p-4 pt-24">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex items-center justify-center mb-2">
            <div className="text-3xl font-bold">Welcome to</div>
            <Logo className="h-20 w-20 mr-5" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">Create Your Account</h1>

          {/* Error message */}
          {error && (
            <div className="text-red-600 text-sm text-center mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password *
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 focus:ring-2 focus:ring-blue-500"
            >
              Create Account
            </button>
          </form>

          <div className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}