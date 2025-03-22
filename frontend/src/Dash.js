import { useState } from "react";

export default function Dashboard() {
  const [savings, setSavings] = useState(0);
  const goals = [
    { name: "Goal Name 1", amount: 1000 },
    { name: "Goal Name 2", amount: 1000 },
    { name: "Goal Name 3", amount: 1000 },
    { name: "Goal Name 4", amount: 1000 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-[#f0f4e3] p-4 space-y-4">
        <div className="text-green-700 font-bold text-xl">gro</div>
        <nav className="space-y-2">
          <a href="#" className="block text-gray-700">New Goal</a>
          <a href="#" className="block text-gray-700">Plants</a>
          <a href="#" className="block text-gray-700">Bank Settings</a>
          <a href="#" className="block text-gray-700">Learn More</a>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Total Savings: ${savings.toFixed(2)}</div>
          <button className="bg-green-400 text-white px-4 py-2 rounded-lg">User Settings</button>
        </div>
        
        {/* Goals Section */}
        <div className="mt-6 bg-[#f5f7e9] p-6 rounded-lg shadow-md">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Allocate Funds</button>
          <span className="ml-4 text-gray-500">+ Create New Goal</span>
          
          <div className="flex justify-between mt-6">
            {goals.map((goal, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brown-500 rounded-b-lg mx-auto"></div>
                <div className="mt-2 text-gray-700">{goal.name}</div>
                <div className="text-gray-800 font-semibold">${goal.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}