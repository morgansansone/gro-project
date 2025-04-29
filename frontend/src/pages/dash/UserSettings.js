import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext'; // Adjust path as needed

export default function UserSettings() {
  // Get user data from context
  const { user } = useContext(UserContext);
    
  // Initialize state with user data from context or default values
  const [name, setName] = useState(user?.displayname || '');
  const [email, setEmail] = useState(user?.email || 'xxxxx@gmail.com');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [routingNumber, setRoutingNumber] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');

  // Get password from user context or use default
  const password = user?.password || '**********';

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSave = () => {
    // Implement your save logic here, using the current state values
    console.log('Saving changes:', { name, email, routingNumber, bankAccountNumber });
    // You would typically send this data to your backend
  };

  const handleCancel = () => {
    // Implement your cancel logic here, e.g., navigating back or resetting state
    console.log('Cancelling changes');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Settings</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <div className="flex items-center justify-between">
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              readOnly // Assuming email is not directly editable here, based on the image
            />
            <button className="text-green-600 hover:text-green-800 text-sm focus:outline-none">
              Change Email
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <div className="flex items-center justify-between">
            <div className="relative w-1/2">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                value={password} // Now using actual password from user context
                readOnly
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                <svg
                  className="h-5 w-5 text-gray-500 hover:text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={passwordVisible ? 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' : 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'}
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      passwordVisible
                        ? 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.178 8.93-4.95 12-3.772 3.07-7.563 5-12 5s-8.268-2.93-9.542-7-1.274-4.07 1.178-8.93-4.95-12z'
                        : 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    }
                  />
                </svg>
              </button>
            </div>
            <button className="text-green-600 hover:text-green-800 text-sm focus:outline-none">
              Change Password
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
