import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import NavLogin from "../account/NavLogin.js";
import SideBar from './SideBar.js';
import { UserContext } from "../../context/UserContext"; // Adjust path as needed

function DashPlants() {
  // Get user data from context
  const { user } = useContext(UserContext);
  
  // Default goals if no user data
  const defaultActiveGoals = [
    { id: 1, name: "Empty Goal", progress: 0, target: 1 },
    { id: 2, name: "Empty Goal", progress: 0, target: 1 },
    { id: 3, name: "Empty Goal", progress: 0, target: 1 },
  ];

  // Transform plants from user context to activeGoals format
  const activeGoals = user?.plants ? 
    user.plants.map((plant, index) => ({
      id: index + 1,
      name: plant.goalName,
      // Calculate progress percentage
      progress: Math.round((plant.currentAmount / plant.targetAmount) * 100),
      target: plant.targetAmount
    })) : 
    defaultActiveGoals;

  const completedGoals = [
    { id: 3, name: "New Laptop", progress: 100, target: 1200 },
  ];

  return (
    <div className="min-h-screen bg-[#FBFCF7] flex flex-col">
      {/* Navbar */}
      <NavLogin />

      {/* Sidebar + Main */}
      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto bg-[#f5f7e9] p-8 rounded-2xl shadow-md border border-gray-200">
            <h1 className="text-3xl font-bold text-green-700 mb-8">Your Growing Goals</h1>

            {/* Active Goals */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">🌱 Active Goals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeGoals.map((goal) => (
                  <div
                    key={goal.id}
                    className="p-6 border border-green-200 rounded-2xl bg-green-50 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-lg text-green-800">{goal.name}</h3>
                    <div className="mt-3">
                      <div className="flex justify-between text-sm text-gray-700 mb-1">
                        <span>Progress: {goal.progress}%</span>
                        <span>${(goal.target * goal.progress / 100).toFixed(2)} of ${goal.target}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <Link
                      to={`/plants/${goal.id}`}
                      className="mt-3 inline-block text-green-600 hover:underline text-sm"
                    >
                      View Details →
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Completed Goals */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">✅ Completed Goals</h2>
              <div className="space-y-4">
                {completedGoals.map((goal) => (
                  <div
                    key={goal.id}
                    className="p-6 border border-gray-200 rounded-2xl bg-gray-50"
                  >
                    <h3 className="font-bold text-lg text-gray-600 line-through">{goal.name}</h3>
                    <p className="text-gray-500 mt-1">
                      🎉 Achieved on {new Date().toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashPlants;
