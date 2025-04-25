import React from "react";
import SideBar from "./SideBar.js";
import NavLogin from "../account/NavLogin.js";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-[#FBFCF7] flex flex-col">
      {/* Navbar at top */}
      <NavLogin />

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto bg-[#f5f7e9] p-8 rounded-2xl shadow-md border border-gray-200">
            <h1 className="text-3xl font-bold text-green-700 mb-6">Learn More</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to the Learn More section. Here, you can explore helpful information about how your savings goals work, how to grow your digital plants, and tips for smart financial planning.
            </p>
            <ul className="mt-6 space-y-2 text-gray-600 list-disc pl-6">
              <li>Understand how goals accumulate over time</li>
              <li>Track progress using your dashboard</li>
              <li>Connect a bank account to automate deposits</li>
              <li>Earn badges and unlock plants as you save</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
