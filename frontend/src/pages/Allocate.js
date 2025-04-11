import React from 'react';
import { useState} from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-4/5 max-w-md">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Allocate Funds</h2>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
            Amount: $
          </label>
          <input
            type="text"
            id="amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter amount"
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="allGoals"
              name="allocationType"
              className="mr-2 focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 focus:ring-2"
            />
            <label htmlFor="allGoals" className="text-gray-700 text-sm">
              All Goals
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="oneGoal"
              name="allocationType"
              className="mr-2 focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 focus:ring-2"
            />
            <label htmlFor="oneGoal" className="text-gray-700 text-sm mr-2">
              One Goal
            </label>
            <select className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option>Select Goal</option>
              {/* Add your goal options here */}
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            onClick={() => {
              // Handle allocate logic
              onClose(); // For this example, just close the modal
            }}
          >
            Allocate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;