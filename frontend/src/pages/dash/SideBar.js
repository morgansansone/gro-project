import React from 'react';
import { Link } from 'react-router-dom';

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

export default SideBar;