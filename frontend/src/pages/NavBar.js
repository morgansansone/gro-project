import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img 
              src="/components/logo_tnsprtbkg.png" 
              alt="Gro Logo" 
              className="h-28" 
            />
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-green-700">Features</Link>
          <Link to="/plants" className="text-gray-700 hover:text-green-700">Plants</Link>
          <Link to="/about" className="text-gray-700 hover:text-green-700">About</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-green-700">Log In</Link>
          <Link to="/create-account" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            Get Started
          </Link>
        </div>
      </nav>
  );
};

export default NavBar; // Must have this default export