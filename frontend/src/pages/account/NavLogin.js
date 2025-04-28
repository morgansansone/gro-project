import React from 'react';
import { Link } from 'react-router-dom';

// === Sidebar Component ===
const SideBar = () => {
  return (
    <aside className="w-36 bg-[#f0f4e3] p-4 space-y-4 h-auto rounded-xl hidden md:block">
      <nav className="space-y-3">
        <Link to="/goal-create" className="block text-gray-700 hover:text-green-600">
          New Goal
        </Link>
        <Link to="/dashboard-plants" className="block text-gray-700 hover:text-green-600">
          Plants
        </Link>
        <Link to="/bank-settings" className="block text-gray-700 hover:text-green-600">
          Bank Settings
        </Link>
        <Link to="/learn-more" className="block text-gray-700 hover:text-green-600">
          Learn More
        </Link>
      </nav>
    </aside>
  );
};

// === Navbar Component ===
export default function NavLoginWithSidebar() {
  return (
    <nav className="flex w-full items-center h-auto justify-between flex-wrap bg-[#f5f7e9] px-6 rounded-xl shadow-md mb-4">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Link to="/dashboard">
          <img 
            src="/components/logo_tnsprtbkg.png" 
            alt="Gro Logo" 
            className="h-28 hover:opacity-80 transition-opacity" 
          />
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <Link to='/user-settings'>
          <button className="bg-[#5DB151] text-white px-3 py-2 rounded-lg hover:bg-[#4a8c41]">
            User Settings
          </button>
        </Link>
        <Link to='/'>
          <button className="bg-[#434343] text-white px-3 py-2 rounded-lg hover:bg-[#4a8c41]">
            Log Out
          </button>
        </Link>
      </div>
    </nav>
  );
}

// Export Sidebar separately if needed
export { SideBar };
