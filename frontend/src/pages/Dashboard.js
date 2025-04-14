import { useState } from "react";
import { Link } from "react-router-dom";
import NavLogin from "./account/NavLogin.js";

export default function Dashboard() {
  
  return (
    <div className="h-screen bg-[#f8faf3]">      
        {/* Topbar */}      
      <NavLogin />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-36 bg-[#e0edd9] p-4 space-y-4 h-48 rounded-xl float-left">
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

        {/* dash */}
        <main className="flex p-6">
          <div className="w-[950px]">
          <div className="flex justify-between items-baseline w-full mb-2">
              <div className="text-3xl  text-[#274A21] float-left m-10">Total Savings: $</div>
              <Link to='/GoalCreate'><a href='#' className="text-lg float-right text-gray-500">+ Create New Goal</a></Link>
          </div>
        {/* Goals Section */}
          <div className="bg-[#f5f7e9] p-6 w-auto rounded-lg shadow-md flex justify-between">
            <button className="bg-green-500 text-white px-3 py-1 rounded-lg w-auto h-8">Allocate Funds</button>
            <div className="flex overflow-scroll justify-evenly w-full">

            </div>
          </div>
          </div>
        </main>
        </div>
    </div>
  );
}