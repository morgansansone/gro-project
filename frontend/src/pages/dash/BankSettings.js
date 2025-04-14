import React from 'react';
import NavLogin from "../account/NavLogin.js";
import { Link } from 'react-router-dom';

export default function BankSettings() {
  return (
    <div className="min-h-screen bg-[#FBFCF7] flex flex-col">
      {/* Navbar at top */}
      <NavLogin />
      
      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar - shown on larger screens */}
        {/* Sidebar */}
        <aside className="w-36 bg-[#f0f4e3] p-4 space-y-4 h-48 rounded-xl float-left">
          <nav className="space-y-3">
            <Link to="/goal-create" className="block text-gray-700 hover:text-green-600">
              New Goal
            </Link>
            <Link href="/dashboard-plants" className="block text-gray-700 hover:text-green-600">
              Plants
            </Link>
            <Link href="/bank-settings" className="block text-gray-700 hover:text-green-600">
              Bank Settings
            </Link>
            <Link href="/learn-more" className="block text-gray-700 hover:text-green-600">
              Learn More
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-green-700 mb-6">Bank Settings</h1>
            
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Connected Accounts Card */}
              <div className="flex-1 p-4 border rounded-lg bg-white">
                <h2 className="font-bold text-lg mb-3">Connected Accounts</h2>
                <p className="text-gray-600 mb-4">No accounts connected</p>
                <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  Connect Bank Account
                </button>
              </div>
              
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}