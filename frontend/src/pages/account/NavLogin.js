import React from 'react';
import { Link } from 'react-router-dom';
import UserSettings from '../dash/UserSettings';

export default function NavLogin() {
  return (
    <nav className="flex w-full items-center h-auto justify-between flex-wrap bg-[#e0edd9] px-6 rounded-xl shadow-md">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img 
            src="/components/logo_tnsprtbkg.png" 
            alt="Gro Logo" 
            className="h-28 hover:opacity-80 transition-opacity" 
          />
        </Link>
      </div>
      <Link to='/user-settings'><button className="bg-[#5DB151] text-white px-3 py-2 rounded-lg w-auto float-right hover:bg-[#4a8c41]">User Settings</button></Link>
    </nav>
  );
}