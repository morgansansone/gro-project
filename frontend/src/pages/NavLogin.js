import React from 'react';
import { Link } from 'react-router-dom';
import UserSettings from './UserSettings';

export default function Navbar() {
    return(
    <nav className="flex w-full items-center h-auto justify-between flex-wrap bg-[#f0f4e3] px-6 rounded-xl shadow-md">
        <div className="flex items-center space-x-4">
          <img src="components/logo_tnsprtbkg.png" alt="Gro Logo" className="h-28" />
        </div>
        <Link to='/UserSettings'><button className="bg-[#5DB151] text-white px-3 py-2 rounded-lg w-auto float-right hover:bg-[#4a8c41]">User Settings</button></Link>
      </nav>
      )
}
