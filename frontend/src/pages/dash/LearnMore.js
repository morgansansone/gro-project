import React from "react";
import SideBar from "./SideBar.js";
import NavLogin from "../account/NavLogin.js";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-[#FBFCF7] flex flex-col">
      <NavLogin />

      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto bg-[#f5f7e9] p-8 rounded-2xl shadow-md border border-gray-200">
            {/* Intro */}
            <div className="flex items-center mb-6">
              <h1 className="text-4xl font-bold text-green-700">Welcome to</h1>
              <img 
                src="/components/logo_tnsprtbkg.png" 
                alt="Gro Logo" 
                className="h-20 ml-4" 
              />
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              You've just stepped into a smarter way to save. Set goals, watch your progress grow.
              Let’s walk through how Gro works so you can make the most of it.
            </p>

            {/* About Section */}
            <h2 className="text-2xl font-semibold text-green-700 mb-4">What is Gro?</h2>
            <p className="text-gray-700 mb-6">
              Gro is your all-in-one savings and financial planning app. With visual goal tracking, AI-powered fund
              allocation, and friendly plant-based progress — you’ll stay motivated and in control.
            </p>

            {/* Features List */}
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Features </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
              <li><strong> Dashboard:</strong> Create and track savings goals with priority levels and plant types.</li>
              <li><strong> Allocate Funds:</strong> Use AI or manual methods to distribute your savings to goals by priority.</li>
              <li><strong> Plants Section:</strong> Watch your goals grow as you save. Complete them and move to “Harvest”!</li>
              <li><strong> Bank Settings:</strong> Securely connect your bank account to manage and automate funds.</li>
              <li><strong> Learn More:</strong> Dive into helpful guides like this one.</li>
              <li><strong> User Settings:</strong> Manage your info, reset passwords, or update credentials.</li>
              <li><strong> Add New Goals:</strong> It’s super easy just name it, set an amount, set the priority, choose a plant, and grow!</li>
            </ul>

            {/* How It Works */}
            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">How It Works </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-base">
              <li><strong>Set a Goal:</strong> Like “New Laptop” for $1,500 with a cactus plant with a !!! priority. </li>
              <li><strong>Allocate Funds:</strong> Add $500 → Gro allocates $300 to that goal, $200 to others.</li>
              <li><strong>Watch It Grow:</strong> Your plant grows as savings increase!</li>
              <li><strong>Goal Complete:</strong> Plant is fully grown and goal is moved to “Completed.”</li>
            </ol>

            {/* Closing Encouragement */}
            <div className="mt-10 p-4 bg-green-100 rounded-xl text-green-800 text-center">
               <strong>You’ve got this!</strong> Whether it’s your first goal or your tenth, Gro is here to help every dollar count.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
