import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavLogin.js";
import GoalCreate from "./Goal_create.js";

export default function Dashboard() {
  
  return (
    <div className="h-screen bg-[#FBFCF7]">      
        {/* Topbar */}      
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-36 bg-[#f0f4e3] p-4 space-y-4 h-48 rounded-xl float-left">
          <nav className="space-y-3">
            <a href="#" className="block text-gray-700">New Goal</a>
            <a href="#" className="block text-gray-700">Plants</a>
            <a href="#" className="block text-gray-700">Bank Settings</a>
            <a href="#" className="block text-gray-700">Learn More</a>
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