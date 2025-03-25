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
    <div className="h-screen bg-[#FBFCF7]">      
        {/* Topbar */}      
      <nav className="flex w-full items-center h-auto justify-between flex-wrap bg-[#f0f4e3] px-6 rounded-xl shadow-md">
        <div className="flex items-center space-x-4">
          <img src="components/logo_tnsprtbkg.png" alt="Gro Logo" className="h-28" />
        </div>
        <button className="bg-[#5DB151] text-white px-3 py-2 rounded-lg w-auto float-right">User Settings</button>
      </nav>  

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
        <main className="flex-1 p-6">
          <div className=" relative w-[300px]">
          <div className="flex justify-between items-end w-full mb-2">
              <div className="text-3xl  text-[#274A21] float-left m-10">Total Savings: ${savings.toFixed(2)}</div>
              <div className="text-lg float-right text-gray-500"> + Create New Goal</div>
          </div>
        {/* Goals Section */}
          <div className="mt-6 bg-[#f5f7e9] p-6 rounded-lg shadow-md flex justify-between">
            <button className="bg-green-500 text-white px-3 py-1 rounded-lg w-auto y-auto">Allocate Funds</button>            
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
    </div>
  );
}