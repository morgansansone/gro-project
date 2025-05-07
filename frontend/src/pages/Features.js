import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";

const features = [
  {
    title: "Visual Goal Tracking",
    description: "Set personalized goals and watch them grow into plants as you save. Each goal has a name, target amount, priority, and a plant you pick to represent it.",
    image: "/features/plant-growth.png"
  },
  {
    title: "Manual Fund Allocation",
    description: "Distribute your savings to one or more goals manually. Choose where your money goes based on what matters most to you.",
    image: "/features/allocate.png"
  },
  {
    title: "Plant-Based Progress",
    description: "Every contribution helps your plant grow. From sprout to bloom, progress is visual and rewarding. Completed goals move to the harvest section.",
    image: "/features/milestones.png"
  },
  {
    title: "Bank & User Settings",
    description: "Securely manage your routing and account numbers, and update personal info like name, email, and password in your user settings.",
    image: "/features/custom-goal.png"
  },
  {
    title: "Goal Management",
    description: "Easily create, view, and edit goals. Change names, targets, saved amounts, and priorities—or add funds directly to any goal.",
    image: "/features/harvest.png"
  },
  {
    title: "Learn & Grow",
    description: "Access tutorials, guides, and educational resources to help you get the most out of Gro and improve your financial habits.",
    image: "/features/reminders.png"
  }
];

const plantStages = {
  Rose: ["/goals/R1.png", "/goals/R2.png", "/goals/R3.png"],
  Sunflower: ["/goals/S1.png", "/goals/S2.png", "/goals/S3.png"],
  Cactus: ["/goals/C1.png", "/goals/C2.png", "/goals/C3.png"]
};

const plantTypes = [
  {
    name: "Rose"
  },
  {
    name: "Sunflower"
  },
  {
    name: "Cactus"
  }
];

function AnimatedPlant({ type }) {
  const [stageIndex, setStageIndex] = useState(0);
  const stages = plantStages[type];

  useEffect(() => {
    const interval = setInterval(() => {
      setStageIndex(prev => (prev + 1) % stages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [stages]);

  return (
    <img
      src={stages[stageIndex]}
      alt={`${type} growth stage`}
      className="w-24 h-24 mx-auto mb-4 object-contain transition-all duration-500"
    />
  );
}

function Features() {
  return (
    <div className="min-h-screen bg-[#f8faf3]">
      <NavBar />

      <div className="max-w-6xl mx-auto p-6">
        {/* Header outside the card */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2a5c3a] mb-4">What Gro Can Do</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Grow your financial goals with simple, visual, plant-inspired tools.
          </p>
        </div>

        {/* Features Card Container */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-[#e0edd9]">
          {/* Features Grid */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-[#2a5c3a] mb-6">Core Features</h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#eef3e1] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-green-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
            </div>
          </section>

          {/* Plant Types with animation */}
          <section className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-[#2a5c3a] text-center">Explore Our Plant Types</h3>
            <p className="text-gray-600 text-center mb-8">
              Pick a plant you like! Each one grows through 3 visual stages as your savings progress. Your plant type is a personal choice, not tied to any specific goal.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              {plantTypes.map((plant, idx) => (
                <div key={idx} className="bg-[#eef3e1] rounded-2xl p-6 text-center shadow-md">
                  <AnimatedPlant type={plant.name} />
                  <h4 className="text-lg font-semibold text-green-800">{plant.name}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Why Gro */}
          <section className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-[#2a5c3a] text-center">Why Choose Gro?</h3>
            <ul className="list-disc list-inside text-gray-600 max-w-2xl mx-auto text-md space-y-2">
              <li>Engaging visuals to track your savings journey.</li>
              <li>Personalized goal creation with themed progress.</li>
              <li>Milestone rewards to keep motivation high.</li>
            </ul>
          </section>

          {/* CTA Footer */}
          <div className="text-center py-6 border-t border-[#e0edd9] mt-12">
            <p className="text-gray-500 mb-4">Start growing your goals today with Gro.</p>
            <Link
              to="/create-account"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-lg"
            >
              Start Growing Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
