import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";

function Plants() {
  // Demo goals data for non-logged-in users
  const demoGrowingInvestments = [
    { 
      id: 1, 
      name: "Emergency Fund", 
      progress: 72, 
      target: 5000,
      growthStage: "Flowering",
      lastContribution: "3 days ago"
    },
    { 
      id: 2, 
      name: "Dream Vacation", 
      progress: 45, 
      target: 3000,
      growthStage: "Budding",
      lastContribution: "1 week ago"
    },
  ];

  const demoHarvestedGoals = [
    { 
      id: 3, 
      name: "New Laptop", 
      progress: 100, 
      target: 1200,
      completedDate: "2023-04-20",
      benefit: "Helped me work remotely"
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8faf3]">
      <NavBar />
      
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#2a5c3a] mb-4">Watch Your Money Grow</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gro turns financial goals into a beautiful garden. See your progress grow like plants!
          </p>
        </div>

        {/* Demo Container */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-[#e0edd9]">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#2a5c3a]">Demo Financial Garden</h2>
            <div className="space-x-3">
              <Link 
                to="/create-account" 
                className="bg-[#3a7d44] text-white px-6 py-2 rounded-md hover:bg-[#2d6135] transition-colors"
              >
                Sign Up to Start
              </Link>
              <Link 
                to="/login" 
                className="border border-[#3a7d44] text-[#3a7d44] px-6 py-2 rounded-md hover:bg-[#f0f7eb] transition-colors"
              >
                Log In
              </Link>
            </div>
          </div>

          {/* Growing Investments Demo */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-[#2a5c3a]">🌱 Growing Investments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {demoGrowingInvestments.map((goal) => (
                <div
                  key={goal.id}
                  className="border border-[#c1d8b7] rounded-lg p-4 bg-[#f0f7eb] hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-[#2a5c3a]">{goal.name}</h4>
                    <span className="text-xs bg-[#e0edd9] text-[#3a7d44] px-2 py-1 rounded-full">
                      {goal.growthStage}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1 text-gray-600">
                      <span>Growth: {goal.progress}%</span>
                      <span>${(goal.target * goal.progress / 100).toFixed(0)} of ${goal.target}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div
                        className="bg-[#3a7d44] h-2.5 rounded-full"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">Last watered: {goal.lastContribution}</p>
                  </div>
                  <button className="mt-3 text-[#3a7d44] hover:underline text-sm font-medium cursor-default">
                    Tend to Goal →
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Harvested Goals Demo */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#2a5c3a]">🌻 Harvested Goals</h3>
            <div className="space-y-4">
              {demoHarvestedGoals.map((goal) => (
                <div
                  key={goal.id}
                  className="border border-[#e0edd9] rounded-lg p-4 bg-[#f7fbf4]"
                >
                  <h4 className="font-bold text-lg text-[#3a7d44] line-through">{goal.name}</h4>
                  <p className="text-gray-600">
                    🎉 Harvested on {new Date(goal.completedDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Benefit: {goal.benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Demo Watermark */}
          <div className="text-center py-6 border-t border-[#e0edd9] mt-8">
            <p className="text-gray-500 mb-4">This is a demo view. Your actual garden will show your personal financial goals.</p>
            <Link 
              to="/create-account" 
              className="inline-block bg-[#3a7d44] text-white px-8 py-3 rounded-md hover:bg-[#2d6135] transition-colors text-lg"
            >
              Start Growing Your Money Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plants;