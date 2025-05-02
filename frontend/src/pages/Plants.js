import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";

// Helper function to get plant image based on type and progress
const getGoalImage = (type, percent) => {
  if (type === "Rose")
    return percent >= 60 ? "/goals/R3.png" : percent >= 30 ? "/goals/R2.png" : "/goals/R1.png";
  if (type === "Sunflower")
    return percent >= 60 ? "/goals/S3.png" : percent >= 30 ? "/goals/S2.png" : "/goals/S1.png";
  if (type === "Cactus")
    return percent >= 60 ? "/goals/C3.png" : percent >= 30 ? "/goals/C2.png" : "/goals/C1.png";
  return "/goals/R1.png";
};

function Plants() {
  const demoGrowingInvestments = [
    {
      id: 1,
      name: "Emergency Fund",
      progress: 10, // should show R1.png
      target: 5000,
      lastContribution: "3 days ago",
      type: "Rose"
    },
    {
      id: 2,
      name: "Dream Vacation",
      progress: 35, // should show S2.png
      target: 3000,
      lastContribution: "1 week ago",
      type: "Sunflower"
    },
    {
      id: 3,
      name: "Home Gym",
      progress: 80, // should show C3.png
      target: 4000,
      lastContribution: "5 days ago",
      type: "Cactus"
    }
  ];  

  const demoHarvestedGoals = [
    {
      id: 4,
      name: "New Laptop",
      progress: 100,
      target: 1200,
      completedDate: "2023-04-20",
      benefit: "Helped me work remotely",
      type: "Cactus" 
    }
  ];
  

  return (
    <div className="min-h-screen bg-[#f8faf3]">
      <NavBar />

      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#2a5c3a] mb-4">Watch Your Money Grow</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gro turns financial goals into a beautiful garden. See your progress grow like plants!
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-[#e0edd9]">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#2a5c3a]">Demo Financial Garden</h2>
            <div className="space-x-3">
              <Link to="/create-account" className="bg-[#3a7d44] text-white px-6 py-2 rounded-md hover:bg-[#2d6135] transition-colors">
                Sign Up to Start
              </Link>
              <Link to="/login" className="border border-[#3a7d44] text-[#3a7d44] px-6 py-2 rounded-md hover:bg-[#f0f7eb] transition-colors">
                Log In
              </Link>
            </div>
          </div>

          {/* Demo Total Savings */}
          <div className="text-3xl text-[#274A21] mb-6">Total Demo Savings: $4,200</div>

          {/* Demo Growing Goals in Dashboard Style */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-[#2a5c3a]">Growing Investments</h3>
            <div className="flex flex-wrap gap-4">
              {demoGrowingInvestments.map((goal) => {
                const currentAmount = Math.round(goal.progress / 100 * goal.target);
                const imageSrc = getGoalImage(goal.type, goal.progress);
                return (
                  <div
                    key={goal.id}
                    className="bg-[#eef3e1] shadow-md rounded-2xl p-4 m-2 min-w-40 min-h-40 max-w-76 max-h-xl flex flex-col justify-between"
                  >
                    <img src={imageSrc} alt={`${goal.type} goal phase`} className="w-full h-44 object-contain mb-2" />
                    <h3 className="text-xl font-semibold text-green-800">{goal.name}</h3>
                    <p className="text-gray-600">Amount Saved: ${currentAmount}</p>
                    <p className="text-gray-600">Goal: ${goal.target}</p>
                    <p className="text-xs text-gray-500 mt-1">Last watered: {goal.lastContribution}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Harvested Goals Section */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-[#2a5c3a]">Harvested Goals</h3>
            <div className="flex flex-wrap gap-4">
              {demoHarvestedGoals.map((goal) => {
                const imageSrc = getGoalImage(goal.type, 100); // Always use stage 3
                return (
                  <div
                    key={goal.id}
                    className="bg-[#eef3e1] shadow-md rounded-2xl p-4 m-2 min-w-40 min-h-40 max-w-76 max-h-xl flex flex-col justify-between"
                  >
                    <img
                      src={imageSrc}
                      alt={`${goal.type} harvested`}
                      className="w-full h-44 object-contain mb-2 grayscale"
                    />
                    <h3 className="text-xl font-semibold text-green-800 line-through">{goal.name}</h3>
                    <p className="text-gray-600">Goal: ${goal.target}</p>
                    <p className="text-gray-600">🎉 Harvested on {new Date(goal.completedDate).toLocaleDateString()}</p>
                    <p className="text-xs text-gray-500 mt-1">Benefit: {goal.benefit}</p>
                  </div>
                );
              })}
            </div>
          </section>


          {/* Demo Footer */}
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
