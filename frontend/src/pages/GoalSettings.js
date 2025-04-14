import React, { useState } from 'react';

const GoalSettings = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-4/5 max-w-sm relative">
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

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Goal Name 1</h2>

        <div className="flex items-center justify-between mb-2">
          <label className="text-gray-700 text-sm font-semibold">Goal Amount:</label>
          <span className="text-gray-700">$</span>
          {/* You might want to display the actual goal amount here */}
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="text-gray-700 text-sm font-semibold">Amount Saved:</label>
          <span className="text-gray-700">$</span>
          {/* You might want to display the actual amount saved here */}
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="text-gray-700 text-sm font-semibold">Priority:</label>
          <span className="text-red-500 text-xl font-bold">!</span>
          {/* You might want to display the actual priority here */}
        </div>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4">
          Add Funds
        </button>

        <div className="flex justify-center">
          <div className="relative w-20 h-20 bg-brown-300 rounded-sm flex items-end justify-center overflow-hidden">
            <div
              className="absolute bottom-0 left-0 w-full bg-green-300 text-white text-xs font-bold flex items-center justify-center"
              style={{ height: '30%' }} // Dynamically set height based on saved percentage
            >
              % 30
            </div>
            <div className="absolute inset-0 border border-brown-400"></div> {/* Pot outline */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSettings;