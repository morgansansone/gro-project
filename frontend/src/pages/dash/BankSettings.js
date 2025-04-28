import React from 'react';
import NavLogin from "../account/NavLogin.js";
import SideBar from "./SideBar.js";
import { Link } from 'react-router-dom';

export default function BankSettings() {
  return (
    <div className="min-h-screen bg-[#FBFCF7] flex flex-col">
      {/* Navbar */}
      <NavLogin />

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto bg-[#f5f7e9] p-8 rounded-2xl shadow-md border border-gray-200">
            <h1 className="text-3xl font-bold text-green-700 mb-8">Bank Settings</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Connected Accounts Card */}
              <div className="p-6 border border-gray-200 rounded-2xl bg-[#f9f9f3] shadow-md">
                <h2 className="font-semibold text-xl text-gray-800 mb-4">Connected Accounts</h2>
                <p className="text-gray-600 mb-6">No accounts connected</p>
                <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
                  Connect Bank Account
                </button>
              </div>

              {/* Placeholder for future settings or integrations */}
              <div className="p-6 border border-dashed border-gray-300 rounded-2xl bg-[#f9f9f3] text-gray-500 flex items-center justify-center shadow-md">
                Future settings or cards go here...
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
