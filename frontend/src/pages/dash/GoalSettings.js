import React from 'react';
import SideBar from "./SideBar.js";

const GoalSettings = ({ isOpen, onClose, goal }) => {
  if (!isOpen || !goal) {
    return null;
  }

  const { name, goalAmount, type, amountSaved = 0 } = goal;
  const percentSaved = ((amountSaved / goalAmount) * 100).toFixed(0) || 0;

  // Get goal image based on type and progress
  const getGoalImage = (type, percent) => {
    let image = "";
    if (type === "Rose")
      if (percent >= 60) image = "/goals/R3.png";
      else if (percent >= 30) image = "/goals/R2.png";
      else image = "/goals/R1.png";
    else if (type === "Sunflower")
      if (percent >= 60) image = "/goals/S3.png";
      else if (percent >= 30) image = "/goals/S2.png";
      else image = "/goals/S1.png";
    else if (type === "Cactus")
      if (percent >= 60) image = "/goals/C3.png";
      else if (percent >= 30) image = "/goals/C2.png";
      else image = "/goals/C1.png";
    else image = "/goals/R1.png";
    return image;
  };

  const imageSrc = getGoalImage(type, percentSaved);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-[#f8faf3] rounded-xl shadow-md p-6 w-4/5 max-w-sm relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">{name}</h2>

        <div className="flex items-center justify-between mb-2">
          <label className="text-gray-700 text-sm font-semibold">Goal Amount:</label>
          <span className="text-gray-700">$ {goalAmount}</span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <label className="text-gray-700 text-sm font-semibold">Amount Saved:</label>
          <span className="text-gray-700">$ {amountSaved}</span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <label className="text-gray-700 text-sm font-semibold">Progress:</label>
          <span className="text-gray-700">{percentSaved}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-green-600 h-2.5 rounded-full"
            style={{ width: `${percentSaved}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="text-gray-700 text-sm font-semibold">Priority:</label>
          <span className="text-red-500 text-xl font-bold">!</span>
        </div>

        <button className="bg-[#5DB151] hover:bg-[#4a8c41] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4">
          Add Funds
        </button>

        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt={`${type} goal phase`}
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default GoalSettings;
